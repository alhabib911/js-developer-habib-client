import React, { useEffect, useState } from 'react';
import { FiEye } from 'react-icons/fi';
import { BiEditAlt } from 'react-icons/bi';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle, TextField } from '@mui/material';
import Swal from 'sweetalert2';
import TimeZone from '../Share/TimeZone';

const ManageStudent = () => {
    const [student, setStudent] = useState([]);
    const [open, setOpen] = React.useState(false);
    const [editModal, setEditModal] = React.useState(false);
    const [deleteModal, setDeleteModal] = React.useState(false);
    const [studentDetails, setStudentDetails] = useState({})

    const { _id } = studentDetails
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
    const handleClickEDelete = (students) => {
        setDeleteModal(true);
        // console.log(students);
        setStudentDetails(students)
    };

    const handleClose = () => {
        setOpen(false);
    };
    const handleEditClose = () => {
        setEditModal(false);
    };
    const handleEditCloses = () => {
        setEditModal(false);
    };
    const handleDeleteClose = () => {
        setDeleteModal(false);
    };

    useEffect(() => {
        fetch('http://localhost:5000/addStudent')
            .then((res) => res.json())
            .then((data) => setStudent(data));
    }, [student]);
    // console.log(student);

    // Update Student
    const handleEditStudent = (e) => {
        e.preventDefault();
        const firstName = e.target.firstName.value;
        const middleName = e.target.middleName.value;
        const lastName = e.target.lastName.value;
        const className = e.target.className.value;
        const division = e.target.division.value;
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
                Swal.fire(
                    'Good job!',
                    'Update Successfully!',
                    'success'
                )
                e.target.reset();
            });
    };

    // Delete Student
    const handleEDeleteStudent = (id) => {
        setDeleteModal(false);
        const url = `http://localhost:5000/deleteStudent/${id}`;
        fetch(url, {
            method: "DELETE",
        })
            .then((res) => res.json())
            .then((data) => {
                console.log("success", data);
                Swal.fire(
                    'Good job!',
                    'Delete Successfully!',
                    'success'
                )
            });
        // }
    };
    return (
        <div className='mr-10'>
            <div className='flex justify-between'>
                <h2 className='font-semibold'>Manage Students</h2>
                <h2><TimeZone/></h2>
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
                                    <button onClick={() => handleClickEDelete(students)}>
                                        <div className='text-red-500'>
                                            <RiDeleteBin6Line />
                                        </div>
                                    </button>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
            {/* Student Information View */}
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

            {/* Student Information Edit */}
            <Dialog
                open={editModal}
                onClose={handleEditClose}
                onClosees={handleEditCloses}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <div className='mx-10 my-10'>
                    <div className='flex justify-between'>
                        <h2 className='font-semibold'>Student Information</h2>
                        <button className='text-[#F33823]' onClick={handleEditCloses}>
                            X
                        </button>
                    </div>

                    <div className='mt-5'>
                        <form onSubmit={handleEditStudent}>
                            <div className='flex justify-between gap-2'>
                                <input
                                    required
                                    className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                                    placeholder='First Name'
                                    defaultValue={studentDetails?.firstName}
                                    type="text" name="firstName" />

                                <input
                                    required
                                    className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                                    placeholder='Middle Name'
                                    defaultValue={studentDetails?.middleName}
                                    type="text" name="middleName" />

                                <input
                                    required
                                    className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                                    placeholder='Last Name'
                                    defaultValue={studentDetails?.lastName}
                                    type="text" name="lastName" />
                            </div>

                            <div className='flex justify-between mt-4 gap-2'>


                                <select
                                    name="className"
                                    id=""
                                    className="border w-1/3 py-4 pl-5 rounded-md outline-none"
                                    defaultValue={studentDetails?.className}
                                >
                                    <option value="" selected disabled>
                                        Select Class
                                    </option>
                                    <option value="I">I</option>
                                    <option value="II">II</option>
                                    <option value="III">III</option>
                                    <option value="IV">IV</option>
                                    <option value="V">V</option>
                                    <option value="VI">VI</option>
                                    <option value="VII">VII</option>
                                    <option value="VIII">VIII</option>
                                    <option value="IX">IX</option>
                                    <option value="X">X</option>
                                    <option value="XI">XI</option>
                                    <option value="XII">XII</option>

                                </select>
                                <select
                                    name="division"
                                    id=""
                                    className="border w-1/3 py-4 pl-5 rounded-md outline-none"
                                    defaultValue={studentDetails?.division}
                                >
                                    <option value="" selected disabled>
                                        Select Division
                                    </option>
                                    <option value="A">A</option>
                                    <option value="B">B</option>
                                    <option value="C">C</option>
                                    <option value="D">D</option>
                                    <option value="E">E</option>

                                </select>
                                <input
                                    required
                                    className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                                    placeholder='Enter Roll Number in Digit'
                                    type="number" name="rollNumber"
                                    defaultValue={studentDetails?.rollNumber}
                                    min="1" max="99"
                                />
                            </div>

                            <div className='mt-12 flex justify-between gap-2'>
                                <textarea
                                    required
                                    className='border w-1/2 py-4 pl-5 rounded-md outline-none'
                                    type="textArea" name="addressLine1"
                                    defaultValue={studentDetails?.addressLine1}
                                    placeholder='Address Line 1'
                                />
                                <textarea
                                    required
                                    className='border w-1/2 py-4 pl-5 rounded-md outline-none'
                                    type="textArea" name="addressLine2"
                                    defaultValue={studentDetails?.addressLine2}
                                    placeholder='Address Line 1'
                                />
                            </div>

                            <div className='mt-5 flex justify-between gap-2'>
                                <input
                                    required
                                    className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                                    placeholder='landMark'
                                    defaultValue={studentDetails?.landMark}
                                    type="text" name="landMark" />

                                <input
                                    required
                                    className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                                    placeholder='city'
                                    defaultValue={studentDetails?.city}
                                    type="text" name="city" />

                                <input
                                    required
                                    className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                                    placeholder='pinCode'
                                    type="number" name="pinCode"
                                    defaultValue={studentDetails?.pinCode}
                                    min="1" max="999999" />
                            </div>
                            <div className='mt-8'>
                                <button onClick={handleEditClose}>
                                    <input className='bg-red-500 px-20 py-3 rounded cursor-pointer text-white font-bold' type="submit" value="Save" />
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
            </Dialog>

            {/* Student Information Delete */}
            <Dialog
                open={deleteModal}
                onClose={handleDeleteClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
            >
                <DialogTitle id="alert-dialog-title">
                    {"Are you sure you want to delete this item?"}
                </DialogTitle>
                <DialogContent>
                    <DialogContentText id="alert-dialog-description">

                    </DialogContentText>
                </DialogContent>
                <DialogActions>
                    <Button onClick={handleDeleteClose}>Cancel</Button>
                    <Button onClick={() => handleEDeleteStudent(studentDetails?._id)} autoFocus>
                        <div className='text-red-500'>
                            Delete
                        </div>
                    </Button>
                </DialogActions>
            </Dialog>
        </div>
    );
};

export default ManageStudent;