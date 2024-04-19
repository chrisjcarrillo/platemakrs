import { MongoClient, MongoClientOptions } from 'mongodb';

const uri: string | undefined = process.env.MONGODB_URI;

if (!uri) {
  throw new Error('Please define the MONGODB_URI environment variable inside .env.local');
}

let client: MongoClient = new MongoClient(uri);
let clientPromise: Promise<MongoClient>;

clientPromise = client.connect();

export default clientPromise;
