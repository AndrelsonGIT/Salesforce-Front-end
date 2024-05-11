
interface WhyChooseTextProps{
    mainText:string;
    secondText:string;
    thirdText:string;
}

const WhyChooseText: React.FC<WhyChooseTextProps> = ({mainText, secondText, thirdText}) => {
    return (
        <div className="flex flex-col gap-4">
            <h2 className="font-bold text-xl">{mainText}</h2>
            <h3 className="font-bold text-lg">{secondText}</h3>
            <p className="font-bold">{thirdText}</p>
        </div>
    );
};

export default WhyChooseText;