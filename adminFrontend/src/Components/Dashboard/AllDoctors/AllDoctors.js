import React, { useEffect, useState } from 'react';
import DoctorDataTable from '../DoctorDataTable/DoctorDataTable';
import Sidebar from '../Sidebar/Sidebar';


const AllDoctors = () => {
    const [doctors, setDoctors] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/doctors')
            .then(res => res.json())
            .then(data => setDoctors(data))
    }, [])

    return (
        <div className="container-fluid row " >
            <Sidebar></Sidebar>
            <div className="col-md-10 p-4 pr-5" style={{ position: "absolute", right: 0, backgroundColor: "#cac5db" }}>
                <h5 className="text-brand">All Doctors</h5>
                <DoctorDataTable  doctors={doctors}></DoctorDataTable>
                
            </div>
        </div>
    );
};

export default AllDoctors;