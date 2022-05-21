import { useState, FC, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

import { SvgIcon } from 'app/domains/Common/components/svg-icon';

const Header: FC = () => {
    const twTheme = localStorage.getItem('twTheme');
    const [mode, setMode] = useState(twTheme || 'light');
    const htmlElement = document.querySelector('html')!;

    useEffect(() => {
        if (!localStorage.getItem('twTheme')) {
            htmlElement.classList.add('dark');
            localStorage.setItem('twTheme', 'dark');
            setMode('dark');
        }
    }, []);

    const toggleDark = () => {
        if (localStorage.getItem('twTheme') === 'dark') {
            htmlElement.classList.remove('dark');
            localStorage.setItem('twTheme', 'light');
            setMode('light');
        } else {
            htmlElement.classList.add('dark');
            localStorage.setItem('twTheme', 'dark');
            setMode('dark');
        }
    };

    return (
        <header className="z-40 py-2 shadow-md lg:shadow-none shadow-bottom bg-light-mode dark:bg-dark-mode">
            <div className="container flex items-center justify-between h-full px-3 mx-auto text-theme-color-light dark:text-theme-color-dark">
                <div className="flex flex-1 h-10">
                    <NavLink to="/home" className="block">
                        <SvgIcon
                            className="w-16 h-10 text-red-500 cursor-pointer lg:ml-0"
                            icon="AmberLogoIcon"
                        />
                    </NavLink>
                </div>
                <ul className="flex items-center flex-shrink-0 space-x-6">
                    {/* <!-- Theme toggler --> */}
                    <li className="relative text-theme-color-light dark:text-theme-color-dark">
                        <button
                            type="button"
                            onClick={toggleDark}
                            className="relative align-middle rounded-md focus:outline-none"
                            aria-label="Notifications"
                            aria-haspopup="true"
                        >
                            {mode === 'light' ? (
                                <span className="w-5 h-5 mx-auto animate-spin">🌚</span>
                            ) : (
                                <span className="w-5 h-5 mx-auto animate-spin">💡</span>
                            )}

                            {/* <!-- Notification badge --> */}
                            <span className="absolute top-0 right-0 inline-block w-3 h-3 transform translate-x-1 -translate-y-1 bg-red-600 border-2 border-white rounded-full animate-ping dark:border-gray-800" />
                        </button>
                    </li>
                </ul>
            </div>
        </header>
    );
};

export default Header;
