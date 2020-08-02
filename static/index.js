import Client from './Client.js'

const client = new Client();

document.addEventListener('keydown', event => {
    switch(event.key.toLowerCase()) {
        case 'w':
            client.beginMovePlayer('up');
            break;
        case 'a':
            client.beginMovePlayer('left');
            break;
        case 's':
            client.beginMovePlayer('down');
            break;
        case 'd':
            client.beginMovePlayer('right');
            break;
    }
});

document.addEventListener('keyup', event => {
    switch(event.key.toLowerCase()) {
        case 'w':
            client.endMovePlayer('up');
            break;
        case 'a':
            client.endMovePlayer('left');
            break;
        case 's':
            client.endMovePlayer('down');
            break;
        case 'd':
            client.endMovePlayer('right');
            break;
    }
});