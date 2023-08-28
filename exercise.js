/*
const myNumbers = [1,5,3,6,9,4,1,2,5,12,0,3,5,4,33,23];
//const max = Math.max(...myNumbers);
//console.log(max);

max = myNumbers.reduce ((max, x) => Math.max(x, max), null);
console.log(max);


//max = myNumbers.reduce ((max, x) => Math.max(x, max), null);
//console.log(max);

*/

//-------------Exercise 1:
//- If i declare "let" again for the same variable, it lets me change it
//- If I declare "const" again for the same variable, it wont let me change it from the original value






//-------------Exercise 2:
/*
const arrLetters = ['c', 'b', 'a']
arrLetters.reverse();

// displays ['a', 'b', 'c']
const arrNumbers = ['1', '2', '3']
const arrTogether = arrLetters.concat('1','2','3')
arrTogether
//displays ['a','b','c','1','2','3']

arrTogether.join("")
//displays 'abc123'
*/




//-------------Exercise 3:

const person1 ={
    name: "Luke",
    age: 34,
    introduce:function(){
       // console.log("Hello, my name is " + this.name)
        return "Hello, my name is " + this.name
}};

person1.introduce()
//returns "Hello, my name is Luke"



//Exercise 4:
/*
names = ['Alice', 'Bob', 'Cthulhu'];
greetings = names.map(x => 'Hello ' + x + '!');
console.log(greetings);
*/



//-------------Exercise 5:

myNumbers = [4,7,2,4,1,7,34,2,53,12,150,31,320,15,20];
// output = [4, 7, 2, 4, 1, 7, 34, 2, 53, 12, 150, 31, 300, 15, 20]

max = myNumbers.reduce ((max, x) => Math.max(x, max), null);
// output = 300

console.log(max);




//-------------Exercise 6:

displayArray = (inputArray) => {
// Create an array where each element contains <li>item</li>
let itemArray = inputArray.map(/* ...TODO... */ );

// Concatenate all the elements of list into one string
let oneString = itemArray.reduce(/* ...TODO... */ );

document.getElementById('cool-section').innerHTML =
'<ul>' + oneString + '</ul>'; 
}


