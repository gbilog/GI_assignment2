//ASSIGNMENT 2, PART 2, PART 1: MATH AND MATH FUNCTIONS
//NUMBER 1
/*
var anyNumber = prompt("Pick any positive or negative number");
window.console.log("The absolute value of your number is "+ Math.abs(anyNumber));
*/


//NUMBER 2
/*
var anyNumber = prompt("Pick any floating point decimal number");
window.console.log("The next whole number up is "+ Math.ceil(anyNumber));
*/

//NUMBER 3
/*
var anyNumber = prompt("Pick any floating point decimal number");
window.console.log("The next whole number down is "+ Math.floor(anyNumber));
*/

//NUMBER 4
/*
var numberList = window.prompt("Please provide five numbers, serparated by commas. Example: 1,2,3,4,5");

var arrNumberList = numberList.split(",");
console.log(arrNumberList);
window.console.log("The largest number is "+Math.max.apply(null,arrNumberList)+". The smallest number is "+ Math.min.apply(null,arrNumberList)+".");
*/

//NUMBER 5
/*
var number = window.prompt("Please pick a number");
console.log("The square root of you number is "Math.sqrt(number));
*/

//ASSIGNMENT 2, PART 2, PART 2: DATE AND DATE FUNCTIONS
//NUMBER 6
/*
var currentDate = new Date();
console.log(currentDate.toDateString());
*/

//NUMBER 7
/*
var year = window.prompt("Which year?");
var month = window.prompt("Which month? Enter 1-12");
var dayCount = new Date(year,month,0).getDate();
console.log("That month has "+dayCount+" days");
*/

//NUMBER 8
/*
var pickDate = window.prompt("Enter a date (MM-DD-YY format)");
var arrPickDate = pickDate.split("-");
var monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
];
console.log(monthNames[arrPickDate[0]-1]);
*/

//NUMBER 9
/*
var checkDate = new Date();
var day = checkDate.getDay();
var isWeekend = (day == 6) || (day == 0);
console.log("Does it fall on a weekend? "+isWeekend);
*/

//NUMBER 10

//NUMBER 11


//ASSIGNMENT 2, PART 2, PART 3: CONDITIONAL LOGIC AND LOOPING OPERATIONS
//NUMBER 12
/*
var num1 = window.prompt("Pick an integer.");
var num2 = window.prompt("Pick a second integer.");
var number1 = parseInt(num1);
var number2 = parseInt(num2);

if (number1 > number2)
    {
    console.log(number1 + " is the bigger number");
    }
else if (number2 > number1)
    {
    console.log(number2 + " is the bigger number");
    }
else
    {
    console.log("please pick two different numbers")   
    };
*/


//NUMBER 13
/*
//declaring variables
var classroom = new Array(5);
var studentScore = new Array(5);
var grade = new Array(5);


//enter student, score info
for (i = 0; i < classroom.length; i ++)
    {
    classroom [i] = window.prompt("Who is student number "+ (i+1));
    studentScore[i] = window.prompt("What is the test score for "+ classroom[i] + "?");
    }

//letter grade conditional
for (i = 0; i < studentScore.length; i ++)
{
if (studentScore[i] > 90)
{
    grade[i] = "A";
}
else if (studentScore[i] < 90 && studentScore[i] >= 80)
{
    grade[i] = "B";
}
else if (studentScore[i] < 80 && studentScore[i] >= 70)
{
     grade[i] = "C";
}
else if (studentScore[i] < 70 && studentScore[i] >= 60)
{
    grade[i] = "D";
}
else if (studentScore[i] < 60 && studentScore[i] >= 0)
{
     grade[i] = "F";
}
else
{
    grade[i] = "Please enter a valid score for this student."
}}

for (i = 0; i < 5; i ++)
    {
    console.log("Student: "+classroom[i]+" Test Score: "+studentScore[i]+" Letter Grade: "+ grade[i]);
    }
*/



//NUMBER 14
/*
var number;
for (number = 1; number <= 15; number++)
    { 
    if (number%2 == 0)
        {
        console.log(number + "... even")
        }
    else
        console.log(number + "... odd");
    };
*/

//NUMBER 15
/*
var i;
for (i = 1; i <= 100; i++)
    {
        if (i % 3 == 0 && i % 5 ==0)
            {
             console.log("FizzBuzz");
            }
        else if (i % 3 == 0)
            {
            console.log("Fizz");
            }
        else if (i % 5 == 0)
            {
              console.log("Buzz");
            }
        else
            {
            console.log(i);
            }
    };
*/

//ASSIGNMENT 2, PART 2, PART 4: The "Hitchhiker's Guide to the Galaxy" Game

//NUMBER 1
/*
var userAnswer = window.confirm("Are you ready to play your game?");

if (userAnswer == true)
    {
        window.confirm("Awesome, our hero is waiting!");
    }
else if (userAnswer == false)
    {
        window.confirm("Too bad, we're going to play anyway because our hero desperately needs your help!");
    }
else 
    {
        window.alert("Please check your answer");
    };


//NUMBER 2  

window.alert("You are in a dark, dingy, and humid cave searching for the lost treasure of Captain Chingadera. You are disoriented, lost, hungry and extremely thirsty. You see a speck of light in the distance ahead of you, something shimmering to your right, and the sound of running water to your left. Your back is against the wall…");

//NUMBER 3  

var direction = window.prompt('Which direction would you like to head? (please enter forward, left, or right)');


//NUMBER 4

switch (direction)
    {
        case 'forward':
        window.alert("You walk about 100 yards and safely make your way out of the cave.");
        break;
        
        case 'left':
        window.alert("Your thirst has gotten the better of you. You trip on a rock, hit your head, and fall into a pool of water and drown.");
        break;
          
        case 'right':
        window.alert("You found the gold! You walk into a small room and see thousands of gold coins, jewels, chalices, and more. You jump into the pile of gold in celebration and immediately a hidden door slams down and traps you in the room forever.");
        break;
        
        default:
        window.alert("The ghost of Captain Chingadera has condemned you to eternal damnation and you shall now burn in the hot excoriation for lifeless lowlifes for not choosing the correct option….loser.");      
    };

//NUMBER 5 & 6

var rateGame = window.prompt("Rate the game on a scale of 1 to 10");

var intRateGame = parseInt(rateGame);

if (intRateGame < 1 || intRateGame >10)
    {
        intRateGame = 10;
    }

if (intRateGame >= 6 && intRateGame <= 10)
    {
        window.alert("Thank you, we will continue to make improvements to the game!");
    }
else if (intRateGame <= 5 && intRateGame >= 1)
    {
        window.alert("Whatever, you weren’t very good at this game anyway!");
    }
else 
    {
        window.alert("Please enter a number from 1 - 10");
    };

*/

//Assignment 2, Part 2, Part 5: The "Coin Flip" Game

//NUMBER 1 - 7
/*
var coinFlip = Math.random();
var choice = window.prompt("Select Heads or Tails");
var flipResult;

if (coinFlip < 0.5)
    {
        flipResult = "Heads";
    }
else if (coinFlip >= 0.5)
    {
        flipResult = "Tails";
    }
else
    {
        window.alert("something wrong happened. Try again.");
    }
if (flipResult == "Heads" && choice == "Heads")
    {
        window.alert("The flip was heads and you chose heads...you win!");
    }
else if (flipResult == "Heads" && choice == "Tails")
    {
        window.alert("The flip was heads and you chose tails...you lose!");
    }
else if (flipResult == "Tails" && choice == "Heads")
    {
        window.alert("The flip was tails and you chose heads...you lose!");
    }
else if (flipResult == "Tails" && choice == "Tails")
    {
        window.alert("The flip was tails and you chose tails...you win!");
    }
else
    {
        window.alert("something went wrong. try again");
    };
*/

//Assignment 2, part 2, part 6: The "Coin Flip" Game Redux
/*
for (i=0;i<10;i++)
    {
        var coinFlip = Math.random();
        if (coinFlip < 0.5)
            {
                coinFlip = Math.floor(coinFlip);
               
            }
        else if (coinFlip >= 0.5)
            {
               coinFlip = Math.ceil(coinFlip);
            }
        else
            {
                console.log("something went wrong");
            }
        if (coinFlip == 0)
            {
                console.log("Heads");
            }
        else if (coinFlip == 1)
            {
                console.log("Tails");
            }
    };
*/

//Part 7: The "Coin Flip Streak"
/*
var coinFlip;
do 
    {
        coinFlip = Math.random();
        if (coinFlip < 0.5)
            {
                coinFlip = Math.floor(coinFlip);
            }
        else if (coinFlip >= 0.5)
            {
                coinFlip = Math.ceil(coinFlip);
            }
        if (coinFlip == 0)
            {
                console.log("Heads");
            }
        else if (coinFlip == 1)
            {
                console.log("Tails");
            }
    }
while (coinFlip == 0);
*/

//Part 8: Looping a Triangle
/*
var hashString = "#";
var i = 0;

for (i;i<8;i++)
{
    console.log(hashString);
    hashString = hashString+"#";
};
*/

//Part 9: Odd or Even?
/*
var i =0;
for (i;i<16;i++)
    {
        if (i%2 == 0)
            {
                var string = "even";
            }
        else 
            {
                var string = "odd";
            }
        console.log(i +" is "+string);
        
    };
*/


