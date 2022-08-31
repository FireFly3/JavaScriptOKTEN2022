let button = document.createElement('button');
document.body.append(button);
button.innerText = 'Button';

button.onclick = () => {
    console.log('click')
}

// let i = 0;
// while (i < 999999999) {
//     i++
// }

let money = 0;

function goWork(isWorkingDay) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isWorkingDay) {
                money += 1000;
                resolve(money);
            } else {
                console.log('I`m relaxing');
                reject('Its not working day');
            }
        }, 800);
    })
}

function goToCroatia(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 800) {
                console.log('No money no honey')
                reject('Stay home')
            } else {
                console.log('Hoooray. Swimming all day!');
                money -= 600;
                resolve(money);
            }
        }, 400)
    })

}

function bySouvenirs(money) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (money < 300) {
                console.log('Good Photo')
                reject('Not another money')
            } else {
                console.log('By present');
                money -= 250;
                resolve(money);
            }
        }, 1000)
    })

}

//promise

goWork(true)
    .then(value => {
        console.log('I got', value, 'after working day')

        return goToCroatia(value);
    })
    .then(moneyAfterTrip => {
        console.log('After trip I got', moneyAfterTrip, '$')

        return bySouvenirs(moneyAfterTrip);
    })
    .then(MoneyAfterShoping => {
        console.log('I got', MoneyAfterShoping, 'after relax day')
    })
    .catch(reason => {
        console.warn('OOOOps!', reason)
    })
    .finally(() => {
        console.log('Finally');
    })

//async

// async function vacation() {
//     try {
//         const payment = await goWork(true);
//         console.log(payment, 'payment');
//
//         const moneyAfterTrip = await goToCroatia(payment);
//         console.log(moneyAfterTrip, 'moneyAfterTrip');
//
//         const moneyAfterShoping = await bySouvenirs(moneyAfterTrip)
//         console.log(moneyAfterShoping, 'MoneyAfterShoping')
//     } catch (e) {
//         console.warn('OOOOps!', e)
//     }
// }
//
// vacation();


