import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom'
import api from '../../api/api'

function Update() {
  const [values, setValues] = useState({
    number: "",
    name: "",
    email: "",
    phone: "",
    website:""
  })
  const [data, setData] = useState([])
  const { id } = useParams()
  const navigate = useNavigate()
  useEffect(() => {
    api.get("persons/" + id)
      .then(res => setValues(res.data))
      .catch(err => console.log(err))
  }, [])
  const handleUpdate = (event) => {
    event.preventDefault()
    api.put("persons/" + id, values)
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
          <h1>Update User</h1>
          <form onSubmit={handleUpdate}>
            <div className='mb-2'>
              <label htmlFor="number">Number:</label>
              <input type="number" name='number' className='form-control' placeholder='Enter Number'
                value={values.number} onChange={e => setValues({ ...values, number: e.target.value })}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="name">Name:</label>
              <input type="text" name='name' className='form-control' placeholder='Enter Name'
                value={values.name} onChange={e => setValues({ ...values, name: e.target.value })}
              />
            </div>
            <div className='mb-2'>
              <label htmlFor="email">Email:</label>
              <input type="email" name='email' className='form-control' placeholder='Enter Email'
                value={values.email} onChange={e => setValues({ ...values, email: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="email">Phone:</label>
              <input type="text" name='phone' className='form-control' placeholder='Enter Phone'
                value={values.phone} onChange={e => setValues({ ...values, phone: e.target.value })}
              />
            </div>
            <div className='mb-3'>
              <label htmlFor="website">Website:</label>
              <input type="text" name='website' className='form-control' placeholder='Enter Website'
                value={values.website} onChange={e => setValues({ ...values, website: e.target.value })}
              />
            </div>
            <button className='btn btn-success'>Update</button>
            <Link to="/" className='btn btn-primary ms-3'>Back</Link>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Update