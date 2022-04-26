// const name = 'Java';
//
// function displayName() {
//     const name = 'Script';
//     logMessage(name);
// }
//
// function logMessage(name) {
//     console.log(`Hello ${name}`);
// }
//
// displayName();
//
// const linkElement = document.getElementById('link');
// linkElement.setAttribute('target', '_blank');

document.querySelector('h1').style.color = '#5cdc5f';

document.addEventListener('click', function(event) {
    console.log(`Click detected x ${event.offsetX} y ${event.offsetY}`);
});

// After pressing ‘Join Us’ link is hidden.
function changeLinkToHidden() {
    document.getElementById("JoinUsLink").style.visibility = "hidden";
}

// After making 5 clicks on the page displays an alert dialog
let body = document.querySelector(".page-click");
let CountPageClicks = 0;

body.addEventListener("click", function() {
    CountPageClicks += 1;

    if (CountPageClicks >= 5){
        window.alert("You clicked more than 5 times!");
        CountPageClicks = 0;
    }
});

//Update title “TIME TO BUILD YOUR CAREER” and add current year
// in front using JavaScript Date object
let date =  new Date().getFullYear();
document.getElementById("h1").innerHTML = `${date} Time to build your career`;