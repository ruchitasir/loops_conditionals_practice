// YOUR NAME HERE
console.log("Making your way in the world today takes everything you've got.");
console.log("Taking a break from all your worries, sure would help a lot.");
console.log("Wouldn't you like to get away?");
console.log("Sometimes you want to go");
console.log("Where everybody knows your name,");
console.log("and they're always glad you came."); // log was missing
console.log("You wanna be where you can see,"); // bracket missing
console.log("our troubles are all the same");
console.log("You wanna be where everybody knows"); // extra double quotes
console.log("Your name.");

/*

1. `999 > 999`    false
2. `999 == 999`    true
3. `999 != 999`   false
4. `-5 >= -4`    false
5. `100 <= -100`  false
6. `20 + 5 < 5`    false
7. `81 / 9 == 9`  true
8. `9 != 8 + 1`   false
9. `"abc" == "abc"` true
10. `"a" == "b"`    false

*/

/*
5 == 5   //true
5 === 5   //true
5 == "5"   //true
5 === "5"  //false
5   5//true
0   0// false
"a"   a// true
""  ""// false
[]  []// true
!!true //true
*/

/*

What is the difference between:
the assignment operator = It assigns a value

and the equality operator == compares the value

?

What is the difference between:
this equality operator == only value

and this equality operator === strictly compares, value and type

?



*/


let numTimes = 10;
let i= 0;
while(i<numTimes)
{
    console.log('Ginger chocolate honey patties');
    i++;
}


 numTimes = 10;
 i= 0;
while(i<numTimes)
{
    console.log('count i',i);
    i++;
}


numTimes = 10;
i= 0;
while(i<numTimes)
{
   console.log(`Current loop number is  ${i}`);
   i++;
}

for(let j=0; j< 5; j++)
{
    console.log(j);
}

for(let j=7; j<= 15; j++)
{
    console.log('j from 7 to 35 currently at',j);
}

let start =0;
let LIMIT =5;

for(let j= start; j<= LIMIT; j++)
{
    console.log('value from start to limit', j);
}

// find out all the even numbers between a range of numbers
startNum = 6; endNum = 30;
for(let j=startNum; j<= endNum; j++)
{
    if(j%2 == 0)
    {
        console.log(`Even numbers between ${startNum} and  ${endNum}`, j);
    }
}