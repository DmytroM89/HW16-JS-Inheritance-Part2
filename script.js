class Clock {
    constructor(clockNode) {
        this.fullFormat = true;
        this.clockNode = clockNode;

        clockNode.addEventListener('click', () => {
            this.fullFormat = !this.fullFormat;
        });
    }

    render() {
        let time = new Date().toTimeString().split(' ')[0];

        if (!this.fullFormat) {
            time = new Date().toTimeString().split(' ')[0].substring(0,5);
        }

        this.clockNode.innerHTML = time;
    }

    start() {
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }

    stop() {
        clearInterval(this.timer);
    }

    setFormat(format = 'full') {
        this.fullFormat = format === 'short' ? false : true;
    }
}

class ShortClock extends Clock {
    constructor(clockNode) {
        super(clockNode);
        this.fullFormat = false;
    }

    render() {
        let time = new Date().toTimeString().split(' ')[0];

        if (!this.fullFormat) {
            time = new Date().toTimeString().split(' ')[0].substring(0,5);
            this.clockNode.classList.add('short-clock');
        } else {
            this.clockNode.classList.remove('short-clock');
        }

        this.clockNode.innerHTML = time;
    }
}

class FullClock extends Clock {
    constructor(clockNode) {
        super(clockNode);
        this.fullFormat = true;
    }

    render() {
        let time = new Date().toTimeString().split(' ')[0];
        this.clockNode.classList.add('full-clock');

        if (!this.fullFormat) {
            time = new Date().toTimeString().split(' ')[0].substring(0,5);
            this.clockNode.classList.remove('full-clock');
        }

        this.clockNode.innerHTML = time;
    }
}

const clock = new Clock(document.querySelector('#clock'))
//clock.setFormat('short');
clock.start();

const shortClock = new ShortClock(document.querySelector('#shortClock'))
shortClock.start();

const fullClock = new FullClock(document.querySelector('#fullClock'));
fullClock.start();
