const express =  require("express");
const router = express.Router();
const Job = require("../models/jobModel");
const authMiddleware = require("../middleware/authMiddleware")


router.get("/getalljobs", async(req, res) => {
  
    try {
        const jobs = await Job.find()
        res.send(jobs)
    } catch (error) {
        return res.status(400).json({ error });
    }

});

router.post('/postjob', async(req,res)=> {
    try{
        const newjob = new Job(req.body)
        await newjob.save()
        res.send({
            success:true,
            message:"Post Job successfully"
        })

    }catch(error){
        res.status(400).send({message:"Error posting job",success:false,error})

    }
})

module.exports = router;