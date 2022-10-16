let queue =[2,3,4,5];
let front, rear;
front =0;
rear = queue.length -1; 
console.log("Element removed: "+queue.shift());
front++;
queue.push(6);
rear++;

queue.forEach((element) =>{
    document.write("<br>"+element);
} )
console.log("front: "+front+" rear: "+rear);

// task: Implement queue using class