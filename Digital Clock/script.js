setInterval(() => {
    const date = new Date()
    let seconds = document.getElementById("second")
    let hours = document.getElementById("hours")
    let minutes = document.getElementById("minute")


    let hour = date.getHours()
    let minute = date.getMinutes()
    let second = date.getSeconds()

    let hour12 = hour % 12 || 12;


    hour = String(hour12).padStart(2, '0')
    minute = String(minute).padStart(2, '0')
    second = String(second).padStart(2, '0')


    hours.textContent = hour
    minutes.textContent = minute
    seconds.textContent = second
}, 1000);


function date_time() {
    const time_date = document.getElementById("date")
    const today = new Date()
    const days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = [
        "January", "February", "March", "April", "May", "June",
        "July", "August", "September", "October", "November", "December"
    ];

    let day = days[today.getDay()]
    let year = today.getFullYear()
    let month = months[today.getMonth()]
    let date = today.getDate()

    time_date.textContent = `${day} , ${year} ${month} ${date} `
}
date_time()