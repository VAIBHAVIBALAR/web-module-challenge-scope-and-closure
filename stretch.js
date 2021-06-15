//stretch goal 1
function createBase(n)
{ //created a HOF using n parameter as any base value
   return function(N) //created a closure whuch has access to outer scope
   {
       return n + N;
   }
}
var addSix = createBase(6);

console.log('stretch',addSix(10));



//stretch goal 2 attempt

//Functional programming -it is declarative(instructing a program on what needs to be done) rather than imperative(procedural programming), and application state flows through pure function.
//Object oriented programming- here the application state is usually shared and colocated with methods in object

//Functional code tends to be more concise, more predictable and easier to test 
//object oriented programming- here applicarion state is usually shared and colocated with methods in objects

