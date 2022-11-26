const Job = require("../models/jobModel");


exports.getAll = async (re1,res) => {
    try{
        const jobs = await Job.find()
        res.status(200).json(job)

    }catch(error){
        res.status(500).json(error)
    }
}