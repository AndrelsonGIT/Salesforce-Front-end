import PriceCardProps from "../type/PriceCardType.tsx";
import PriceCard from "./PriceCard.tsx";

interface ListPriceCardsProps{
    cardList: PriceCardProps[];
}


const ListPriceCards: React.FC<ListPriceCardsProps> = ({cardList}) => {

    return (
        <ol className="flex flex-wrap gap-10 justify-center">
            {cardList.map((element: PriceCardProps, index: number) =>(
                <PriceCard key={index}
                           cardName={element.cardName}
                           cardPrice={element.cardPrice}
                           plansBenefitsText={element.plansBenefitsText}
                />
            ))}
        </ol>
    );
};

export default ListPriceCards;