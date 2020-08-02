import Client from './Client.js'

const canvas = document.getElementById('gameArea');

const client = new Client(canvas);

document.addEventListener('keydown', event => {
    switch(event.key.toLowerCase()) {
        case 'w':
            client.movePlayer('up');
            break;
        case 'a':
            client.movePlayer('left');
            break;
        case 's':
            client.movePlayer('down');
            break;
        case 'd':
            client.movePlayer('right');
            break;
    }
});
