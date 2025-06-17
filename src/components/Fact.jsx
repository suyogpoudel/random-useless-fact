import React from 'react'

const Fact = ({randomFact}) => {
    return (
        <div className='mt-7 flex justify-center items-center text-[30px]'>
            {Object.entries(randomFact).length === 0 ? <p>Loading...</p> : <div className='text-[40px] border-2 dark:border-slate-300 border-slate-900 w-[50%] max-sm:w-[90%] py-4 px-8 rounded-lg'>{randomFact.text}</div>}
        </div>
    )
}
export default Fact
