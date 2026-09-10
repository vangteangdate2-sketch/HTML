JavaScript: events.js

function clickEvent()
{
    alert("Button Clicked!");
}
function mouseOver()
{
    document.getElementById("text").style.color = "Yellow";
}

function mouseOut()
{
    document.getElementById("text").style.color = "Green";
}
function changeEvent()
{
    let course = document.getElementById("course").value;
    alert("Selected Course: " + course);
}
function keyUpEvent()
{
    let name = document.getElementById("name").value;
    document.getElementById("result").innerHTML =
    "You typed: " + name;
}
function submitEvent()
{
    alert("What a Big Sniggy");
}

