import ProductCardWhyChoose from "../Cards/ProductCardWhyChoose.tsx";
import WhyChooseText from "./WhyChooseText.tsx";
import ClientCompaniesImages from "./ClientCompaniesImages.tsx";
import ContactCardSales from "../Cards/ContactCardSales.tsx";
import {Link} from "react-router-dom";


const WhyChoose = () => {
    return (
        <main className="md:mt-12 flex flex-col gap-16 ">

            <img className="w-screen absolute -z-10 -mx-[5%]" src="https://i.ibb.co/VB0LNfv/background-why-choose.png"
                 alt=""/>

            <div className="flex flex-col items-center">
                <h2 className="text-secondary-color text-center font-extrabold min-[400px]:text-xl sm:text-2xl
                 md:text-3xl lg:text-4xl xl:5x1 mb-3">Por que usar a Salesforce</h2>
                <img className="w-[90%] min-[400px]:w-[300px] sm:w-[50%] max-w-xl"
                     src="https://i.ibb.co/vQYQbg0/Person-360-salesforce.png" alt=""/>
            </div>

            <div className="flex justify-center items-center flex-wrap gap-10 xl:gap-32  w-full mx-auto">

                <Link to="/salesMarketingCloud"><ProductCardWhyChoose name="Marketing" imageUrl="https://i.ibb.co/jDq9Fg1/image-7-1.png"
                                      description="Atraia mais compradores com uma estratégia
                 de marketing personalizada"/></Link>
                <Link to="/salesServiceCloud"><ProductCardWhyChoose name="Service" imageUrl="https://i.ibb.co/VQyLg7Z/image-7-3.png"
                                      description="Responda rapidamente aos problemas de suporte ao cliente em qualquer
                                       canal."/></Link>
                <Link to="/salesMarketingCloud"><ProductCardWhyChoose name="Sales" imageUrl="https://i.ibb.co/BcwnVgZ/image-7-2.png"
                                      description="Conquiste mais clientes conhecendo suas necessidades
                 e preocupações."/></Link>

            </div>

            <div className="flex flex-col items-center justify-center gap-8 mx-auto lg:flex-row lg:justify-evenly   ">
                <div className="flex flex-col gap-8 lg:w-[50%]">
                    <WhyChooseText
                        mainText="O que a Salesforce representa?"
                        secondText="Nossos principais valores ajudam a tornar a Salesforce uma plataforma para mudanças."
                        thirdText="Desde que começamos a operar em um pequeno apartamento em São Francisco em 1999, acreditamos
                 que fazer o bem como empresa significa fazer o bem ao mundo. Por isso, comprometemos nosso tempo,
                 equidade e produtos para melhorar a educação, a igualdade e o meio ambiente para todos.
                 Os principais valores da Salesforce: Confiança, Sucesso do Cliente, Inovação, Igualdade e
                 Sustentabilidade.
                 "/>

                    <WhyChooseText
                        mainText="O que fazemos para as pessoas?"
                        secondText="Nossa tecnologia ajuda as pessoas a terem melhores empregos, vidas,
                     empresas e comunidades."
                        thirdText="Quando você compra uma solução da Salesforce, não está apenas comprando uma
                    plataforma de CRM; você está ingressando em uma comunidade inclusiva de mais de 10 milhões de
                     inovadores, disruptores e modeladores de comunidade que chamamos de Trailblazers.
                     Com o aprendizado online gratuito da Trailhead, eles estão aprendendo as habilidades
                     para melhorar suas empresas e carreiras.
                 "/>
                </div>

                <img className="w-[75%] sm:w-[40%] lg:w-[30%] xl:w-[25%]" src="https://i.ibb.co/Tv8N9yH/image-12.png"
                     alt="placa da Salesforce sobre inovação, igualdade, segurança e sustentabilidade"/>

            </div>

            <div className="flex flex-col items-center gap-6">
                <h2 className="font-bold text-center     text-xl">Mais de 150.000 empresas, grandes, médias e pequenas,
                    estão expandindo seus negócios
                    com a Salesforce.</h2>

                <div className="flex justify-center wrap items-center gap-10 w-[23%] max-w-sm">

                    <ClientCompaniesImages imageUrl="https://i.ibb.co/HB5tX1z/image-11.png"
                                           alt="placa da Salesforce"/>

                    <ClientCompaniesImages imageUrl="https://i.ibb.co/yhQk1RS/image-9.png"
                                           alt="placa da Salesforce"/>

                    <ClientCompaniesImages imageUrl="https://i.ibb.co/xYn0RjM/image-10.png"
                                           alt="placa da Salesforce"/>
                </div>

            </div>
            <h2 className="font-bold text-lg text-center">Deseja saber mais sobre a Salesforce?</h2>

                <div className="flex flex-col justify-center items-center gap-12 ">
                    <Link to="/formRegister"><ContactCardSales
                        mainText="Contate-nos"
                        text="Ligue para 0800 891 1887, ou clique no chat no botão abaixo para entrar em contato"
                        buttonText="Contato"/></Link>

                    <Link to="/formRegister"><ContactCardSales
                        mainText="Começa agora"
                        text="Experimente o Salesforce gratuitamente por 30 dias - sem necessidade de cartão de crédito,
                         nem software para instalar."
                        buttonText="Quero começar"/></Link>
                </div>

        </main>
    );
};

export default WhyChoose;