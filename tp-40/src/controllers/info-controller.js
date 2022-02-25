import InfoService from "../services/info-service.js";

const InfoController = (req,res)=>{
    const payload = InfoService(); 
    res.status(200).render("info",{title:"Info",payload});
};  

export default {
    InfoController,
};