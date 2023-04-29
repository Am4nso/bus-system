import {useParams} from "react-router";
import {useEffect, useState} from "react";


const Dashboard = () => {

    const { id } = useParams();

    const [entered, setEntered] = useState<boolean | null>(null);

    useEffect(() => {

        fetch("http://bus.uaeu.space/phone").then(value =>{
            value.json().then((json) => {
                setEntered(json.includes(id!.toString()));

            })
        })

    }, []);

    if (entered == null) {
        return (
            <div style={{margin: "3rem 2rem"}}>

                <div>
                    <h1>Welcome to Parent Dashboard</h1>
                    <h1>for phone: <span style={{fontWeight: "normal"}}>{id}</span></h1>
                </div>

                <h3 style={{marginTop: "2rem"}}>Today's date: {(new Date()).toDateString()}</h3>

                <div style={{marginTop: "5rem"}}>
                    <h4>Loading...</h4>
                </div>


            </div>
        )
    }

    return (
        <div style={{margin: "3rem 2rem"}}>

            <div>
                <h1>Welcome to Parent Dashboard</h1>
                <h1>for phone: <span style={{fontWeight: "normal"}}>{id}</span></h1>
            </div>

            <h3 style={{marginTop: "2rem"}}>Today's date: {(new Date()).toDateString()}</h3>

            <div style={{marginTop: "5rem"}}>
                <h4>Did the student enter the bus today? <span style={{fontWeight: "normal"}}><br/>{entered? "Yes": "No"}</span></h4>
            </div>


        </div>
    )

}

export default Dashboard;