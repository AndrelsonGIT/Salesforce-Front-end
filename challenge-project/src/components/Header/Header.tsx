import HeaderItem from "./HeaderItem.tsx";
import {Link} from "react-router-dom";


const Header = () => {
    return (
        <header>
            <div className="flex items-center justify-between w-full h-10 py-10 text-xs font-bold">
                <div className="flex items-center">
                    <Link to="/"><img className="w-12 sm:w-16" src="https://images2.imgbox.com/02/4b/QS2TMbWI_o.png" alt="salesforce logo" /></Link>
                    <ul className="hidden ml-8 gap-16 md:flex">
                        <Link to="/whyChooseSalesforce"><HeaderItem name="Por que a Salesforce" /></Link>
                        <li className="relative group">
                            <button className="focus:outline-none"><HeaderItem name="Produtos" /></button>
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
                            <p className="list-disc underline decoration-solid cursor-pointer">Entre em contato</p>
                            <p>0800 891 1887</p>
                        </div>
                        <Link to="/logIn"><button className="h-7 px-5 py-0.5 text-center px-2 bg-green-500 text-white rounded"> Login</button></Link>
                    </div>
                </div>
                <img className="w-12 sm:w-16 md:hidden" src="https://images2.imgbox.com/cb/0d/7Qzp3IFl_o.png?download=true" alt="botão para mais opções" />
            </div>
        </header>
    );
};

export default Header;