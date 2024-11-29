const express=require('express');

const router=express.Router();

// import controller
const {createTodo}=require('../controllers/createTodo');
const {getTodo}=require('../controllers/getTodo');
const {getTodoByID}=require('../controllers/getTodoByID');
const {updateTodo}=require('../controllers/updateTodo');
const {deleteTodo}=require('../controllers/deleteTodo')

// define API Routes
router.post('/createTodo',createTodo);
router.get('/getTodo',getTodo);
router.get('/getTodo/:id',getTodoByID);
router.put('/updateTodo/:id',updateTodo);
router.delete('/deleteTodo/:id',deleteTodo);

module.exports=router;