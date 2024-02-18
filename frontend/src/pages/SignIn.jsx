import { useState } from "react";
import { BottomWarning } from "../components/BottomWarning";
import { Button } from "../components/Button";
import { Heading } from "../components/Heading";
import { Inputbox } from "../components/InputBox";
import { SubHeading } from "../components/SubHeading";
import axios from "axios";
import { useNavigate } from "react-router-dom";
const ADDRESS = process.env.ADDRESS;
const PORT = process.env.PORT;
export function SignIn(){
    const navigate = useNavigate();
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading label={"Sign In"}/>
                <SubHeading label={"Enter your credential to access your account"}/>
                <Inputbox onChange={(e)=>{setUsername(e.target.value)}} label={"Email"} placeholder={"yourmail@gmail.com"} type={"alphanumeric"}></Inputbox>
                <Inputbox onChange={(e)=>{setPassword(e.target.value)}}label={"Password"} placeholder={"password"} type={"password"}></Inputbox>
                <Button label={"Sign In"} onClick={async ()=>{
                    const response = await axios.post(`${ADDRESS}:${PORT}/api/v1/user/signin`,{
                        username,password
                    });
                    console.log(response.data.token);

                    localStorage.setItem("token",JSON.stringify(response.data.token));
                    navigate("/dashboard");
                }}/>
                <BottomWarning label={"Don't have an account?"} buttonText={"Sign Up"} to={"/signup"}/>
            </div>

        </div>
    </div>
}