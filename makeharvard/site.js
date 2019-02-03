
function setAlarm() {
    const setAlarmTime = document.getElementById("set-alarm-time");
    const submitAlarmTime = document.getElementById("set-alarm-button");
    submitAlarmTime.addEventListener("click", function() {
        const setTime = setAlarmTime.value;
        newAlarmDOM(setTime);
        newAlarmPost(setTime);
        console.log(setTime);
    });
};

function newAlarmDOM(time) {
    const alarmContainer = document.getElementById("alarm-container");
    const newAlarmItem = document.createElement("li");
    alarmContainer.appendChild(newAlarmItem);
    newAlarmItem.innerText = time;
};

function newAlarmPost(time) {
    post("http://192.168.43.50:8080/time", time, function() {
        console.log("we successfully set the alarm for: " + time);
    });

    /* $.post("192.168.43.50:8080/time", time, function() {
        console.log("we successfully sent the alarm at: " + time);
    }); */
};

setAlarm();

const alarmContainer = document.getElementById("alarm-container");
if(alarmContainer.innerHTML !== "") {
    const emptyAlarm = document.createElement("li");
    alarmContainer.appendChild(emptyAlarm);
    emptyAlarm.innerText = "You haven't set an alarm yet. Set one now!";
};