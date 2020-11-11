function fn(...param) {
    alert(`${this.a}, ${param}`);
}
obj = {
    a:1
};

function fakeBind(fn, context, ...param) {
    return  function (...other) {

        return fn.call(context, ...param, ...other);

    }
}

const  boundFn = fakeBind(fn, {a:1},3);
const message = boundFn("hi");

boundFn("Ivan");