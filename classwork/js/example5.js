function fakeInterval1(fn, time, ...param) {
    function timer() {
        fn(...param);
        setTimeout(timer, time)
    }

    setTimeout(timer, time);
}
fakeInterval1 ((phrase, who)=> alert('Hi girl!' + phrase +","+ who), 1000, "Привет", "girl", "sunny"  );
// Добавлять значения после таймера