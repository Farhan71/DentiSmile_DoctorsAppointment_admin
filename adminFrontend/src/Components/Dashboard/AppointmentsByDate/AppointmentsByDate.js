import React from 'react';
import AppointmentDataTable from '../AppointmentDataTable/AppointmentDataTable';
import AppointmentShortList from '../AppointmentShortList/AppointmentShortList';

const AppointmentsByDate = ({ appointments }) => {
    console.log("hello"+appointments);
    return (
        <div>
            <h3 className="text-brand text-center">Appointments</h3>
            <small>Click a date on the calendar to see the appointments</small>
            {
                appointments.length ?
                 <AppointmentShortList appointments={appointments} ></AppointmentShortList>
                :
                <div className="p-5">
                    <h4 className="lead text-center">No Appointments for this Date</h4>
                </div>
            }
        </div>
    );
};

export default AppointmentsByDate;