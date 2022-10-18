import signal from "../models/dashboard.js";

export const postsignal = async (req,res,next)=>{

    const newsignal = new signal(req.body) 
    try{
        const savedsignal = await newsignal.save()
        res.status(200).json(savedsignal)

    }catch(err){
        next(err)
    }

}
export const getalldata = async (req,res,next)=>{
 
    try{
        const getsignal = await signal.find({})
        res.render('dashboard',{'signals':getsignal})
        // res.status(200).json(getsignal)
        
    }catch(err){
        next(err)
    }
}
