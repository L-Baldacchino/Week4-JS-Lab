# Week4-JS-Lab
Week 4 Lab - Javascript

Exercise 1:
- If i declare "let" again for the same variable, it lets me change it
- If I declare "const" again for the same variable, it wont let me change it from the original value

Exercise 2:
const arrayLetters = ['c', 'b', 'a']
const arrayNumbers = ['1', '2', '3']
arrayLetters.reverse();
// displays ['a', 'b', 'c']

const together.concat(arrayLetters.reverse(), arrayNumbers)
const jeff = array.concat('1','2','3')
jeff
//displays ['a','b','c','1','2','3']

jeff.join("")
//displays 'abc123'

Exercise 3:
const person1 ={
    name: "Luke",
    age: 34,
    introduce:function(){
       // console.log("Hello, my name is " + this.name)
        return "Hello, my name is " + this.name
    }};

person1.introduce()
//returns "Hello, my name is Luke"

Exercise 4:
names = ['Alice', 'Bob', 'Cthulhu'];
greetings = names.map(x => 'Hello ' + x + '!');
console.log(greetings);

Exercise 5:
myNumbers = [4,7,2,4,1,7,34,2,53,12,150,31,300,15,20];
// output = [4, 7, 2, 4, 1, 7, 34, 2, 53, 12, 150, 31, 300, 15, 20]

max = myNumbers.reduce ((max, x) => Math.max(x, max), null);
// output = 300

Exercise 6:
