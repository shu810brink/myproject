import express from "express"
import {getalldata, postsignal }  from "../controller/dashboard.js";
const router = express.Router();
import { verifyUser } from "../utils/verifyToken.js"

//CREATE---//UPDATE --- DELETE -- GET----- GETALL----

router.post('/',verifyUser,postsignal)

//get all data-------
router.get('/',getalldata)

    

router.put('/:id',verifyUser,async (req,res)=>{
    try{
        const updateHotel = await signal.findByIdAndUpdate(req.params.id,{$set:req.body}).then(
            res.status(200).json(updateHotel)
        )

    }catch(err){
        res.status(500).json(err)
    }
})
export default router