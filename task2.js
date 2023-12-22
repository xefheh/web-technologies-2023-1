function createCounter() {
    let counterValue = 0;
    return function () {
        counterValue++
        console.log(counterValue)
    }
}

const counter1 = createCounter()
counter1() // 1
counter1() // 2

const counter2 = createCounter()
counter2() // 1
counter2() // 2
