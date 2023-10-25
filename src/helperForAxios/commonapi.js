import axios from "axios"




export const commonAPI=async(method,url,data)=>{

     let reqObj={
        method:method,
        url:url,
        data:data,
        headers:{
            "Content-Type":"application/json",
            
        }
     }
     
     
     return axios(reqObj).then((response)=>{
         return response
     }).catch((err)=>{
        return err
     })

} 