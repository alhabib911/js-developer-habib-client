import React, { useState } from 'react';

const TimeZone = () => {
    const [updatedTime, setUpdatedTime] = useState('');
    const showdate=new Date()

    // const displaytodaydate=showdate.getDate()+'/'+(showdate.getMonth()+1)+'/'+showdate.getFullYear()
    const dt=showdate.toDateString()

    const latestTime = () => {
        let currentTime = new Date().toLocaleTimeString();
        setUpdatedTime(currentTime);
    }

    setInterval(latestTime, 1000);
    return (
        <div className='flex gap-2'>
            <p>{dt}</p>
            <p className='whitespace-nowrap'>{updatedTime}</p>
        </div>
    );
};

export default TimeZone;