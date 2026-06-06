import { createContext, useEffect } from 'react';
import axios from 'axios';
export const StoreContext = createContext(null)
import { useState} from 'react';
const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = import.meta.env.VITE_BACKEND_URL;
    const [token, setToken] = useState(localStorage.getItem("token") || "");
    const [food_list, setFoodList] = useState([]);

    const addToCart =async (itemId) => {
        if(!cartItems[itemId]){
            setCartItems(prev => ({...prev, [itemId]: 1}))
        }
        else{
            setCartItems(prev => ({...prev, [itemId]: prev[itemId]+1}))
        }
        if(token){
            await axios.post(url+"/api/cart/add", {itemId}, {headers: {token}})  
        }
    }
    const removeFromCart = async (itemId) => {
        setCartItems((prev) =>({...prev, [itemId]: prev[itemId]-1}))
        if(token){
            await axios.post(url+"/api/cart/remove", {itemId}, {headers: {token}})  
        }
    }



    const getTotalCartAmount = () => {
        let totalAmount = 0;
           for(const item in cartItems){
               if(cartItems[item]>0){
                   let itemInfo = food_list.find((product) => product._id === item);
                   totalAmount += cartItems[item] * itemInfo.price;
               }
           }
        return totalAmount;
    
}
    const fetchFoodList=async()=>{
        const response = await axios.get(url+"/api/food/list");
        setFoodList(response.data.data);
    }
    const loadCartData = async (token) => {
        const response = await axios.post(url+"/api/cart/get", {}, {headers: {token}});
            setCartItems(response.data.cartData);
        }


    //not log out if refresh and token is present in local storage
    useEffect(() => {
        async function loaData() {
            await fetchFoodList();
            if(localStorage.getItem("token")){
            setToken(localStorage.getItem("token"));
            await loadCartData(localStorage.getItem("token"));
        }
        }
        loaData();
    }, [])


    const contextValue = {
        food_list,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCartAmount,
        url,
        token,
        setToken
    }
    
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider