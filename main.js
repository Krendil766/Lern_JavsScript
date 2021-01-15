"use strict";

/* let user = {
    name: "Aleh",
    age: 30
}
let fruit = prompt('What fruit do you like?');

let bag = {
    [fruit]: 5
}

console.log(bag); */

/* function makeUser(name, age) {
    return {
        java: true,
        name,
        age,
        1: 25,
        "2": "HH"
    }
}
let age = "age";
let user = makeUser('Aleh', 27);

for (let key in user) {
    console.log(user[key]);
}
console.log(user); */
/* let obj = {
    1: 123,
    2: 'sdfsd'
};

function isEmpty(obj) {
    for (let prop in obj) {
        return false
    }
    return true
}
isEmpty(obj);
console.log('isEmpty(obj);: ', isEmpty(obj)); */
/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let prop in salaries) {
    sum += salaries[prop]
}
console.log(sum); */
/* let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumber(obj) {
    for (let prop in obj) {
        if (obj[prop] == Number(obj[prop])) {
            obj[prop] *= 2
        }
    }
    console.log(obj);
}
multiplyNumber(menu); */

/* let user = {
    name: "aleh",
    age: 27,
}
let us = {
    name: "Иван",
    age: 30
};
let newUser = Object.assign({}, [user, us]);
console.log(newUser); */

/* let user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};


function cloneObj(obj) {
    let newUser = {};
    for (let prop in obj) {
        if (typeof obj[prop] == "object") {
            newUser[prop] = cloneObj(obj[prop])
        } else {
            newUser[prop] = obj[prop]
        }
    }
    return newUser;
}

cloneObj(user)
console.log('cloneObj(user): ', cloneObj(user));
user.name = "aleh";
console.log(user);

console.log('cloneObj(user): ', cloneObj(user)); */
/* function cloneObject(obj) {
    let clone = {};

    for (let key in obj) {
        let isObj = typeof obj[key];

        if (isObj == 'object') {
            clone[key] = cloneObject(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }

    return clone;
}
cloneObject(user);
console.log('cloneObject(user): ', cloneObject(user)); */

/* function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

console.log(family.father); */

/* let user = {
    name: 'Aleh',
    age: 27,
    sayhi() {
        console.log(this.name);
    },
    1: 234
}
user.sayhi()
let newUser = user;
user = null;
newUser.sayhi(); */

/* let user = {
    name: "Джон",
    hi() { alert(this.name); },
    bye() { alert("Пока"); }
};


console.log(user.hi()); */

/* let method;
let obj = {
    name: "aleh",
    go() {
        console.log(this.name);
    }
};

(method = obj.go)() */

/* function makeUser() {
    return {
        name: "Джон",
        ref() { return this },
    };
};

let user = makeUser();

console.log(user.ref().name); */


/* let calculator = {
    read() {
        this.a = +prompt('Enter number'),
            this.b = +prompt('Enter number')
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
}
console.log(calculator);
console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul()); */

/* let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() {
        console.log(this.step);
        return this
    }
};


ladder.up().up().up().down().showStep() */

/* let calculator = {

    read() {

        let count = 1;

        while (true) {
            let num = +prompt('enter number', 0);
            if (!num) break;
            this[`num${count}`] = num;
            count++;
        }
    },

    sum() {

        let sum = 0;

        for (let key in this) {
            if (typeof(this[key]) !== 'number') continue;
            sum += this[key];
        }
        return sum;
    },

    mul() {

        let mul = 1;

        for (let key in this) {
            if (typeof(this[key]) !== 'number') continue;
            mul *= this[key];
        }
        return mul;
    },
};

calculator.read();
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul()); */

/* function User(name) {
    this.name = name,
        this.isAdmin = false;
    if (!new.target) {
        return new User(name)
    }
}

let user = User('Aleh');


console.log(user); */


/* function User(name) {
    this.name = name;
    this.sayHi = function() {
        console.log('My name' + " " + this.name);
    }
}
let user = new User('Aleh');
console.log(user.sayHi()); */


/* function Calculator() {
    this.read = function() {
        this.a = +prompt('Enter number_1')
        this.b = +prompt('Enter number_2')
    };
    this.sum = function() {
        return this.a + this.b
    };
    this.mul = function() {
        return this.a * this.b
    }
    if (!new.target) {
        return new Calculator()
    }
}

let calculator = new Calculator();

calculator.read();
console.log(calculator);
console.log(calculator.sum()); */
/*
function Accumulator(startingValue) {
    this.value = +startingValue;
    this.read = function() {
        return this.value += +prompt('Enter number')
    }
    if (!new.target) {
        return Accumulator(startingValue)
    }
}

let accumulator = new Accumulator(4);
accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator.value); */

/* function solution(str) {
    let arr = [];
    for (let i = 0; i < str.length;) {
        if (str.length % 2 != 0) {
            str += "_";
        }
        arr.push(str.substr(i, 2))
        i += 2;
    }
    return arr;
}
solution(''); */

/* function sum(numbers) {
    "use strict";
    return numbers.reduce((sum, item) => sum + item, 0);
};
sum([1, 5.2, 4, 0, -1]) */

/* function sumIntervals(intervals) {
    console.log(intervals);
}
sumIntervals([
    [1, 5],
    [6, 10]
]) */

/* let users = [
    { id: 1, name: "Вася " },
    { id: 2, name: "Петя " },
    { id: 3, name: "Маша " },
    { id: 2, name: "Aleh " }
];

let someUser = users.filter(item => item.id == 2);
console.log(someUser); */

/* let arr = ['Aleh', "Tatsina", "Minsk", "House"];

let newArr = arr.map((item, index, arr) => item[(item.length - 1)])

console.log(newArr); */
/* let arr = [1, 4, 7, 435, 23, 35, 123, 543];

console.log(arr.sort((a, b) => b - a)); */

/* let army = {
    minAge: 18,
    maxAge: 27,
    canJoin(users) {
        return users.age >= this.minAge && users.age < this.maxAge
    }
}

let users = [
    { age: 16 },
    { age: 20 },
    { age: 23 },
    { age: 30 },
]

//let soldiers = users.filter(army.canJoin, army);
let soldiers = users.filter(item => army.canJoin(item));

console.log(soldiers); */
/* const array = [1, 2, 3, 4, 5];
//let result = array.every(item => item % 2 === 0);
//console.log(result);
console.log(array.fill(7)); */

/* function camelize(str) {
    return str.split('-').map(item => item[0].toUpperCase() + item.slice(1)).join('')
}

console.log(camelize("background-color")); */
/* let arr = [5, 3, 8, 1];

function filterRange(arr1, a, b) {
    return arr = arr1.filter((item) => {
        return a <= item && item <= b
    })
}

console.log(filterRange(arr, 1, 4));

console.log(arr); */

/* let arr = [5, 2, 1, -10, 8]

let arrSort = arr.sort((a, b) => b - a);
console.log(arrSort); */

/* let arr = ["HTML", "JavaScript", "CSS"];
let sorted = copySorted(arr)

function copySorted(arr) {
    return arr.concat().sort();

}

console.log(sorted);
console.log(arr); */

/* function Calculator(str) {
    this.methods = {
        "-": (a, b) => a - b,
        "+": (a, b) => a + b,
    }
    this.calculate = function(str) {
        let split = str.split(' '),
            a = +split[0],
            op = split[1],
            b = +split[2]
        if (!this.methods[op] || isNaN(a) || isNaN(b)) return NaN;
        return this.methods[op](a, b)
    }
    this.addMethods = function(name, func) {
        this.methods[name] = func;
    }
}

let calc = new Calculator;

calc.addMethods("*", (a, b) => a * b);
calc.addMethods("/", (a, b) => a / b);
calc.addMethods("**", (a, b) => a ** b);
console.log(calc.calculate("3 ** 7")); */

/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 28 };

let users = [vasya, petya, masha];

let names = users.map(item => item.name);

console.log(names); */
/*
let vasya = { name: "Вася", surname: "Пупкин", id: 1 };
let petya = { name: "Петя", surname: "Иванов", id: 2 };
let masha = { name: "Маша", surname: "Петрова", id: 3 };

let users = [vasya, petya, masha];

let userMapped = users.map(item => ({
    fullName: `${item.name} ${item.surname}`,
    id: item.id
}))

console.log(userMapped); */
/* let petya1 = { name: "Петя", age: 38 };
let petya = { name: "Петя", age: 30 };
let vasya = { name: "Вася", age: 25 };
let masha = { name: "Маша", age: 28 };
let masha1 = { name: "Маша", age: 17 };
let masha11 = { name: "Маша", age: 26 };


let arr = [petya1, petya, vasya, masha, masha1, masha11];

function sortByAge(arr) {
    for (let i = 0; i < arr.length; i++) {

        for (let j = i + 1; j < arr.length; j++) {
            if (arr[i] == arr.length) break;
            if (arr[i].age > arr[j].age) {
                arr.push(arr[i])
                arr.splice(i, 1)
            }
        }
    }

    arr.sort((a, b) => a.age - b.age)
}

console.log(arr);

sortByAge(arr) */
/* let arr = [1, 2, 3];

function shuffle(arr) {
    return arr.sort(function() {
        return Math.random() - 0.5
    })
}
console.log(shuffle(arr)); */
/* let vasya = { name: "Вася", age: 25 };
let petya = { name: "Петя", age: 30 };
let masha = { name: "Маша", age: 29 };

let arr = [vasya, petya, masha];

function getAverageAge(arr) {
    return (arr.reduce((aver, item) => {
        return aver += item.age
    }, 0)) / arr.length
}

console.log(getAverageAge(arr)); */

/* function unique(arr) {
    return arr.filter(function(item, pos) {
        return arr.indexOf(item) == pos;
    })
}

let strings = ["кришна", "кришна", "харе", "харе",
    "харе", "харе", "кришна", "кришна", ":-O"
];

console.log(unique(strings)); */
/* function validSpacing(s) {
    let arr = s.split(" ");
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] === " " || arr[i] === '') {
            return false;
        }
    }
    return true
}
console.log(validSpacing('')); */

/* function snail(arr) {
    console.log(arr);
}
let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
snail(arr) */
/* let arr = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
 */

/* function rotate(arr) {
    copy = [];

    rows = arr.length;
    for (i = 0; i < rows; i++) {
        cols = arr[i].length;
        for (j = 0; j < cols; j++) {
            if (copy[cols - 1 - j] === undefined) copy[cols - 1 - j] = [];
            copy[cols - 1 - j][i] = arr[i][j];
        }
    }

    return copy;
}

res = [];
do {
    res = res.concat(arr.shift());
    arr = rotate(arr);
} while (arr.length);

console.log(res);
 */


/* function g(n, u) { b.push(a[n][u]), a[n][u] = null, !a[n][u + 1] || 0 != n && a[n - 1][u] || g(n, ++u), a[n + 1] && a[n + 1][u] && g(++n, u), a[n][u - 1] && g(n, --u), 0 < n && a[n - 1][u] && g(--n, u) }


console.log(g(arr)); */
/* function tidyNumber(n) {
    let arr = n.toString().split('');
    for (let i = 0; i < arr.length; i++) {
        if (i == arr.length - 1) {
            break;
        }
        if (arr[i] > arr[i + 1]) {
            return false
        }
    }
    return true

}

console.log('tidyNumber(5782): ', tidyNumber(1203)); */

/* function multiTable(number) {
    return (`1 * ${number} = ${1*number}
    \n2 * ${number} = ${2*number}
    \n3 * ${number} = ${3*number}
    \n4 * ${number} = ${4*number}
    \n5 * ${number} = ${5*number}
    \n6 * ${number} = ${6*number}
    \n7 * ${number} = ${7*number}
    \n8 * ${number} = ${8*number}
    \n9 * ${number} = ${9*number}
    \n10 * ${number} = ${10*number}`)
}
console.log(multiTable(2)); */

/* function isPrime(n) {
    nextPrime: for (let i = 2; i <= n; i++) { // Для всех i...

        for (let j = 2; j < i; j++) { // проверить, делится ли число..
            if (i % j == 0) continue nextPrime; // не подходит, берём следующее
        }

        console.log(i); // простое число
    }
}
console.log(isPrime(15)); */
/* let user = {
    name: "Aleh",
    age: 30
}
let fruit = prompt('What fruit do you like?');

let bag = {
    [fruit]: 5
}

console.log(bag); */

/* function makeUser(name, age) {
    return {
        java: true,
        name,
        age,
        1: 25,
        "2": "HH"
    }
}
let age = "age";
let user = makeUser('Aleh', 27);

for (let key in user) {
    console.log(user[key]);
}
console.log(user); */
/* let obj = {
    1: 123,
    2: 'sdfsd'
};

function isEmpty(obj) {
    for (let prop in obj) {
        return false
    }
    return true
}
isEmpty(obj);
console.log('isEmpty(obj);: ', isEmpty(obj)); */
/* let salaries = {
    John: 100,
    Ann: 160,
    Pete: 130
}
let sum = 0;
for (let prop in salaries) {
    sum += salaries[prop]
}
console.log(sum); */
/* let menu = {
    width: 200,
    height: 300,
    title: "My menu"
};

function multiplyNumber(obj) {
    for (let prop in obj) {
        if (obj[prop] == Number(obj[prop])) {
            obj[prop] *= 2
        }
    }
    console.log(obj);
}
multiplyNumber(menu); */

/* let user = {
    name: "aleh",
    age: 27,
}
let us = {
    name: "Иван",
    age: 30
};
let newUser = Object.assign({}, [user, us]);
console.log(newUser); */

/* let user = {
    name: "Иван",
    sizes: {
        height: 182,
        width: 50
    }
};


function cloneObj(obj) {
    let newUser = {};
    for (let prop in obj) {
        if (typeof obj[prop] == "object") {
            newUser[prop] = cloneObj(obj[prop])
        } else {
            newUser[prop] = obj[prop]
        }
    }
    return newUser;
}

cloneObj(user)
console.log('cloneObj(user): ', cloneObj(user));
user.name = "aleh";
console.log(user);

console.log('cloneObj(user): ', cloneObj(user)); */
/* function cloneObject(obj) {
    let clone = {};

    for (let key in obj) {
        let isObj = typeof obj[key];

        if (isObj == 'object') {
            clone[key] = cloneObject(obj[key]);
        } else {
            clone[key] = obj[key];
        }
    }

    return clone;
}
cloneObject(user);
console.log('cloneObject(user): ', cloneObject(user)); */

/* function marry(man, woman) {
    woman.husband = man;
    man.wife = woman;

    return {
        father: man,
        mother: woman
    }
}

let family = marry({
    name: "John"
}, {
    name: "Ann"
});

console.log(family.father); */

/* let user = {
    name: 'Aleh',
    age: 27,
    sayhi() {
        console.log(this.name);
    },
    1: 234
}
user.sayhi()
let newUser = user;
user = null;
newUser.sayhi(); */

/* let user = {
    name: "Джон",
    hi() { alert(this.name); },
    bye() { alert("Пока"); }
};


console.log(user.hi()); */

/* let method;
let obj = {
    name: "aleh",
    go() {
        console.log(this.name);
    }
};

(method = obj.go)() */

/* function makeUser() {
    return {
        name: "Джон",
        ref() { return this },
    };
};

let user = makeUser();

console.log(user.ref().name); */


/* let calculator = {
    read() {
        this.a = +prompt('Enter number'),
            this.b = +prompt('Enter number')
    },
    sum() {
        return this.a + this.b
    },
    mul() {
        return this.a * this.b
    },
}
console.log(calculator);
console.log(calculator.read());
console.log(calculator.sum());
console.log(calculator.mul()); */

/* let ladder = {
    step: 0,
    up() {
        this.step++;
        return this
    },
    down() {
        this.step--;
        return this
    },
    showStep() {
        console.log(this.step);
        return this
    }
};


ladder.up().up().up().down().showStep() */

/* let calculator = {

    read() {

        let count = 1;

        while (true) {
            let num = +prompt('enter number', 0);
            if (!num) break;
            this[`num${count}`] = num;
            count++;
        }
    },

    sum() {

        let sum = 0;

        for (let key in this) {
            if (typeof(this[key]) !== 'number') continue;
            sum += this[key];
        }
        return sum;
    },

    mul() {

        let mul = 1;

        for (let key in this) {
            if (typeof(this[key]) !== 'number') continue;
            mul *= this[key];
        }
        return mul;
    },
};

calculator.read();
console.log(calculator);
console.log(calculator.sum());
console.log(calculator.mul()); */

/* function User(name) {
    this.name = name,
        this.isAdmin = false;
    if (!new.target) {
        return new User(name)
    }
}

let user = User('Aleh');


console.log(user); */


/* function User(name) {
    this.name = name;
    this.sayHi = function() {
        console.log('My name' + " " + this.name);
    }
}
let user = new User('Aleh');
console.log(user.sayHi()); */


/* function Calculator() {
    this.read = function() {
        this.a = +prompt('Enter number_1')
        this.b = +prompt('Enter number_2')
    };
    this.sum = function() {
        return this.a + this.b
    };
    this.mul = function() {
        return this.a * this.b
    }
    if (!new.target) {
        return new Calculator()
    }
}

let calculator = new Calculator();

calculator.read();
console.log(calculator);
console.log(calculator.sum()); */

/* function Accumulator(startingValue) {
    this.value = +startingValue;
    this.read = function() {
        return this.value += +prompt('Enter number')
    }
    if (!new.target) {
        return Accumulator(startingValue)
    }
}

let accumulator = new Accumulator(4);
accumulator.read();
accumulator.read();
accumulator.read();
console.log(accumulator.value); */

/* let arr = new Array();
console.log(arr); */

/* let fruits = ['Apple', 'Orange', 'Pear', 'Limon', ' Grapes', 'Mandarin', ]
for (let prop of fruits) {
    console.log(fruits[prop]);
} */
/*
let fruits = [];
fruits[123] = "Apple";
console.log(fruits[1]); */

/* let fruits = ['Apple', 'Orange', 'Pear', 'Limon', ' Grapes', 'Mandarin', ];
console.log(fruits.length);
fruits.length = 3;
console.log(fruits);
fruits.length = 6;
console.log(fruits);
fruits.length = 0;
console.log(fruits); */

/* let arr = new Array(7);
console.log(arr);
let newArr = [];
console.log(newArr); */

/* let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9]
];
console.log(matrix[2][2]); */
/* let fruits = ['Apple', 'Orange', 'Pear', 'Limon', ' Grapes', 'Mandarin', ];
let str = fruits.toString();
console.log(str) */

/* let styles = ['Dshaz', "Bluiz", ];
styles.push('Rok-and-Roll');
styles.splice(Math.floor(styles.length / 2), 1, 'Classic');
console.log(styles);

console.log('styles.shift(0): ', styles.shift());
styles.unshift('rep', 'reggi')
console.log(styles); */

/* let arr = ['a', 'b'];
arr.push(function() {
    console.log(this);
});
console.log(arr[2]()); */

/* function sumInput() {
    let arr = new Array();

    while (true) {
        let value = prompt('Enter value');
        if (value === "" || value === null || !isFinite(value)) break;
        arr.push(+value);
    }
    let summa = arr.reduce((sum, item) => {
        return sum += item;
    }, 0)
    return summa;
}

console.log('sumInput(): ', sumInput()); */

/* function getMaxSubSum(arr) {
    let sum = arr.reduce((sum, items) => {
        return sum += items
    }, 0);

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < sum) {
            for (let j = i; j < arr.length; j++) {
                console.log(arr[i] + arr[j]);
            }

        }
    }
}

let arr = [1, 4, 5, -1]; //9

getMaxSubSum(arr); */
/* function getMaxSubSum(arr) {
    let maxSum = 0;

    for (let i = 0; i < arr.length; i++) {
        console.log(`i : ${i}`);
        let sumFixedStart = 0;
        for (let j = i; j < arr.length; j++) {
            console.log(`j: ${j}`);

            sumFixedStart += arr[j];
            console.log(`sumFixedStart: ${sumFixedStart}`);

            maxSum = Math.max(maxSum, sumFixedStart);
            console.log(`maxSum: ${maxSum}`);
        }
    }

    return maxSum;
}
let arr = [1, 4, 5, -1]
getMaxSubSum(arr) */


/* function getMaxSubSum(arr) {
    let maxSum = 0;
    let partialSum = 0;

    for (let prop of arr) {
        console.log('prop: ', prop);
        partialSum += prop;
        console.log('partialSum: ', partialSum);

        maxSum = Math.max(maxSum, partialSum);
        console.log(`maxSum: ${maxSum}`);
        if (partialSum < 0) partialSum = 0;
    }
    return maxSum;
}

getMaxSubSum([-1, 2, 3, -9]) */

/* function solution(number) {
    let sum = 0;
    for (let i = 0; i < number; i++) {
        if (i % 3 == 0 || i % 5 == 0) {
            sum += i;
        }
    }
    return sum
}
console.log(solution(10)); */
/* function nextBigger(n) {
    let arr = n.toString().split('');
    let arrLeng = arr.length;
    console.log(arr[arrLeng - 3]);


}

nextBigger(513); */

/* function isIsogram(str) {
    return str.toLowerCase().split('').filter((item, pos, arr) => arr.indexOf(item) == pos).length == str.length;
}
console.log('isIsogram("isoGram"): ', isIsogram('isoGram')); */

/* function zekendorf(n) {
    let a = 1;
    let b = 1;
    let fib = "0,1";
    for (let i = 3; i < n; i++) {
        let c = a + b;
        a = b;
        b = c;
        fib += `,${a}`;
    }
    let arr = fib.split(',');
    let sum = arr.filter(item => {
        +item + +item
    })
    console.log(sum);
}
zekendorf(10) */
/* function zekendorf(n) {
    return n <= 1 ? n : zekendorf(n - 1) + zekendorf(n - 2)
}
console.log('zekendorf(10): ', zekendorf(10)); */
/*     function zeckendorf(n) {
        if(n < 0) {
            return null;
        }
        let fib = generateFibonacci(n);
        let zeck = [];
        for(let i = 0; i < fib.length && n != 0; i++){
            if(n - fib[i] >= 0){
                zeck.push(fib[i]);
                n -= fib[i];
            }
        }
        return zeck;
    }

    function generateFibonacci(n){
        let fib = [1, 1];
        while(1){
            fib.push(fib[fib.length - 1] + fib[fib.length - 2]);
            if(fib[fib.length - 1] > n){
                fib.pop();
                break;
            }
        }
        return fib.reverse();
    } */

/* let range = {
    from: 1,
    to: 5

}

range[Symbol.iterator] = function() {
    return {
        current: this.from,
        last: this.to,
        next() {
            if (this.current <= this.last) {
                return { done: false, value: this.current++ }
            } else {
                return { done: true }
            }
        }
    }
}
for (let num of range) {
    console.log(num);
}
let str = "Hello World";

let iterator = str[Symbol.iterator]();
while (true) {
    let result = iterator.next();
    if (result.done) break;
    console.log(result.value);
}
let arrayLike = {
    0: "Hello",
    1: "World",
    length: 2
};

let arr = Array.from(arrayLike);
console.log(arr);

let obj = Array.from(range);
console.log(obj); */

/* let map = new Map();
map.set('1', 'str1');
map.set(1, 'num1');
map.set(true, 'bool1')
console.log(map.size); */

/* let aleh = { name: 'Aleh' };
let visitCountMap = new Map();
visitCountMap.set(aleh, 777);


console.log(visitCountMap.has(aleh)); */


//new Map and Set

/* let recipeMap = new Map([
    ["cucumber", 500],
    ['pomidore', 350],
    ['onion', 50]

]);
for (let vegateble of recipeMap.entries()) {
    console.log(vegateble);
} */

/* let map1 = new Map([
    ['1', 'str1'],
    [1, 'num1'],
    [true, 'bool1']
]);
console.log(Object.fromEntries(map1));
//console.log(map1.get("1"));
//console.log(map1.entries());


let obj1 = {
    name: "Aleh",
    age: 27
}
let mapNew = new Map(Object.entries(obj1));
//console.log(mapNew);


let obj = {
    name: "John",
    age: 30
};

let map = new Map(Object.entries(obj));
console.log(map); */

/* let map = new Map();
map.set('banana', 1);
map.set('orange', 2);
map.set('meat', 4);

console.log(map);
let obj = Object.fromEntries(map.entries());
console.log(obj); */
/* let set = new Set();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

set.add(john)
set.add(john)
set.add(john)
set.add(john)
set.add(pete)
set.add(pete)
set.add(mary)
set.add(mary)

for (let i of set.values()) {
    console.log(i);
} */

/* function unique(arr) {
    return Array.from(new Set(arr))
}
let values = ["Hare", "Krishna", "Hare", "Krishna",
    "Krishna", "Krishna", "Hare", "Hare", ":-O"
];

console.log(unique(values)); */

/* function aclean(arr) {
    return new Set(arr.map(item => item.toLowerCase().split('').sort().join('')));

}
let arr = ["nap", "teachers", "cheaters", "PAN", "ear", "era", "hectares"];


console.log('aclean(arr): ', aclean(arr)); */

/* let map = new Map();
map.set("name", "Aleh");
 */
/* let keys = Array.from(map.keys());
console.log(keys);
keys.push("more");
console.log(keys); */

/* let aleh = { name: "Aleh" };

let map = new Map();
map.set(aleh, "...");

console.log(map);


//new WeakMap and WeakSet

let weakMap = new WeakMap();
weakMap.set(aleh, "Kudzelka");

console.log(weakMap);
aleh = null;
console.log(map.keys()) */

/* let visitCountWeakMap = new Map();

function countUser(user) {
    let count = visitCountWeakMap.get(user) || 0;
    visitCountWeakMap.set(user, count + 1);
}

let aleh = { name: "Aleh" };
countUser(aleh);
aleh = null;
console.log(aleh);
console.log(visitCountWeakMap.has(aleh)); */

/*
let cach = new Map();

function process(obj) {
    if (!cach.has(obj)) {
        let result = obj;
        cach.set(obj, result)
    }
    return cach.get(obj)
}

let obj = {};
let result = process(obj);
let result2 = process(obj);

obj = null;
console.log(cach.size); */

/* let visitedSet = new WeakSet();

let john = { name: "John" };
let pete = { name: "Pete" };
let mary = { name: "Mary" };

visitedSet.add(john);
visitedSet.add(pete);
visitedSet.add(mary);
visitedSet.add(john);

console.log(visitedSet);
pete = null
console.log(visitedSet.has(pete)); */

/* let messages = [
    { text: "Hello", from: "John" },
    { text: "How goes?", from: "John" },
    { text: "See you soon", from: "Alice" }
];
let isRead = Symbol("isRead");

let readMessage = new WeakMap();
messages.forEach(item => item[isRead] = true)
console.log(messages);

messages.forEach(item => readMessage.set(item, new Date()))
console.log(readMessage); */

/* let arr = [7, 2, 3, 4, 5, 323, "sdfds", 213, 'sdf'];
console.log(Object.entries(arr)); */

//Object.keys, values, entries

/* let user = {
    name: "John",
    age: 30
};
console.log(user);

let arr = Object.entries(user);
let obj = Object.fromEntries(arr)

console.log(arr);
console.log(obj); */
/* let salaries = {
    "John": 100,
    "Pete": 300,
    "Mary": 250
}; */

/* function sumSalaries(obj) {
    return Object.values(obj).reduce((sum, item) => sum + item)
} */
/* function sumSalaries(obj) {
    let a = 0;
    for (let sum in obj) {
        a += obj[sum];

    }
    return a
} */
/* function sumSalaries(obj) {
    let a = 0;
    for (let sum of Object.values(obj)) {
        a += sum;

    }
    return a
}
console.log(sumSalaries(salaries)); */

/* let user = {
    name: 'John',
    age: 30
};


function count(obj) {
    return Object.keys(obj).length
}

console.log(count(user)); */

//Деструктуирущее присваивание

/* let arr = ["Aleh", "Kudzelka"];
let [firstName, surname, addres] = arr;
console.log(arr);
console.log(firstName);
console.log(surname);
console.log(addres); */

/* let [firstName, surname] = "Aleh Kudzelka".split(' ');
console.log(firstName);
console.log(surname); */

/* let [one, two, three] = new Set([1, 2, 3]);
console.log(one);
console.log(two);
console.log(three); */

/* let obj = {};
let str = 'Aleh Kudzelak';
[obj.name, obj.surname] = str.split(' ');
console.log(obj); */

/* let user = {
    name: "John",
    age: 30,
    addres: "Ratomskaja"
};

for (let [key, value] of Object.entries(user)) {
    console.log(key + '_' + value);
} */
/* let [, ...rest] = ["Julius", "Caesar", "Consul", "of the Roman Republic"];

console.log(rest); */
/* let str = 'Aleh';
let [name = prompt('Enter name'), surName = prompt("Enter surName")] = str.split(" ");
console.log(name); */
/* let options = {
    size: {
        width: 100,
        height: 200
    },
    items: ["Cake", "Donut"],
    extra: true
};
let { size: { width: one }, ...three } = options;
console.log(one);

console.log(three); */
/* let options = {
    title: "My menu",
    items: ["Item1", "Item2"]
};

function showMenu({ title, items = [], width = 500, height = 200 } = {}) {
    console.log(title);
    console.log(items);
    console.log(width);
    console.log(height);
}
let arr = [1, 5, 2, 123, 435]
showMenu(options) */
/* let user = {
    name: "John",
    years: 30
};
let { name, years: age, isAdmin = false } = user;
console.log(name);
console.log(age);
console.log(isAdmin); */
/* let salaries = {
    "Zohn": 100,
    "Pete": 300,
    "Aleh": 1500000,
    "Mary": 25000
};

function topSalary(obj) {
    let arr = Object.entries(obj);
    let maxSalary = 0;
    let maxName = null;
    for (let [name, salary] of Object.entries(obj)) {
        if (maxSalary < salary) {
            maxSalary = salary;
            maxName = name
        }
    }
    return maxName;

}
console.log(topSalary(salaries)); */

/* console.log(new Date(2020, 11, 15, 16, 33, 25, 500)); */



//DATE

/* let date = new Date(); */
/* console.log(date.getFullYear());
console.log(date.getMonth());
console.log(date.getDate());
console.log(date.getDay());
console.log(date.getHours());
console.log(date.getUTCHours());
console.log(date.getMinutes());
console.log(date.getSeconds());
console.log(date.getMilliseconds()); */

/* console.log(date.getTimezoneOffset());
console.log(date.getTime()); */

/* let today = new Date();
today.setHours(12, 15, 17)
console.log(today); */

/* let date = new Date(2012, 1, 28)
date.setDate(date.getDate() + 2)
console.log(date); */

/* function bigIndex(arr) {
    let bigNum = arr[0];
    let indexNum = 0;

    arr.forEach((item, index) => {
        if (bigNum < item) {
            bigNum = item;
            indexNum = index
        }
    })
    return indexNum;
}

let arr = [2, 5, 3, 7, 32, 77, 12, 1, 45];

function sortArr(arr) {
    let newArr = [];
    for (let i of arr) {
        newArr.push(arr[bigIndex(arr)]);
    }
    return newArr;
}

console.log(sortArr(arr)); */
/* console.log(sortArr(arr)); */

/* let date = new Date();
console.log(+date); */

/* let start = Date.now();
for (let i = 0; i < 10000000; i++) {
    let something = i + i;
}
let end = Date.now();

console.log(`Цикл  сработал ${end - start}`); */

/* let date = Date.now();
console.log(date); */

/* let ms = Date.parse('2020-12-16T16:15:45');
console.log(new Date(ms));
console.log(performance.now()); */
/* let date = new Date(2012, 01, 20, 3, 12)
console.log(date); */
/* let date = new Date(2020, 11, 13);
 */
/* function getWeekDay(date) {
    let arrWeek = ["ВС", "ПН", "ВТ", "СР", "ЧТ", "ПТ", "СБ"];
    return arrWeek[date.getDay()]
        //return arrWeek.find((item, index) => index === date.getDay())
}

console.log(getWeekDay(date)); */

/* function getLoacalDay(date) {
    if (date.getDay() === 0) {
        return 7
    } else {
        return date.getDay()
    }
}

console.log(getLoacalDay(date)); */

/* let date = new Date();

function getDateAgo(date, days) {
    date.setDate(date.getDate() - days);
    return date;
}
console.log(getDateAgo(date, 365)); */

/* function getLastDayOfMonth(year, mont) {
    let a = new Date(year, mont + 1, 0);
    console.log(a.getDate(0));
}
console.log(getLastDayOfMonth(2019, 1)); */
/* function getSecondsToday() {
    let date = new Date();
    let hoursNow = date.getHours();
    console.log(hoursNow * 3600);
    let now = new Date();
    let today = new Date(now.getFullYear(), now.getMonth(), now.getDate());
    let diff = now - today;
    console.log(Math.round(diff / 1000));
}
getSecondsToday() */

/* function getSecondsToTomrrow() {
    let date = new Date();
    let tomrrow = new Date(date.getFullYear(), date.getMonth(), date.getDate() + 1)
    let diff = tomrrow - date;
    console.log(tomrrow);
    console.log(Math.round(diff / 1000));
}
getSecondsToTomrrow() */

;


/* function formatDate(date) {
    let diff = new Date() - date;

    if (diff < 1000) {
        return diff + "прямо сейчас";
    }
    let sec = diff / 1000;

    if (sec < 60) {
        return sec + ' сек. назад';
    }
    let min = diff / 60000;
    if (min < 60) {
        return min + ' мин. назад';
    }
    let d = date;
    console.log(d);
    d = [
        "0" + d.getDate(),
        "0" + (d.getMonth() + 1),
        "" + d.getFullYear(),
        "0" + d.getHours(),
        "0" + d.getMinutes()
    ].map(item => item.slice(-2));
    console.log(d);
    return d.slice(0, 3).join('.') + " " + d.slice(3).join(':')
}

console.log(formatDate(new Date((new Date - 86400 * 1000)))); */



//JSON

/* let user = {
    name: "aleh",
    age: 27,
    addres: "Minsk",
    toString() {
        return `{name: "${this.name}", age: "${this.age}"}`
    }
}
let str = JSON.stringify(user);
console.log(str);
let obj = JSON.parse(str);
console.log(obj); */

/* let room = {
    number: 23
};

let meetup = {
    title: "Conference",
    participants: [{ name: "John" }, { name: "Alice" }],
    place: room // meetup ссылается на room
};
room.occupiedBy = meetup;

//console.log(JSON.stringify(meetup, ['title', 'participants', 'name', 'place', 'number']));

console.log(JSON.stringify(meetup, function replacer(key, value) {
    console.log(key + ':' + value);
    return (key == "occupiedBy") ? undefined : value
})); */
/*
let user = {
    name: 'aleh',
    age: 27,
    toJSO() {
        return this.name + this.age
    }

}
console.log(user.toJSO()); */
/* let arr = "[7, 453, 2, 435, 12312, 123]";
arr = JSON.parse(arr);
console.log(arr); */

/* let str = '{"title":"Conference","date":"2017-11-30T12:00:00.000Z"}';
let meetup = JSON.parse(str);
console.log(meetup);
meetup.date = new Date(Date.parse(meetup.date));
console.log(meetup.date.getDate());
let meetup = JSON.parse(str, function reviver(key, value) {
    if (key === 'date') {
        return new Date(value);
    }
    return value;
});
console.log(meetup); */

/* let user = {
    name: "Василий Иванович",
    age: 35
};

let str = JSON.stringify(user);
console.log(str);
let obj = JSON.parse(str)
console.log(obj); */
/* let room = {
    number: 23
};

let meetup = {
    title: "Совещание",
    occupiedBy: [{ name: "Иванов" }, { name: "Петров" }],
    place: room
};

room.occupiedBy = meetup;
meetup.self = meetup;

console.log(JSON.stringify(meetup, function replaser(key, value) {
    console.log(key + ":" + value);
    return (key.value === meetup) ? undefined : value;
})); */

/* let user = {};

let key = "Aleh Kudzelka";
user[key] = true;
console.log(user); */
/* function makeUser(name, age) {
    return {
        name: name,
        age: age
            // ...другие свойства
    };
}

let user = makeUser("John", 30);
console.log(user); */

/* let user = {
    name: 'Aleh',
    age: 27,
    sayHi() {
        console.log("+");
    }
}
let obj = Object.assign({}, user);
console.log(obj.name = "Tatsiana");
console.log(user.sayHi()); */

/* let obj1 = {
    name: 'Aleh',
    age: 27
}
let obj2 = {
    name: "Tatsiana",
    age: 25
}
console.log(obj2.toString()); */


///Recursion

/* function pow(x, n) {
    if (n == 1) {
        return x;
    }
    return (x * pow(x, n - 1))
}
console.log(pow(2, 3)); */
/* let company = { // тот же самый объект, сжатый для краткости
    sales: [{ name: 'John', salary: 1000 }, { name: 'Alice', salary: 600 }],
    development: {
        sites: [{ name: 'Peter', salary: 2000 }, { name: 'Alex', salary: 1800 }],
        internals: [{ name: 'Jack', salary: 1300 }]
    }
};

function sumSalaris(obj) {
    let prev = 0;
    if (Array.isArray(obj)) {
        return obj.reduce((sum, item) => sum + item.salary, 0)
    } else {
        for (let key of Object.values(obj)) {
            prev += sumSalaris(key)
        }
        return prev
    }
}
console.log(sumSalaris(company)); */

/* function sumTo(n) {
    let sum = 0;
    for (let i = 1; i <= n; i++) {
        sum += i
    }
    return sum;
    return (n !== 1) ? n + sumTo(n - 1) : 1;
}

console.log(sumTo(100)); */

/* function factorial(n) {
    return (n !== 1) ? n * factorial(n - 1) : 1;
}
console.log(factorial(3)); */

/* function fibo(n) {
    return (n > 1) ? fibo(n - 1) + fibo(n - 2) : n;
    let a = 1;
    let b = 1;
    for (let i = 3; i <= n; i++) {
        let c = a + b;
        a = b;
        b = c;
    }
    return b
}
console.log(fibo(7)); */

/* let list = {
    value: 1,
    next: {
        value: 2,
        next: {
            value: 3,
            next: {
                value: 4,
                next: null
            }
        }
    }
}; */

/* function printList(list) {
    console.log(list.next);
    if (list.next != null) {
        printList(list.next)
    }
    //let tmp = list;
    //while (tmp) {
    //    console.log(tmp.value);
    //    tmp = tmp.next
    //}
}

printList(list) */


//SPRED AND REST

/* function showName(...arr) {
    onsole.log(arguments.length);
        console.log(arguments);
    console.log(arr);
}
showName(23, 45, 2, 1, 324) */
/* let arr = [3, 234, 21, 54841, 12, 234, 77];
let newArr = [...arr, 2, 32, 123, 4534];
console.log(newArr); */


/* !

function showFun() {
    console.log("+");
}() */
/* function f() {
    let value = Math.random();
    console.log(value);
    return function() {
        return value
    }
}

let arr = [f(), f(), f()]
console.log(arr); */


/* let value = "Сюрприз!";

function f() {
    let value = "ближайшее значение";

    function g() {
        debugger; // в консоли: напишите alert(value); Сюрприз!
    }

    return g;
}

let g = f();
console.log(g()); */

/* function Counter() {
    let count = 0;
    this.up = function() {
        return ++count
    };
    this.down = function() {
        return count--
    };
}

let counter = new Counter();

console.log(counter.up());
console.log(counter.up());

console.log(counter.up());

console.log(counter.up()); */

/* function sum(a) {
    return function(b) {
        return a + b
    }
}

console.log(sum(5)(3)); */


/* let arr = [1, 2, 3, 5, 5, 6, 7];

function inBetween(a, b) {
    return function(x) {
        return x >= a && x <= b
    }
}

function inArray(arr) {
    return function(x) {
        return arr.includes(x)
    }
}

let result = arr.filter(inBetween(3, 6));
console.log(result);
let resultOne = arr.filter(inArray([1, 2, 10]))
console.log(resultOne); */

/* let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];
console.log(users.sort((a, b) => a.name > b.name ? 1 : -1));
console.log((users.sort((a, b) => a.age > b.age ? 1 : -1)));

function byField(names) {
    return (a, b) => {
        a[names] > b[names] ? 1 : -1
    }
}

console.log('users.sort(byField(name)): ', users.sort(byField("name"))); */

/* let arr = [1, 2, 3, 4, 5, 6, 7];

function inBetween(a, b) {
    return (x) => x >= a && x <= b;
}
console.log(arr.filter(inBetween(3, 6)));

function inArray(arr) {
    return (x) => arr.includes(x)
}
console.log(arr.filter(inArray([1, 2, 10, 5]))); */

/* let users = [
    { name: "John", age: 20, surname: "Johnson" },
    { name: "Pete", age: 18, surname: "Peterson" },
    { name: "Ann", age: 19, surname: "Hathaway" }
];

function byField(filed) {
    return (a, b) => a[filed] > b[filed] ? 1 : -1;
}
console.log(users.sort(byField('surname'))); */
/* function makeArmy() {
    let shooters = [];

    for (let i = 0; i < 10; i++) {
        let shooter = function() {
            console.log(i);
        }
        shooters.push(shooter)
    }
    return shooters;
}
let army = makeArmy();
army[1]() */


/* window.currentUser = {
    name: 'Aleh',
    age: 25
}
console.log(currentUser.name); */

/* function sayHi() {
    console.log('hay');
}
console.log(sayHi.name); */

/* let user = {
    sayHi() {
        console.log("=");
    },
    sayBy: function() {
        console.log('_');
    },
    say() {
        return this.sayHi.name + " " + this.sayBy.name
    }
}
console.log(user.say()); */

/* function ask(questions, ...handlers) {
    let isYes = confirm(questions);

    for (let handler of handlers) {
        if (handler.length == 0) {
            if (isYes) {
                handler();
            } else {
                handler(isYes)
            }
        }
    }
}
ask("Questions?", () => alert('Yuo answer yes?'), result => alert(result)) */

/* function sayHi() {
    console.log('Hi');
    sayHi.counter++;
}
sayHi.counter = 0;
sayHi();
sayHi();
sayHi();
console.log(sayHi.counter); */
/* function makeCounter() {
    // вместо
    // let count = 0

    function counter() {
        return counter.count++;
    };

    counter.count = 0;

    return counter;
}

let count = makeCounter();
console.log(count());
console.log(count()); */

/* let sayHi = function foo(who) {
    if (who) {
        alert(`Hello, ${who}`);
    } else {
        sayHi("Guest");
    }
};
let welcom = sayHi;

welcom('Aleh') */

/* function makeCounter() {
    function counter() {
        counter.set = (value) => counter.count = value;
        counter.decrease = () => counter.count--;
        return counter.count++;
    }

    counter.count = 0;

    return counter;
}

let counter = makeCounter();
counter();
counter();
console.log(counter());
counter();
counter();
console.log(counter());
counter.set(5);
console.log(counter());
counter.decrease()
counter.decrease()
counter.decrease()
counter.decrease()
console.log(counter()); */

/* function sum(a) {
    let currentSum = a;

    function f(b) {
        currentSum += b;
        f.toString = () => currentSum;
        return f;
    }
    return f;
}

console.log(sum(6)(-1)(-2)(-3)); */

/* function sayHi(phrase, who) {
    console.log(phrase + ' ' + who);
}
let a = setInterval(sayHi, 1000, 'Hello', "Aleh");

let b = setInterval('console.log("Bey")', 2000);
clearInterval(a)
clearInterval(b) */

/* let timerId = setTimeout(() => console.log('Hello'), 2000);

clearTimeout(timerId);
console.log(timerId); */

/* let timerId = setInterval(() => console.log('tick'), 2000);
setTimeout(() => clearInterval(timerId), 7000) */

/* let timerId = setTimeout(function tick() {
    console.log('tick');
    timerId = setTimeout(tick, 2000)
}, 2000) */

/* let delay = 5000;

let timerId = setTimeout(function request() {
    console.log(1);
    if (true) {
        delay * 2
    }
    timerId = setTimeout(request, delay)
})

clearTimeout(timerId) */

/* let i = 1;
<<<<<<< HEAD

setInterval(function() {
    console.log(i);
}, 100) */

/* let start = Date.now();
let times = [];
setTimeout(function run() {
    times.push(Date.now() - start);
    if (start + 1000 < Date.now()) {
        console.log(times);
    } else {
        setTimeout(run, 500)
    }
}) */

/* function printNumbers(from, to) {
    setInterval(() => {
        if (from < to) {
            console.log(from++);
        }
    }, 1000)
}
printNumbers(5, 17) */
/* function printNumbers(from, to) {
    setTimeout(function timer() {
        if (from < to) {
            console.log(from++);
            setTimeout(timer, 1000)
        }
    }, 1000)
}
printNumbers(5, 17) */

/* let j = 0;

setTimeout(() => console.log(i), 100);

for (let i = 0; i < 100000000; i++) {
    console.log(j++);
} */

/* function slow(x) {
    console.log(`Called with ${x}`);
    return x;
}

function cachingDecorator(func) {
    let cache = new Map();
    return function(x) {
        if (cache.has(x)) {
            return cache.get(x)
        }
        let result = func(x);
        cache.set(x, result);
        return result;
    }
}
slow = cachingDecorator(slow)
slow(1);
slow(2);
slow(2) */

/* function sayHi() {
    console.log(this.name);
}
let user = { name: 'Aleh' };
let admin = { name: 'Admin' }
sayHi.call(user);
sayHi.call(admin) */

/* function say(phrase) {
    console.log(this.name + " : " + phrase);
}
let user = { name: 'Aleh' };

say.call(user, 'hello') */

/* let worker = {
    slow(min, max) {
        console.log(`Called with ${min}, ${max}`);
        return min + max
    }
}

function cachingDecorator(func, hash) {
    let cache = new Map();
    console.log(' cache: ', cache);
    return function() {
        let key = hash(arguments);
        console.log('key: ', key);
        if (cache.has(key)) {
            return cache.get(key)
        }
        let result = func.call(this, ...arguments);
        cache.set(key, result);
        return result;
    }
}

function hash(args) {
    return [].join.call(args)
}

worker.slow = cachingDecorator(worker.slow, hash);
console.log(worker.slow(3, 5, 7, 8)); */

/* function work(a, b) {
    console.log(a + b)
    return a + b;
}

function spy(func, hash) {
    let cache = new Map();

    return function() {
        let key = hash(arguments);
        if (cache.has(key)) {
            return cache.get(key)
        }
        let result = func.apply(this, arguments);
        cache.set(key, result);
        return result;
    }
}

function hash(args) {
    return [].join.call(args)
}

work = spy(work, hash);
work(1, 3) */

/* function work(a, b) {
    console.log(a + b);
}

function spy(func) {
    function wrapper(...args) {
        wrapper.calls.push(args);
        return func.apply(this, arguments);
    }
    wrapper.calls = [];
    return wrapper;
}
work = spy(work);

work(1, 2)
work(4, 5);
for (let args of work.calls) {
    console.log(args.join());
} */

/* function f(x) {
    console.log(x);
}

function delay(f, ms) {
    return function() {
        setTimeout(() => {
            f.apply(this, arguments)
        }, ms)
    }
}


let f1000 = delay(f, 1000);
f1000('test'); */

/* function f(x) {
    console.log(x);
}

function debounce(f, ms) {
    let isCooldown = false;

    return function() {
        if (isCooldown) return;
        f.apply(this, arguments)
        isCooldown = true;
        setTimeout(() => isCooldown = false, ms)
    }
}
f = debounce(alert, 5000);
f(1) */

/* function f(a) {
    console.log(a);
}

function throttle(f, ms) {
    let isThrottle = false;
    function wrapper() {
        if (isThrottle) {
            saveArgs = arguments;
            saveThis = this;
            return;
        }
        f.apply(this, arguments);

        isThrottle = true;

        setTimeout(function() {
            isThrottle = false;
            if (saveArgs) {
                wrapper.apply(saveThis, saveArgs);
                saveArgs = saveThis = null;
            }
        }, ms)
    }
    return wrapper
}
let f1000 = throttle(f, 1000);
f1000(1)
f1000(2)
f1000(4) */


/* let user = {
    firstName: "Aleh",
    sayHi() {
        console.log(`hello, ${this.firstName}`);
    }
}

setTimeout(user.sayHi.bind(user), 1000) */

/* let user = {
    firstName: 'Aleh'
}

function func() {
    return this.firstName;
}

let funcUser = func.bind(user);

console.log(funcUser()); */

/* function mul(a, b) {
    return a * b
}

let double = mul.bind(null, 2);

console.log(double(3)); */

/* function partial(func, ...argsBound) {
    return function(...args) {
        return func.call(this, ...argsBound, ...args)
    }
}

let user = {
    name: 'Aleh',
    say(time, phrase) {
        console.log(`[${time}] ${this.name}: ${phrase}! `);
    }
}

user.sayNow = partial(user.say, new Date().getHours() + ":" +
    new Date().getMinutes());
user.sayNow('Hello') */


/* function f() {
    console.log(this);
}
f() */

/* function f() {
    console.log(this.name)
}

f = f.bind({ name: 'Aleh' });
f = f.bind({ name: 'Tatsian' })
console.log(f());
console.log(f()); */
/* function askPassword(ok, fail) {
    let password = prompt("Password?", '');
    if (password == "rockstar") ok();
    else fail();
}

let user = {
    name: 'Вася',

    loginOk() {
        alert(`${this.name} logged in`);
    },

    loginFail() {
        alert(`${this.name} failed to log in`);
    },

};

askPassword(user.loginOk.bind(user), user.loginFail.bind(user)); */


/* function askPassword(ok, fail) {
    let password = prompt('Password?', " ");
    if (password === 'rockstar') ok();
    else fail()
}

let user = {
    name: "aleh",
    login(result) {
        console.log((this.name + " " + (result ? "logged in" : "failed to log in")));
    }
}
askPassword(user.login.bind(user, true), user.login.bind(user, false)) */


/* let group = {
    title: "Our group",
    students: ['Aleh', 'Vova', 'Slava'],
    showList() {
        this.students.forEach(item => {
            console.log(this.title + ":" + item);
        })
    }
}

group.showList() */

/* function defer(f, ms) {
    return function(x) {
        setTimeout(() => f.call(this, x), ms)
    }
}

function sayHi(who) {
    console.log('hello' + " " + who);
}

let sayHiDeferred = defer(sayHi, 2000);


sayHiDeferred('Aleh') */

/* setInterval(function() {
    console.log(i);
}, 100) */

/* let user = {
    name: 'Aleh',
}

let descriptor = Object.getOwnPropertyDescriptor(user, 'name');
Object.defineProperty(user, 'age', {
    value: 27,
    writable: true,
    enumerable: true,
})
let descriptorTwo = Object.getOwnPropertyDescriptor(user, 'age')
Object.defineProperty(user, 'age', {
    writable: false,
})
let descriptorTherre = Object.getOwnPropertyDescriptor(user, 'age')
console.log(JSON.stringify(descriptorTherre, null, 2));
user.name = 'Tatsiana'



user.toString = function() {
    return this.name
}
console.log(user.toString());
Object.defineProperty(user, 'toString', {
    writable: true,
    enumerable: false
})


let clone = Object.defineProperties({}, Object.getOwnPropertyDescriptors(user));
console.log(Object.getOwnPropertyDescriptors(clone)); */


/* let user = {
    name: 'Aleh',
    surname: "Kudzelka",

    get fullName() {
        return this.name + " " + this.surname
    },
    set fullName(value) {
        [this.name, this.surname] = value.split(' ')
    }
}

console.log(user.fullName);
user.fullName = "Tatsiana Kudzelka"
console.log(user.fullName); */

/* let user = {
    name: 'Aleh',
    surname: 'Kudzelka',
}

Object.defineProperty(user, 'fullName', {
    get() {
        return this.name + " " + this.surname
    },
    set(value) {
        [this.name, this.surname] = value.split[' ']
    }
})

console.log(user.fullName); */

/* let user = {
    get name() {
        return this._name;
    },
    set name(value) {
        if (value.length < 4) {
            console.log('name is litle,must be four characters');
            return;
        }
        return this._name = value;
    }
}
user.name = 'Aleh'

console.log(user.name) */

/* function User(name, birthday) {
    this.name = name;
    this.birthday = birthday;

    Object.defineProperty(this, "age", {
        get() {
            let todayYear = new Date().getFullYear();
            return todayYear - this.birthday.getFullYear()
        }
    })
}
let aleh = new User('Aleh', new Date(1993, 7, 7))
console.log(aleh);
console.log(aleh.age); */


////PROTOTYPE

/* let animal = {
    eats: true,
}

let rabbit = {
        jumps: true
    }

Object.getPrototypeOf(animal);
console.log(rabbit.eats); */

/* let animal = {
    eats: true,
};

let rabbit = {
    jumps: true,
}

rabbit.__proto__ = animal;

console.log(rabbit.eats, rabbit.jumps, animal.jumps); */

/* let user = {
    name: "Aleh",
    surname: 'Kudzelka',

    get fullname() {
        return `${this.name} ${this.surname}`
    },

    set fullname(value) {
        [this.name, this.surname] = value.split(" ")
    }

}



console.log(user.fullname);

user.name = "Tatsiana";
user.surname = "Kudzelka";

console.log(user.fullname);

user.fullname = "Elena Popko";
console.log(user.fullname);
console.log(user.name); */
/* let animal = {
    eats: true,
};

let rabbit = {
    jumps: true,
}

rabbit.__proto__ = animal;


animal.walk = function() {
    return console.log('Animal walk');
}
rabbit.walk();
rabbit.walk = function() {
    console.log("good");
};
animal.walk()
rabbit.walk() */

/* let user = {
    name: "Aleh",
    surName: "Kudzelka",

    get fullName() {
        return `${this.name} ${this.surName}`
    },

    set fullName(value) {
        [this.name, this.surname] = value.split(" ")
    },

}

let admin = {
    __proto__: user,
    isAdmin: true,
}


console.log(admin.fullName);
admin.fullName = "Tatsiana Kudzelka";
console.log(admin.fullName);

console.log(user.fullName); */

/* let animal = {
    walk() {
        if (!this.isSleeping) console.log("I walk");
    },
    sleep() {
        this.isSleeping = true;
    }
};

let rabbit = {
    __proto__: animal,
    name: "White Rabbit"
}

rabbit.sleep();



for (let i in rabbit) {
    let isOwn = rabbit.hasOwnProperty(i)

    if (isOwn) {
        console.log(i);
    }
} */

/* let head = {
    glesses: 1,
}

let table = {
    pen: 3,
    __proto__: head,
}

let bed = {
    sheet: 1,
    pillow: 2,
    __proto__: table,
}

let pockets = {
    money: 2000,
    __proto__: bed,
}
console.log(pockets.pen, bed.glesses); */

/* let hamster = {

    eat(food) {
        this.stomach.push(food)
    }
}

let speedy = {
    stomach: [],
    __proto__: hamster
}

let lazy = {
    stomach: [],
    __proto__: hamster
}

speedy.eat('apple');
speedy.eat('orange')
speedy.eat('cherry')
lazy.eat('grapes')

console.log(speedy.stomach);
console.log(lazy.stomach); */

/* let animal = {
    eats: true,
}

function Rabbit(name) {
    this.name = name;
}
console.dir(Rabbit);
Rabbit.prototype = animal;
console.log(Rabbit.prototype);

let rabbit = new Rabbit();

console.log(rabbit.name, rabbit.eats);
console.log(rabbit.constructor == Rabbit); */

/* function Rabbit() {}
Rabbit.prototype = {
    eats: true
}

let rabbit = new Rabbit();

delete Rabbit.prototype.eats;

console.log(rabbit.eats); */

/* function Rabbit(name) {
    this.name = name;

}

let rabbit = new Rabbit('White rabbit');

console.log(rabbit);

let rabbit2 = new rabbit.constructor('Black rabbit');
console.log(rabbit2); */

/* let obj = {};

console.log(obj.__proto__ == Object.prototype); */

/* let arr = [1, 2, 3];

console.log(arr);

String.prototype.show = function() {
    console.log(this);
};

"Boom!".show();
console.dir(String); */

/* let obj = {
    0: "Hello",
    1: "World!",
    length: 2,
}
obj.__proto__ = Array.prototype;
obj.join = Array.prototype.join;
console.log(obj.join(",")); */

/* function f() {
    console.log("Hello");
}
Function.prototype.defer = function(ms) {
    setInterval(this, ms)
}

f.defer(1000) */

/* function f(a, b) {
    console.log(a + b);
}

Function.prototype.defer = function(ms) {
    let f = this;
    return function(...args) {
        setTimeout(() => {
            f.apply(this, args)
        }, ms);
    }
}
f.defer(1000)(1, 4) */

let animal = {
    eats: true,
}

/* let rabbit = Object.create(animal, {
    name: {
        value: "White Rabbit"
    },
})
 */

let rabbit = {
    name: 'Pushok'
}

Object.setPrototypeOf(rabbit, animal)

console.log(rabbit.eats, rabbit.name);