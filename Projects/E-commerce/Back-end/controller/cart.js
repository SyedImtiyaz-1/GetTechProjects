const mongoose=require('mongoose')
const users=require('../mongodb/dbconnect')
require('dotenv').config();
const Usages=require('../mongodb/loginSchema')
const Addtocart=async(req,res)=>{
    try{
    await mongoose.connect(process.env.DATA_BASE)
    let details=await Usages.find({_id:req.query._id})
    let val=details[0].id.filter(item=>item!==req.query.id)
    console.log('first',val)
    val.push(req.query.id)
    let updated=await Usages.findByIdAndUpdate(req.query._id,{id:val})
    console.log(updated)
     res.status(200).send('Successfully added in the cart')
}catch(err){
        res.status(501).send('Internal Error')
      }
        finally{
          await mongoose.disconnect()
        }
}
const cartRemove=async(req,res)=>{
    try{
        await mongoose.connect(process.env.DATA_BASE)
    let value=await Usages.findById(req.body.id)
    let getTheId=value.id.filter(item=>item!==req.body._id)
    let users=await Usages.findByIdAndUpdate(req.body.id,
        {$set:{id:getTheId}},
        {new:true})
    res.status(200).send(users)
}
catch(err){
    res.status(501).send('Internal server Error')
}
finally{
    await mongoose.disconnect()
}
}
const orderDetails=async(req,res)=>{
    try{
    res.send('ok')
    }
    catch(err){
        res.status(501).send('Internal server Error')
    }
    
}

const cart=async(req,res)=>{
        await mongoose.connect(process.env.DATA_BASE)
    let userdetails=await Usages.findById(req.body._id).maxTimeMS(100000)
    let using =userdetails.id.map(async(item) => await users.findById(item)
    .select('_id category productName MRPprize SELLprize img.url'));
Promise.all(using)
    .then((results) => {
        res.send(results);
    })
    .catch((error) => {
        console.error('Error:', error);
    });
}

module.exports={Addtocart,cart,cartRemove,orderDetails}
