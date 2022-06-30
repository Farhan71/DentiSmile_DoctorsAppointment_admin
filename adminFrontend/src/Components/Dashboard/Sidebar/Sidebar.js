import React from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faSignOutAlt, faCalendar, faGripHorizontal, faUsers, faSignIn } from '@fortawesome/free-solid-svg-icons';
import {  faFileAlt } from '@fortawesome/free-regular-svg-icons'

const Sidebar = () => {
    const handleSubmit = () => {
        const success = {name:"", email: "", error:""};
        success.name = "";
        success.email = "";
        success.error = "";
        sessionStorage.setItem('user', JSON.stringify(success));
    }
    return (
        <div className="sidebar d-flex flex-column justify-content-between col-md-2 py-5 px-4" style={{height:"100vh"}}>
            <ul className="list-unstyled">
            <li>
                    <a href="/login" className="text-white">
                        <FontAwesomeIcon icon={faSignIn} /> <br /> <span>Login</span> 
                    </a>
                </li>
                <li>
                    <a href="/dashboard" className="text-white">
                        <FontAwesomeIcon icon={faGripHorizontal} /> <br /> <span>Dashboard</span> 
                    </a>
                </li>
                <li>
                    <a href="/doctors" className="text-white">
                        <FontAwesomeIcon icon={faCalendar} /> <br /> <span>Doctors</span> 
                    </a>
                </li>
                <li>
                    <a href="/allPatients" className="text-white">
                        <FontAwesomeIcon icon={faUsers} /> <br /> <span>Patients</span>
                    </a>
                </li>
                {/* <li>
                    <Link to="/doctor/prescriptions" className="text-white">
                        <FontAwesomeIcon icon={faFileAlt} /> <br /> <span>Prescriptions</span>
                    </Link>
                </li> */}
                <li>
                    <a href="/adminSettings" className="text-white" >
                      <FontAwesomeIcon icon={faCog} /> <br /> <span>Setting</span>
                    </a>
                </li>
            
            </ul>
            <div>
                <a href="/" className="text-white" onClick={handleSubmit}><FontAwesomeIcon icon={faSignOutAlt} /> <span>Logout</span></a>
            </div>
        </div>
    );
};

export default Sidebar;