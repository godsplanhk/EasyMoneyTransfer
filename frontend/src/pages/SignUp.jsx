import { useState } from "react"
import { BottomWarning } from "../components/BottomWarning"
import { Button } from "../components/Button"
import { Heading } from "../components/Heading"
import { Inputbox } from "../components/InputBox"
import { SubHeading } from "../components/SubHeading"
import { useNavigate } from "react-router-dom"
import axios from 'axios';
const ADDRESS = process.env.ADDRESS;
const PORT = process.env.PORT;
export function SignUp(){
    const [firstName,setFirstName] = useState("");
    const [LastName,setLastName] = useState("");
    const [username,setUsername] = useState("");
    const [password,setPassword] = useState("");
    const navigate = useNavigate();
    return <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="bg-white rounded-lg w-80 h-max text-center p-2 px-4">
                <Heading label={"Sign Up"}></Heading>
                <SubHeading label={"Enter your information to create an account"}/>
                <Inputbox type={"alpha"} onChange={(e)=>{setFirstName(e.target.value)}}  label={"First Name"} placeholder={"John"}/>
                <Inputbox type={"alpha"} onChange={(e)=>{setLastName(e.target.value)}} label={"Last Name"} placeholder={"Doe"}/>
                <Inputbox type={"alphanumeric"} label={"Email"} placeholder={"yourMail@gmail.com"} onChange={(e)=>setUsername(e.target.value)}/>
                <Inputbox type={"password"} label={"Password"} placeholder={"Password"} onChange={(e)=>{setPassword(e.target.value)}}/>
                <Button label={"Sign Up"} onClick={async()=>{
                    const response = await axios.post(`${ADDRESS}:${PORT}/api/v1/user/signup`,{
                        "username":username,
                        "firstName":firstName,
                        "lastName":LastName,
                        "password":password
                    });
                    localStorage.setItem("token",JSON.stringify(response.data.token));
                    navigate("/dashboard");
                }}></Button>
                <BottomWarning label={"Already have an account"} buttonText={"SignIn"} to={"/signin"}/>
            </div>
        </div>

    </div>
}