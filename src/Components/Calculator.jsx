import React, { useState } from 'react';

import getSunsetSunrise from '../api/sunset_sunrise';

const Calculator = () => {
    const [birthDate, setBirthDate] = useState('1997-06-18');
    const [birthDateResult, setBirthDateResult] = useState('');

    const timeStringToFloat = (time12h) => {
        const [time, modifier] = time12h.split(' ');
        let [hours, minutes] = time.split(':');
        if (hours === '12') hours = '00';
        if (modifier === 'PM') hours = parseInt(hours, 10) + 12;
        const buffer = `${hours}:${minutes}`;

        let hoursMinutes = buffer.split(/[.:]/);
        hours = parseInt(hoursMinutes[0], 10);
        minutes = hoursMinutes[1] ? parseInt(hoursMinutes[1], 10) : 0;
        return hours + minutes / 60;
    };

    return (
        <div className='Calculator'>
            <p>BETA: calculate time per hour between sunset and sunrise at spcific day:</p>
            <input type='text' placeholder='YYYY-MM-DD' onChange={(e) => setBirthDate(e.target.value)} />
            <button
                onClick={() => {
                    console.log(birthDate);
                    setBirthDateResult('Calculating...');
                    getSunsetSunrise(birthDate).then((data) => {
                        console.log(data);
                        const diffDecimal = timeStringToFloat(data.sunset) - timeStringToFloat(data.sunrise);

                        const diffString = String(diffDecimal);
                        const hours = diffString.substring(0, diffString.indexOf('.'));
                        const minutes = Math.floor(diffDecimal % 60);
                        const result = `${hours} hours and ${minutes} minutes`;

                        //! date 1997-10-18 is not calculate hour

                        const resultPerHour = (diffDecimal / 12) * 60;
                        const hoursPerHour = Math.floor(resultPerHour / 60);
                        const minutesPerHour = Math.floor(resultPerHour % 60);
                        const final = `${result}_${hoursPerHour} hours and ${minutesPerHour} minutes`;
                        console.log({ diffDecimal, result: final });

                        setBirthDateResult(final);
                    });
                }}>
                log sunset & sunrise
            </button>
            <p>
                Time between sunset and sunrise:
                <br />
                {birthDateResult.substring(0, birthDateResult.indexOf('_'))}
                <br />
                Per hour: {birthDateResult.substring(birthDateResult.indexOf('_') + 1)}
            </p>
        </div>
    );
};

export default Calculator;
