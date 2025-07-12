const express = require('express');
const router = express.Router();
const medication = require('../models/medication');

//add a medication
router.post('/add', async(req,res)=>{
    try{
        const {name,dosage} = req.body;
        const newMed = new medication({name,dosage});
        await newMed.save();
        res.status(201).json({message: "medication added", medication: newMed})
    }catch(err){
        res.status(500).json({error:"failed to add medication"})
    }
})

//get all medications
router.get('/', async (req,res)=>{
    try{
        const meds =await medication.find();
        res.json(meds)
    }catch(err){
        res.status(500).json("failed to fetch medications")
    }
})

// mark as taken
router.patch('/mark/:id', async (req,res)=>{
    try{
        const medId = req.params.id;
        const updated = await medication.findByIdAndUpdate(medId,{takenToday:true},{new:true}) ;
        res.json({message:"marked as taken", updated})
    }catch(err){
        res.status(500).json({message:"failed to mark medication"})
    }
})

module.exports = router;