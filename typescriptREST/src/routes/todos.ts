import { Router } from 'express';

//to import named export
//for default export no curly braces needed
import { Todo } from '../models/todos';

const router = Router();

type reqBody = { text: string};
type reqParam = { todoid: string};


let todos: Todo[] = [];

router.get('/', (req, res, next) => {
    res.status(200).json({ totdos: todos});
});

router.post('/', (req,res, next) => {
    const body = req.body as reqBody;
    const newTodo: Todo = {
        id: new Date().toISOString(),
        todoText: body.text,
    }

    todos.push(newTodo);
    res.status(200).json({ todos: todos});
});


router.put('/todos/:todoid', (req,res,next) => {
    const params = req.params as reqParam;
    const body = req.body as reqBody;

    const todoIndex = todos.findIndex(todos => todos.id === params.todoid);
    if(todoIndex >= 0){
        todos[todoIndex].todoText = body.text;

        return res.status(200).json({updatedTodo: todos[todoIndex]});
    }
    res.status(404).json({message: 'todo not found'});
});

router.delete('/todos/:todoid', (req, res, next) => {
    const params = req.params as reqParam;
    const todoIndex:number = todos.findIndex(todos => todos.id === params.todoid);
    if(todoIndex >= 0){
        todos = todos.filter(elem => elem.id !== params.todoid);

        return res.status(200).json({latestTodos: todos});
    }
    res.status(404).json({message: 'todo not found'});
})

 export default router;

