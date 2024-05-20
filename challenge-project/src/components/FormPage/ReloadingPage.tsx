import {useEffect, useState} from 'react';
import {useNavigate} from "react-router-dom";

const ReloadingPage = () => {
    const [text, setText] = useState("enviando informações");
    const [textCounter, setTextCounter] = useState(0);

    const navigate = useNavigate()


    useEffect(()=>{
        const interval = setInterval(() => {
            if(textCounter === 3){
                setText("Enviando informações")
                setTextCounter(0)
            }
            else{
                setText(text + ".");
                setTextCounter(textCounter + 1)
            }
        }, 250);

        return ()=> clearInterval(interval)
    }, [text])

    useEffect(() => {
        setTimeout(() => {
            navigate("/")
        }, 4000);
    }, []);



return (
        <div className="flex h-[85%] flex-col bg-[#FBFBFB] items-center justify-center w-full">
            <h2 className="text-xl lg:text-2xl text-center">{text}</h2>
            <img src="https://i.pinimg.com/originals/1c/13/f3/1c13f3fe7a6bba370007aea254e195e3.gif"
                 className="w-96 xl:w-[25%]" alt="" />
        </div>
    );
};

export default ReloadingPage;