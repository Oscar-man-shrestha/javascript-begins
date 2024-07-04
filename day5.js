// var names = ["oscar","saimon","sajan"]
// for(let name of names){
//     console.log(name)
// }



// function sayhello(){
//     // console.log("hello oscar")
// }

// sayhello()

// function sum (a,b){
//     console.log(a+b)
// }

// sum(5,6)

//  const sayhello = funtion (){
//  console.log ("hello world")
//  }



//  const sayhello =()=>{
//     console.log("hello world")
//  }


// (function hello (){
//     console.log("hello world")

// })()


// function hello (name) {
//     console.log("hello "+name)

// }
// hello("oscar")

//  function hello (name ="oscar"){
//      console.log('Hello ${"name"}')
//  }
//  hello("oscar")
//  const hello = (name="oscar")=>{
//      console.log("hello "+name)
//  }
//  hello("kitkat")
  //-----------------------------------------------------------------------------------------------
  
  
  //BY USIG FOREACH


  // var numbers =[1,2,3,4,5,6,7,8,9,10]
// numbers.forEach(number => {
//     console.log(number)
    
// });

// var numbers = [1,2,3,4,5,6,7,8,9,10]
// var sqaures =[]
// numbers.forEach((number)=>{

//     sqaures.push(number*number)
// })
// console.log(sqaures)
// -------------------------------------------------------------------------------------------------------


// BY USING MAP


// var numbers = [1,2,3,4,5,6,7,8,9,10]
// var sqaures = numbers.map((number)=>{
//     return number*number
// })
// console.log(sqaures)
//----------------------------------------------------------------------------------------------------
//BY USING FILTER
var numbers = [1,2,3,4,5,6,7,8,9,10]
var evenNumbers = numbers.filter((number)=>{
    return number%2==0
})
console.log(evenNumbers)