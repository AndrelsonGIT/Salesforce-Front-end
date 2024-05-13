import ProductCardType from "../../type/ProductCardType.tsx";
import CarouselProductCard from "./CarouselProductCard.tsx";
import TitleProductCards from "../../Titles/TitleProductCards.tsx";

const CarouselsSalesCloud = () => {

    const firstImages: ProductCardType[]  = [
        {
            imageUrl: "https://i.ibb.co/pR6vvx4/image-6-2.png",
            altText: "Ilustração Sales Cloud sobre Gestão de Atividade",
            title: "Gestão de Atividade",
            description: "Gerencie facilmente e sincronize automaticamente os e-mails e atividades de engajamento" +
                " em uma única plataforma e adquira uma visão completa dos clientes."
        },
        {
            imageUrl: "https://i.ibb.co/DQ37jVH/image-7-4.png",
            altText: "Ilustração Sales Cloud sobre Gestão de Leads",
            title: "Gestão de Leads",
            description: "Vá aonde os compradores estão, acompanhe negociações em todos os canais e gerencie a rotina" +
                " com uma lista de tarefas acionável, disponível em todo o sistema Salesforce."
        },
        {
            imageUrl: "https://i.ibb.co/ydmHFrP/image-8.png",
            altText: "Ilustração Sales Cloud sobre Gestão de contas e oportunidades",
            title: "Gestão de Contas",
            description: "Personalize e oriente vendedores em todo o processo de negócios." +
                " Colete dados completos, gerencie harmonicamente as relações e entre em ação."
        }
    ]


    const secondImages: ProductCardType[]  = [
        {
            imageUrl: "https://i.ibb.co/j4PBswM/image-9-1.png",
            altText: "Ilustração Sales Cloud sobre Forecast Management",
            title: "Forecast Management",
            description: "Gerencie previsões em tempo real. Personalize KPIs para corresponder à realidade" +
                " dos negócios, revele tendências de pipeline e ajuste dinamicamente para aumentar a precisão"
        },
        {
            imageUrl: "https://i.ibb.co/QC4jGXK/image-10-1.png",
            altText: "Ilustração Sales Cloud sobre Gestão de Pipelines",
            title: "Gestão de Pipelines",
            description: "Mantenha e gerencie pipelines sólidos em uma única tela. Trate deficiências," +
                " graças a gráficos incorporados, priorize negociações com ajuda da IA e incremente o coaching."
        },
        {
            imageUrl: "https://i.ibb.co/BqQzD8C/image-11-1.png",
            altText: "Ilustração Sales Cloud sobre Relatórios e dashboards",
            title: "Relatórios e Dashboards",
            description: "Acompanhe facilmente o volume de leads, taxas de conversão e cada parte dos pipelines." +
                " Personalize relatórios e dashboards para uma visão em tempo real dos negócios."
        }
    ]

    const thirdImages: ProductCardType[]  = [
        {
            imageUrl: "   https://i.ibb.co/KGBV2Yp/feature-work-flow-approvals.webp",
            altText: "Ilustração Sales Cloud sobre Automação de fluxo de trabalhos e processos",
            title: "Automação de fluxos de trabalho e processos",
            description: "Crie processos com dinâmicas fáceis de arrastar e soltar. Automatize processos" +
                " de vendas complexos. Gerencie e mantenha atribuições de territórios e muito mais."
        },
        {
            imageUrl: "https://i.ibb.co/rZ4n0gV/product-features-pdp-quoting-contract-approvals.webp",
            altText: "Ilustração Sales Cloud sobre Aprovação de Orçamento e Contratos",
            title: "Aprovação de Orçamento e Contratos",
            description: "Crie orçamentos dentro de minutos com recursos integrados. Aprove automaticamente para manter" +
                " o andamento das negociações, diretamente do CRM."
        },
        {
            imageUrl: "https://i.ibb.co/gdBM41V/product-features-pdp-collaborate-optimize.webp",
            altText: "Ilustração Sales Cloud sobre Colaboração e Otimização",
            title: "Colaboração e Otimização",
            description: "Colabore em negociações e documentos para manter as equipes informadas de qualquer lugar." +
                " Replique e otimize estratégias de vendas para garantir o andamento das negociações."
        }
    ]


    return (
        <div className="flex flex-col w-full gap-8 sm:gap-12 items-center">

            <CarouselProductCard images={firstImages}/>

            <TitleProductCards titleText="Adquira visibilidade sobre a integridade dos negócios e mantenha-se no
            topo da informação para superar metas."/>

            <CarouselProductCard images={secondImages} isFlexReverse={true}/>

            <TitleProductCards titleText="Otimize processos personalizados para seus negócios e impulsione
             a produtividade."/>

            <CarouselProductCard images={thirdImages} ></CarouselProductCard>


        </div>
)
    ;
};

export default CarouselsSalesCloud;