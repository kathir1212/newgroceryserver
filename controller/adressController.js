
 
import Address from "../models/address.js";


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



export const getAddress = async (req,res)=>{

    try{
  const {userId} = req.body;
  const address = await Address.find({userId})

  

  

  // const token = jwt.sign({ userId }, process.env.JWT_SECRET, { expiresIn: '7d' });


  //  res.cookie('token', token, {
  //     httpOnly: true,
  //     secure: process.env.NODE_ENV === 'production',
  //     sameSite: process.env.NODE_ENV === 'production' ? 'none' : 'strict',
  //     maxAge: 7 * 24 * 60 * 60 * 1000,
  //   });

  
    


  res.json({success:true,address})
    }
    catch(error){
  res.json({success:false , message:error.message})

    }

}


