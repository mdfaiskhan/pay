// let nums = [1, 2, 3]
// let numbers = nums

// console.log(nums == numbers) 

// let userOne = {
// name:'Asabeneh',
// role:'teaching',
// country:'Finland'
// }

// let userTwo = userOne

// console.log(userOne == userTwo) 


// math object

// const PI = Math.PI;
// console.log( PI);//3.1415

// console.log(Math.round(PI)) //3 approx

// console.log(Math.round(9.99)) //10

// console.log(Math.floor(1.11))//1

// console.log(Math.ceil(1.01))//max = 2

// console.log(Math.min(1,2,3,4,5,6,-99))//-99

// console.log(Math.max(1,2,3,4,5,99))//99 returns max number

// const randnum = Math.random();
// console.log(randnum)

//logical operators

// const faisal = 2>3 && 3>2;
// console.log(faisal) //false

// const fais=3>2 && 4>3;
// console.log(fais) //true

// const qwer=2>3 || 3>2
// console.log(qwer) //true

// const qwert=4>3 || 5>4
// console.log(qwert)//true

// let asdf=2>3;
// console.log(asdf)
// let aasdf=!(2>3);
// console.log(aasdf)

//increment operator
// let faisal=0
// console.log(++faisal)
// console.log(faisal++)
// console.log(faisal)


//ternary operator
// let faisal=true
// faisal
// ? console.log('Faisal is correct number')
// : console.log('it is wrong number')
// faisal=false
// ? console.log('Faisal is correct name')
// : console.log('Faisal is not a correct number')

// let num=10
// num>9
// ?console.log(`${num} is greater than 9`)
// :console.log(`${num} is not greater than 9`)

// num>11
// ?console.log(`${num} is greater than 11`)
// :console.log(`${num} is not greater than 11`)

//time
// let qwerty=new Date();
//   console.log(qwerty.getFullYear());
//   console.log(qwerty.getMonth());
//   console.log(qwerty.getTime());
//   console.log(qwerty.getMinutes());
//   console.log(qwerty.getSeconds());



//if conditiom
// let fai=11;

// if(fai>=0){
//     console.log(`${fai} is an positive number`)
// }

// let num = 3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// } else {
//   console.log(`${num} is a negative number`)
// }
// //  3 is a positive number

// num = -3
// if (num > 0) {
//   console.log(`${num} is a positive number`)
// } else {
//   console.log(`${num} is a negative number`)
// }
//  -3 is a negative number

//array

// const arr = [
//     'Asabeneh',
//     250,
//     true,
//     { country: 'Finland', city: 'Helsinki' },
//     { skills: ['HTML', 'CSS', 'JS', 'React', 'Python'] }
// ] // arr containing different data types
// console.log(arr)

//creating array usijgn splits

// let fai="facebook , instagram , snapchat"
// let sal=fai.split(',')
// console.log(sal)

//accessing the arrrays 
// const fruits = ['banana', 'orange', 'mango', 'lemon']
// console.log(fruits[0])
// console.log(fruits[1])
// console.log(fruits[2])

// const countries = [
//     'Albania',
//     'Bolivia',
//     'Canada',
//     'Denmark',
//     'Ethiopia',
//     'Finland',
//     'Germany',
//     'Hungary',
//     'Ireland',
//     'Japan',
//     'Kenya'
//   ]
//   console.log(countries.length)
//   let qwe=countries.length-1

//   console.log(countries[qwe] )

let faisal=[0,1,2,3,4,5]
faisal[0]=10
faisal[1]=20
console.log(faisal)

let khan=Array(8).fill(8)
console.log(khan)

const thirdlist=faisal.concat(khan)
console.log(thirdlist)

console.log(faisal.length)
console.log(thirdlist[13])

console.log(thirdlist.indexOf(10))