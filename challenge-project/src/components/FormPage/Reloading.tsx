import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

interface ReloadingProps {
    reloadingText: string;
    navigateTo: string;
}

const Reloading: React.FC<ReloadingProps> = ({ reloadingText, navigateTo }) => {
    const [text, setText] = useState(reloadingText);
    const [textCounter, setTextCounter] = useState(0);
    const navigate = useNavigate();

    useEffect(() => {
        const interval = setInterval(() => {
            if (textCounter === 3) {
                setText(reloadingText);
                setTextCounter(0);
            } else {
                setText((prevText) => prevText + '.');
                setTextCounter((prevCounter) => prevCounter + 1);
            }
        }, 250);

        return () => clearInterval(interval);
    }, [textCounter, reloadingText]);

    useEffect(() => {
        const timeout = setTimeout(() => {
            navigate(navigateTo);
        }, 5000);

        return () => clearTimeout(timeout);
    }, [navigate, navigateTo]);

    return (
        <div className="flex h-[85%] flex-col bg-[#FBFBFB] items-center justify-center w-full">
            <h2 className="text-xl lg:text-2xl text-center">{text}</h2>
            <h3>Você irá voltar para a tela inicial</h3>
            <img
                src="https://i.pinimg.com/originals/1c/13/f3/1c13f3fe7a6bba370007aea254e195e3.gif"
                className="w-96 xl:w-[25%]"
                alt=""
            />
        </div>
    );
};

export default Reloading;
