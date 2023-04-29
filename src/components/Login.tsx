import React, {useState} from "react";
import {useNavigate} from "react-router";
import schoolBus from "../assests/bus.png";


const Login = () => {

    const nav = useNavigate();

    const [number, setNumber] = useState<string | null>();

    const onSubmit = () => {
        nav("/dashboard/" + number);
    }


    return (
        <div className={"login"}>
            <div>
                <div>
                    <h2 className={"entry login-title"}>Parent Account Login</h2>
                    <div style={{display: "flex", gap: "1rem"}}>
                        <h3 className={"entry"}>Phone number: </h3>
                        <input onChange={event => {
                            console.log(event.target.value)
                            setNumber(event.target.value)
                        }
                        } className={"entry tel"} type={"tel"} placeholder={"+971..."}/>
                    </div>
                </div>
                <input onClick={onSubmit} className={"entry submit"} type={"submit"}/>
            </div>
            <img className={"bus"} src={schoolBus}/>

        </div>
    )
}

export default Login;