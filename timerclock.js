const countdownDate = new Date("September 22, 2023 00:00:00").getTime();

const countdownInterval = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeLeft = countdownDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("clock");
    countdownElement.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "00:00:00";
    }
}, 1000);