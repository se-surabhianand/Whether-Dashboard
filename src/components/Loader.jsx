import React from 'react';

const Loader = () => {
    return (
        <div className='w-full h-full grid place-items-center text-white'>

            <div className='w-[2rem] h-[2rem] border-2 rounded-full border-b-blue-400 animate-spin'></div>

        </div>
    );
};

export default Loader;