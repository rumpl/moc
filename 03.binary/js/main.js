var Clock = function (hours, minutes, seconds) {
    this.hoursRoot = hours;
    this.minutesRoot = minutes;
    this.secondsRoot = seconds;

    this.hours = [];
    this.minutes = [];
    this.seconds = [];    
};

Clock.prototype.init = function() {
    var i;
    var documentFragment = document.createDocumentFragment();

    for(i = 0; i < 5; i++) {
        var element = document.createElement('div');
        element.classList.add('hour');
        element.classList.add('block');
        documentFragment.appendChild(element);
        this.hours.push(element);
    }

    this.hoursRoot.appendChild(documentFragment);
    
    documentFragment = document.createDocumentFragment();   
    for(i = 0; i < 6; i++) {
        var element = document.createElement('div');
        element.classList.add('minute');
        element.classList.add('block');
        documentFragment.appendChild(element);
        this.minutes.push(element);
    }

    this.minutesRoot.appendChild(documentFragment);

    documentFragment = document.createDocumentFragment();
    for(i = 0; i < 6; i++) {
        var element = document.createElement('div');
        element.classList.add('second');
        element.classList.add('block');
        documentFragment.appendChild(element);
        this.seconds.push(element);
    }
    
    this.secondsRoot.appendChild(documentFragment);
};

Clock.prototype.start = function() {
    var self = this;
    (function iteration() {
        var date = new Date();
        var hour = date.getHours();
        var minute = date.getMinutes();
        var second = date.getSeconds();

        for(var i = 0; i < 5; i++) { 
            if((hour >> i) & 1 == 1) {
                self.hours[i].classList.remove('disabled');
            } else {
                self.hours[i].classList.add('disabled');
            }
        }

        for(var i = 0; i < 6; i++) { 
            if((minute >> i) & 1 == 1) {
                self.minutes[i].classList.remove('disabled');
            } else {
                self.minutes[i].classList.add('disabled');
            }
        }

        for(var i = 0; i < 6; i++) { 
            if((second >> i) & 1 == 1) {
                self.seconds[i].classList.remove('disabled');
            } else {
                self.seconds[i].classList.add('disabled');
            }
        }
        setTimeout(iteration, 100);
    }());
};
