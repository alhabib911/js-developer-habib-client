import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';

const EditStudents = ({students}) => {

    const {id, firstName} = useParams() 
    console.log(id, firstName);
  
    return (
        <div>
            {id}
            {firstName}
        </div>
    );
};

export default EditStudents;