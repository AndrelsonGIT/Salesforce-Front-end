
interface WhyChooseTextProps{
    mainText:string;
    secondText:string;
    thirdText:string;
}

const WhyChooseText: React.FC<WhyChooseTextProps> = ({mainText, secondText, thirdText}) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">{mainText}</h2>
            <h3 className="underline decoration-blue-900 text-lg">{secondText}</h3>
            <p className="">{thirdText}</p>
        </div>
    );
};

export default WhyChooseText;