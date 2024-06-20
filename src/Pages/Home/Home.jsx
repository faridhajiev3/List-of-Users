import React from 'react'
import { useEffect } from 'react'
import api from '../../api/api'
import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

function Home() {
    const [data, setData] = useState([])
    const navigate = useNavigate()
    useEffect(() => {
        api.get("persons")
            .then(res => setData(res.data))
            .catch(ser => console.log(ser))
    }, [])
    console.log(data)

    const handleDelete = (id)=>{
        const confirm = window.confirm("Bu prosesi həyata keçirmək istəyisiniz")
        if(confirm){
            api.delete("persons/"+id)
            .then(res=>{
                // navigate("/")
                location.reload()
            })
            .catch(err=>console.log(err))
        }
    }
    return (
        <div className='d-flex flex-column justify-content-center align-items-center bg-light vh-100'>
            <h1>List of Users</h1>
            <div className='w-75 rounded bg-white border shadow p-4'>
                <div className="d-flex justify-content-end">
                    <Link to="/create" className='btn btn-success'>Add +</Link>
                </div>
                <table className='table table-striped'>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Phone</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            data.map((item, index) => (
                                <tr key={index}>
                                    <td >{item.number}</td>
                                    <td >{item.name}</td>
                                    <td >{item.email}</td>
                                    <td >{item.phone}</td>
                                    <td>
                                        <Link to={`/read/${item.id}`} className='btn btn-sm btn-info me-2'>Read</Link>
                                        <Link to={`/update/${item.id}`} className='btn btn-sm btn-primary me-2'>Edit</Link>
                                        <button onClick={e => handleDelete(item.id)} className='btn btn-sm btn-danger'>Delete</button>
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default Home