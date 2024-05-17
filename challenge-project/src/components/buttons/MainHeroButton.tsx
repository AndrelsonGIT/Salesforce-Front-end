import React from 'react';
import { Link } from 'react-router-dom';
interface MainHeroButtonProps {
    name: string;
    pageToRedirect: string; 
}

const MainHeroButton: React.FC<MainHeroButtonProps> = ({name, pageToRedirect}) => {
    return (
        <button className="border border-primary-color w-3/5 py-1 text-s-gray
         transition-colors duration-300 hover:bg-primary-color hover:text-white
         md:w-64 md:text-lg ">
            <Link to={pageToRedirect}>{name}</Link>
        </button>
    );
};

export default MainHeroButton;