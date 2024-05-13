import MPButton from "../../buttons/MPButton.tsx";
import CompanyWhoUseSalesforce from "../SalesCloud/CompanyWhoUseSalesforce.tsx";
import TitleProductsPrice from "../../Titles/TitleProductsPrice.tsx";
import CarouselsMarketingCloud from "./CarouselsMarketingCloud.tsx";
import ListPriceMarketingCloud from "./ListPriceMarketingCloud.tsx";

const SalesMarketingProduct = () => {
    return (
        <div className="relative h-screen flex gap-9 md:gap-8 2xl:gap-12 items-center flex-col">

            <img
                className="absolute w-[80%] hidden opacity-25 md:block lg:opacity-20 -z-10    right-0"
                src="https://i.ibb.co/j45Tsst/marquee-marketing-product-background-desktop-3.webp"
                alt="fundo Marketing Cloud"/>

            <div className="flex flex-col md:mt-10 lg:mt-14 gap-7 py-5 max-w-lg self-start">

                <h2 className="font-bold text-3xl w-[70%] sm:text-4xl lg:w-[100%] lg:text-5xl xl:text-6xl">Eternize cada momento
                    com <span className="text-[#FE9339] font-bold">Marketing Cloud</span></h2>

                <p className="md:text-lg 2xl:text-xl">Conheça seus clientes por meio de perfis unificados.
                    Otimize ofertas em qualquer canal com a IA. Construa relacionamentos duradouros que
                    impulsionem o crescimento dos negócios.</p>

                <div>
                    <MPButton name="Experimente Grátis"></MPButton>
                </div>
            </div>

            <div className="flex flex-col gap-10 ">

                <h2 className="text-center text-2xl xl:text-3xl font-extrabold"> Veja como as grandes marcas implementam
                    os dados e a IA com a Salesforce para ampliar as relações com os clientes.</h2>

                <div className="flex flex-wrap gap-10 w-full items-center justify-center">
                    <CompanyWhoUseSalesforce imgUrl="https://i.ibb.co/yB9pzvb/formula-one.webp"
                                             altText="Logo Fórmula 1"></CompanyWhoUseSalesforce>
                    <CompanyWhoUseSalesforce imgUrl="https://i.ibb.co/gVPJDsb/general-mills.webp"
                                             altText="Logo empresa General Mills"></CompanyWhoUseSalesforce>
                    <CompanyWhoUseSalesforce imgUrl="https://i.ibb.co/cXpZ0wz/humana.webp"
                                             altText="Logo empresa Humana"></CompanyWhoUseSalesforce>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5 mt-10 ">
                <h2 className="font-bold text-2xl xl:text-3xl text-center">O que é possivel fazer com uma plataforma de <span
                    className="text-[#FE9339] font-bold">Marketing Cloud</span> ?</h2>
                <img className="w-[13%] md:w-[12%] lg:w-[9%] hidden sm:block"
                     src="https://i.ibb.co/ckZN4SW/marquee-marketing-engagement.webp" alt="Ilustração Marketing Cloud"/>
            </div>

            <CarouselsMarketingCloud/>

            <div className="flex flex-col gap-8">
                <TitleProductsPrice text="Encontre a edição certa do Marketing Cloud Engagement para a sua empresa."/>

                <ListPriceMarketingCloud/>
            </div>


        </div>
    );
};

export default SalesMarketingProduct;