import PriceCardProps from "../../type/PriceCardType.tsx";
import ListPriceCards from "../../Cards/ListPriceCards.tsx";

const ListPriceServiceCloud = () => {
    const listPriceCards: PriceCardProps[]  = [
        {
            cardName: "Starter",
            cardPrice: 25,
            plansBenefitsText:[
                "Gerenciamento de casos",
                "Relatórios e dashboards personalizáveis",
                "Base de conhecimento"
            ]
        },
        {
            cardName: "Professional",
            cardPrice: 80,
            plansBenefitsText:[
                "Distribuição de casos",
                "Integração de telefonia-computador (CTI)",
                "Direcionamento de casos Omni-Channel"
            ]
        },
        {
            cardName: "Enterprise",
            cardPrice: 165,
            plansBenefitsText:[
                "IA para atendimento ao cliente",
                "Central de autoatendimento",
                "Automação de fluxo de trabalho"
            ]
        },
        {
            cardName: "Unlimited",
            cardPrice: 330,
            plansBenefitsText:[
                "Suporte 24h",
                "Chatbots orientados por IA",
                "Chat"
            ]
        },
        {
            cardName: "Unlimited+",
            cardPrice: 500,
            plansBenefitsText:[
                "IA generativa e preditiva robusta",
                "Unifique os dados e canais com o Data Cloud e o Tableau Analytics",
                "Colaboração e produtividade no Slack"
            ]
        },


    ]
    return (
        <ListPriceCards cardList={listPriceCards}/>
    );
};

export default ListPriceServiceCloud;