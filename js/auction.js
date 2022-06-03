let bidEnd = new Date("Jun 6, 2022 12:00:00").getTime();

let timer = setInterval(tick, 1000)

function tick () {
    let now = new Date().getTime();
    let t = bidEnd - now;

    if (t>0) {
        let hours = Math.floor(t/(1000 * 60 * 60));
        if (hours < 10) { hours = "0" + hours; }

        let mins = Math.floor ((t % (1000 * 60 * 60)) / (1000 * 60));
        if (mins < 10) { mins = "0" + mins; }

        let secs = Math.floor ((t % (1000 * 60)) / (1000));
        if (secs < 10) { secs = "0" + secs; }

        let time = `${hours} : ${mins} : ${secs}`;
        
        document.querySelector('.countDown').innerText = time;
    }
}
