import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import api from '../../api/api';

function Create() {
    const [values, setValues] = useState({
        number:"",
        name: "",
        email: "",
        phone: "",
        website: "",
    })
    const navigate = useNavigate()
    const handleSubmit = (event) => {
        event.preventDefault();
        api.post("persons", values)
            .then(res => {
                console.log(res)
                navigate("/")
            })
            .catch(ser => console.log(ser))
    }
    return (
        <div className='d-flex w-100 vh-100 flex-column justify-content-center align-items-center bg-light'>
            <div className='w-50 border bg-white shadow px-5 pt-3 pb-5 rounded'>
                <div>
                    <h1>Add a User</h1>
                    <form onSubmit={handleSubmit}>
                        <div className='mb-2'>
                            <label htmlFor="name">Number:</label>
                            <input type="number" name='number' className='form-control' placeholder='Enter Number'
                                onChange={e => setValues({ ...values, number: e.target.value })}
                            />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="name">Name:</label>
                            <input type="text" name='name' className='form-control' placeholder='Enter Name'
                                onChange={e => setValues({ ...values, name: e.target.value })}
                            />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="email">Email:</label>
                            <input type="email" name='email' className='form-control' placeholder='Enter Email'
                                onChange={e => setValues({ ...values, email: e.target.value })}
                            />
                        </div>
                        <div className='mb-2'>
                            <label htmlFor="email">Phone:</label>
                            <input type="text" name='phone' className='form-control' placeholder='Enter Phone'
                                onChange={e => setValues({ ...values, phone: e.target.value })}
                            />
                        </div>
                        <div className='mb-3'>
                            <label htmlFor="website">Website:</label>
                            <input type="text" name='website' className='form-control' placeholder='Enter Website'
                                onChange={e => setValues({ ...values, website: e.target.value })}
                            />
                        </div>
                        <button className='btn btn-success'>Submit</button>
                        <Link to="/" className='btn btn-primary ms-3'>Back</Link>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default Create