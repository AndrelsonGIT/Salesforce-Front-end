import HeaderItem from "./HeaderItem.tsx";
import {Link} from "react-router-dom";
import {useState} from "react";
import ListLineMobile from "./ListLineMobile.tsx";


const Header = () => {

    const [showNavBar, setShowNavBar] = useState<boolean>(false);

    const handleClick = ()=>{
        const mainHTML =  document.querySelector("main");
        setShowNavBar(!showNavBar)
        if (mainHTML) {
            mainHTML.classList.toggle("blur-sm");
        }
        // console.log(mainHTML)
        // bodyHTML.classList.toggle("overflow-hidden")

    }

    return (
        <header>
            <div
                className={`${showNavBar ? "blur" : ""} flex items-center justify-between w-full h-10 py-10 text-xs font-bold`}>
                <div className="flex items-center">
                    <Link to="/"><img className="w-12 sm:w-16" src="https://images2.imgbox.com/02/4b/QS2TMbWI_o.png"
                                      alt="salesforce logo"/></Link>
                    <ul className="hidden ml-8 gap-16 md:flex">
                        <Link to="/whyChooseSalesforce"><HeaderItem name="Por que a Salesforce"/></Link>
                        <li className="relative group">
                            <button className="focus:outline-none"><HeaderItem name="Produtos"/></button>
                            <ul className="absolute flex flex-col items-start justify-center gap-5 w-40 z-10 top-full left-0 mt-2 bg-white shadow-md rounded-md opacity-0 group-hover:opacity-100">
                                <li className=" text-base"><Link to="/salesCloudProduct">Sales Cloud</Link></li>
                                <li className=" text-base"><Link to="/salesMarketingCloud">Marketing Cloud</Link></li>
                                <li className=" text-base"><Link to="/salesServiceCloud">Service Cloud</Link></li>

                            </ul>
                        </li>
                    </ul>
                </div>

                <div className="hidden md:flex items-center justify-between">
                    <div className="flex gap-8 items-center sm:text-base">
                        <div>
                            <Link to={"/feedback"}>
                            <p className="list-disc text-primary-color underline decoration-solid cursor-pointer">Dar feedback</p>
                            </Link>
                        </div>
                        <Link to="/logIn">
                            <button
                                className="h-7 px-5 py-0.5 text-center px-2 bg-green-500 text-white rounded"> Login
                            </button>
                        </Link>
                    </div>
                </div>
                <img onClick={handleClick} className="w-12 sm:w-16 md:hidden"
                     src="https://images2.imgbox.com/cb/0d/7Qzp3IFl_o.png?download=true" alt="botão para mais opções"/>

            </div>
            <div className={`${showNavBar ? 'absolute' : 'hidden'} right-0 bg-white top-0 w-80 h-full z-40 `}>
                <img onClick={handleClick} src="https://i.ibb.co/fqwqZm7/blue-square-close-x-button-icon-transparent-background-7017516950388
                39jyrtjdq1ud-removebg-preview.png" className="w-16 relative left-60 " alt=""/>
                <ul className="flex flex-col gap-10 text-xl items-center mt-20 ">
                    <ListLineMobile text="Por que usar Salesforce" functionOnClick={handleClick}
                                    linkURL="/whyChooseSalesforce"/>

                    <ListLineMobile text="Produto: Sales Cloud" functionOnClick={handleClick}
                                    linkURL="/salesCloudProduct"/>

                    <ListLineMobile text="Produto: Marketing Cloud" functionOnClick={handleClick}
                                    linkURL="/salesMarketingCloud"/>

                    <ListLineMobile text="Produto: Service Cloud" functionOnClick={handleClick}
                                    linkURL="/salesServiceCloud"/>

                    <ListLineMobile text="Dar feedback" functionOnClick={handleClick}
                                    linkURL="//feedback"/>

                    <Link to="/formRegister">


                        <button
                            onClick={handleClick}
                            className="h-10 px-5 py-0.5 text-center px-2 bg-primary-color text-white rounded"> Cadastrar
                        </button>
                    </Link>
                    <Link to="/logIn">
                        <button
                            onClick={handleClick}
                            className="h-10 px-5 py-0.5 text-center px-2 bg-green-500 text-white rounded"> Login
                        </button>
                    </Link>
                </ul>
            </div>
        </header>

    );
};

export default Header;