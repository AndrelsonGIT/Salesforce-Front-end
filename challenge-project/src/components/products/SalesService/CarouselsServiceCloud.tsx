import ProductCardType from "../../type/ProductCardType.tsx";
import CarouselProductCard from "../SalesCloud/CarouselProductCard.tsx";
import TitleProductCards from "../../Titles/TitleProductCards.tsx";

const CarouselsServiceCloud = () => {
    const firstImages: ProductCardType[]  = [
        {
            imageUrl: "https://i.ibb.co/v1bD9jX/product-features-generative-service-replies-1.webp",
            altText: "Ilustração Sales Cloud sobre Service Replies Alimentada por IA Generativa",
            title: "Service Replies Alimentada por IA Generativa",
            description: "Crie jornadas de clientes personalizadas com nossas ferramentas intuitivas." +
                " Integre mensagens, conteúdo e IA em um fluxo único. Automatize experiências pós-compra e de vendas" +
                " cruzadas com dados diversos. Otimize em tempo real para relevância contínua."
        },
        {
            imageUrl: "https://i.ibb.co/dgZQ3FD/product-features-pdp-case-management-3.webp",
            altText: "Ilustração Sales Cloud sobre Case Management",
            title: "Case Management",
            description: "Proporcione aos atendentes dados mais relevantes e as ferramentas certas, oferecendo suporte" +
                " aos clientes em qualquer canal. Automatize a distribuição de casos na sua organização de atendimento," +
                " para que cada cliente receba uma resolução mais precisa e mais imediata."
        },
        {
            imageUrl: "https://i.ibb.co/pX9qdtK/product-features-pdpplus-vra-2.webp",
            altText: "Ilustração Sales Cloud sobre Gerenciamento de Serviços em Campo",
            title: "Gerenciamento de Serviços em Campo",
            description: "Redefina o conceito de eficiência com a resolução remota de problemas. Diga adeus a atendimentos presenciais desnecessários, graças à resolução de problemas à distância. Impulsione as taxas de resolução no primeiro contato, equipando a força de trabalho de campo com conexões e conhecimento para solucionar problemas rapidamente, entregando um atendimento de excelência para os clientes — onde quer que eles estejam."
        }
    ]


    const secondImages: ProductCardType[]  = [
        {
            imageUrl: "https://i.ibb.co/Dr4jZwR/product-features-pdp-knowledge-management.webp",
            altText: "Ilustração Sales Cloud sobre Knowledge Management",
            title: "Knowledge Management",
            description: "Ajude atendentes e clientes a encontrar rapidamente respostas para perguntas frequentes," +
                " acelerando a resolução de casos com artigos de conhecimento." +
                " Exponha facilmente esses recursos na Central de Ajuda ou no console do atendente, aliviando a carga" +
                " de processamento de informações da equipe. Os clientes podem encontrar as respostas por conta própria," +
                " em vez de se conectarem diretamente a um atendente."
        },
        {
            imageUrl: "https://i.ibb.co/xDDSYXn/product-features-pdp-einstein-article.webp",
            altText: "Ilustração Sales Cloud sobre Recomendação de artigo alimentado por IA",
            title: "Recomendação de artigo alimentado por IA",
            description: "Melhore a produtividade dos atendentes e a satisfação dos clientes com recomendações de" +
                " artigos relevantes no espaço de trabalho. Auxilie na resolução eficiente de casos sugerindo artigos" +
                " vinculados a casos anteriores semelhantes. Os atendentes podem selecionar e anexar rapidamente" +
                " o artigo mais relevante ao caso ou enviá-lo diretamente ao cliente, eliminando a busca em longas" +
                " listas de artigos."
        },
        {
            imageUrl: "https://i.ibb.co/gjfYf5B/product-features-pdp-incident-resolution.webp",
            altText: "Ilustração Sales Cloud sobre Respostas para buscas, alimentadas por IA generativa",
            title: "Respostas para buscas, alimentadas por IA generativa",
            description: "Ajude os clientes a encontrarem as respostas rapidamente, revelando respostas extraídas" +
                " da Base de conhecimento, diretamente na página da Central de Ajuda ou em um chat com bot autônomo." +
                " Economize o tempo dos atendentes ao gerar automaticamente e compartilhar as respostas diretamente" +
                " no fluxo de trabalho do pessoal."
        }
    ]

    const thirdImages: ProductCardType[]  = [
        {
            imageUrl: "https://i.ibb.co/vYvB61H/product-features-pdpplus-asset-service-management-1.webp",
            altText: "Ilustração Sales Cloud sobre Gerenciamento de Manutenção de Ativos",
            title: "Gerenciamento de Manutenção de Ativos",
            description: "Avance de um serviço de manutenção reativo para proativo com o rastreamento de ativos em tempo" +
                " real. Monitore os resultados dos serviços de manutenção e estabeleça planos de manutenção" +
                " preventiva com base no uso, na condição e em critérios específicos dos ativos. Por exemplo," +
                " agende manutenções se um equipamento exceder a temperatura definida, garantindo a continuidade" +
                " das operações e prevenindo paralisações"
        },

        {
            imageUrl: "https://i.ibb.co/p1D4sN4/product-features-pdpplus-fs-mobile-app-2.webp",
            altText: "Ilustração Sales Cloud sobre Aplicativo Móvel Field Service",
            title: "Aplicativo Móvel Field Service",
            description: "Nosso aplicativo móvel de Serviço de Campo, disponível para Android e iOS, é a ferramenta" +
                " definitiva e completa, personalizada para atender às demandas da força de trabalho móvel atual." +
                " Projetado para funcionar offline, permite que o pessoal da linha de frente trabalhe sem problemas," +
                " salvando alterações mesmo sem Wi-Fi. Além disso, oferece amplas opções de personalização para alinhar" +
                " perfeitamente com seus requisitos específicos de negócio."
        },
        {
            imageUrl: "https://i.ibb.co/VBzHggS/product-features-pdpplus-work-order-mgmt-2.webp",
            altText: "Ilustração Sales Cloud sobre Gerenciamento de Pedido de Serviço",
            title: "Gerenciamento de Pedido de Serviço",
            description: "Simplifique todo o processo de gestão de ordens de serviço, criando, atribuindo, executando" +
                " e tratando solicitações com perfeição. Capacite a equipe a se manter ágil, aprimorar a satisfação" +
                " do cliente e gerar crescimento, eliminando burocracia manual e digitalizando todo o ciclo de vida das" +
                " ordens de serviço."
        }

    ]

    return (
        <div className="flex flex-col w-full gap-8 sm:gap-12 items-center">
            <CarouselProductCard images={firstImages}/>

            <TitleProductCards titleText="Capacite os atendentes e clientes a encontrar rapidamente as respostas
             de que precisam."/>

            <CarouselProductCard images={secondImages} isFlexReverse={true}/>

            <TitleProductCards titleText="Gere eficiência para a equipe de campo e forneça uma experiência do
             cliente perfeita, graças a uma visão unificada de processos."/>

            <CarouselProductCard images={thirdImages}/>

        </div>
    );
};

export default CarouselsServiceCloud;