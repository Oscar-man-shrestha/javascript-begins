//                          FUNCTION IN JAVASCRIPT                       //



//                   1) Regular function


// function name (){
// console.log("hello world")
// }
// name()


//                      2) Anonymous Function


// var name = function () {
//      console.log("hello world")
// }
// name()


//                        3) named function



// const sayhello = function(){
// console.log("hello world")
// }
// name()



//                         4) arrow fucntion



// //#anonymous arrow function
// const sayhi =()=>{
// console.log("hello world")
// }
// sayhi()

//#named arrow function
// var somename = ()=>{
//     console.log("hello world")
// }
// somename()

//                   Immediately Invoked Function Expression.

// ( function hello (){
//     console.log("hello")
// })()

//                               practices

// function someName (name){
//     console.log("hello "+ name)
// }
// someName("oscar")

//                                More practices

// const some = (name)=>{
//     console.log("hello "+ name)
// }
// some("oscar")


// ----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

//                             Higher Order function



//                   what is higher order function?

//Answer :  euta yesto function jasle arko function  linxa as a argument or
//      jasle arko  function return garxa.



//                      1) forEach function

// var numbers =[1,2,3,4,5,6,7,8,9,10]
// numbers.forEach((number)=>{
//     console.log(number)
// })



//            To Overcome This Problem MAP and FILTER is there which can retuen the value without making the empty array to store

// var numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// var sqaures = [];
// numbers.forEach((number) => {
//   sqaures.push(number * number);
// });
// console.log(sqaures);



//                           HOF (MAP)


// map is specially used to modify array

// var numbers = [1,2,3,4,5,6,7,8,9,10]
// var squares = numbers.map((number)=>{
//     return number*number
// })
// console.log(squares)



//                   <---- HOF(filter)--->



//                    To Filter out from array

// var numbers = [1,2,3,4,5,6,7,8,9,10]
//     var evenNumbers = numbers.filter((number)=>{
//         return number%2 == 0
//     })




         
// console.log(evenNumbers)

// const cartItems = [
//   {
//     productName: "mobile",
//     productPrice: 10000,
//     Qty: 2
//   },
//   {
//     productName : "chocolate",
//     productPrice: 250,
//     Qty:12

//   },
//   {
//     productName: "papad",
//     productPrice: 50,
//     Qty: 2
//   },
//   {
//     productName : "chocolate",
//     productPrice: 250,
//     Qty :12
//   },
// ]
// const totalPrice = cartItems.reduce((accumulator,currentProduct)=>{
//     return accumulator + currentProduct.productPrice
// },0)
// console.log(totalPrice)




//                      <----Using Reduce--->

//                 specially used for math calculation



// const cartItems = [
//     {
//         productName : "MoMo",
//         productPrice : 250,
//         qty : 2
//     },

//     {
//         productName : "choco",
//         productPrice : 50,
//         qty : 4
//     },

//     {
//         productName : "chawmein",
//         productPrice : 225,
//         qty : 4
//     },

//     {
//         productName : "chicken",
//         productPrice : 400,
//         qty : 1
//     },

//     {
//         productName : "mutton",
//         productPrice : 670,
//         qty : 2
//     },
// ]
// const totalPrice = cartItems.reduce((accumulator,currentProduct)=>{
//     return accumulator + currentProduct.productPrice
// },0)
// const totalQty = cartItems.reduce((accumulator,currentProduct)=>{
//     return accumulator + currentProduct.qty
// },0) 


//  console.log(totalQty)

// console.log(totalPrice)
 

// const only = cartItems.filter((ok)=>
// {
//     return ok.productName ==="chicken"
    
// })
//  console.log(only)


// const change = cartItems.map((item)=>
// {
//     return item.productPrice + 4
// })
//  console.log(change)


// cartItems.forEach((item)=>
// {
//     console.log(item)
// })

// --------------------------------------------------------------------------------------------------------------------------------

//                         objects destructuring


// const {age,name}={
//     name : "oscar man shrestha",
//     age : 18
// }
// console.log(name,age)

// const [names] =["oscarmanshrstha"]
// console.log(names)


//                   <----copy from another array---->

   
// const numbers = [1,2,3,4,5]
// const numbersCopy = [...numbers]
// console.log(numbersCopy)



//----------------------------------------------------------------------------------------------------------------------------------

