import React, {useState} from 'react';
import ProductCard from "../ProductCard.tsx";
import ProductCardType from "../../type/ProductCardType.tsx";
import ButtonCarouselProduct from "./ButtonCarouselProduct.tsx";

interface CarouselProductCardProps {
    images: ProductCardType[];
    isFlexReverse?: boolean;
}

const CarouselProductCard: React.FC<CarouselProductCardProps> = ({images, isFlexReverse = false}) => {
    const [index,  setIndex] = useState<number>(0);
    const [activeButton, setActiveButton] = useState<number>(0);


    const handleClick = (newIndex: number)=>{

        setIndex(newIndex)

        setActiveButton(newIndex)
    }

    return (
        <div className={`flex flex-col justify-center items-center w-[80%]`}>
            <div className="flex gap-5">
                <ButtonCarouselProduct
                    name={images[0].title}
                    onClick={()=> handleClick(0)}
                    isActive={activeButton === 0}/>

                <ButtonCarouselProduct
                    name={images[1].title}
                    onClick={()=> handleClick(1)}
                    isActive={activeButton === 1}/>

                <ButtonCarouselProduct
                    name={images[2].title}
                    onClick={()=> handleClick(2)}
                    isActive={activeButton === 2}/>
            </div>
            <ProductCard imageUrl={images[index].imageUrl}
                         altText={images[index].altText}
                         title={images[index].title}
                         description={images[index].description}
                         flexReverse={isFlexReverse}></ProductCard>
        </div>
    );
};

export default CarouselProductCard;