import React from 'react';

const DoctorDataTable = ({doctors}) => {
    return (
        <table className="table table-bordered">
        <thead>
            <tr>
            <th className="text-secondary text-left" scope="col">Sr No</th>
            <th className="text-secondary" scope="col">Name</th>
            <th className="text-secondary" scope="col">expertiseArea</th>
            <th className="text-secondary" scope="col">qualifications</th>
            {/* <th className="text-secondary" scope="col">Gender</th>
            <th className="text-secondary" scope="col">Age</th>
            <th className="text-secondary" scope="col">Weight</th> */}
            <th className="text-secondary" scope="col">Phone</th>
            <th className="text-secondary" scope="col">Email</th>
            <th className="text-secondary" scope="col">chamberDays</th>
            {/* <th className="text-secondary" scope="col">Doctor</th> */}
            </tr>
        </thead>
        <tbody>
            {
              doctors.map((doctors, index) => 
                    
                <tr>
                    <td>{index + 1}</td>
                    <td>{doctors.name}</td>
                    <td>{doctors.expertiseArea}</td>
                    <td>{doctors.qualifications}</td>
                    {/* <td>{appointment.gender}</td>
                    <td>{appointment.age}</td>
                    <td>{appointment.weight}KG</td> */}
                    <td>{doctors.phone}</td>
                    <td>{doctors.email}</td>
                    <td>{doctors.chamberDays.join("  ")}</td>
                    {/* <td>{appointment.service}</td> */}
                </tr>
                )
            }
        </tbody>
    </table>
    );
};

export default DoctorDataTable;