const fs = require('fs');

let todoList = [];

const create = (desc) => {
    getDb();
    i = todoList.length
    let toDo = {
        desc,
        number: i++ + 1,
        completed: false
    };
    if (!todoList.some(t => t.desc === desc)) {
        todoList.push(toDo);
        saveDb();
        return `Task "${toDo.desc}" has been created succesfully.`.green;
    } else {
        return 'This name is already taken! Please try another one'.red;
    }

};

const saveDb = () => {
    let data = JSON.stringify(todoList);
    fs.writeFile('db/data.json', data, (err) => {
        if (err) throw new Error(`Couldn't save the file.`)
    });
}

const getDb = () => {
    try {
        todoList = require('../db/data.json');
    } catch (error) {
        todoList = [];
    }

}

const getTasks = () => {
    getDb();
    return todoList;
}

const update = (id, c) => {
    getDb();
    console.log(id);
    const index = todoList.findIndex(t => t.number === id);
    if (index >= 0) {
        todoList[index].completed = c;
        saveDb();
        return 'The task has been succesfully updated.'.green;
    } else {
        return 'Task not found :( please check the input value.'.red;
    }

}

const deleteDb = (id) => {
    console.log(id);
    getDb();
    const index = todoList.findIndex(t => t.number === id);
    if (index >= 0) {
        todoList.splice(index, 1);
        saveDb();
        return 'The task has been succesfully deleted.'.green;
    } else {
        return 'Task not found :( please check the input value.'.red;
    }
}

const hardDelete = () => {
    getDb();


    if (todoList.length > 0) {
        todoList = [];
        saveDb();
        return `The registries have been deleted successfully. I hope you know what you're doing >:(`.green;
    } else {
        return `Nothing to delete!`.gray;
    }

}

module.exports = {
    create,
    getTasks,
    update,
    deleteDb,
    hardDelete
}
