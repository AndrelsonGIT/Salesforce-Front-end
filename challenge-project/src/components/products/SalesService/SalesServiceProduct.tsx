import MPButton from "../../buttons/MPButton.tsx";
import CompanyWhoUseSalesforce from "../SalesCloud/CompanyWhoUseSalesforce.tsx";
import TitleProductsPrice from "../../Titles/TitleProductsPrice.tsx";
import CarouselsServiceCloud from "./CarouselsServiceCloud.tsx";
import ListPriceServiceCloud from "./ListPriceServiceCloud.tsx";

const SalesServiceProduct = () => {
    return (
        <main className="relative h-screen flex gap-9 md:gap-8 2xl:gap-12 items-center flex-col">

            <img
                className="absolute w-full hidden opacity-15 md:block rounded-full  -z-10"
                src="https://i.ibb.co/87hykqV/logo-service-category-logo-background-1.webp"
                alt="fundo Service Cloud"/>

            <div className="flex flex-col md:mt-10 lg:mt-14 gap-7 py-5 max-w-lg self-start">

                <h2 className="font-bold text-3xl w-[70%] sm:text-4xl lg:w-[100%] lg:text-5xl xl:text-6xl">Revolucione
                    o atendimento com
                    <span className="text-[#D20069] font-bold"> Service Cloud</span></h2>

                <p className="md:text-lg 2xl:text-xl">Maximize a eficiência e amplie o atendimento eficaz, oferecendo
                    uma experiência de suporte personalizada e alimentada por IA em todos os canais. Atenda às
                    necessidades de suporte dos clientes facilmente por e-mail, telefone, mensagens, sites do
                    Experience Cloud, chats, textos ou qualquer outro formato. Direcione automaticamente casos para
                    o melhor agente, com recomendações e ações inteligentes baseadas em dados de CRM integrados ao
                    Einstein Platform. Com o Service Cloud, você impulsiona a produtividade, acelera a resolução de
                    casos e aumenta a satisfação do cliente.</p>

                <div>
                    <MPButton name="Experimente Grátis"></MPButton>
                </div>
            </div>

            <div className="flex flex-col gap-10 ">

                <h2 className="text-center text-2xl xl:text-3xl font-extrabold"> Liderando o progresso das equipes
                    de atendimento com o Salesforce.</h2>

                <div className="flex flex-wrap gap-10 w-full items-center justify-center">
                    <CompanyWhoUseSalesforce imgUrl="https://i.ibb.co/7RhJzCk/logo-grid-ifood-card-service.webp"
                                             altText="Logo Fórmula 1"></CompanyWhoUseSalesforce>
                    <CompanyWhoUseSalesforce imgUrl="https://i.ibb.co/23Xzw8V/logo-grid-sulamerica-card-service.webp"
                                             altText="Logo empresa General Mills"></CompanyWhoUseSalesforce>
                    <CompanyWhoUseSalesforce imgUrl="https://i.ibb.co/BjBGGHK/logo-grid-inter-card-service.webp"
                                             altText="Logo empresa Humana"></CompanyWhoUseSalesforce>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5 mt-10 ">
                <h2 className="font-bold text-2xl xl:text-3xl text-center">O que você pode conquistar com o <span
                        className="text-[#D20069] font-bold">Service Cloud</span> ?</h2>
                <img className="w-[13%] md:w-[12%] lg:w-[9%] hidden sm:block"
                     src="https://i.ibb.co/KxyfxYx/marquee-servicecloud-coreservice.webp" alt="ilustração Service Cloud"/>
            </div>

            <CarouselsServiceCloud/>

            <div className="flex flex-col gap-8">
                <TitleProductsPrice text="Encontre a edição certa do Service Cloud para a sua empresa."/>

                <ListPriceServiceCloud/>
            </div>


        </main>
    );
};

export default SalesServiceProduct;