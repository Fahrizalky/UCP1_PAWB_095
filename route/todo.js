const { json } = require('body-parser');
const express = require('express');
const router = express.Router; 


Route.get('/',(req, res)=> {res.json(todos);});

const todos =[
    {id: 1,
        tugas: "data pertama",
    },
    {id : 2,
        tugas: "data kedua",

    }
]





module.exports = router;

router.delete('/:id', (req, res) => {
    const todoIndex = todos.findIndex(t => t.id === parseInt(req.params.id));
    if (todoIndex === -1) return res.status(404).json({ message: 'Tugas tidak ditemukan' });

    const deletedTodo = todos.splice(todoIndex, 1)[0];
    res.status(200).json({ message: `Tugas '${deletedTodo.task}' telah dihapus` });
});

//
router.put('/:id', (req, res) => {
    const todo = todos.find(t => t.id === parseInt(req.params.id));
    if (!todo) return res.status(404).json({ message: 'Tugas tidak ditemukan' });

    todo.task = req.body.task || todo.task;

    res.status(200).json({
        message: `Tugas dengan ID ${todo.id} telah diperbarui`,
        updatedTodo: todo
    });
});

