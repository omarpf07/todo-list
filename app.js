const argv = require('./cfg/yargs').argv;
const toDo = require('./todo/todo');
const colors = require('colors');
let command = argv._[0];

switch (command) {
    case 'create':
        const TASK = toDo.create(argv.description);
        console.log(TASK);
        break;
    case 'view':
        let list = toDo.getTasks();
        for (let task of list) {
            console.log('===================================TO-DO========================='.blue);
            console.log('Description: '.rainbow, task.desc.cyan);
            console.log(`Task number: #${task.number}`.blue);
            console.log('Status: '.blue, task.completed === true ? 'Completed'.green : 'Not Completed'.red);
            console.log('=================================================================='.blue);
        }
        break;
    case 'update':
        let upd = toDo.update(argv.number, argv.completed);
        console.log(upd);
        break;
    case 'delete':
        let del = toDo.deleteDb(argv.number);
        console.log(del);
        break;
    case 'hard-delete':
        let hd = toDo.hardDelete(argv.description);
        console.log(hd);
        break;
    default:
        console.error(`"${command}" is not a valid option.`);
        break;
}