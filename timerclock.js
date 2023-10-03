const countdownDate = new Date("October 30, 2023 00:30:00").getTime();


const countdownInterval = setInterval(function () {
    const currentDate = new Date().getTime();
    const timeLeft = countdownDate - currentDate;

    const days = Math.floor(timeLeft / (1000 * 60 * 60 * 24));
    const hours = Math.floor((timeLeft % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((timeLeft % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((timeLeft % (1000 * 60)) / 1000);

    const countdownElement = document.getElementById("clock");

    if(days<10){
        if(hours<10){
            if(minutes<10){
                if(seconds<10){
                    countdownElement.innerHTML = `0${days} : 0${hours} : 0${minutes} : 0${seconds}`;
                }else{
                    countdownElement.innerHTML = `0${days} : 0${hours} : 0${minutes} : ${seconds}`;
                }
            }else{
                if(seconds<10){
                    countdownElement.innerHTML = `0${days} : 0${hours} : ${minutes} : 0${seconds}`;
                }else{
                    countdownElement.innerHTML = `0${days} : 0${hours} : ${minutes} : ${seconds}`;
                }
            }
        }else{
            if(minutes<10){
                if(seconds<10){
                    countdownElement.innerHTML = `0${days} : ${hours} : 0${minutes} : 0${seconds}`;
                }else{
                    countdownElement.innerHTML = `0${days} : ${hours} : 0${minutes} : ${seconds}`;
                }
            }else{
                if(seconds<10){
                    countdownElement.innerHTML = `0${days} : ${hours} : ${minutes} : 0${seconds}`;
                }else{
                    countdownElement.innerHTML = `0${days} : ${hours} : ${minutes} : ${seconds}`;
                }
            }
        }
    }else{
        if(hours<10){
            if(minutes<10){
                if(seconds<10){
                    countdownElement.innerHTML = `${days} : 0${hours} : 0${minutes} : 0${seconds}`;
                }else{
                    countdownElement.innerHTML = `${days} : 0${hours} : 0${minutes} : ${seconds}`;
                }
            }else{
                if(seconds<10){
                    countdownElement.innerHTML = `${days} : 0${hours} : ${minutes} : 0${seconds}`;
                }else{
                    countdownElement.innerHTML = `${days} : 0${hours} : ${minutes} : ${seconds}`;
                }
            }
        }else{
            if(minutes<10){
                if(seconds<10){
                    countdownElement.innerHTML = `${days} : ${hours} : 0${minutes} : 0${seconds}`;
                }else{
                    countdownElement.innerHTML = `${days} : ${hours} : 0${minutes} : ${seconds}`;
                }
            }else{
                if(seconds<10){
                    countdownElement.innerHTML = `${days} : ${hours} : ${minutes} : 0${seconds}`;
                }else{
                    countdownElement.innerHTML = `${days} : ${hours} : ${minutes} : ${seconds}`;
                }
            }
        }
    }
    

    if (timeLeft < 0) {
        clearInterval(countdownInterval);
        countdownElement.innerHTML = "00 : 00 : 00 : 00";
    }
}, 1000);


const colon = document.getElementsByClassName("colon");
colon.style.color = "red";
