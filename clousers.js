function increaseCounter() {
    let counter = 0;

    return function () {
        counter++;
        console.log({ counter });
    };
}

const nestedFunc = increaseCounter()

nestedFunc()
nestedFunc()
nestedFunc()
