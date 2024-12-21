var timer = 60;
var score = 0;
var hitrn = 0;

function updateScore() {
    score += 10;
    document.getElementById("scoreVal").textContent = score;
}

function makeBubble() {
    var clutter = " ";

    for (var i = 1; i <= 207; i++) {
        const random = Math.floor(Math.random() * 10);
        clutter += `<div class="bubble">${random}</div>`;
    }

    document.querySelector("#pbtm").innerHTML = clutter;
}

function runTimer() {
    let timerInt = setInterval(() => {
        if (timer > 0) {
            timer--;
            document.getElementById("timerValue").textContent = timer;
        }
        else {
            clearInterval(timerInt);
            document.getElementById("pbtm").innerHTML = `<h1>Game Over</h1>`;
        }
    }, 1000);
}

function getNewHit() {
    hitrn = Math.floor(Math.random() * 10);
    document.getElementById("hitVal").textContent = hitrn;
}

document.querySelector("#pbtm").addEventListener("click",
    function (details) {
        var clickedNum = Number(details.target.textContent);
        if (clickedNum === hitrn) {
            updateScore();
            getNewHit();
            makeBubble();
        }
});

getNewHit();
runTimer();
makeBubble();


// event bubbling
//event is raised on the element clicked if listener is not found there it starts finding it in parent and if not found yhere as well then keeps finding in parents
