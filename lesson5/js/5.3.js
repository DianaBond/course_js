let task = document.querySelector("ball");
task.onmousedown = function(event) {

    let shiftX = event.clientX - task.getBoundingClientRect().left;
    let shiftY = event.clientY - task.getBoundingClientRect().top;

    task.style.position = 'absolute';
    task.style.zIndex = 1000;

    document.body.append(task);

    moveAt(event.pageX, event.pageY);

    function moveAt(pageX, pageY) {
        task.style.left = pageX - shiftX + 'px';
        task.style.top = pageY - shiftY + 'px';
    }

    function onMouseMove(event) {
        moveAt(event.pageX, event.pageY);
    }

    document.addEventListener('mousemove', onMouseMove);


    task.onmouseup = function () {
        document.removeEventListener('mousemove', onMouseMove);
        task.onmouseup = null;
    };
    task.ondragstart = function() {
        return false;
    };
};
