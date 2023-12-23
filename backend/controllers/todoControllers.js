const Todo= require("../models/todoModel");

const getTodos=async(req,res)=>{
    try{
        const todos=await Todo.find({});
        res.json(todos);
    }catch(err){
        console.log(err);
    }
};

const createTodo=async(req,res)=>{
    try{
        const todo= await new Todo({
            title:req.body.title,
        });
        todo.save();
        res.json(todo);
    }
    catch(err){   
        console.log(err);
    }
};

const deleteTodo=async(req,res)=>{
    try{
        const todo=await Todo.findByIdAndDelete(req.params.id);
        res.json(todo);
    }catch(err){
        console.log(err);
    }
};

const updateTodo=async(req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id);
        todo.complete=!todo.complete;
        todo.save();
        res.json(todo);
    }catch(err){
        console.log(err);
    }
};

const toggleTodoStatus=async(req,res)=>{
    try{
        const todo=await Todo.findById(req.params.id);
        todo.complete=!todo.complete;
        todo.save();
        res.json(todo);
    }catch(err){
        console.log(err);
    }
};
exports.getTodos = getTodos;
exports.createTodo = createTodo;
exports.deleteTodo = deleteTodo;
exports.toggleTodoStatus = toggleTodoStatus;
exports.updateTodo = updateTodo;