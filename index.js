var currentDate = new Date();
var year = currentDate.getFullYear();
var startDate = new Date(year, 0, 1);
var timeDifference = currentDate.getTime() - startDate.getTime();

var daysDifference = timeDifference /(1000 * 3600* 24);
var days = Math.floor(daysDifference)
console.log(days)
console.log(daysDifference)
var progress = (daysDifference*100)/365; // Example value, you can change this as needed
        // var progressBar = document.getElementById('progressBar');
        // progressBar.style.width = progress + '%';
        // progressBar.textContent = progress + '%';
//days
var dayElement = document.getElementById("days");
dayElement.textContent = days ;
//year
var yearElement = document.getElementById("year");
yearElement.textContent = year;


console.log(progress);
let number = document.getElementById("number");
let counter = 0;
setInterval(() => {
    if(counter <= progress){
      counter += .5;
    number.innerHTML = counter.toFixed(2) + "%";  
    }
    
},30 );

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
circleElement.style.animation = 'anim '+(progress*30/0.5)+'ms linear forwards';
