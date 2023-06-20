const hoursArrow = document.querySelector('.hours')
const minutesArrow = document.querySelector('.minutes')
const secondsArrow = document.querySelector('.seconds')

// analog 2
function clock() {

    setInterval(() => {
        const day = new Date()

        const seconds = day.getSeconds()
        const secondsDegrees = ((seconds / 60) * 360) + 90;
        secondsArrow.style.transform = `rotateZ(${secondsDegrees}deg)`;

        const minutes = day.getMinutes()
        const minutesDegrees = ((minutes / 60) * 360) + ((seconds / 60) * 6) + 90;
        minutesArrow.style.transform = `rotateZ(${minutesDegrees}deg)`;

        const hours = day.getHours()
        const hoursDegrees = ((hours / 12) * 360) + ((minutes / 60) * 30) + 90;
        hoursArrow.style.transform = `rotateZ(${hoursDegrees}deg)`;

    }, 1000)
};
clock();
