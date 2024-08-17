import { useEffect, useState } from "react";
import { API_URL } from "./constant";

const useRestaurentMenu = (id) =>{

    const [resInfo, setResInfo] = useState(null);


    useEffect(()=>{
        fetchMenu();
    }, [])

    const fetchMenu = async ()=>{
        const data = await fetch(API_URL + id);

        const json = await data.json();
        
        setResInfo(json)
    }
    
    return resInfo;
}

export default useRestaurentMenu;