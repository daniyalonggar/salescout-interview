// Write a script that:
// 1. Connects to MongoDB.
// 2. Creates the 'users' collection.
// 3. Adds new users.
// 4. Finds users with duplicate emails.

<<<<<<< HEAD
import mongoose, { Schema, Document } from 'mongoose';

const userSchema = new Schema({
    email: { type: String, required: true, unique: true },
    name: { type: String, required: true },
}, { collection: 'users' });

const User = mongoose.model<Document & { email: string, name: string }>('User', userSchema);

type DuplicatedUsers = {
    email: string;
};

async function manageUsers(): Promise<DuplicatedUsers[]> {
    try {
        
        await mongoose.connect('mongodb://localhost:27017/mydatabase');
        const newUsers = [
            { email: 'test1@example.com', name: 'User One' },
            { email: 'test2@example.com', name: 'User Two' },
            { email: 'test1@example.com', name: 'User One Duplicate' },
        ];

        await User.insertMany(newUsers);

        const duplicates = await User.aggregate([
            { $group: { _id: "$email", count: { $sum: 1 } } },
            { $match: { count: { $gt: 1 } } },
            { $project: { email: "$_id", _id: 0 } }
        ]);

        return duplicates;

    } catch (error) {
        console.error('Error managing users:', error);
        return [];
    } finally {
        await mongoose.disconnect();
    }
}

export { manageUsers };
=======
// Use Mongoose library

type DuplicatedUsers = {
    email: string
}

async function manageUsers(): Promise<DuplicatedUsers[]> {
    // Your code goes here   
    return []
}

module.exports = { manageUsers }
>>>>>>> fdcfbc733ec7b4e1fed69f6da05dfa4761905999
