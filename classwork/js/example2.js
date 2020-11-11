function fn() {
alert(`${this.a}`);
}
obj = {
    a:1
};

function fakeBind(fn, context) {
    function f() {

        fn.call(context);

    }
    return f;
}

const  boundFn = fakeBind(fn, {a:1});

boundFn();




