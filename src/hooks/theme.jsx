import { useEffect, useState } from 'react';

// Custom Hook: useDarkMode
const useDarkMode = () => {
    // 1. State to track the current mode (optional, but good for rendering/logic)
    const [isDarkMode, setIsDarkMode] = useState(false);

    // 2. useEffect hook to handle initial setup and preference checking
    useEffect(() => {
        const body = document.body;
        const savedTheme = localStorage.getItem('theme');
        const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;
        
        let initialMode = savedTheme === 'dark' || (!savedTheme && prefersDark);

        if (initialMode) {
            body.classList.add('dark-mode');
            setIsDarkMode(true);
        } else {
            body.classList.remove('dark-mode');
            setIsDarkMode(false);
        }

        // Cleanup function (optional for this specific case, but good practice)
        return () => {
            // No cleanup needed here, as the listener is attached via React element.
        };
    }, []); // Empty dependency array means this runs only once on mount


    // 3. Toggle function to be called when the button is clicked
    const toggleDarkMode = () => {
        const body = document.body;
        const newMode = !body.classList.contains('dark-mode');

        if (newMode) {
            body.classList.add('dark-mode');
            localStorage.setItem('theme', 'dark');
        } else {
            body.classList.remove('dark-mode');
            localStorage.setItem('theme', 'light');
        }
        setIsDarkMode(newMode); // Update the state
    };

    // Return the state and the function needed by the component
    return [isDarkMode, toggleDarkMode];
};

export default useDarkMode;