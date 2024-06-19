import { BottomWarning } from "../components/Bottomwarning";
import{Button} from "../components/Button";
import { Input } from "../components/Input";
import{Heading} from "../components/Heading";
import {Subheading} from "../components/Subheading";


export const Signup = () => {
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
            <div className="flex flex-col justify-center">
                <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                    <Heading props="Sign Up" />
                    <Subheading props="Create an account to continue!" />
                    <Input placeholder="Anany" props="FirstName" />
                    <Input placeholder="Singh" props="LastName" />
                    <Input placeholder="anany123@gmail.com" props="Email" />
                    <Input placeholder="********" props="Password" />
                    <div>
                        <Button props="Sign Up" />
                    </div>
                    <BottomWarning props={"Already have an account?"} buttontext ={"Login"} to={"/signin"} />
                </div>
            </div>
        </div>
    )
}