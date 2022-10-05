import React, { useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { AiFillCloseCircle } from 'react-icons/ai';
import { Box, Button, Dialog, Modal, TextField, Typography } from '@mui/material';

const ManageStudent = () => {
    const [student, setStudent] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [studentDetails, setStudentDetails] = useState({})

    const handleClickView = (students) => {
        setOpen(true);
        console.log(students);
        setStudentDetails(students)
    };
    const handleClickEdit = (students) => {
        setOpen(true);
        console.log(students);
        setStudentDetails(students)
    };

    const handleClose = () => {
        setOpen(false);
    };

    useEffect(() => {
        fetch('http://localhost:5000/addStudent')
            .then((res) => res.json())
            .then((data) => setStudent(data));
    }, [student]);
    // console.log(student);


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
                                <td className="py-2 whitespace-nowrap text-right">
                                    <Button onClick={() => handleClickView(students)}>
                                        <div className='text-red-500'>
                                            <FiEye />
                                        </div>
                                    </Button>
                                    <Button onClick={() => handleClickEdit(students)}>
                                        <div className='text-red-500'>
                                            <BiEditAlt />
                                        </div>
                                    </Button>
                                    {/* <Button onClick={() => handleClickOpen(students)}>
                                        <div className='text-red-500'>
                                            <RiDeleteBin6Line />
                                        </div>
                                    </Button> */}
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
                                label="Last Name"
                                variant="outlined"
                                value={studentDetails?.className}
                                type="text" name="lastName" />
                            <TextField
                                sx={{ width: '25ch' }}
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined"
                                value={studentDetails?.division}
                                type="text" name="lastName" />
                            <TextField
                                sx={{ width: '25ch' }}
                                id="outlined-basic"
                                label="Last Name"
                                variant="outlined"
                                value={studentDetails?.rollNumber}
                                type="text" name="lastName" />
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
        </div>
    );
};

export default ManageStudent;