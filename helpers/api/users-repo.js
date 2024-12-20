import getConfig from 'next/config';
import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';
import { db } from 'helpers/api';
import mongoose from "mongoose";

const { serverRuntimeConfig } = getConfig();
const User = db.User;

export const usersRepo = {
    authenticate,
    getAll,
    getById,
    create,
    update,
    delete: _delete
};

async function authenticate({ username, password }) {
    if (mongoose.connection.readyState === 0) {
        mongoose.connect(process.env.MONGODB_URI || serverRuntimeConfig.connectionString).then(r => {
            console.log('Connected to MongoDB');
        }).catch(e => {
            console.error('Error connecting to MongoDB', e);
        });
    }
    const user = await User.findOne({ username });

    if (!(user && bcrypt.compareSync(password, user.hash))) {
        throw 'Username or password is incorrect';
    }

    // create a jwt token that is valid for 7 days
    const token = jwt.sign({ sub: user.id }, serverRuntimeConfig.secret, { expiresIn: '365d' });

    return {
        ...user.toJSON(),
        token
    };
}

async function getAll() {
    return await User.find();
}

async function getById(id) {
    return await User.findById(id);
}

async function create(params) {
    // validate
    if (await User.findOne({ username: params.username })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    const user = new User(params);
    // hash password
    if (params.password) {
        user.hash = bcrypt.hashSync(params.password, 10);
    }

    // save user
    await user.save();
    return user;
}

async function update(id, params) {
    const user = await User.findById(id);

    if (!user) throw 'User not found';
    if (user.username !== params.username && await User.findOne({ username: params.username })) {
        throw 'Username "' + params.username + '" is already taken';
    }

    if (params.password) {
        params.hash = bcrypt.hashSync(params.password, 10);
    }

    Object.assign(user, params);

    await user.save();
    return user;
}

async function _delete(id) {
    await User.findByIdAndRemove(id);
}
