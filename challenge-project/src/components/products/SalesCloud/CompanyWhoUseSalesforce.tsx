
interface CompanyWhoUseSalesforceProps {
    imgUrl: string;
    altText: string;
}

const CompanyWhoUseSalesforce: React.FC<CompanyWhoUseSalesforceProps> = ({imgUrl, altText}) => {
    return (
        <div className="flex items-center justify-center bg-white w-40 h-10">
            <img className="w-[70%]" src={imgUrl} alt={altText}/>
        </div>

    );
};

export default CompanyWhoUseSalesforce;