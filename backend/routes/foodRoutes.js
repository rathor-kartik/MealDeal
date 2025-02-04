import express from "express"

import { addFood, listFood, removeFood } from "../controller/foodController.js"

import multer from 'multer'

const foodRouter=express.Router();

//Image Storage engine


const Storage = multer.diskStorage({
    destination: "uploads",
    filename: (req, file, cb) => {
        return cb(null,`${Date.now()}${file.originalname}`)
    }
})

const uploads = multer({storage:Storage})

foodRouter.post("/add",uploads.single("image"),addFood)

foodRouter.get("/list",listFood)

foodRouter.post("/remove",removeFood)

export default foodRouter;
