$(document).ready(function () {



    var delay = 1000;

    var label_mask = document.getElementById("#label_mask");
    var label = document.getElementById("#label");
    var value = parseInt(label.textContent);

    var progress = document.getElementById("#progress");

    var resumeBtn = document.getElementById("#resume");
    var pauseBtn = document.getElementById("#pause");
    var resetBtn = document.getElementById("#reset");

    var t = new timer(function () {
        label.textContent = ++value;
        label_mask.textContent = mask(label.textContent);
    }, delay);

    progress.style.animationDuration = delay + "ms";

    resumeBtn.addEventListener("click", function () {
        t.resume();

        pauseBtn.classList.remove("disabled");
        resumeBtn.classList.add("disabled");
        resetBtn.classList.add("disabled");

        progress.classList.add("animate");
        progress.classList.remove("pause");
    });

    pauseBtn.addEventListener("click", function () {
        t.pause();

        pauseBtn.classList.add("disabled");
        resumeBtn.classList.remove("disabled");
        resetBtn.classList.remove("disabled");

        progress.classList.add("pause");
    });

    resetBtn.addEventListener("click", function () {
        t.reset();

        pauseBtn.classList.add("disabled");
        resumeBtn.classList.remove("disabled");
        resetBtn.classList.add("disabled");

        // https://css-tricks.com/restart-css-animation/
        progress.classList.remove("animate");
        void progress.offsetWidth;
        progress.classList.add("animate");
    });

    function timer(callback, delay) {
        var timerId;
        var start;
        var remaining = delay;

        this.pause = function () {
            window.clearTimeout(timerId);
            remaining -= new Date() - start;
        };

        var resume = function () {
            start = new Date();
            timerId = window.setTimeout(function () {
                remaining = delay;
                resume();
                callback();
            }, remaining);
        };
        this.resume = resume;

        this.reset = function () {
            label.textContent = 0;
            remaining = delay;
            label_mask.textContent = mask(label.textContent);
        };

    };
    function mask(sec) {
        min = Math.trunc(sec / 60);
        segundos = sec - Math.trunc(min * 60);
        return completa(min) + ":" + completa(segundos);
    }
    function completa(val) {

        return (val < 10 ? "0" : "") + val;
    }
});