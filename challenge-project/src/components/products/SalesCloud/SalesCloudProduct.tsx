import MPButton from "../../buttons/MPButton.tsx";
import CompanyWhoUseSalesforce from "./CompanyWhoUseSalesforce.tsx";
import CarouselsSalesCloud from "./CarouselsSalesCloud.tsx";
import ListPriceSalesCloud from "./ListPriceSalesCloud.tsx";
import TitleProductsPrice from "../../Titles/TitleProductsPrice.tsx";


const SalesCloudProduct = () => {
    return (
        <div className="relative h-screen flex gap-9 md:gap-8 2xl:gap-12 items-center flex-col">

            <img className="absolute w-[80%] hidden opacity-25 md:block lg:opacity-30 -z-10 -top-20 md:-top-32 2xl:-top-48 right-0"
                 src="https://i.ibb.co/dWvFFTw/image-2.png"
                 alt="fundo Sales Cloud"/>

            <div className="flex flex-col md:mt-10 lg:mt-14 gap-7 py-5 max-w-lg self-start">

                <h2 className="font-bold text-3xl w-[70%] sm:text-4xl lg:w-[100%] lg:text-5xl xl:text-6xl">Aprimore as suas vendas com <span className="text-[#09A398] font-bold">Sales Cloud</span></h2>

                <p className="md:text-lg 2xl:text-xl">Construa o alicerce para o crescimento com o Salesforce Automation usando o Sales Cloud e o CRM Nº 1
                    do mundo. Acelere o crescimento e impulsione a produtividade, da gestão de leads à previsão
                    de negócios e fechamento de receita.</p>

                <div>
                    <MPButton name="Experimente Grátis"></MPButton>
                </div>
            </div>

            <div className="flex flex-col gap-10 ">

                <h2 className="text-center text-2xl xl:text-3xl font-extrabold">Liderando equipe de vendas com o Salesforce</h2>

                <div className="flex flex-wrap gap-10 w-full items-center justify-center">
                    <CompanyWhoUseSalesforce imgUrl="https://i.ibb.co/DCYW49P/image-3.png"
                                             altText="Logo empresa Gympass"></CompanyWhoUseSalesforce>
                    <CompanyWhoUseSalesforce imgUrl="https://i.ibb.co/vx793PD/image-4-2.png"
                                             altText="Logo empresa IBM"></CompanyWhoUseSalesforce>
                    <CompanyWhoUseSalesforce imgUrl="https://i.ibb.co/R4hmbzx/image-5-1.png"
                                             altText="Logo empresa Elfa"></CompanyWhoUseSalesforce>
                </div>
            </div>

            <div className="flex items-center justify-center gap-5 mt-10 ">
                <h2 className="font-bold text-2xl xl:text-3xl text-center">O que é possivel fazer com <span
                    className="text-[#09A398] font-bold">Sales Cloud</span> ?</h2>
                <img className="w-[15%] md:w-[12%] lg:w-[9%] hidden sm:block" src="https://i.ibb.co/nQJ60CM/xcc-sales-animation-test-v008-1.png" alt="Ilustração Sales Cloud"/>
            </div>

            <CarouselsSalesCloud/>

            <div className="flex flex-col gap-8">
                <TitleProductsPrice text="Sales Cloud Preços." />
                <p className="text-s-gray text-center xl:text-lg">Descubra qual é a edição ideal do Sales Cloud para as suas necessidades de negócios.</p>
                <ListPriceSalesCloud/>
            </div>



        </div>
    );
};

export default SalesCloudProduct;