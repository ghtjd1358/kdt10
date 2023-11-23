
//실습
function callPromise(name) {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log(name); // kim
            resolve(name);
        }, 1000);
    })
}

function backPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            console.log('back');
            resolve('back');
        }, 1000);
    })
}

function hellPromise() {
    return new Promise((resolve, reject) => {
        setTimeout(function () {
            resolve('callback hell');
        }, 1000);
    })
}

async function exec() {
    let user = await callPromise('kim');
    console.log(user + '님 환영합니다.');
    let videos = await backPromise(user);
    console.log(videos, '을 실행했꾸나');
    let title = await hellPromise(videos[0]);
    console.log(title);
}

exec();

