import React from 'react';

interface InfoCardProps {
    value: number;
    title: string;
    imgURL: string;
}

const InfoCard: React.FC<InfoCardProps> = ({value, title, imgURL}) => {
    return (
        <div className="flex flex-col gap-2 items-center ">
            <img className="w-[15%] md:w-[30%]" src={imgURL} alt=""/>
            <h3 className="font-bold text-black text-xl md:text-xl">{value}</h3>
            <h4 className="text-black font-bold ">{title}</h4>
        </div>
    );
};

export default InfoCard;