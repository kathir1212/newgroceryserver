
 
import Address from "../models/address.js";
import jwt from "jsonwebtoken"



export const addAddress = async (req,res)=>{


try{
  const { address , userId } = req.body;
  console.log(req.body,"bobyby");
  
  const response = await Address.create({...address, userId})


  res.json({success:true , message:response})
}
catch(error){
  res.json({success:false , message:error.message})

}
}



export const getAddress = async (req, res) => {
  try {
    const token = req.cookies.token;
    if (!token) return res.status(401).json({ success: false, message: 'No token found' });

    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    const userId = decoded.userId;

    const address = await Address.find({ userId });

    res.json({ success: true, address });
  } catch (error) {
    res.json({ success: false, message: error.message });
  }
};



