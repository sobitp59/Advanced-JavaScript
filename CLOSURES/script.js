// A closure is the combination of a function bundled together (enclosed) with references to its surrounding state (the lexical environment). In other words, a closure gives you access to an outer function's scope from an inner function. In JavaScript, closures are created every time a function is created, at function creation time.

// a simple function 
// function funcOne(){
//     var varOne = 'I am var one';

//     function funcTwo(){
//         console.log(varOne);
//     }
//     funcTwo();
// }
// funcOne(); 
 // Output : I am var one



// another simple function :: 👀 Sorry didin't come other examples in my mind

    function father(){
        var myBankPassword = 'bankPassword2022';
        
         function son(){  // we are returning function here not invoking
            console.log(myBankPassword);
        }
    }

    
var fatherBankPassword = father(); // variables hold the function son() body as well as reference to variable myBankPassword 
// console.log(fatherBankPassword); 
fatherBankPassword();




