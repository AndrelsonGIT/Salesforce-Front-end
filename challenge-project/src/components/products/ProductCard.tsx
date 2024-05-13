import React from 'react';
import ProductCardProps from "../type/ProductCardType.tsx";

const ProductCard: React.FC<ProductCardProps> = ({imageUrl, altText, title, description, flexReverse}) => {
    return (
        <div className={`flex flex-col-reverse mt-1 justify-center items-center w-full transition-opacity duration-500
         ease-in-out ${flexReverse ? "sm:flex-row-reverse" : "sm:flex-row"} sm:mt-0 lg:w-[1200px]`}>
            <img className="w-[60%] md:w-[50%] lg:w-[40%]" src={imageUrl} alt={altText}/>
            <div className="flex flex-col gap-2 translate-y-2 sm:translate-y-0 text-center sm:text-left max-w-64">
                <h2 className="text-primary-color text-lg md:text-xl lg:text-3xl" >{title}</h2>
                <p className="text-sm md:text-base lg:text-lg">{description}</p>
            </div>

        </div>
    );
};

export default ProductCard;