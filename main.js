const box = document.querySelector('.box')

let positionX = 0
let positionY = 0

const move = () => {
    if (positionX <= 449 && positionY === 0) {
        positionX++
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    } else if (positionX >= 449 && positionY <= 449){
        positionY++
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    } else if (positionY >= 449 && positionX >= 1){
        positionX--
        box.style.left = `${positionX}px`
        setTimeout(move, 1)
    }
    else if (positionX === 0 && positionY <= 450){
        positionY--
        box.style.top = `${positionY}px`
        setTimeout(move, 1)
    }
}
move()

let c = 0
let p

function start() {
    c++;
    document.getElementById('counter').innerHTML = c;
}
function fun1() {
    p = setInterval('start()', 600);
}
function fun2() {
 clearInterval(p)
}

