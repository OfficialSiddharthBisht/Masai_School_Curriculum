const { faker } = require('@faker-js/faker');
const { connectDB } = require('../../database/index');
const { User } = require('../../database/user');
const { Post } = require('../../database/post');


async function createFakePosts (count) {
    const users = await User.find();

    for(var i = 0; i < count; i++) {
        const post = {
            title: faker.hacker.phrase(),
            content: faker.lorem.paragraph(50),
            user: users[Math.floor(Math.random()*users.length)]
        }
        await Post.create(post);
    }
}

connectDB().then(()=>{
    createFakePosts(500);
})

