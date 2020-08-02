const socket = io();

socket.io.on('connect_error', reason => {
    socket.disconnect();
    console.log(`CONNECT ERROR: ${reason}`);
});

socket.on('id', id => {
    console.log("A NEW CHALLENGER APPROACHES (client)");
});

socket.on('info', info => console.log(info));

document.addEventListener('keydown', event => {
    switch(event.key.toLowerCase()) {
        case 'w':
            game.beginMovePlayer('up');
            break;
        case 'a':
            game.beginMovePlayer('left');
            break;
        case 's':
            game.beginMovePlayer('down');
            break;
        case 'd':
            game.beginMovePlayer('right');
            break;
    }
});

document.addEventListener('keyup', event => {
    switch(event.key.toLowerCase()) {
        case 'w':
            game.endMovePlayer('up');
            break;
        case 'a':
            game.endMovePlayer('left');
            break;
        case 's':
            game.endMovePlayer('down');
            break;
        case 'd':
            game.endMovePlayer('right');
            break;
    }
});