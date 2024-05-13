import { apiHandler, usersRepo } from 'helpers/api';

export default apiHandler({
    post: register
});

async function register(req, res) {
    console.log('register');
    const user = await usersRepo.create(req.body);
    return res.status(200).json({
        user
    });
}
