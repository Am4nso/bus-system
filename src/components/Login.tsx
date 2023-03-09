import React, {useState} from "react";
import {useNavigate} from "react-router";
import {Simulate} from "react-dom/test-utils";
import submit = Simulate.submit;


const Login = () => {

    const nav = useNavigate();

    const [number, setNumber] = useState<string | null>();

    const onSubmit = () => {
        nav("/dashboard/" + number);
    }


    return (
        <div className={"login"}>
            <div>
                <p className={"entry login-title"}>Parent Account Login</p>
                <label className={"entry"}>Phone number: </label>
                <input onChange={event => {
                    console.log(event.target.value)
                    setNumber(event.target.value)
                }
                } className={"entry tel"} type={"tel"} placeholder={"+971..."}/>
            </div>
            <input onClick={onSubmit} className={"entry submit"} type={"submit"}/>
        </div>
    )
}

export default Login;