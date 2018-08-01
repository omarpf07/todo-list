const description = {
    demand: true,
    alias: 'd',
    desc: 'Description of the to-do task.'
}

const number = {
    demand: true,
    alias: 'n',
    desc: 'Number of the task.'
}

const create = {
    description
}

const update = {
    number,
    completed: {
        alias: 'c',
        default: true,
        desc: 'Marks the state of the task as pending/completed.',
        type: 'boolean'
    }
}

const del = {
    number
}


const argv = require('yargs')
    .command('create', 'Creates a to-do element and adds it to the wish list.', create)
    .command('update', 'Updates the state of a wish-list task.', update)
    .command('view', 'Shows the tasks registered in the system.')
    .command('delete', 'Deletes a task by its number.', del)
    .command('hard-delete', 'Sets the registries to 0. Irreversible act.')
    .help()
    .argv;


module.exports = {
    argv
}