interface TitleProductsPriceProps {
    text: string;
}

const TitleProductsPrice: React.FC<TitleProductsPriceProps> = ({text}) => {
    return (
        <h2 className="font-bold text-center text-2xl sm:text-3xl xl:text-4xl">{text}</h2>
    );
};

export default TitleProductsPrice;