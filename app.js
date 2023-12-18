/*console.log(time);


// get Year
console.log(time.getFullYear()) // возвращает значение ввиде integer
// get Month
console.log('месяц: ' + (time.getMonth() + 1)); // при конкатенации возвращает в виде String
// get Date
console.log('дата: ' + (time.getDate()))
// get Hours
console.log("час: " + (time.getHours()))
// get Minutes
console.log(time.getMinutes())
// get Seconds
console.log(time.getSeconds());

// `` yordamida string ichida JS code ishlatish mumkin
*/

/*
function playSoundOnSecondChange() {
    const tickSound = document.getElementById('tickSound');

    function checkSecond() {
      const time = new Date();
      const seconds = time.getSeconds();

      // Your logic to determine when to play the sound (e.g., on every second change)
      // For simplicity, let's play the sound on every second change
      if (seconds !== checkSecond.lastSecond) {
        tickSound.play();
        checkSecond.lastSecond = seconds;
      }
    }

    // Call checkSecond every second
    setInterval(checkSecond, 1000);
}

window.onload = playSoundOnSecondChange;
*/

function formatTimeUnit(unit) {
    return unit < 10 ? `0${unit}` : unit;
}

const getTime = () => {
    const time = new Date(); // без 'new' переменной не будут доступны встроенные функции Date()
    
    const hours = formatTimeUnit(time.getHours());
    const minutes = formatTimeUnit(time.getMinutes());
    const seconds = formatTimeUnit(time.getSeconds());

    // formatTimeUnit()

    let displayTime = `${hours}<span>:</span>${minutes}<span>:</span>${seconds}`
    const h1 = document.getElementById("time").innerHTML = displayTime;
}


const getDate = () => {
    const time = new Date();
    let displayDate = `${time.getDate()}.${time.getMonth() + 1}.${time.getFullYear()}`
    console.log(displayDate)
    const h3 = document.getElementById('date').innerHTML = displayDate
}


const getPeriod = () => {
    const time = new Date();
    const period = document.getElementById("period")
    let currentHour = time.getHours();

    if ( currentHour < 12 ) {
        period.innerHTML = "AM";
    } else {
        period.innerHTML = "PM";
    }
};


setInterval(() => {
    getTime();
    getDate();
    getPeriod();
}, 1000);