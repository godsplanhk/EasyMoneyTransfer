import { useEffect, useState } from "react";
import { Appbar } from "../components/Appbar";
import { Balance } from "../components/Balance";
import { Users } from "../components/Users";
import axios from "axios";
export function Dashboard(){
    const [balance,setBalance] = useState(0);
    const [name,setName] = useState("T");
    useEffect(()=>{
        console.log("hello");
        axios.get("http://hk:3000/api/v1/account/balance",{headers:{
            "Authorization": "Bearer "+JSON.parse(localStorage.getItem("token"))
        }}).then((response)=>{console.log(response);setBalance(response.data.balance);setName(response.data.name)});
    },[]);
    return <div className="m-10">
    <Appbar name={name}/>
    <Balance value={balance}></Balance>
    <Users></Users>
    </div>
}