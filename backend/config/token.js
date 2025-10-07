import jwt from 'jsonwebtoken' ;
export const gentoken = async(userid) =>{
    try{
        let token =await jwt.sign({userid} , process.env.JWT_SECRET,{expiresIn: "7d"})

    }
    catch(error){
        console.log("token expired") 
    }
}