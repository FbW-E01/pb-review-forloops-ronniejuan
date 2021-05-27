
// NOTE! Pay close attention to creating code with good and consistent code style.

// Use the variable "i" for all your loops. That variable should *not* be accessible outside the loop. Always use a for loop.

// 1. Make a loop that prints the numbers from 0 to 10.

for(let i = 0; i<= 10; i++){
    console.log("task1", i);
};

// 2. Make a loop that prints the numbers from 10 to 20.

for (let k = 10; k <= 20; k++) {
    console.log("task2", k);
};

// 3. Make a loop that prints the numbers from -10 to 10.

for (let z = -10; z <= 10; z++) {
    console.log("task3", z);
};

// 4. Make a loop that prints the numbers from 10 to -10.

for (let v = 10; v <= -10; v++) {
    console.log("task4", v);
};

// 5. Make a string. Then, make a loop that prints all the individual characters of that string.

const str = "hola";
for (let i = 0 ; i < str.length; i++) {
    
    console.log("task5",str[i]);
    //console.log("task4",str.charAt(i))
};

// 6. Make an array with 5 items. Then, make a loop that prints all the individual items of that array.

const array = ["love","peacefull","health","money","happiness"];
for (let i = 0; i < array.length; i++) {
    console.log("task6" ,array[i]);
};

// 7. Make an array with 6 items. Then, make a loop that prints every second item of that array.

const array2 = ['guitar','bass','drums','cello','synthesizer','tambourine'];
for (let i = 1; i < array2.length; i+=2) {
    console.log("task7", array2[i])   ; 
};
// 8. Make an array with 6 items. Then, make a loop that prints every third item of that array.

const array3 = ['flowers','stones','sand','water','roots','mood'];
for (let i = 0; i < array3.length; i+=2) {
    console.log("task8", array3[i])   ; 
};

// 9. Make an array with 10 items. Then, make a loop that prints every third item of that array starting from the 2nd.

const array4 = ['1','2','3','4','5','6','7','8','9','10'];
for (let i = 1; i < array4.length; i+=3) {
    console.log("task9", array4[i]); 
};

// 10. Make an array with 7 objects. Each objects should have a property called counter. Create a loop that prints only the counter value of each object.

const mad = [
   object= {
       counter1:10,
   },
   object2 ={
       counter2:11,
   },
   object3 ={
       counter3:12,
   },
   object4 ={
       counter4:13,
   },
   object5 ={
       counter5:14,
   },
   object6 ={
       counter6:15,
   },
   object7 ={
       counter7:16
   },
];

for (let i = 0; i < mad.length; i++) {
    console.log("task10",mad[i]);
};

// 11. Save a random whole number between 0 and 100 to a variable. Then print all numbers from 0 to 100 and as soon as you reach the random number you created, stop your loop.

const randomNumber = Math.round(Math.random()* 101)
for (let i = 0; i < randomNumber; i++)
if (i === randomNumber)
 { break; }
console.log(randomNumber)