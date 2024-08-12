import { Router } from "express";
import LoginController from "./auth.controller.js";

export const authRoutes = Router()
    .get('/login',LoginController.getAll) 
    .post('/login',LoginController.signUp)
    .patch('/bybalance',LoginController.updateByBalance)
    .patch('/bydate',LoginController.updateDate)
    .get('/gettournament',LoginController.getTournament)
    .post('/tasks',LoginController.getTasks)
    .post('/complate',LoginController.postcompletedTasks)
    .patch('/updatestatus',LoginController.updatestatus)
    .patch('/newspin',LoginController.updatespin)

    