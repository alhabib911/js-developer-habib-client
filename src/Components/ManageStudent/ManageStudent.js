import React, { useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Dialog, FormControl, InputLabel, MenuItem, Modal, Select, TextField } from '@mui/material';

const ManageStudent = () => {
    const [student, setStudent] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [editModal, setEditModal] = React.useState(false);
    const [studentDetails, setStudentDetails] = useState({})
    const [className, setClassName] = React.useState('');
    const [division, setDivision] = React.useState('');

const {_id} = studentDetails
    const handleClickView = (students) => {
        setOpen(true);
        // console.log(students);
        setStudentDetails(students)
    };
    const handleClickEdit = (students) => {
        setEditModal(true);
        // console.log(students);
        setStudentDetails(students)
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleEditClose = () => {
        setEditModal(false);
    };

    useEffect(() => {
        fetch('http://localhost:5000/addStudent')
            .then((res) => res.json())
            .then((data) => setStudent(data));
    }, [student]);
    // console.log(student);
    

    const handleClass = (event) => {
        setClassName(event.target.value);
    };
    const handleDivision = (event) => {
        setDivision(event.target.value);
    };

    const handleEditStudent = (e) => {
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



        const UpdateStudent = {
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
        console.log(UpdateStudent);

        const url = `http://localhost:5000/updateStudent/${_id}`;
        fetch(url, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(UpdateStudent),
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("success", data);
                e.target.reset();
            });
    };

    return (
        <div className='mr-10'>
            <div className='flex justify-between'>
                <h2 className='font-semibold'>Manage Students</h2>
                <h2>25 Jul 2022 16:10</h2>
            </div>
            <div className='mt-10'>

                <table className="shadow-lg border-2 border-[#F33823] w-full mx-auto mt-2 mb-6 text-base overflow-hidden">
                    <thead className="text-white bg-[#F33823]">
                        <tr>
                            <th className="py-2 whitespace-nowrap text-left pl-10">
                                Name
                            </th>
                            <th className="py-2 whitespace-nowrap text-left">
                                Class
                            </th>
                            <th className="py-2 whitespace-nowrap text-right">
                                Roll No.
                            </th>
                            <th className="py-2 whitespace-nowrap text-right pr-10">
                                View/Edit/Delete
                            </th>
                        </tr>
                    </thead>
                    <tbody>
                        {student.map((students) => (
                            <tr
                                key={students._id}
                                className="hover:shadow-sm hover:bg-[#FFF6F5] duration-500 cursor-pointer border-b border-[#FFF6F5]"
                            >
                                <td className="py-2 whitespace-nowrap text-left pl-10">
                                    {students.firstName} {students.middleName} {students.lastName}
                                </td>
                                <td className="py-2 whitespace-nowrap text-left">
                                    {students.className}-{students.division}
                                </td>
                                <td className="py-2 whitespace-nowrap text-right">
                                    {students.rollNumber}
                                </td>
                                <td className="py-2 whitespace-nowrap flex justify-end pr-10 gap-10">
                                    <button onClick={() => handleClickView(students)}>
                                        <div className='text-red-500'>
                                            <FiEye />
                                        </div>
                                    </button>
                                    <button onClick={() => handleClickEdit(students)}>
                                        <div className='text-red-500'>
                                            <BiEditAlt />
                                        </div>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className='mx-10 my-10'>
                    <div className='flex justify-between'>
                        <h2 className='font-semibold'>Student Information</h2>
                        <button className='text-[#F33823]' onClick={handleClose}>
                            X
                        </button>
                    </div>

                    <div className='mt-5'>
                        <div className='flex justify-between gap-2'>
                            <TextField
                                sx={{ width: '25ch' }}
                                id="outlined-basic"
                                label="First Name"
                                variant="outlined"
                                value={studentDetails?.firstName}
                                type="text" name="firstName" />

                            <TextField
                                sx={{ width: '25ch' }}
                                id="outlined-basic"
                                label="Middle Name"
                                variant="outlined"
                                value={studentDetails?.middleName}
                                type="text" name="middleName" />

                            <TextField
                                sx={{ width: '25ch' }}
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined"
                                value={studentDetails?.lastName}
                                type="text" name="lastName" />
                        </div>

                        <div className='flex justify-between mt-4 gap-2'>
                            <TextField
                                sx={{ width: '25ch' }}
                                id="outlined-basic"
                                label="Class Name"
                                variant="outlined"
                                value={studentDetails?.className}
                                type="text" name="className" />
                            <TextField
                                sx={{ width: '25ch' }}
                                id="outlined-basic"
                                label="Division"
                                variant="outlined"
                                value={studentDetails?.division}
                                type="text" name="division" />
                            <TextField
                                sx={{ width: '25ch' }}
                                id="outlined-basic"
                                label="Roll Number"
                                variant="outlined"
                                value={studentDetails?.rollNumber}
                                type="text" name="rollNumber" />
                        </div>

                        <div className='mt-12 flex justify-between gap-2'>
                            <TextField
                                sx={{ width: '56ch' }}
                                id="outlined-multiline-static"
                                label="Address Line 1"
                                multiline
                                rows={1}
                                value={studentDetails?.addressLine1}
                                type="textArea" name="addressLine1"
                            />
                            <TextField
                                sx={{ width: '57ch' }}
                                id="outlined-multiline-static"
                                label="Address Line 2"
                                multiline
                                rows={1}
                                value={studentDetails?.addressLine2}
                                type="textArea" name="addressLine2"
                            />
                        </div>

                        <div className='mt-5 flex justify-between gap-2'>
                            <TextField
                                sx={{ width: '25ch' }}
                                id="outlined-basic"
                                label="LandMark"
                                variant="outlined"
                                value={studentDetails?.landMark}
                                type="text" name="landMark" />

                            <TextField
                                sx={{ width: '25ch' }}
                                id="outlined-basic"
                                label="City"
                                variant="outlined"
                                value={studentDetails?.city}
                                type="text" name="city" />

                            <TextField
                                sx={{ width: '25ch' }}
                                id="outlined-basic"
                                label="Pincode"
                                variant="outlined"
                                value={studentDetails?.pinCode}
                                type="text" name="pinCode" />
                        </div>
                    </div>
                </div>
            </Dialog>
            <Dialog
                open={editModal}
                onClose={handleEditClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className='mx-10 my-10'>
                    <div className='flex justify-between'>
                        <h2 className='font-semibold'>Student Information</h2>
                        <button className='text-[#F33823]' onClick={handleEditClose}>
                            X
                        </button>
                    </div>

                    <div className='mt-5'>
                        <form onSubmit={handleEditStudent}>
                            <div className='flex justify-between gap-2'>
                                <TextField
                                    sx={{ width: '25ch' }}
                                    id="outlined-basic"
                                    label="First Name"
                                    variant="outlined"
                                    defaultValue={studentDetails?.firstName}
                                    type="text" name="firstName" />

                                <TextField
                                    sx={{ width: '25ch' }}
                                    id="outlined-basic"
                                    label="Middle Name"
                                    variant="outlined"
                                    defaultValue={studentDetails?.middleName}
                                    type="text" name="middleName" />

                                <TextField
                                    sx={{ width: '25ch' }}
                                    id="outlined-basic"
                                    label="Last Name"
                                    variant="outlined"
                                    defaultValue={studentDetails?.lastName}
                                    type="text" name="lastName" />
                            </div>

                            <div className='flex justify-between mt-4 gap-2'>
                            <FormControl sx={{ width: '37ch' }}>
                            <InputLabel id="demo-simple-select-label">Select Class</InputLabel>
                            <Select
                                labelId="demo-simple-select-label"
                                id="demo-simple-select"
                                label="Class"
                                onChange={handleClass}
                                defaultValue={studentDetails?.className}
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
                                label="division"
                                onChange={handleDivision}
                                defaultValue={studentDetails?.division}
                            >
                                <MenuItem value={'A'}>A</MenuItem>
                                <MenuItem value={'B'}>B</MenuItem>
                                <MenuItem value={'C'}>C</MenuItem>
                                <MenuItem value={'D'}>D</MenuItem>
                                <MenuItem value={'E'}>E</MenuItem>
                            </Select>
                        </FormControl>
                                <TextField
                                    sx={{ width: '25ch' }}
                                    id="outlined-basic"
                                    label="Roll Number"
                                    variant="outlined"
                                    defaultValue={studentDetails?.rollNumber}
                                    type="text" name="rollNumber" />
                            </div>

                            <div className='mt-12 flex justify-between gap-2'>
                                <TextField
                                    sx={{ width: '56ch' }}
                                    id="outlined-multiline-static"
                                    label="Address Line 1"
                                    multiline
                                    rows={1}
                                    defaultValue={studentDetails?.addressLine1}
                                    type="textArea" name="addressLine1"
                                />
                                <TextField
                                    sx={{ width: '57ch' }}
                                    id="outlined-multiline-static"
                                    label="Address Line 2"
                                    multiline
                                    rows={1}
                                    defaultValue={studentDetails?.addressLine2}
                                    type="textArea" name="addressLine2"
                                />
                            </div>

                            <div className='mt-5 flex justify-between gap-2'>
                                <TextField
                                    sx={{ width: '25ch' }}
                                    id="outlined-basic"
                                    label="LandMark"
                                    variant="outlined"
                                    defaultValue={studentDetails?.landMark}
                                    type="text" name="landMark" />

                                <TextField
                                    sx={{ width: '25ch' }}
                                    id="outlined-basic"
                                    label="City"
                                    variant="outlined"
                                    defaultValue={studentDetails?.city}
                                    type="text" name="city" />

                                <TextField
                                    sx={{ width: '25ch' }}
                                    id="outlined-basic"
                                    label="Pincode"
                                    variant="outlined"
                                    defaultValue={studentDetails?.pinCode}
                                    type="text" name="pinCode" />
                            </div>
                            <input type="submit" value="Save" />
                        </form>
                    </div>
                </div>
            </Dialog>
        </div>
    );
};

export default ManageStudent;