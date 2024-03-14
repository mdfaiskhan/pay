//crud operations

let users=[];
//Create
function createuser(id,name,age){
    let newuser={
        id:id,
        name:name,
        age:age
    };
    users.push(newuser)
}
createuser(1,'abcd',20)
createuser(2,'qwer',20)
createuser(3,'asdf',20)
createuser(4,'zxcv',20)

//read all the contents
function readuser(){
    return users;
}
console.log(readuser())

//read only the id
function readuserbyid(id){
    return users.find(users => users.id === id)
}
console.log(readuserbyid(3))

function readusersbyname(name){
    return users.find(users => users.name === name)
}
console.log(readusersbyname('abcd'))

//read by age
function readuserbyage(age){
    return users.find(users => users.age === age)
}
console.log(readuserbyage(20))


// Function to update user by ID
function updateUser(id, newData) {
    let userIndex = users.findIndex(user => user.id === id);
    if (userIndex !== -1) {
        users[userIndex] = { ...users[userIndex], ...newData };
        return true; // Updated successfully
    }
    return false; // User with the given ID not found
}
