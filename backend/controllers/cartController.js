import userModel from "../models/userModel.js";
//Add to cart
const addToCart = async (req, res) => {
    try{
        let userData=await userModel.findById(req.body.userId);
        let cartData=await userData.cartData;
        if(!cartData[req.body.itemId]){
            cartData[req.body.itemId]=1;
        }
        else{
            cartData[req.body.itemId]+=1;
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success: true, message: "Item added to cart"});
    }
    catch(error){
        console.log(error);
        return res.json({success: false, message: "Error"});
    }
}
//Get cart items
const getCart = async (req, res) => {
    try{    
        let userData=await userModel.findById(req.body.userId);
        let cartData=await userData.cartData;
        res.json({success: true, cartData}); 
    }
    catch(error){
        console.log(error);
        return res.json({success: false, message: "Error"});
    }
}
//Remove cart items
const removeFromCart = async (req, res) => {
    try{
        let userData=await userModel.findById(req.body.userId);
        let cartData=await userData.cartData;
        if(cartData[req.body.itemId]>0){
            cartData[req.body.itemId]-=1;
        }
        if(cartData[req.body.itemId]<=0){
            delete cartData[req.body.itemId];
        }
        await userModel.findByIdAndUpdate(req.body.userId,{cartData});
        res.json({success: true, message: "Item removed from cart"});
    }
    catch(error){
        console.log(error);
        return res.json({success: false, message: "Error"});
    }
}

export { addToCart, getCart, removeFromCart }