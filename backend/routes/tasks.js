const express = require('express');
const router = express.Router();
const Task = require('../models/Task')

// ROUTES
//get - get all tasks
//post -  eg submit a new task to the list (give info)
//delete - delete data
//patch - update a resource
//first parameter = route

// Retrieve all tasks
router.get('/', async (req, res) => {
    try {
        const tasks = await Task.find();
        res.json(tasks);
    } catch {
        res.json({ message: err })
    }
});

// Delete a specific book
router.delete('/:taskId', async (req, res) => {
    try {
        const removedTask = await Task.deleteOne({ _id: req.params.taskId })
        console.log(removedTask)
        res.json(removedTask)
    } catch {
        res.json({ message: err })
    }
})


// Submit a new Task
router.post('/', (req, res) => {
    const task = new Task({
        title: req.body.title,
    })

    task.save()
        .then(data => {
            res.status(200).json(data)
        })
        .catch(err => {
            res.status(404).json({ message: 'balls' })
        })
})

module.exports = router;