import React, {useEffect, useState} from 'react'
import Fact from "./components/Fact.jsx";
import { HugeiconsIcon } from '@hugeicons/react';
import { Sun01Icon, Moon02Icon } from '@hugeicons/core-free-icons';

const App = () => {
    const [darkMode, setDarkMode] = useState(localStorage.getItem('theme') === 'dark' || false)
    const [randomFact, setRandomFact] = useState({})

    const url = 'https://uselessfacts.jsph.pl/random.json?language=en';

    async function fetchData() {
        try {
            const response = await fetch(url);
            const data = await response.json();

            if(!response.ok) return;

            setRandomFact(data);
            console.log(data);
        } catch (error) {
            console.log(error);
        }
    }

    useEffect(() => {
        fetchData();
    }, []);

    useEffect(() => {
        if (darkMode) {
            document.body.classList.add('dark');
        } else {
            document.body.classList.remove('dark');
        }
    }, []);


    const toggleDarkMode = () => {
        setDarkMode(!darkMode);
        document.body.classList.toggle('dark');
    }

    useEffect(() => {
        localStorage.setItem('theme', darkMode ? 'dark' : 'light');
    }, [darkMode])

    return (
        <div>
            <span className='hover:opacity-90 active:opacity-75 cursor-pointer' onClick={() => toggleDarkMode()}>{
                darkMode ? <HugeiconsIcon icon={Sun01Icon} size={40}/> : <HugeiconsIcon icon={Moon02Icon} size={40}/>
            }</span>
            <h1 className='text-center text-[50px]'>Random Useless Fact Generator</h1>

            <Fact randomFact={randomFact} />
            <div className='flex justify-center items-center mt-4'>
            <button onClick={() => fetchData()} className='dark:bg-slate-300 bg-slate-900 dark:text-slate-900 text-slate-300 text-[25px] px-4 py-2 rounded-lg hover:opacity-90 active:opacity-75 cursor-pointer'>Generate New Fact</button>
            </div>
        </div>
    )
}
export default App
