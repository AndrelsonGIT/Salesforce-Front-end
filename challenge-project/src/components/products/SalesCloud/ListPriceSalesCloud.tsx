import PriceCardProps from "../../type/PriceCardType.tsx";
import ListPriceCards from "../../Cards/ListPriceCards.tsx";

const ListPriceSalesCloud = () => {

    const listPriceCards: PriceCardProps[]  = [
        {
            cardName: "Starter",
            cardPrice: 25,
            plansBenefitsText:[
                "Configuração e integração simplificadas",
                "Gestão de leads, contas, contatos e oportunidades",
                "Integração com email e captura de atividades automatizada"
                ]
        },
        {
            cardName: "Professional",
            cardPrice: 80,
            plansBenefitsText:[
                "Forecast Management",
                "Relatórios e dashboards personalizados",
                "Elaboração de orçamentos e contratos"
            ]
        },
        {
            cardName: "Enterprise",
            cardPrice: 165,
            plansBenefitsText:[
                "Tudo do Professional mais o Advanced Pipeline Management e o Deal Insights",
                "Territory Management e Territory Planning",
                "Fluxo de trabalho e aprovações"
            ]
        },
        {
            cardName: "Unlimited",
            cardPrice: 330,
            plansBenefitsText:[
                "Tudo do Enterprise mais o Advanced Automation e o Sales Engagement",
                "IA generativa e preditiva",
                "Plano Premier Success e Sandbox completo"
            ]
        },
        {
            cardName: "Unlimited+",
            cardPrice: 500,
            plansBenefitsText:[
                "Tudo do Unlimited mais o Performance Management, o Enablement e o Team Collaboration with Slack",
                "Conecte o Salesforce a dados externos usando o Data Cloud e o Revenue Intelligence",
            ]
        }

    ]
    return (
        <ListPriceCards cardList={listPriceCards}/>
    );
};

export default ListPriceSalesCloud;