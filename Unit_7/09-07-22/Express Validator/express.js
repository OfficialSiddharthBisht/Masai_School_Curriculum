const users = [
    
];

// const user = {
//     first_name: 'Akash',
//     last_name: 'Kumawat',
//     email: 'akashkmt963@gmail.com',
//     pincode: '302021',
//     age: '20',
//     gender: 'Male'

// }

function validator (req, res, next){
    const body = req.body;
    // console.log(body);
    if(!body.first_name){
        return res.status(400).send("First Name is Required");
    }
    if(!body.last_name){
        return res.status(400).send("Last Name is Required");
    }
    if(!body.email.includes('@') || !body.email.includes('.') || !body.email.includes('com')){
        return res.status(400).send("Invalid Email");
    }
    if(body.pincode.length !== 6){
        return res.status(400).send("Invalid Pincode");
    }
    if(!(body.age > 0 && body.age < 100)){
        return res.status(400).send("Invalid Age -- Must be between 1 and 100");
    }
    if(!(body.gender === "Male" || body.gender === "Female" || body.gender === "Others")){
        return res.status(400).send("Invalid Gender -- Male/Female/Others");
    }
    next();
}


function registerUser (req, res) {
    users.push(req.body);
    res.status(200).send("Registered Successfully.")
};

function getUsers (req, res) {
    res.status(200).send(users);
}

module.exports = {
    validator,
    registerUser,
    getUsers
}
