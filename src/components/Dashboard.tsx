import {useParams} from "react-router";


const Dashboard = () => {

    const { id } = useParams();

    return (
        <div style={{margin: "3rem 2rem"}}>

            <div>
                <p>Welcome to Parent Dashboard</p>
                <p>for phone: {id}</p>
            </div>

            <p style={{marginTop: "2rem"}}>Today's date: {(new Date()).toDateString()}</p>

            <div style={{marginTop: "5rem"}}>
                <p>Did the student enter the bus today? <br/>No</p>
            </div>


        </div>
    )

}

export default Dashboard;