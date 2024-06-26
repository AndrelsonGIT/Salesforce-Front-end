import WhiteButtonSalesforce from "../buttons/WhiteButtonSalesforce.tsx";

interface ContactCardSalesProps{
    mainText: string;
    text: string;
    buttonText: string;
}

const ContactCardSales: React.FC<ContactCardSalesProps> = ({mainText, text, buttonText}) => {
    return (
        <div className="flex flex-col items-center justify-center gap-3 bg-primary-color w-72 rounded-lg text-white
        text-center shadow-[0px_10px_3px_0px_rgba(0,0,0,0.27)] sm:w-80 md:w-96 sm:h-52 lg:w-96 xl:w-[32rem] xl:h-64 ">
            <h2 className="font-bold text-lg xl:text-2xl">{mainText}</h2>
            <p className="xl:text-lg text-center mx-3">{text}</p>

            <WhiteButtonSalesforce text={buttonText}></WhiteButtonSalesforce>
        </div>
    );
};

export default ContactCardSales;