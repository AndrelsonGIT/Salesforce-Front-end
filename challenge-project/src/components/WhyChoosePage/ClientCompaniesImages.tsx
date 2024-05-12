
interface ClientCompaniesImages{
    imageUrl: string;
    alt: string;
}

const ClientCompaniesImages: React.FC<ClientCompaniesImages> = ({imageUrl, alt}) => {
    return (
        <img className="w-full max-w-36"
             src={imageUrl}
             alt={alt}/>
    );
};

export default ClientCompaniesImages;