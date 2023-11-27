import mongoose from "mongoose";


const schema = new mongoose.Schema({
  
    name: {
        type: String
    },
      role: {
        type: String
    }
    
});

export default mongoose.model.Logins || mongoose.model("Login", schema);