var truck1 = { speed:120, wheel:4, color: 'green'}; //object
document.write(truck1.color);

let arr =[12, 13, 14, 15, 16, 17];
let arr2 = [19,20, 21];
document.write("After concat"+arr.concat(arr2));
arr.push(90);
document.write("<br>New array"+arr);
console.log(arr.pop());
document.write("<br>After pop"+arr);
console.log("First element"+arr.shift());
document.write("After shift"+arr);
console.log("after unshift"+arr.unshift(91));
document.write("<br>After unshift"+arr);
delete(arr[2]);
document.write("<br>After delete "+arr); // [91,13, ,15,16,17]
arr.splice(0,2);
document.write("<br>After splice"+arr); // [91, 15,16,17]
arr.splice(1,1,23); //function overloading 
document.write("<br>Modifiee: "+arr); // 91 23 16 17
let array3= [1,2,3,4,5,6];
document.write("<br>After slicing: "+array3.slice(2,3));
array3.map((array3) => { console.log(array3*2) });

array3.filter(greater);  //callback
function greater(n)
{
    if(n>3)
    document.write("<br>"+n);
}

try{
    document.write("<br>The length of an array is: "+array3.length()); //error
    document.write("I love coding!");
}
catch(error)
{
    document.write(error);
}
try{
    let arr = ['i', 'love', 'Java'];
    for(let i=0; i<=3; i++)
    document.write(arr[i]); //error
    var result = 5/0;
    console.log(result);
}
catch(error)
{
    document.write("<br>"+error);
}
finally { document.write("<p>Callbacks!</p>");}

function display(value)
{
    document.write("<b>The value is: "+value+"</b>");
}

function add(num1, num2, mycallback)
{
    let result= num1+num2;
    mycallback(result);
}
add(10, 90, display);

setTimeout(display(5000), 5000);
// setInterval()

//callback hell --> promises

let newpromise = new Promise((resolve, reject) => {
// async code that communicates with the server
let x=0;
for(let i=0; i<5;i++)
x++;
if(x>5)
resolve();
else
reject();
})

newpromise.then ( function(value) { console.log("Resolved");})
.catch ( function(error) { console.log("Rejected");})
























