//create element and append child to add boxes

let button = document.getElementById("theBoxes");
button.addEventListener("click", myFunction); //in addeventlistener only function name should be there and not the fucntion call
var oldValue = 0;
var i = 1;

function myFunction() {
    let n = document.getElementById('number').value;
    n = parseInt(oldValue) + parseInt(n);
    for (i; i <= n; i++) {
        var box = document.createElement('div'); //represents a box
        box.classList.add('myDiv'); //applying some property of class myDiv, have to add properties in css file
        document.getElementById('box').appendChild(box);
        box.innerHTML = i; //to write something inside the box

        oldValue = document.getElementById('box').lastElementChild.innerHTML; //innnerhtml is for getting the value
        console.log(oldValue);

    }
}