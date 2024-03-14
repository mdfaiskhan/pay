// alert("hrllo")


//for loop
// for(i=0;i<6;i++){
//     alert(i)
//     console.log(i)
// }

// for(i=6;i>=0;i--){
//     console.log(i)
// }

// for(i=0;i<6;i++){
// console.log(`${i} * ${i} =  ${ i * i} `);
// }

// let fai = ['england','scotland','netherland','iceland','australia'];
// let sal = [];
// console.log(` before applying upparcase ${fai}`)
// for(i=0;i<5;i++){
//     sal.push(fai[i].toUpperCase())

// }
// console.log(` ${sal}`)
// alert(sal)


//while loop

// let i=0;
// while(i<=5){
//     console.log(i)
//     i++;
// }


//do while loop

// let i=0
// do{
//     console.log(i)
//     i++
// }while(i<=5)

//for of loop
// let sum=0
// let arr=[1,2,3,4,5]
// for(let element of arr){
//     console.log(element*element)
//     sum=sum+element
   
//     // alert(element)
// }
// console.log(sum)

//break and continue

// let arr=[1,2,3,4,5]
// for(i=0;i<=5;i++){
//     if(i==3){
//     // break
//     continue
//     }
//     console.log(i)
// }

//exercise

// for(i=1;i<=7;i++){
//     let row=''
//     for(j=1;j<=i;j++){
//         row += '#'

//     }
//     console.log(row)
// }

// let arr=[0,1,2,3,4,5,6,7,8,9,10]
// for(i=0;i<=arr.length;i++){
//     console.log(`${i} * ${i} = ${i*i}`)
// }

// let arr=[0,1,2,3,4,5,6,7,8,9,10]
// for(i=0;i<=arr.length;i++){
//     console.log(`${i} ${i**2} ${i**3}`)
// }

// for(i=0;i<=100;i++){
//     let sum=i;
//     if(sum%2==0){
//         console.log(i)
//     }
// }

// for(i=0;i<=100;i++){
//     if(i%2!=0){
//         console.log(i)
//     }
// }


// function isprime(j){
//     if(j<=2){
//         return false;
//     }
//     for(i=2;i<Math.sqrt(i);i++){
//         if(j%1===0){
//             return false;
//         }
//     }
//     return true

// }

//functions

//withour parameter
// function newfun(i){

// let sum=i*i;
// console.log(sum)
// }
// newfun(4)

// function arpit(){
// let firstname = 'Faisal'
// let lastname = 'khan'
// let space=' '
// let fullname=firstname+space+lastname;
// return fullname
// }
// console.log(arpit())

// function pi(r){
//     let pie=Math.PI * r *r;
//     return pie
// }
// console.log(pi(2))

// function sum2(sum01,sum02){
//     res=sum01+sum02;
//     return res
// }
// console.log(sum2(2,2))

//arrow function

// let fai = (a,b) => a+b;
// console.log(fai(3,4))

// let moh=(a,b,c) => a+b+c**2;
// console.log(moh(1,2,3))


//objects

// const details = {
//     india : 'newdelhi',
//     name : 'Mohammed Faisal Khan',
//     number : 123456,
//     skills : ['c++','java','csharp'] 
// }
// console.log(details.skills)

// a callback function, the name of the function could be any name
// let faisal=(n) =>{
//     return n**2;
// }
// function khan(faisal,n){
//     return faisal(n) * n;
// }

// console.log(faisal(2))//normal function

// console.log(khan(faisal,2))//call back function

let moh = (a,b,c) =>{
return a+b+c;
}
function med(moh,d){
    return moh(d,d,d) * 10;
}
console.log(moh(1,2,3))
console.log(med(moh,10))

