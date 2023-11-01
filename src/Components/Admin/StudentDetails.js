import Table from 'react-bootstrap/Table';
import './StudentDetails.css';
import axios from 'axios';
import { useEffect, useState } from 'react';
import DataTable from 'react-data-table-component'
import { Link } from 'react-router-dom';
function StudentDetails() {
    const [data, setData] = useState([]);
    const [filteredData, setFilteredData] = useState([]);


    const columns = [
        {
            name: 'Id',
            selector: 'id',
            sortable: true,
            grow: 1,
            cell: row => <div>{row.id}</div>,
        },
        {
            name: 'Username',
            selector: 'Username',
            sortable: true,
            grow: 2,
            cell: row => <div>{row.Username}</div>,
        },
        {
            name: 'Email',
            selector: 'Email',
            sortable: true,
            grow: 3,
            cell: row => <div>{row.Email}</div>,
        },
        {
            name: 'Action',
            selector: 'Action',
            grow: 4,
            cell:row=><div><Link to={`/readStudent/${row.id}`} className='btn btn-sm btn-outline-success'>Read</Link>
            <button className='btn btn-sm btn-outline-danger ml-4'
                    onClick={() => handleDelete(row.id)}>Delete</button></div>,
        }
    ];


    useEffect(() => {
        axios.post('http://localhost:8081/read/')
            .then(res => {
                setData(res.data);
                setFilteredData(res.data);
            })
            .catch(err => {
                console.log(err);
                // alert("Fail");
            });
    }, [])

    const handleFilter = (e) => {
        const searchValue = e.target.value;
        const filtered = data.filter(d =>
            d.name.toLowerCase().includes(searchValue.toLowerCase())
        );
        setFilteredData(filtered);
    };

    const handleDelete = (id) => {
        axios.delete('http://localhost:8081/delete/' + id)
            .then(res => {
                window.location.reload();
            })
            .catch(err => {
                console.log(err);
                // alert("Fail");
            });
    }
    return (
        <>
            <div className='studentTable container '>
                <input
                    type="text"
                    placeholder="Search by Name"
                    onChange={handleFilter}
                />
             
                {/* <Table className="table table-striped table-hover mt-2 myTable">
                    <thead className="table-dark">




                        <tr>

                            <th>Username</th>
                            <th>Email</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody className='studentTableBody'>
                        {data.map((signup, index) => {
                            return <tr key={index}>

                                <td>{signup.Username}</td>
                                <td>{signup.Email}</td>
                                <td>
                                    <Link to={`/readStudent/${signup.id}`} className='btn btn-sm btn-outline-success'>Read</Link>
                                    <button className='btn btn-sm btn-outline-danger ml-4'
                                        onClick={() => handleDelete(signup.id)}>Delete</button>
                                </td>
                            </tr>
                        })}
                    </tbody>
                   
                    </Table> */}
                    
                <DataTable
                    columns={columns}
                    data={filteredData}
                    pagination
                    paginationPerPage={5}
                />
            </div>
        </>
    );
}
export default StudentDetails;