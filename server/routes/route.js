import express, { Router } from "express";
import {
  addToDo,
  getAllToDos,
  toggleTodoDone,
  updateTodo,
  deleteTodo,
} from "../controllers/todo-controller.js";

const route = express.Router();

route.post("/todos", addToDo);
route.get("/todos", getAllToDos);
route.get("/todos/:id", toggleTodoDone);
route.put("/todos/:id", updateTodo);
route.delete("/todos/:id", deleteTodo);

export default route;
