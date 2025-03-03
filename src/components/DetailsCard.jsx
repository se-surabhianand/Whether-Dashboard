import React from 'react';
import { useSelector } from 'react-redux';
import { TbCloudSearch } from "react-icons/tb";
import { MdCompress, MdOutlineWaterDrop } from "react-icons/md";
import { HiArrowSmDown, HiArrowSmUp } from "react-icons/hi";
import { FiWind } from "react-icons/fi";

const Details = ({ unit, data }) => {

    const { main: { feels_like, temp_min, temp_max, pressure, humidity }, wind: { speed } } = data;

    // Convert Celsius to Fahrenheit
    const handleCelsiusChange = (value) => {

        const fahrenheitValue = (value * 9 / 5) + 32;

        return fahrenheitValue.toFixed(2);// Round to 2 decimal places
    };

    const detailsData = [
        {
            title: "Feels Like",
            icon: <TbCloudSearch />,
            val: unit == 'metric' ? feels_like : handleCelsiusChange(feels_like),
            unit: unit == 'metric' ? "°C" : "°F"
        },
        {
            title: "Max Temp",
            icon: <HiArrowSmUp />,
            val: unit == 'metric' ? temp_max : handleCelsiusChange(temp_max),
            unit: unit == 'metric' ? "°C" : "°F"
        },
        {
            title: "Min Temp",
            icon: <HiArrowSmDown />,
            val: unit == 'metric' ? temp_min : handleCelsiusChange(temp_min),
            unit: unit == 'metric' ? "°C" : "°F"
        },
        {
            title: "Pressure",
            icon: <MdCompress />,
            val: pressure,
            unit: "pascal"
        },
        {
            title: "Humidity",
            icon: <MdOutlineWaterDrop />,
            val: humidity,
            unit: "%"
        },
        {
            title: "Wind Speed",
            icon: <FiWind />,
            val: speed,
            unit: "km/h"
        }

    ];

    return (


        <div className='h-full grid sm:grid-cols-2 md:grid-cols-3 py-4  gap-4'>

            {
                detailsData.map((item, index) => (
                    <div className='bg-black bg-opacity-40 rounded-lg px-2 lg:px-10 py-4 flex flex-col items-center justify-center gap-4'>
                        <p className='text-lg font-medium text-gray-400'>{item.title}</p>
                        <div className=' flex items-center gap-2'>
                            <figure className=' text-4xl text-gray-400'> {item.icon}</figure>
                            <div className='flex gap-1'>
                                <span className='text-2xl font-semibold text-white'>{item.val}</span>
                                <span className=' text-lg text-white'>{item.unit}</span>
                            </div>
                        </div>
                    </div>
                ))
            }

        </div>


    );
};

export default Details;