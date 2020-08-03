import Client from './Client.js'

const canvas = document.getElementById('gameArea');

const client = new Client(canvas);

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
        case 'arrowup':
            client.beginPlayerShoot('up');
            break;
        case 'arrowleft':
            client.beginPlayerShoot('left');
            break;
        case 'arrowdown':
            client.beginPlayerShoot('down');
            break;
        case 'arrowright':
            client.beginPlayerShoot('right');
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
        case 'arrowup':
            client.endPlayerShoot('up');
            break;
        case 'arrowleft':
            client.endPlayerShoot('left');
            break;
        case 'arrowdown':
            client.endPlayerShoot('down');
            break;
        case 'arrowright':
            client.endPlayerShoot('right');
            break;
    }
});