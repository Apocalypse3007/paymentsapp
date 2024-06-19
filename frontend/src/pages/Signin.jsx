import { BottomWarning } from "../components/Bottomwarning";
import{Button} from "../components/Button";
import { Input } from "../components/Input";
import{Heading} from "../components/Heading";
import {Subheading} from "../components/Subheading";

export const Signin = () => {
    return(
        <div className="bg-slate-300 h-screen flex justify-center">
        <div className="flex flex-col justify-center">
            <div className="rounded-lg bg-white w-80 text-center p-2 h-max px-4">
                <Heading props="Sign In" />
                <Subheading props="Enter your details below" />
                <Input placeholder="anany123@gmail.com" props="Email" />
                <Input placeholder="********" props="Password" />
                <div>
                    <Button props="Sign In" />
                </div>
                <BottomWarning props={"Don't have an account?"} buttontext ={"SignUp"} to={"/signup"} />
            </div>
        </div>
    </div>
    )
}
