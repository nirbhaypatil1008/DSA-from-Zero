let reminders = [];

function addReminder() {
    const name = document.getElementById("medicineName").value;
    const time = document.getElementById("medicineTime").value;

    if (name === "" || time === "") {
        alert("Please enter both fields");
        return;
    }

    reminders.push({ name, time });
    displayReminders();

    document.getElementById("medicineName").value = "";
    document.getElementById("medicineTime").value = "";
}

function displayReminders() {
    const list = document.getElementById("reminderList");
    list.innerHTML = "";

    reminders.forEach(reminder => {
        const li = document.createElement("li");
        li.textContent = `${reminder.name} - ${reminder.time}`;
        list.appendChild(li);
    });
}

// Check every second
setInterval(() => {
    const now = new Date();
    const currentTime = now.toTimeString().slice(0,5);

    reminders.forEach(reminder => {
        if (reminder.time === currentTime) {
            document.getElementById("alarmSound").play();
            alert(`Time to take ${reminder.name}`);
        }
    });
}, 1000);