import React, { useEffect, useState } from 'react';
import summerBg from "../assets/bg.jpg";
import Description from '../components/Description';
import Details from '../components/DetailsCard';
import { useDispatch, useSelector } from 'react-redux';
import { getWhetherData } from '../redux/action';
import Loader from '../components/Loader';

const Dashboard = () => {
    const [city, setCity] = useState();
    const [unit, setUnit] = useState('metric');
    const [enabled, setEnabled] = useState(false);

    const { loading, data } = useSelector(state => state.whether);

    const dispatch = useDispatch();

    const unitChangeHandler = () => {
        setEnabled(!enabled);
        if (enabled) {
            setUnit('metric');
        } else {
            setUnit('imperial');
        }
    };

    const submitHandler = (e) => {
        e.preventDefault();
        dispatch(getWhetherData(city));
    };

    useEffect(() => {
        dispatch(getWhetherData(city));
    }, [dispatch]);

    return (
        <div style={{
            backgroundImage: `url(${summerBg})`,
            backgroundSize: "cover",
            backgroundRepeat: "no-repeat"
        }} className='md:h-[100vh] px-4 lg:px-10 xl:px-28 py-10'>

            {/* Searching and Switiching Unit  */}
            <div className='flex items-center justify-around gap-4 '>

                {/* Searching  */}
                <form onSubmit={submitHandler} className='w-full'>
                    <input required value={city} className='w-full md:w-2/3 bg-black bg-opacity-20 r px-4 py-2 shadow-sm rounded-lg shadow-white outline-none text-white' checked type="text" id='city' name='city' placeholder='Search...' onChange={(e) => setCity(e.target.value)} />
                </form>

                {/* Toggle for changing unit   */}
                <label className="inline-flex relative items-center mr-5 cursor-pointer">
                    <input
                        type="checkbox"
                        className="sr-only peer"
                        checked={enabled}
                        readOnly

                    />

                    <div
                        onClick={unitChangeHandler}
                        className="w-12 h-7 rounded-full peer  peer-focus:ring-green-300  peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-0.5 after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-6 after:w-6 after:transition-all peer-checked:bg-black peer-checked:bg-opacity-10 shadow-sm shadow-white"
                    ></div>
                    <span className="w-[1rem] ml-2 text-xl font-medium text-white">
                        {unit == 'metric' ? "°C" : "°F"}
                    </span>
                </label>

            </div>

            <div className='h-full py-10 flex flex-col md:flex-row gap-4'>

                {/* Description */}
                <div className='bg-black bg-opacity-20 lg:w-[30%] shadow-sm shadow-white rounded-lg p-4 flex flex-col items-center justify-around gap-6'>

                    {
                        loading ? <Loader /> : <>
                            <Description unit={unit} data={data} />
                        </>
                    }

                </div>


                {/* {Details}  */}
                <div className='h-full flex-1 bg-black bg-opacity-20 shadow-sm shadow-white rounded-lg p-4 flex flex-col gap-1'>
                    <h1 className='text-2xl font-bold text-white bg-black bg-opacity-20 px-4 py-1 w-min rounded-lg'>Today</h1>

                    {
                        loading ? <Loader /> : <>
                            <Details unit={unit} data={data} />
                        </>
                    }
                </div>


            </div>

        </div>
    );
};

export default Dashboard;