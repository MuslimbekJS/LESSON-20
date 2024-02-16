


function displayTime() {
    var dateTime = new Date();
    var hrs = dateTime.getHours();
    var min = dateTime.getMinutes();
    var sec = dateTime.getSeconds();
    var session = document.getElementById('session');

    if (hrs >= 12) {
        session.innerHTML = 'PM';
    } else {
        session.innerHTML = 'AM';
    }

    if (hrs > 12) {
        hrs = hrs - 12;
    }
    if (sec > 10) {
        // sec.toString(sec.push('0'));
    }
    hrs = (hrs < 10) ? '0' + hrs : hrs;
    min = (min < 10) ? '0' + min : min;
    // var time = hrs + ':' + min + ':' + sec;
    sec = (sec < 10) ? '0' + sec : sec;
    // document.getElementById('time').innerHTML = time;
    // var timer = setTimeout(displayTime, 1000);


    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);