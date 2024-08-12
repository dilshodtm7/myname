import { Router } from "express";
import  {authRoutes}  from "../module/auth/auth.routes.js";

export const routes = Router()
     .use('/auth',authRoutes)