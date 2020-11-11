function fn(...param) {
    alert(`${this.a}, ${param}`);
}
obj = {
    a:1
};

function fakeBind(fn, context, ...param) {
    function f() {

        fn.call(context, ...param);

    }
    return f;
}

const  boundFn = fakeBind(fn, {a:1},3, 7);

boundFn();