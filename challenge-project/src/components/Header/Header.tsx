import HeaderItem from "./HeaderItem.tsx";

const Header = () => {

    const imageURL = 'https://images2.imgbox.com/02/4b/QS2TMbWI_o.png'

    return (
        <header>
            <div className="flex items-center justify-between w-full h-10 py-10 text-xs font-bold">
                <div className="flex items-center">
                    <img className="w-12 sm:w-16" src={imageURL} alt="salesforce logo"/>
                    <ul className="hidden ml-8 gap-16 md:flex">
                        <HeaderItem name="Por que a salesforce" />
                        <HeaderItem name="Produtos"/>
                    </ul>
                </div>

                <div className="hidden md:flex items-center justify-between">

                    <div className="flex gap-8 items-center sm:text-base ">

                        <div>
                            <p className="list-disc underline decoration-solid cursor-pointer">Entre em contato</p>
                            <p>0800 891 1887</p>
                        </div>

                        <button className="h-7 px-5 py-0.5 text-center px-2 bg-green-500 text-white rounded"> Login</button>
                    </div>
                </div>

                <img className="w-12 sm:w-16 md:hidden"
                     src="https://images2.imgbox.com/cb/0d/7Qzp3IFl_o.png?download=true"
                     alt="botão para mais opções"/>

            </div>

        </header>
    );
};

export default Header;