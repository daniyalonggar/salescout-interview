// Write a script that:
// 1. Connects to Redis.
// 2. Saves the keys with their values.
// 3. Reads and outputs values for a given key.

<<<<<<< HEAD

import { createClient } from 'redis';

const client = createClient({
    url: 'redis://localhost:6379',
});

async function manageRedis(): Promise<void> {
    try {
       
        await client.connect();
        console.log('Connected to Redis!');

       
        await client.set('name', 'John Doe');
        console.log('Set name: John Doe');

        await client.set('age', '30');
        console.log('Set age: 30');

      
        const name = await client.get('name');
        console.log('Value for "name":', name);

        const age = await client.get('age');
        console.log('Value for "age":', age);

    } catch (error) {
        console.error('Error managing Redis:', error);
    } finally {
       
        await client.quit();
    }
}

export { manageRedis };
=======
// Use redis library

async function manageRedis(): Promise<void> {
    // Your code goes here
}

module.exports = { manageRedis };
>>>>>>> fdcfbc733ec7b4e1fed69f6da05dfa4761905999
