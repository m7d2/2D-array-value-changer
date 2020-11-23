// pre-defined array
var tablue = [

    [ "a", "b", "c", "d"],
    [ 1, 2, 3, 4, 5 ],
    [ 34, 56, 12, 23],
    [ 16, 555, "lol", 0], 
]

// get INPUT
const getX = Number(window.prompt("Enter the X value in numbers only"));
const getY = Number(window.prompt("Enter the Y value in numbers only"));
const getValue = window.prompt("Now enter the value you want to replce with the position you chosed");
// end
// check if values are empty
if(getX === "" || getY === "" || getValue === ""){
    alert("You have to enter values for all the 3 question. go back and do it");
} else if(isNaN(getX) || isNaN(getY)){ // check if values x and y are not string
    alert("You have to enter only numbers for x and y values");
} 
else {

// create function to change value with given x,y position
function changeTablue(x,y,value)
{
    tablue[x][y] = value;
}
// call the function to apply changes
changeTablue(getX,getY,getValue);

// devide each row from the array and give it it's place as placed inside the pre-defined array and add some gaps to show the differences with for

// out to store array values
let out="";

// start looping through the entire array and devide it
for(let i=0; i<tablue.length; i++) {

  for(let j=0; j<tablue[i].length; j++) {

    out = out + " "+ tablue[i][j];

  }

  out = out + `\n`;
}

// show result in an array call
alert(out);

}