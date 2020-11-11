function fakeInterval(fn, time) {
    function timer() {
        fn();
        setTimeout(timer, time)
    }

    setTimeout(timer, time);
}
fakeInterval (()=> alert('Hi girl!'), 1000);
//Написать функцию fakeInterval, которая имитирует поведение setInterval, но внутри исползует setTimeout.
