const express = require("express")
const { Mongoose } = require("mongoose")
const Budget = require("./models/budget_data") // new
const router = express.Router()

// Get all posts
router.get("/budget", async (req, res) => {
    
	const posts = await Budget.find()
	res.send(posts)
})
router.post("/addBudget", (req, res) => {
	const budgetData = new Budget({
		title: req.body.title,
        value: req.body.value,
        color: req.body.color,
	})
    // budgetData.save().then( console.log("Budget is save successfully"),
    // res.send(budgetData)).catch(err=> handleError(err))
    // res.send(budgetData)
    // budgetData.save().then(data =>{
    //     req.send(200).data("saved");
    // }).catch(e =>{
    //     req.send(500).send(e.message);
    // }) 

    budgetData.save()
    .then(() => res.json("Budget Added to the database successfully"),
    )
    .catch((err) => res.status(400).json("Error: " + err));
//  res.send(budgetData)
    // console.log("Data added from postman")
    
})
module.exports = router