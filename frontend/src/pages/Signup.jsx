import { useState } from "react";
import { BottomWarning } from "../components/Bottomwarning";
import { Button } from "../components/Button";
import { Input } from "../components/Input";
import { Heading } from "../components/Heading";
import { Subheading } from "../components/Subheading";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export const Signup = () => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    return (
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading props="Sign Up" />
                    <Subheading props="Create an account to continue!" />
                    <Input placeholder="Anany" props="FirstName" onChange={e => setFirstName(e.target.value)} />
                    <Input placeholder="Singh" props="LastName" onChange={e => setLastName(e.target.value)} />
                    <Input placeholder="anany123@gmail.com" props="Email" onChange={e => setEmail(e.target.value)} />
                    <Input placeholder="********" props="Password" onChange={e => setPassword(e.target.value)} />
                    <div>
                        <Button props="Sign Up" onClick={async () => {
                            const response = await axios.post("http://localhost:3000/api/v1/user/signup", {
                                username: email,
                                firstName,
                                lastName,
                                password
                            });
                            localStorage.setItem("token", response.data.token)
                            navigate("/dashboard")
                        }} />
                    </div>
                    <BottomWarning props={"Already have an account?"} buttontext={"Login"} to={"/signin"} />
                </div>
            </div>
        </div>
    )
}