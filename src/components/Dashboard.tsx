import {useParams} from "react-router";
import {useEffect, useState} from "react";


interface Student {
    phoneNum: string;
    name: string;
    image: string;
    present: boolean;
    location: {
        latitude: number;
        longitude: number;
    } | undefined;
}

const Dashboard = () => {

    const { id } = useParams();

    const [student, setStudent] = useState<Student | null | undefined>(null);

    useEffect(() => {

        fetch("https://bus.uaeu.space/students/phone/" + id).then(value =>{

            if (!value.ok) {
                setStudent(undefined);
                return;
            }

            value.json().then((json) => {
                setStudent(json);
            })
        }).catch(() => setStudent(undefined));

    }, [id]);

    if (student === undefined) {
        return (
            <div style={{margin: "3rem 2rem"}}>

                <div>
                    <h1>Welcome to Parent Dashboard</h1>
                    <h1>for phone: <span style={{fontWeight: "normal"}}>{id}</span></h1>
                </div>

                <h3 style={{marginTop: "2rem"}}>Today's date {(new Date()).toDateString()}</h3>

                <div style={{marginTop: "5rem"}}>
                    <h4>Student not found</h4>
                </div>
            </div>
        )
    }

    if (student == null) {
        return (
            <div style={{margin: "3rem 2rem"}}>

                <div>
                    <h1>Welcome to Parent Dashboard</h1>
                    <h1>for phone: <span style={{fontWeight: "normal"}}>{id}</span></h1>
                </div>

                <h3 style={{marginTop: "2rem"}}>Today's date {(new Date()).toDateString()}</h3>

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

            <h3 style={{marginTop: "2rem"}}>Today's date {(new Date()).toDateString()}</h3>

            <div style={{marginTop: "5rem"}}>
                <h4>
                    <img src={student.image} style={{width: "100px", height: "100px", borderRadius: "99999px", marginRight: "12px"}}/>
                    <span style={{fontWeight: "normal"}}>{student.name}</span></h4>
            </div>

            <div style={{marginTop: "5rem"}}>
                <h4>Did the student enter the bus today? <span style={{fontWeight: "normal"}}><br/>{student.present? "Yes": "No"}</span></h4>
            </div>

            {student.location && (
                <div style={{marginTop: "5rem"}}>
                    <h4>Location: <a href={`https://maps.google.com/?q=${student.location.latitude},${student.location.longitude}`}>https://maps.google.com/?q={student.location.latitude},{student.location.longitude}</a></h4>
                </div>
            )}

        </div>
    )

}

export default Dashboard;