import PriceCardProps from "../../type/PriceCardType.tsx";
import ListPriceCards from "../../Cards/ListPriceCards.tsx";

const ListPriceMarketingCloud = () => {
    const listPriceCards: PriceCardProps[]  = [

        {
            cardName: "Professional",
            cardPrice: 1250,
            plansBenefitsText:[
                "Marketing por e-mail",
                "Criação de conteúdo",
                "Análise robusta"
            ]
        },
        {
            cardName: "Corporativo",
            cardPrice: 4200,
            plansBenefitsText:[
                "Orquestração de Jornada",
                "Mensagens por dispositivos móveis",
                "Insights alimentados por IA"
            ]
        },


    ]
    return (
        <ListPriceCards cardList={listPriceCards}/>
    );
};

export default ListPriceMarketingCloud;