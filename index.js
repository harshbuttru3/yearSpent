var currentDate = new Date();
var year = currentDate.getFullYear();
var startDate = new Date(year, 0, 1);
var timeDifference = currentDate.getTime() - startDate.getTime();

var daysDifference = timeDifference /(1000 * 3600* 24);
var days = Math.floor(daysDifference)
console.log(days)
console.log(daysDifference);
let totalDays;
if((year % 4 === 0 && year % 100 !== 0) || year % 400 === 0){
totalDays = 366;
}else{
    totalDays = 365;
}
var progress = daysDifference * 100/totalDays;

var dayElement = document.getElementById("days");
dayElement.textContent = days ;
//year
var yearElement = document.getElementById("year");
yearElement.textContent = year;


let timeInterval = 30;
let step = 0.19;
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter <= progress){
      counter += step;
    number.innerHTML = counter.toFixed(2) + "%";  
    }
    
},timeInterval );

var progressPercent = 472 - (4.72 * progress);
// Get the stylesheets for changing the progress of circle.
var styleSheets = document.styleSheets;

// Loop through the stylesheets to find the keyframe rule
for (var i = 0; i < styleSheets.length; i++) {
    var styleSheet = styleSheets[i];
    if (styleSheet.cssRules) {
        for (var j = 0; j < styleSheet.cssRules.length; j++) {
            var cssRule = styleSheet.cssRules[j];
            if (cssRule.name === "anim") { // Assuming the name of the keyframe rule is "anim"
                // Modify the keyframe rule with a variable
                cssRule.appendRule('100% { stroke-dashoffset: ' + progressPercent + '; }');
            }
        }
    }

}
var circleElement = document.querySelector('circle');
circleElement.style.animation = 'anim '+(progress*timeInterval/step)+'ms linear forwards';


//updating the number of total days in html content.
let totalNoOfDays = document.getElementById("totaldays");
totalNoOfDays.innerHTML = totalDays;