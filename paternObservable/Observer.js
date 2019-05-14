// Subject 
var User = /** @class */ (function () {
    function User() {
        this.observers = [];
    }
    Object.defineProperty(User.prototype, "name", {
        get: function () { return this._name; },
        set: function (name) {
            this._name = name;
            this.notify(); // notifier les observers
        },
        enumerable: true,
        configurable: true
    });
    User.prototype.attach = function (observer) {
        this.observers.push(observer);
    };
    User.prototype.detach = function (observer) {
        //this.observers.includes(observer);
    };
    User.prototype.notify = function () {
        var _this = this;
        // on parcourt la liste des observers pour notifier ce qui vient de se passer
        this.observers.forEach(function (observer, index) {
            observer.update(_this);
        });
    };
    return User;
}());
var ConsoleLog = /** @class */ (function () {
    function ConsoleLog() {
    }
    ConsoleLog.prototype.update = function (subject) {
        console.log(subject.name);
    };
    return ConsoleLog;
}());
var subjectUser = new User;
subjectUser.attach(new ConsoleLog);
subjectUser.name = 'Alan';
