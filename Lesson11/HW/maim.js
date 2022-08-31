let time = 0;

function getUp(isMorning) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (isMorning) {
                time = 6.00;
                resolve(time);
            } else {
                console.log('Resting day');
                reject('Sleep longer');
            }
        }, 1000);
    })
}

function goToShower(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 6.00) {
                console.log('You miss your time')
                reject('You late')
            } else {
                console.log('Relax and wakeUp')
                time += 0.50
                resolve(time)
            }
        }, 200)
    })
}

function breakfast(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 6.50) {
                console.log('to much time in shower')
                reject('You late!')
            } else {
                console.log('Eat breakfast')
                time += 0.90
                resolve(time)
            }

        }, 500)
    })
}

function takeTheKidsToSchool(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 7.40) {
                console.log('You must hurry')
                reject('You late!!')
            } else {
                console.log('O, good weather')
                time += 0.70
                resolve(time)
            }
        }, 100)
    })
}

function goWork(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 8.10) {
                console.log('You must hurry')
                reject('You late!!')
            } else {
                console.log('O, my lovely job')
                time += 7.90
                resolve(time)
            }
        }, 2000)
    })
}

function goHome(time) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (time > 16.00) {
                console.log('You must hurry')
                reject('You late!!')
            } else {
                console.log('O, my lovely home')
                time += 0.20
                resolve(time)
            }
        }, 150)
    })
}

// getUp(true)
//     .then(value => {
//         console.log('its time', time)
//
//         return goToShower(value);
//     })
//     .then(timeAfterShoWer => {
//         console.log('Time', timeAfterShoWer)
//
//         return breakfast(timeAfterShoWer);
//     })
//     .then(timeAfterBreakfast => {
//         console.log('Time', timeAfterBreakfast)
//
//         return takeTheKidsToSchool(timeAfterBreakfast);
//     })
//     .then(timeAfterSchool => {
//         console.log('Time', timeAfterSchool)
//
//         return goWork(timeAfterSchool)
//     })
//     .then(timeAfterWork => {
//         console.log('Time', timeAfterWork)
//
//         return goHome(timeAfterWork)
//     })
//     .then(homeTime => {
//         console.log('Time', homeTime)
//     })
//     .catch(reason => {
//         console.warn('Oj', reason)
//     })
//     .finally(() => {
//         console.log('Finally');
//     })

async function day(){
    try{
        const morningTime = await getUp(true);
        console.log(morningTime, 'morningTime');

        const timeAfterShoWer = await goToShower(morningTime);
        console.log(timeAfterShoWer, 'timeAfterShoWer');

        const timeAfterBreakfast = await breakfast(timeAfterShoWer);
        console.log(timeAfterBreakfast, 'timeAfterBreakfast');

        const timeAfterSchool = await takeTheKidsToSchool(timeAfterBreakfast);
        console.log(timeAfterSchool, 'timeAfterSchool');

        const timeAfterWork = await goWork(timeAfterSchool);
        console.log(timeAfterWork, 'timeAfterWork');

        const homeTime = await goHome(timeAfterWork);
        console.log(homeTime, 'homeTime');
    } catch (e) {
        console.warn('OOOOps!', e)
    }
}

day();