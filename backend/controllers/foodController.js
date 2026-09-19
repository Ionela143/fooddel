
import foodModel from "../models/foodModel.js";
import { v2 as cloudinary } from "cloudinary";

// add food item

const addFood = async (req, res) => {

    try {

        const result = await new Promise((resolve, reject) => {

            const stream = cloudinary.uploader.upload_stream(
                {
                    folder: "food-delivery"
                },
                (error, result) => {

                    if (error) {
                        reject(error);
                    } else {
                        resolve(result);
                    }

                }
            );

            stream.end(req.file.buffer);
        });


        const food = new foodModel({
            name: req.body.name,
            description: req.body.description,
            price: req.body.price,
            category: req.body.category,
            image: result.secure_url
        });


        await food.save();

        res.json({
            success: true,
            message: "Food Added"
        });


    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: "Error"
        });

    }
};


// all food list

const listFood = async (req, res) => {

    try {

        const foods = await foodModel.find({});

        res.json({
            success: true,
            data: foods
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: "Error"
        });

    }
};


// remove food item

const removeFood = async (req, res) => {

    try {

        await foodModel.findByIdAndDelete(req.body.id);

        res.json({
            success: true,
            message: "Food Removed"
        });

    } catch (error) {

        console.log(error);

        res.json({
            success: false,
            message: "Error"
        });

    }
};


export { addFood, listFood, removeFood };

