let ClockDiv = document.getElementById('Digital-Clock-Body');
let tenshours = document.getElementById('tenshour');
let unitshours = document.getElementById('unitshour');
let tensmins = document.getElementById('tensmin');
let unitsmins = document.getElementById('unitsmin');
let tenssec = document.getElementById('tenssec');
let unitssec = document.getElementById('unitssec');
let pmam = document.getElementById('pmam');
const getTime = () => {
    let time = new Date();
    let ampm;
    if (time.getHours() > 12) {
        ampm = "PM";
    }
    else {
        ampm = "AM";
    }
    let hours = time.getHours() % 12;
    if (hours == 0) {
        hours = 12;
    }
    let minutes = time.getMinutes();
    let seconds = time.getSeconds();

    // ClockDiv.innerHTML = `${hours} : ${minutes} : ${seconds} ${ampm}`;
    tenshours.innerHTML = Math.floor(hours / 10);
    unitshours.innerHTML = Math.floor(hours % 10);
    tensmins.innerHTML = Math.floor(minutes / 10);
    unitsmins.innerHTML = Math.floor(minutes % 10);
    tenssec.innerHTML = Math.floor(seconds / 10);
    unitssec.innerHTML = Math.floor(seconds % 10);
    pmam.innerHTML = ampm;
}
setInterval(getTime, 1000);
// console.log(time);