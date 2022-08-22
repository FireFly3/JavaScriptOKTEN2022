// - Створити функцію конструктор для об'єктів User з полями id, name, surname , email, phone
// створити пустий масив, наповнити його 10 об'єктами new User(....)

function User(id, name, surname, email, phone) {
    this.id = id;
    this.name = name;
    this.surname = surname;
    this.email = email;
    this.phone = phone;
}

let userArr = [];

userArr.push(new User(1, 'Pipa', 'Pupa', 'pi@pu.com', '1234567890'));
userArr.push(new User(2, 'Popa', 'Pupa', 'po@pu.com', '1234567890'));
userArr.push(new User(3, 'Pepa', 'Pupa', 'pe@pu.com', '1234567890'));
userArr.push(new User(4, 'Pupa', 'Pupa', 'pu@pu.com', '1234567890'));
userArr.push(new User(5, 'Pypa', 'Pupa', 'py@pu.com', '1234567890'));
userArr.push(new User(6, 'Papa', 'Pupa', 'pa@pu.com', '1234567890'));
userArr.push(new User(7, 'Poopa', 'Pupa', 'poo@pu.com', '1234567890'));
userArr.push(new User(8, 'Paopa', 'Pupa', 'pao@pu.com', '1234567890'));
userArr.push(new User(9, 'Poapa', 'Pupa', 'poa@pu.com', '1234567890'));
userArr.push(new User(10, 'Pyipa', 'Pupa', 'pyi@pu.com', '1234567890'));

console.log(userArr);

// Взяти масив з  User[] з попереднього завдання, та відфільтрувати , залишивши тільки об'єкти з парними id (filter)

console.log(userArr.filter(value =>
    value.id % 2 === 0
))

// Взяти масив з  User[] з попереднього завдання, та відсортувати його по id. по зростанню (sort) (відсортував за спазанням)

console.log(userArr.sort((b, a) => a.id - b.id));

// - створити класс для об'єктів Client з полями id, name, surname , email, phone, order (поле є масивом зі списком товарів)
// створити пустий масив, наповнити його 10 об'єктами Client

class Client {
    constructor(id, name, surname, email, phone, order) {
        this.id = id;
        this.name = name;
        this.surname = surname;
        this.email = email;
        this.phone = phone;
        this.order = order;
    }
}

let clientArr = [];

clientArr.push(new Client(1, 'Vasa', 'Pup', 'a@a.com', '1234567890', ['coffee', 'tea']))
clientArr.push(new Client(2, 'Kolya', 'Bup', 'a@a.com', '1234567890', ['fanta', 'soup', 'pasta']))
clientArr.push(new Client(3, 'Misha', 'Mup', 'a@a.com', '1234567890', ['juice', 'voter', 'soup']))
clientArr.push(new Client(4, 'Denis', 'Dup', 'a@a.com', '1234567890', ['coffee', 'voter']))
clientArr.push(new Client(5, 'Sam', 'Fup', 'a@a.com', '1234567890', ['pasta', 'tea', 'coffee', 'fanta']))
clientArr.push(new Client(6, 'Sofi', 'Tup', 'a@a.com', '1234567890', ['soup', 'tea', 'bread', 'fish', 'smuzi', 'cola']))
clientArr.push(new Client(7, 'Diana', 'Kup', 'a@a.com', '1234567890', ['voter', 'tea', 'voska', 'pasta']))
clientArr.push(new Client(8, 'Dima', 'Sup', 'a@a.com', '1234567890', ['fanta', 'juice', 'chips']))
clientArr.push(new Client(9, 'Loki', 'Vup', 'a@a.com', '1234567890', ['coffee', 'juice']))
clientArr.push(new Client(10, 'Anna', 'Cup', 'a@a.com', '1234567890', ['voter', 'soup']))

console.log(clientArr);

// - Взяти масив (Client [] з попереднього завдання).Відсортувати його по кількості товарів в полі order по зростанню. (sort)

console.log(clientArr.sort((a, b) => a.order.length - b.order.length));

// - Створити функцію конструктор яка дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску,
// максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

function Car(model, made, year, maxSpeed, volume) {
    this.model = model;
    this.made = made;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.drive = function () {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`)
    }
}

let car1 = new Car('Tesla', 'USA', '2022', '320', '0')
car1.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

function CarInfo(model, made, year, maxSpeed, volume) {
    this.model = model;
    this.made = made;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.info = function () {
        console.log(`модель - ${this.model}`)
        console.log(`виробник - ${this.made}`)
        console.log(`рік випуску - ${this.year}`)
        console.log(`максимальна швидкість - ${this.maxSpeed}`)
        console.log(`об'єм двигуна - ${this.volume}`)
    }
}

let car2 = new CarInfo('Tesla', 'USA', '2022', '320', '0')
car2.info();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

function CarNewSpeed(model, made, year, maxSpeed, volume) {
    this.model = model;
    this.made = made;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.increaseMaxSpeed = function (newSpeed) {
        console.log(this.maxSpeed = +newSpeed + +maxSpeed);
    }
}

let car3 = new CarNewSpeed('Tesla', 'USA', '2022', '320', '0')
car3.increaseMaxSpeed(50);
;

// -- changeYear (newValue) - змінює рік випуску на значення newValue

function CarNewYear(model, made, year, maxSpeed, volume) {
    this.model = model;
    this.made = made;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.changeYear = function (newValue) {
        console.log(this.year = newValue);

    }
}

let car4 = new CarNewYear('Tesla', 'USA', '2022', '320', '0')
car4.changeYear(2010)

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

function CarNewDriver(model, made, year, maxSpeed, volume) {
    this.model = model;
    this.made = made;
    this.year = year;
    this.maxSpeed = maxSpeed;
    this.volume = volume;
    this.addDriver = function (name, skillLevel) {
        let driver = {};
        driver.name = name;
        driver.skilLevel = skillLevel;
        this.driver = driver;
    }
}

let car5 = new CarNewDriver('Tesla', 'USA', '2022', '320', '0');
car5.addDriver('Vasia', 'Top')
console.log(car5);


// - (Те саме, тільки через клас)
// Створити клас який дозволяє створювати об'єкти car, з властивостями модель, виробник, рік випуску, максимальна швидкість, об'єм двигуна. додати в об'єкт функції:
// -- drive () - яка виводить в консоль `їдемо зі швидкістю ${максимальна швидкість} на годину`

class Car1 {
    constructor(model, made, year, maxSpeed, volume) {
        this.model = model;
        this.made = made;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    drive() {
        console.log(`їдемо зі швидкістю ${this.maxSpeed}км на годину`);
    }

    info1() {
        console.log(`модель - ${this.model}`);
        console.log(`виробник - ${this.made}`);
        console.log(`рік випуску - ${this.year}`);
        console.log(`максимальна швидкість - ${this.maxSpeed}`);
        console.log(`об'єм двигуна - ${this.volume}`);
    }
}

let car6 = new Car('Tesla', 'USA', '2022', '320', '0');
car6.drive();

// -- info () - яка виводить всю інформацію про автомобіль в форматі `назва поля - значення поля`

class Car2 {
    constructor(model, made, year, maxSpeed, volume) {
        this.model = model;
        this.made = made;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    info1() {
        console.log(`модель - ${this.model}`);
        console.log(`виробник - ${this.made}`);
        console.log(`рік випуску - ${this.year}`);
        console.log(`максимальна швидкість - ${this.maxSpeed}`);
        console.log(`об'єм двигуна - ${this.volume}`);
    }
}

let car7 = new Car2('Tesla', 'USA', '2022', '320', '0');
car7.info1();

// -- increaseMaxSpeed (newSpeed) - яка підвищує значення максимальної швидкості на значення newSpeed

class Car3 {
    constructor(model, made, year, maxSpeed, volume) {
        this.model = model;
        this.made = made;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    increaseMaxSpeed1(newSpeed) {
        console.log(this.maxSpeed = +newSpeed + +this.maxSpeed);
    }
}

let car8 = new Car3('Tesla', 'USA', '2022', '320', '0');
car8.increaseMaxSpeed1(20);

// -- changeYear (newValue) - змінює рік випуску на значення newValue

class Car4 {
    constructor(model, made, year, maxSpeed, volume) {
        this.model = model;
        this.made = made;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    changeYear1(newValue) {
        console.log(this.year = newValue);
    }
}

let car9 = new Car4('Tesla', 'USA', '2022', '320', '0');
car9.changeYear1(2030);

// -- addDriver (driver) - приймає об'єкт який "водій" з довільним набором полів, і додає його в поточний об'єкт car

class Car5 {
    constructor(model, made, year, maxSpeed, volume) {
        this.model = model;
        this.made = made;
        this.year = year;
        this.maxSpeed = maxSpeed;
        this.volume = volume;
    }

    addDriver1(name, skillLevel) {
        let driver = {};
        driver.name = name;
        driver.skilLevel = skillLevel;
        this.driver = driver;
    }
}

let car10 = new Car5('Tesla', 'USA', '2022', '320', '0');
car10.addDriver1('Bob', 'Super');
console.log(car10);


// -створити класс/функцію конструктор попелюшка з полями ім'я, вік, розмір ноги. Створити масив з 10 попелюшок.

function Poppi(name, age, footSize) {
    this.name = name;
    this.age = age;
    this.footSize = footSize;
}

let poppi1 = new Poppi('Anna', 21, 36);
let poppi2 = new Poppi('Olia', 22, 37);
let poppi3 = new Poppi('Sam', 23, 38);
let poppi4 = new Poppi('Jana', 24, 39);
let poppi5 = new Poppi('Anna', 25, 40);
let poppi6 = new Poppi('Anna', 26, 41);
let poppi7 = new Poppi('Anna', 27, 42);
let poppi8 = new Poppi('Anna', 28, 43);
let poppi9 = new Poppi('Anna', 29, 44);
let poppi10 = new Poppi('Anna', 30, 45);

let arrPoppi = [];
arrPoppi.push(poppi1, poppi2, poppi3, poppi4, poppi5, poppi6, poppi7, poppi8, poppi9, poppi10);
console.log(arrPoppi);


// Сторити об'єкт класу "принц" за допомоги класу який має поля ім'я, вік, туфелька яку він знайшов.

function Prince(name, age, size) {
    this.name = name;
    this.age = age;
    this.size = size;
}

let prince = new Prince('Max', 25, 39);

//     За допомоги циклу знайти яка попелюшка повинна бути з принцом.

for (const poppi of arrPoppi) {
    if (poppi.footSize === prince.size) {
        console.log(poppi);
    }
}

//     Додатково, знайти необхідну попелюшку за допомоги функції масиву find та відповідного колбеку

console.log(arrPoppi.find(size => size.footSize === prince.size));