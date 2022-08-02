const { faker } = require('@faker-js/faker');
const { connectDB } = require('../../database/index');
const { User } = require('../../database/user');


async function createFakeUsers (count) {
    for(var i = 0; i < count; i++) {
        // let user = new User({
        //     name: faker.name.firstName()+" "+faker.name.lastName(),
        //     email: faker.internet.email(),
        //     password: faker.internet.password(),
        //     image: faker.image.avatar()
        // });
        // await user.save();

        await User.create({
            name: faker.name.firstName()+" "+faker.name.lastName(),
            email: faker.internet.email(),
            password: faker.internet.password(),
            image: faker.image.avatar()
        });

    }
}

connectDB().then(()=>{
    createFakeUsers(50);
})

