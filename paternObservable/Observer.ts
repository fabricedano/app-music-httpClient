interface IObserver {
    update(subject: ISubject): void;
}

interface ISubject {
    attach(observer: IObserver): void;
    detach(observer: IObserver): void;
    notify(): void;
}

// Subject 
class User implements ISubject {

    private _name: string;
    private observers: Array<IObserver> = [];

    set name(name: string) {
        this._name = name;

        this.notify(); // notifier les observers
    }

    get name(): string { return this._name; }

    attach(observer: IObserver) {
        this.observers.push(observer);
    }

    detach(observer: IObserver) {
        //this.observers.includes(observer);
    }

    notify() {
        // on parcourt la liste des observers pour notifier ce qui vient de se passer
        this.observers.forEach((observer, index) => {
            observer.update(this);
        });
    }
}

class ConsoleLog implements IObserver {
    update(subject: User) {
        console.log(subject.name)
    }
}

let subjectUser = new User;
subjectUser.attach(new ConsoleLog); // un observer
subjectUser.name = 'Alan';