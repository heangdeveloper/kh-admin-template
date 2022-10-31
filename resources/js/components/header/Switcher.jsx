import React, { useState } from 'react'
import { DarkModeSwitch } from 'react-toggle-dark-mode';
import useDarkSide from '../../hooks/useDarkSide';

const Switcher = () => {
    const [colorTheme, setTheme] = useDarkSide()
    const [darkSide, setDarkSide] = useState(colorTheme === "light" ? true : false)

    const toggleDarkMode = (checked) => {
        setTheme(colorTheme)
        setDarkSide(checked)
    }

    return (
        <>
            <DarkModeSwitch
                checked={darkSide}
                onChange={toggleDarkMode}
                size={20}
            />
            <h3>{ colorTheme === 'light' ? 'Dark Mode' : 'Light Mode'}</h3>
        </>
    )
}

export default Switcher