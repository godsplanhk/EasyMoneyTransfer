import { useEffect, useState } from "react";
import { Button } from "./Button";
import { Inputbox } from "./InputBox";
import {useNavigate} from "react-router-dom";
import axios from 'axios';
const ADDRESS = process.env.ADDRESS;
const PORT = process.env.PORT;
export function Users(){
    const [users,setUsers]= useState([]);
    const [filter,setFilter] = useState("");

    useEffect(()=>{

        console.log(localStorage.getItem("token"));
        axios.get(`${ADDRESS}:${PORT}/api/v1/user/bulk?filter=${filter}`,{
            headers:{
                "Authorization": "Bearer "+JSON.parse(localStorage.getItem("token"))
            }
        }).then((response)=>{
            setUsers(response.data.user);
        });
    },[filter]);
    return (<>
    <div className="font-bold mt-6 text-lg">
        Users
    </div>
    <div className="my-2">
        <Inputbox onChange={(e)=>{console.log("Changed");setFilter(e.target.value)}}label={""} placeholder={"Search Users....."}/>
        <div>
            {users.map(user=><User key={user._id} user={user}/>)}
        </div>
    </div>
    </>);
};

function User({user}){
    const navigate = useNavigate();
    return <div className="flex justify-between">
        <div className="flex">
            <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                <div className="flex flex-col justify-center h-full text-xl">
                    {user.firstName[0].toUpperCase()}
                </div>
            </div>
            <div className="flex flex-col justify-center h-full">
                <div>
                    {user.firstName} {user.lastName}
                </div>
            </div>

        </div>
        <div className="flex flex-col justify-center h-full"><Button onClick={(e)=>{
            navigate(`/transfer?id=${user._id}&name=${user.firstName}`);
        }} label={"Send Money"}/></div>
    </div>
}