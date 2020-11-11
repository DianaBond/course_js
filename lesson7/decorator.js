function createLoggerDecorator(fn){
    let counter = 0;
    return function decorator(){
        counter++
        fn()
        console.log(counter);
    }
}

function log(){
    console.log("Выведено раз");
}

let sumFunc = createLoggerDecorator(log);
sumFunc();
sumFunc();
sumFunc();