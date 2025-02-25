import EventEmitter from "events";

// Creating instance
const customEmitter = new EventEmitter();
const customEmitterOne = new EventEmitter();

// 1: on : listen / register for an event
// 2: once : listen for an event but only once
// 3: emit : emit /  call an event

customEmitter.on("res", (name, id) => {
  console.log(`data recieved user ${name} with id:${id}`);
});

customEmitterOne.once("res", (name, id) => {
    console.log(`data recieved user ${name} with id:${id}`);
  });

customEmitter.emit('res', 'john', 34);
customEmitter.emit('res', 'Alex', 14);

customEmitterOne.emit('res', 'john', 34);
customEmitterOne.emit('res', 'Alex', 14);
// customEmitterOnce is called only once no matter how many emits are there.
