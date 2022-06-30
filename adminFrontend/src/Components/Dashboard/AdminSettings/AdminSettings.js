import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import Sidebar from '../Sidebar/Sidebar';
import "./adminSettings.css"

const AdminSettings = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const [chamberDays, setChamberDays] = useState([])

    const handleCheckboxChange = (e) => {

        let newArray = [...chamberDays, e.target.id];
    if (chamberDays.includes(e.target.id)) {
      newArray = newArray.filter(day => day !== e.target.id);
    } 
    setChamberDays(
         newArray
    );
        
       
        
    }
    const onSubmit = data => {
       
        data.created = new Date();
        data.chamberDays = chamberDays;
        
        
        fetch('http://localhost:5000/addDoctor', {
            method: 'POST',
            headers: { 'content-type': 'application/json' },
            body: JSON.stringify(data)
        })
        .then(res => res.json())
        .then(success => {
            if(success){
                alert('Doctor Added Successfully.');

            }
        })        
    }
    console.log(chamberDays)
   

    return (
        <div className="container-fluid row ">
            <div className="col-md-2">
        <Sidebar></Sidebar>
        </div>
             <form className="p-5" onSubmit={handleSubmit(onSubmit)}>
                <h1>Add a Doctor</h1>
                    <div className="form-group">
                        <input type="text" {...register('name', { required: true })}  placeholder="Your Name" className="form-control" />
                        {/* {errors.name && <span className="text-danger">This field is required</span>} */}

                    </div>
 
                    <div className="form-group">
                        <input type="text" {...register('qualifications', { required: true })}  placeholder="qualifications" className="form-control" />
                        {/* {errors.phone && <span className="text-danger">This field is required</span>} */}
                    </div>

                    <div className="form-group">
                        <input type="text" {...register('expertiseArea', { required: true })}  placeholder="expertiseArea" className="form-control" />
                        {/* {errors.phone && <span className="text-danger">This field is required</span>} */}
                    </div>



                    <div className="form-group">
                        <input type="text" {...register('phone', { required: true })}  placeholder="Phone Number" className="form-control" />
                        {/* {errors.phone && <span className="text-danger">This field is required</span>} */}
                    </div>
                    <div className="form-group">
                        <input type="text" {...register('email', { required: true })} placeholder="Email" className="form-control" />
                        {/* {errors.email && <span className="text-danger">This field is required</span>} */}
                    </div>

                    <div className="form-group">
                        <input type="text" {...register('maxSerialNo', { required: true })} placeholder="Number of patients can visit everyday" className="form-control" />
                        {/* {errors.email && <span className="text-danger">This field is required</span>} */}
                    </div>

                    <div className="form-group row chamberDays">
                        
                        <div >
                        <h5 className="inner">Select chamber day(s):</h5>
                        <div className="custom-control custom-checkbox inner"  >
                                    <input type="checkbox" className="custom-control-input" id="monday" value="monday"  onChange={handleCheckboxChange}/>
                                    <label className="custom-control-label" for="monday">Monday</label>

                                </div>
                                <div className="custom-control custom-checkbox inner">
                                    <input type="checkbox" className="custom-control-input" id="tuesday" value="tuesday" onChange={handleCheckboxChange}/>
                                    <label className="custom-control-label" for="tuesday">Tuesday</label>

                                </div>
                                <div className="custom-control custom-checkbox inner">
                                    <input type="checkbox" className="custom-control-input" id="wednesday" value="wednesday" onChange={handleCheckboxChange}/>
                                    <label className="custom-control-label" for="wednesday">Wednesday</label>

                                </div>
                                <div className="custom-control custom-checkbox inner">
                                    <input type="checkbox" className="custom-control-input" id="thursday" value="thursday" onChange={handleCheckboxChange}/>
                                    <label className="custom-control-label" for="thursday">Thursday</label>

                                </div>
                                <div className="custom-control custom-checkbox inner">
                                    <input type="checkbox" className="custom-control-input" id="friday" value="friday" onChange={handleCheckboxChange}/>
                                    <label className="custom-control-label" for="friday">Friday</label>

                                </div>
                                <div className="custom-control custom-checkbox inner">
                                    <input type="checkbox" className="custom-control-input" id="saturday" value="saturday" onChange={handleCheckboxChange}/>
                                    <label className="custom-control-label" for="saturday">Saturday</label>

                                </div>
                                <div className="custom-control custom-checkbox inner">
                                    <input type="checkbox" className="custom-control-input" id="sunday" value="sunday" onChange={handleCheckboxChange}/>
                                    <label className="custom-control-label" for="sunday">Sunday</label>

                                </div>
                        </div>
                    </div>

                    <div className="form-group">
                        <button type="submit" className="btn btn-primary">Send</button>
                    </div>
                </form>  

           
                
        </div>
    );
};

export default AdminSettings;