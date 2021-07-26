const EventEmitter = require('events')

const customEmitter = new EventEmitter()

customEmitter.on('res', () => {
    console.log(`send data`);
})
customEmitter.on('res', (name, age) => {
    console.log(`send data ${name} is ${age} old`);
})

customEmitter.emit('res', 'b3rking', 23)