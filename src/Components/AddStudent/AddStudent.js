import {FormControl, InputLabel, MenuItem, Select, TextField } from '@mui/material';
import React from 'react';
import Swal from 'sweetalert2';


const AddStudent = () => {
    const [className, setClassName] = React.useState('');
    const [division, setDivision] = React.useState('');

    const handleClass = (event) => {
        setClassName(event.target.value);
    };
    const handleDivision = (event) => {
        setDivision(event.target.value);
    };

    const handleAddStudent = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const middleName = e.target.middleName.value;
        const lastName = e.target.lastName.value;
        const rollNumber = e.target.rollNumber.value;
        const addressLine1 = e.target.addressLine1.value;
        const addressLine2 = e.target.addressLine2.value;
        const landMark = e.target.landMark.value;
        const city = e.target.city.value;
        const pinCode = e.target.pinCode.value;

        const AddStudent = {
            firstName,
            middleName,
            lastName,
            className,
            division,
            rollNumber,
            addressLine1,
            addressLine2,
            landMark,
            city,
            pinCode,
        };
        console.log(AddStudent);

        fetch("http://localhost:5000/addStudent", {
            method: "POST",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(AddStudent),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log(data);
                if (data) {
                    Swal.fire(
                        'Good job!',
                        'Added Successfully!',
                        'success'
                      )
                    e.target.reset();
                }
            });
    };

    return (
        <div className='mr-10'>
            <div className='flex justify-between'>
                <h2 className='font-semibold'>Add Student</h2>
                <h2>25 Jul 2022 16:10</h2>
            </div>
            <div className='mt-5'>
                <form onSubmit={handleAddStudent}>
                    <div className='flex justify-between'>
                        <TextField
                            sx={{ width: '37ch' }}
                            id="outlined-basic"
                            label="First Name"
                            variant="outlined"
                            type="text" name="firstName" />

                        <TextField
                            sx={{ width: '37ch' }}
                            id="outlined-basic"
                            label="Middle Name"
                            variant="outlined"
                            type="text" name="middleName" />

                        <TextField
                            sx={{ width: '37ch' }}
                            id="outlined-basic"
                            label="Last Name"
                            variant="outlined"
                            type="text" name="lastName" />
                    </div>
                    <div className='flex justify-between mt-4'>
                        <FormControl sx={{ width: '37ch' }}>
                            <InputLabel id="demo-simple-select-label">Select Class</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={className}
                                label="Class"
                                onChange={handleClass}
                            >
                                <MenuItem value={1}>1</MenuItem>
                                <MenuItem value={2}>2</MenuItem>
                                <MenuItem value={3}>3</MenuItem>
                                <MenuItem value={4}>4</MenuItem>
                                <MenuItem value={5}>5</MenuItem>
                                <MenuItem value={6}>6</MenuItem>
                                <MenuItem value={7}>7</MenuItem>
                                <MenuItem value={8}>8</MenuItem>
                                <MenuItem value={9}>9</MenuItem>
                                <MenuItem value={10}>10</MenuItem>
                                <MenuItem value={11}>11</MenuItem>
                                <MenuItem value={12}>12</MenuItem>
                            </Select>
                        </FormControl>
                        <FormControl sx={{ width: '37ch' }}>
                            <InputLabel id="demo-simple-select-label">Select Division</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                value={division}
                                label="division"
                                onChange={handleDivision}
                            >
                                <MenuItem value={'A'}>A</MenuItem>
                                <MenuItem value={'B'}>B</MenuItem>
                                <MenuItem value={'C'}>C</MenuItem>
                                <MenuItem value={'D'}>D</MenuItem>
                                <MenuItem value={'E'}>E</MenuItem>
                            </Select>
                        </FormControl>
                        <TextField
                            sx={{ width: '37ch' }}
                            id="outlined-basic"
                            label="Enter Roll Number in Digits"
                            variant="outlined"
                            type="number" name="rollNumber"
                            min="1" max="99"
                        />

                       
                    </div>
                    <div className='mt-12 flex justify-between'>
                    {/* <input type="number" name="rollNumber" id="" min="1" max="99"/> */}
                        <TextField
                            sx={{ width: '56ch' }}
                            id="outlined-multiline-static"
                            label="Address Line 1"
                            multiline
                            rows={1}
                            type="textArea" name="addressLine1"
                        />
                        <TextField
                            sx={{ width: '57ch' }}
                            id="outlined-multiline-static"
                            label="Address Line 2"
                            multiline
                            rows={1}
                            type="textArea" name="addressLine2"
                        />
                    </div>
                    <div className='mt-5 flex justify-between'>
                        <TextField
                            sx={{ width: '37ch' }}
                            id="outlined-basic"
                            label="LandMark"
                            variant="outlined"
                            type="text" name="landMark" />

                        <TextField
                            sx={{ width: '37ch' }}
                            id="outlined-basic"
                            label="City"
                            variant="outlined"
                            type="text" name="city" />

                        <TextField
                            sx={{ width: '37ch' }}
                            id="outlined-basic"
                            label="Pincode"
                            variant="outlined"
                            type="text" name="pinCode" />
                    </div>
                    <div className='mt-8'>
                        <input className='bg-red-500 px-28 py-4 rounded cursor-pointer text-white font-bold' type="submit" value="Add Student" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddStudent;