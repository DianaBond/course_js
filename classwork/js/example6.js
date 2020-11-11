function fakeInterval2(fn, time1, ...param) {

    function timer(time) {
        fn(...param);
        setTimeout(timer, time, time1 * 2)
    }

    setTimeout(timer, time1, time1);
}
fakeInterval2 ((phrase, who)=> alert('Hi girl!' + phrase +","+ who), 1000, "Привет", "girl", "sunny"  );
//счетчик с каждым разом увеличивается в 2 раза