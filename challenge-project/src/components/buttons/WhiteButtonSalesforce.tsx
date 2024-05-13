
interface WhiteButtonSalesforceProps{
    text: string;
}

const WhiteButtonSalesforce: React.FC<WhiteButtonSalesforceProps> = ({text}) => {
    return (
        <button
            className="bg-white filter drop-shadow-2xl h-12 w-40 hover:bg-primary-color hover:text-white
             text-secondary-color rounded-md text-center mb-3 sm:w-52 sm:mb-0
             md:w-60 lg:h-16 xl:w-64 xl:h-16 lg:text-lg ">
            {text}
        </button>
    );
};

export default WhiteButtonSalesforce;