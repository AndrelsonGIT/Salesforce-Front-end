
interface ButtonCarouselProductProps{
    name: string;
    isActive: boolean;
    onClick: ()=> void;
}

const ButtonCarouselProduct: React.FC< ButtonCarouselProductProps> = ({name, onClick, isActive}) => {
    return (
        <button className={`text-sm font-bold p-2 text-center sm:text-base hover:text-primary-color
         ${isActive ? "border-b-2 border-primary-color text-primary-color": ""} sm:font-normal sm:text-base md:text-lg
         lg:text-xl`} onClick={onClick}>
            {name}
        </button>
    );
};

export default ButtonCarouselProduct;