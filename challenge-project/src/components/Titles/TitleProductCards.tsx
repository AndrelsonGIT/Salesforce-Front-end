
interface TitleProductCardsProps{
    titleText: string;
}

const TitleProductCards: React.FC<TitleProductCardsProps> = ({titleText}) => {
    return (
        <h2 className="font-bold text-lg sm:text-2xl xl:text-3xl max-w-3xl text-center text-secondary-color">{titleText}</h2>
    );
};

export default TitleProductCards;