import { Router } from 'express';

//to import named export
//for default export no curly braces needed
import { Todo } from '../models/todos';

const router = Router();



let todos: Todo[] = [];

router.get('/', (req, res, next) => {
    res.status(200).json({ totdos: todos});
});

router.post('/', (req,res, next) => {
    const newTodo: Todo = {
        id: new Date().toISOString(),
        todoText: req.body.text,
    }

    todos.push(newTodo);
    res.status(200).json({ todos: todos});
});


router.put('/todos/:todoid', (req,res,next) => {
    const todoIndex = todos.findIndex(todos => todos.id === req.params.todoid);
    if(todoIndex >= 0){
        todos[todoIndex].todoText = req.body.text;

        return res.status(200).json({updatedTodo: todos[todoIndex]});
    }
    res.status(404).json({message: 'todo not found'});
});

router.delete('/todos/:todoid', (req, res, next) => {
    const todoIndex:number = todos.findIndex(todos => todos.id === req.params.todoid);
    if(todoIndex >= 0){
        todos = todos.filter(elem => elem.id !== req.params.todoid);

        return res.status(200).json({latestTodos: todos});
    }
    res.status(404).json({message: 'todo not found'});
})

 export default router;

