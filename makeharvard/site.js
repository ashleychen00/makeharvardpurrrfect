
function setAlarm() {
    const setAlarmTime = document.getElementById("set-alarm-time");
    const submitAlarmTime = document.getElementById("set-alarm-button");
    submitAlarmTime.addEventListener("click", function() {
        const setTime = setAlarmTime.value;
        newAlarmDOM(setTime);
    });
};

function newAlarmDOM(time) {
    const alarmContainer = document.getElementById("alarm-container");
    const newAlarmItem = document.createElement("li");
    alarmContainer.appendChild(newAlarmItem);
    newAlarmItem.innerText = time;
};

setAlarm();

const alarmContainer = document.getElementById("alarm-container");
console.log(alarmContainer.innerHTML !== "");
if(alarmContainer.innerHTML !== "") {
    const emptyAlarm = document.createElement("li");
    alarmContainer.appendChild(emptyAlarm);
    emptyAlarm.innerText = "You haven't set an alarm yet. Set one now!";
}