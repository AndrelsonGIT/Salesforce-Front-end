
interface ProductCardWhyChooseProps{
    name:string;
    imageUrl:string;
    description:string;
}

const ProductCardWhyChoose: React.FC<ProductCardWhyChooseProps> = ({name, imageUrl, description}) => {
    return (
        <div
            className="max-w-sm p-5 bg-white border border-gray-200 rounded-lg shadow">
            <div className="flex items-center gap-2 w-52">
                <a href="#">
                    <h5 className="mb-2 text-xl md:text-2xl font-bold tracking-tight text-primary-color">{name}</h5>
        </a>
                <img className="w-[22%] " src={imageUrl} alt=""/>
            </div>

            <p className="mb-3 text-md font-normal text-gray-700 ">{description}</p>
            <a href="#"
               className="inline-flex items-center shadow-[0_6px_7px_-3px_rgb(13, 153, 213, 0.3)] px-3 py-2 text-sm
               font-medium text-center text-white bg-primary-color rounded-lg hover:bg-secondary-color focus:ring-4
               focus:outline-none focus:ring-blue-300 ">
                Saiba mais sobre {name}

            </a>
        </div>

    );
};

export default ProductCardWhyChoose;