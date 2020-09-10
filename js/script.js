var HOURHAND = document.getElementById('hour');
var MINUTEHAND = document.getElementById('minute');
var SECONDHAND = document.getElementById('second');

var deltaSec = 360 / 60;
var deltaMin = deltaSec / 60;
var deltaHr = deltaMin / 60;

(function ($) {
    var now = new Date();
    var currentHr = now.getHours();
    var currentMin = now.getMinutes();
    var currentSec = now.getSeconds();

    var deltaHr = currentHr * (360 / 12) + ((currentMin / 60) * 30) + ((currentSec / 60 / 60) * 60);
    var deltaMin = ((currentMin / 60) * 360) + ((currentSec / 60) * (360 / 60));
    var deltaSec = (currentSec / 60) * 360;


    setInterval(function () {
        moveThoseArms()
        updateDeltas();
        console.log('hej')
    }, 1000)

    function moveThoseArms() {
        console.log(currentSec, currentMin, currentHr)
        SECONDHAND.style.transform = `rotate(${deltaSec}deg)`

        MINUTEHAND.style.transform = `rotate(${deltaMin}deg)`
        deltaMin += 360 / 60 / 60;

        HOURHAND.style.transform = `rotate(${deltaHr}deg)`
        deltaHr += (((360 / 60) / 60) / 12);
    }

    function updateDeltas() {
        deltaSec += 360 / 60;
        currentSec += 1
        if (currentSec === 60) {
            currentSec = 0;
            currentMin += 1
            if (currentMin === 60) {
                currentMin = 0;
                currentHr += 1;
                if (currentHr === 12) {
                    currentHr = 0;
                }
            }
        }
    }
})(window.jQuery)


