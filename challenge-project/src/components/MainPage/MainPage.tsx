import MainHeroApresentation from "./MainHeroApresentation.tsx";
import MainPageCard from "../Cards/MainPageCard.tsx";
import MPCompanyFeedback from "./MPCompanyFeedback.tsx";
import MPButton from "../buttons/MPButton.tsx";
import WhiteButtonSalesforce from "../buttons/WhiteButtonSalesforce.tsx";

function MainPage() {
    return (
        <div className="flex flex-col items-center mt-10 md:mt-20 lg:mt-28">

            <MainHeroApresentation/>

            <div className="flex items-center max-w-[1400px] flex-col gap-5 mt-20 mb-5">
                <h2 className="font-bold text-2xl md:text-3xl lg:text-4xl">O que é a Salesforce</h2>
                <p className="text-center text-xl text-s-gray">A Salesforce é uma empresa de softwares que foca na
                    solução de
                    gerenciamento de relacionamento para
                    aproximar empresas e pessoas. É uma plataforma de CRM integrada que oferece a todos os departamentos
                    uma visão única e compartilhada de cada cliente.
                </p>
                <div className="w-32 md:w-72 self-end my-3">
                    <img src="https://i.ibb.co/gmN0xM5/image-5.png" className="w-52"
                         alt="Nuvem Salesforce"/>
                </div>
            </div>

            <div className="w-full xl:w-[1100px] 2xl:w-[1400px] ">
                <div className="flex w-30 self-start text-3xl text-colo text-primary-color font-bold ">
                    <h2>Saiba como a Salesforce ajuda <br/> o seu negócio a crescer.</h2>
                </div>
                <div
                    className="flex items-center flex-row flex-wrap w-full mt-12 gap-20 justify-evenly lg:justify-between ">
                    <MainPageCard
                        imgUrl="https://i.ibb.co/2Ys4g3r/php-products-service-generic.webp"
                        name="Atendimento"
                        description="Gaste menos com serviços escaláveis que os clientes adoram.">
                    </MainPageCard>
                    <MainPageCard
                        imgUrl="https://i.ibb.co/x3SjC53/php-products-small-business.webp"
                        name="Pequenas empresas"
                        description="Venda de forma mais inteligente e forneça suporte mais rápido em um único aplicativo.">
                    </MainPageCard>
                    <MainPageCard
                        imgUrl="https://i.ibb.co/SPR4VQs/php-products-sales-generic.webp"
                        name="Vendas"
                        description="Feche mais negócios e acelere o crescimento com o CRM nº1.">
                    </MainPageCard>
                </div>

                <MPCompanyFeedback></MPCompanyFeedback>

            </div>

            <div className="flex flex-col gap-20 items-center justify-center max-w-[900px]">
                <h2 className="text-2xl text-center text-primary-color font-bold lg:text-3xl">Uma variedade de conteúdos e
                    ferramentas está disponível para
                    impulsionar o crescimento e o
                    sucesso.</h2>
                <div className="flex flex-col gap-5 items-center md:flex-row">
                    <div className="flex items-center flex-col gap-5 md:items-start ">
                        <h2 className="font-bold text-2xl text-secondary-color lg:text-3xl">O que é CRM?</h2>
                        <p className="text-center text-primary-color md:text-left  lg:text-lg">CRM é a sigla usada para Customer Relationship Management e se refere ao conjunto de
                            práticas, estratégias de negócio e tecnologias focadas no relacionamento com o cliente.
                            Confira abaixo tudo que você precisa saber sobre CRM..</p>
                        <MPButton name="Saiba mais"></MPButton>
                    </div>
                    <img className="w-[60%] md:w-[40%]" src="https://i.ibb.co/RyHD1dw/image-6-1.png" alt="images descrevendo o que é CRM"/>
                </div>
            </div>
            <div className="bg-secondary-color w-2/3 p-1 mt-10 flex flex-col gap-5 justify-center items-center rounded-md
            shadow-[0px_10px_20px_9px_rgba(0,0,0,0.27)]
            sm:gap-10 sm:p-5 sm:flex-row sm:justify-around lg:text-lg lg:p-12 xl:p-10 xl:text-xl ">
                <p className="text-white w-[50%] md:m-0">
                Experimente o Salesforce gratuitamente. Não é necessário cartão de crédito nem instalação de software.
                </p>
                <WhiteButtonSalesforce text="Começar teste gratuito"/>
            </div>

            <div className="flex gap-3 sm:text-lg justify-center items-center flex-col mt-10 w-[70%]">
                <h2 className="text-center w-40 sm:w-52 font-bold md:text-lg md:w-60 lg:text-2xl">
                    Você tem dúvidas? Vamos ajudá-lo a encontrar a direção correta</h2>
                <button className="border-2 border-primary-color rounded-md p-3 hover:bg-primary-color
                 hover:text-white transition duration-150 ease-in-out">
                    Entre em contato</button>
            </div>
        </div>

    );
}

export default MainPage;