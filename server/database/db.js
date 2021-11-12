import  mongoose  from "mongoose";


const Connection = async ()=>{


    const url = process.env.CONNECTION_URL;

    try{
       await mongoose.connect(url);
        console.log("Database is connected ")
    }
    catch(error){
        console.log("Error while connecting mongodb "+ error);
    }
}

export default Connection