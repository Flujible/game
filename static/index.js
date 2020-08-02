const socket = io();
let playerId;
const move = {
    up: false,
    down: false,
    left: false,
    right: false,
}

socket.io.on('connect_error', reason => {
    socket.disconnect();
    console.log(`CONNECT ERROR: ${reason}`);
});

socket.on('id', id => {
    playerId = id;
    console.log("A NEW CHALLENGER APPROACHES (client)");
});

socket.on('info', info => console.log(info));

document.addEventListener('keydown', event => {
    switch(event.key.toLowerCase()) {
        case 'w':
            beginMovePlayer('up');
            break;
        case 'a':
            beginMovePlayer('left');
            break;
        case 's':
            beginMovePlayer('down');
            break;
        case 'd':
            beginMovePlayer('right');
            break;
    }
});

document.addEventListener('keyup', event => {
    switch(event.key.toLowerCase()) {
        case 'w':
            endMovePlayer('up');
            break;
        case 'a':
            endMovePlayer('left');
            break;
        case 's':
            endMovePlayer('down');
            break;
        case 'd':
            endMovePlayer('right');
            break;
    }
});

beginMovePlayer(direction) {
    move[direction] = true;
}

endMovePlayer(direction) {
    move[direction] = false;
}