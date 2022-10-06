import React from 'react';
import Swal from 'sweetalert2';
import TimeZone from '../Share/TimeZone';


const AddStudent = () => {

    const handleAddStudent = (e) => {
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
                <h2><TimeZone/></h2>
            </div>
            <div className='mt-5'>
                <form onSubmit={handleAddStudent}>
                    <div className='flex justify-between gap-5'>
                        <input
                            required
                            className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                            placeholder='First Name'
                            type="text" name="firstName" />

                        <input
                            required
                            className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                            placeholder='Middle Name'
                            type="text" name="middleName" />

                        <input
                            required
                            className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                            placeholder='Last Name'
                            type="text" name="lastName" />
                    </div>

                    <div className='flex justify-between mt-4 gap-5'>
                        <select
                            name="className"
                            id=""
                            className="border w-1/3 py-4 pl-5 rounded-md outline-none"
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
                            min="1" max="99"
                        />

                    </div>

                    <div className='mt-12 flex justify-between gap-5'>
                        <textarea
                            required
                            className='border w-1/2 py-4 pl-5 rounded-md outline-none'
                            type="textArea" name="addressLine1"
                            placeholder='Address Line 1'
                        />
                        <textarea
                            required
                            className='border w-1/2 py-4 pl-5 rounded-md outline-none'
                            type="textArea" name="addressLine2"
                            placeholder='Address Line 1'
                        />
                    </div>
                    <div className='mt-5 flex justify-between gap-5'>
                        <input
                            required
                            className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                            placeholder='landMark'
                            type="text" name="landMark" />

                        <input
                            required
                            className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                            placeholder='city'
                            type="text" name="city" />

                        <input
                            required
                            className='border w-1/3 py-4 pl-5 rounded-md outline-none'
                            placeholder='pinCode'
                            type="number" name="pinCode" 
                            min="1" max="999999"/>
                    </div>
                    <div className='mt-8'>
                        <input className='bg-red-500 px-32 py-4 rounded cursor-pointer text-white font-bold' type="submit" value="Add Student" />
                    </div>

                </form>
            </div>

        </div>
    );
};

export default AddStudent;