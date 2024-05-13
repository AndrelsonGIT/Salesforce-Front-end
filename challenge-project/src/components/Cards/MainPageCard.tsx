import React from 'react';

interface MainPageCardProps {
    name: string;
    description:string;
    imgUrl: string;
}

const MainPageCard: React.FC<MainPageCardProps> = ({name, description, imgUrl}) => {
    return (

        <div className="flex w-40 flex-col gap-2  sm:w-52 lg:w-52 xl:w-60 ">
            <img src={imgUrl} alt=""/>
            <h6 className="font-bold ">{name}</h6>
            <p className="text-s-gray text-left">{description}</p>
        </div>
    );
};

export default MainPageCard;