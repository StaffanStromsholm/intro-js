// var HOURHAND = document.getElementById('hour');
// var MINUTEHAND = document.getElementById('minute');
// var SECONDHAND = document.getElementById('second');

// var deltaSec = 360 / 60;
// var deltaMin = deltaSec / 60;
// var deltaHr = deltaMin / 60;

// (function () {
//     var alarmHr = 12
//     var alarmMin = 52
//     var alarmSec = 00

//     var now = new Date();

//     var currentHr = now.getHours();
//     var currentMin = now.getMinutes();
//     var currentSec = now.getSeconds();

//     var deltaHr = currentHr * (360 / 12) + ((currentMin / 60) * 30) + ((currentSec / 60 / 60) * 60);
//     var deltaMin = ((currentMin / 60) * 360) + ((currentSec / 60) * (360 / 60));
//     var deltaSec = (currentSec / 60) * 360;

//     setInterval(function () {
//         moveThoseArms()
//         updateDeltas();
//     }, 1000)

//     function moveThoseArms() {

//         SECONDHAND.style.transform = `rotate(${deltaSec}deg)`

//         MINUTEHAND.style.transform = `rotate(${deltaMin}deg)`
//         deltaMin += 360 / 60 / 60;

//         HOURHAND.style.transform = `rotate(${deltaHr}deg)`
//         deltaHr += (((360 / 60) / 60) / 12);
//     }

//     function updateDeltas() {
//         deltaSec += 360 / 60;
//         currentSec += 1
//         //if current second is 60, make it 0 and increase minutes by one
//         if (currentSec === 60) {
//             currentSec = 0;
//             currentMin += 1
//             //if current minute is 60, make it 0 and increase hours by one
//             if (currentMin === 60) {
//                 currentMin = 0;
//                 currentHr += 1;
//                 //if current hour is 0, make it 0
//                 if (currentHr === 12) {
//                     currentHr = 0;
//                 }
//             }
//         }
//     }
// })()


// 1. Get the curent time
// 2. extract the hour, minute, second
//3. convert hour, minute, second into angles that those arms need to be moved to from the point 0
//4. position those arms according to those calculation
//5. update thier position every 1 second
// a. recalculate the angle of those arms every 1 seconds
// b. position those arms again to new calculation

//Hoangs solution



// var now = new Date();

// var hour = now.getHours();
// var minute = now.getMinutes();
// var second = now.getSeconds();

// console.log(`The time now is ${hour}:${minute}:${second}`)

// var alpha = 360 / 60 //second arm moves every second
// var beta = 360 / 60 //minute arm moves every minute
// var delta = 360 / 12 //hour arm moves every hour

// //angle of the second arm
// var secondArmAngle = alpha * second;
// //angle of the minute arm
// var minuteArmAngle = beta * (minute + second / 60);
// // angle of the hour arm
// var hourArmAngle = delta * (hour + minute / 60 + second / 360);



// var secondArmOffset = alpha;
// var minuteArmOffset = alpha / 60;
// var hourArmOffset = alpha / 60 / 60;

// function updateArmPosition() {
//     secondArmAngle += secondArmOffset;
//     minuteArmAngle += minuteArmOffset;
//     hourArmAngle += hourArmOffset;

//     SECONDARM.style.transform = `rotate(${secondArmAngle}deg)`
//     MINUTEARM.style.transform = `rotate(${minuteArmAngle}deg)`
//     HOURARM.style.transform = `rotate(${hourArmAngle}deg)`
// }

var clock = {
    constants: {
        alpha: 360 / 60,
        beta: 360 / 60,
        delta: 360 / 12
    },
    arms: {
        hour: document.getElementById('hour'),
        minute: document.getElementById('minute'),
        second: document.getElementById('second')
    },
    now: {
        hour: null,
        minute: null,
        second: null
    },
    angles: {
        hour: null,
        minute: null,
        second: null
    },
    getNow: function () {
        var time = new Date()
        this.now.hour = time.getHours()
        this.now.minute = time.getMinutes()
        this.now.second = time.getSeconds()
    },
    getAngles: function () {
        // destructuring, possible like this because const is block scope. const {hour, minute, second} = this.now
        this.angles.second = this.constants.alpha * this.now.second;
        this.angles.minute = this.constants.beta * (this.now.minute + this.now.second / 60);
        this.angles.hour = this.constants.delta * (this.now.hour + this.now.minute / 60 + this.now.second / 360);
    },
    positionClockArms: function () {
        this.arms.second.style.transform = `rotate(${this.angles.second}deg)`;
        this.arms.minute.style.transform = `rotate(${this.angles.minute}deg)`;
        this.arms.hour.style.transform = `rotate(${this.angles.hour}deg)`;
    },
    adjustAngles: function () {
        this.now.second++;
        this.getAngles()
        this.positionClockArms();
    },
    init: function () {
        this.getNow();
        this.getAngles();
        this.positionClockArms();
        setInterval(this.adjustAngles.bind(this), 1000)

        // var scope = this;
        // setInterval(function () {
        //     scope.adjustAngles();
        // }, 1000)
    }
}

clock.init();

// clock.getNow();
// clock.getAngles();
// clock.positionClockArms()
// setInterval(clock.adjustAngles.bind(clock), 1000)

// console.log(clock.now);
// console.log(clock.angles);
