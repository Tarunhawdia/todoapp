const express=require('express');
const router=express.Router();

const {getTodos,createTodo,deleteTodo,toggleTodoStatus,updateTodo}=require('../controllers/todoControllers');


router.get('/todos',getTodos);
router.post('/todo/new',createTodo);
router.delete('/todo/delete/:id',deleteTodo);
router.put('/todo/update/:id',updateTodo);
router.get('/todo/toggleStatus/:id',toggleTodoStatus);


module.exports=router;