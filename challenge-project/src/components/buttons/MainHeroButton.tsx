import React from 'react';

interface MainHeroButtonProps {
    name:string;
}

const MainHeroButton: React.FC<MainHeroButtonProps> = ({name}) => {
    return (
        <button className="border border-primary-color w-3/5 py-1 text-s-gray
         transition-colors duration-300 hover:bg-primary-color hover:text-white
         md:w-64 md:text-lg ">
            {name}
        </button>
    );
};

export default MainHeroButton;