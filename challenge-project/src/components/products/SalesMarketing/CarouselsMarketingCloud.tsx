import ProductCardType from "../../type/ProductCardType.tsx";
import CarouselProductCard from "../SalesCloud/CarouselProductCard.tsx";
import TitleProductCards from "../../Titles/TitleProductCards.tsx";

const CarouselsMarketingCloud = () => {

    const firstImages: ProductCardType[]  = [
        {
            imageUrl: "https://i.ibb.co/PC2tYJq/products-features-real-time-customer-journeys-1.webp",
            altText: "Ilustração Sales Cloud sobre Orquestração de Jornada",
            title: "Orquestração de Jornada",
            description: "Crie jornadas de clientes personalizadas com nossas ferramentas intuitivas." +
                " Integre mensagens, conteúdo e IA em um fluxo único. Automatize experiências pós-compra e de vendas" +
                " cruzadas com dados diversos. Otimize em tempo real para relevância contínua."
        },
        {
            imageUrl: "https://i.ibb.co/zHW7LZW/products-features-multichannel-messaging.webp",
            altText: "Ilustração Sales Cloud sobre Mensagens Multicanais",
            title: "Mensagens Multicanais",
            description: "Integre todos os tipos de mensagens do cliente," +
                " inclusive em canais off-line, em jornadas personalizadas. Ofereça uma experiência de marketing" +
                " conectada, usando IA para melhor engajamento, seja por e-mail, mobile push, SMS, publicidade " +
                "ou mala direta, tudo em um único console."
        },
        {
            imageUrl: "https://i.ibb.co/bWKJJkK/products-features-unified-customer-engagement.webp",
            altText: "Ilustração Sales Cloud sobre Engajamento entre CRMs",
            title: "Engajamento entre CRMs",
            description: "Unifique silos departamentais para simplificar a experiência do cliente. " +
                "Com integrações nativas entre produtos Salesforce, crie jornadas conectadas em todos os canais." +
                " Impulsione o engajamento com atividades integradas, como o acompanhamento junto à central de" +
                " atendimento após uma pesquisa de cliente negativa."
        }
    ]


    const secondImages: ProductCardType[]  = [
        {
            imageUrl: "https://i.ibb.co/QvvfCd7/products-features-personalized-email-marketing.webp",
            altText: "Ilustração Sales Cloud sobre Marketing por e-mail",
            title: "Marketing por E-mail",
            description: "Supere os limites da personalização de e-mails e da eficiência das campanhas com IA. Escolha" +
                " entre modelos pré-criados ou crie e-mails personalizados do zero. Una todas as suas campanhas," +
                " incluindo mensagens transacionais e promocionais, e gerencie sua pontuação de remetente de e-mail" +
                " em uma única plataforma. Selecione o conteúdo ideal para cada cliente em uma biblioteca consolidada."
        },
        {
            imageUrl: "https://i.ibb.co/ZhTxGmV/products-features-mobile-app-engagement.webp",
            altText: "Ilustração Sales Cloud sobre Interação com Aplicativos Móveis",
            title: "Interação com Aplicativos Móveis",
            description: "Alcance seus clientes em seus canais preferidos com o engajamento integrado no app." +
                " Com mensagens por push, você pode usar segmentação geográfica ou dados comportamentais" +
                " para entregar mensagens relevantes e oportunas que maximizam o engajamento via app e o ROI."
        },
        {
            imageUrl: "https://i.ibb.co/9ZG0tZd/products-features-conversational-mobile-messaging-1.webp",
            altText: "Ilustração Sales Cloud sobre Mensagens conversacionais",
            title: "Mensagens Conversacionais",
            description: "Conecte-se com os clientes via plataformas de mensagens móveis como SMS, WhatsApp e LINE." +
                " Utilize o marketing conversacional para interações como confirmações de compromissos," +
                " pesquisas e preferências, criando experiências impactantes que fortalecem os relacionamentos" +
                " com a marca."
        }
    ]

    const thirdImages: ProductCardType[]  = [
        {
            imageUrl: "https://i.ibb.co/ysW0nwz/products-features-relevant-advertising.webp",
            altText: "Ilustração Sales Cloud sobre Publicidade Digital",
            title: "Publicidade Digital",
            description: "Ative segmentos de público personalizados em várias plataformas de publicidade digital para " +
                "impulsionar campanhas de aquisição e conversão de clientes. Amplie o alcance com Google, Meta, Twitter" +
                " e outras, usando dados exclusivos para segmentação e mensagens mais relevantes. Engaje segmentos com" +
                " campanhas específicas ou adicione publicidade nas jornadas do cliente para experiências conectadas" +
                " entre canais."
        },

        {
            imageUrl: "https://i.ibb.co/PWwH15c/products-features-integrate-google-analytics.webp",
            altText: "Ilustração Sales Cloud sobre Integração com Google Analytics",
            title: "Integração com Google Analytics",
            description: "Conecte suas campanhas ao Google Analytics para entender melhor o comportamento" +
                " do cliente em e-mails, na web e em jornadas móveis. O GA4 reúne dados do site e do aplicativo " +
                "para insights completos, permitindo otimização de campanhas e jornadas. Gerencie públicos e segmentos" +
                " do Google diretamente no Marketing Cloud Engagement para segmentação refinada e" +
                " experiências direcionadas."
        },
        {
            imageUrl: "https://i.ibb.co/XkNwYFW/products-features-embedded-analytics.webp",
            altText: "Ilustração Sales Cloud sobre Análise cross-channel",
            title: "Análises cross-channel",
            description: "Aprimore suas iniciativas de marketing com análises poderosas." +
                " Avalie o desempenho da jornada com painéis integrados para otimizar campanhas em e-mails," +
                " dispositivos móveis e anúncios. Crie relatórios personalizados com facilidade, compartilhe insights" +
                " e otimize campanhas para impulsionar o engajamento e aumentar o valor do cliente."
        }

    ]

    return (
        <div className="flex flex-col w-full gap-8 sm:gap-12 items-center">
            <CarouselProductCard images={firstImages}/>

            <TitleProductCards titleText="Interaja com conteúdo hiperdinâmico no canal certo."/>

            <CarouselProductCard images={secondImages} isFlexReverse={true}/>

            <TitleProductCards titleText="Maximize a eficácia do marketing."/>

            <CarouselProductCard images={thirdImages}/>
        </div>
    );
};

export default CarouselsMarketingCloud;