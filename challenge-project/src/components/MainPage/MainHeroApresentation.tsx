import "./MainHeroApresentation.css"
import MainHeroButton from "../buttons/MainHeroButton.tsx";
import {Link} from "react-router-dom";

const MainHeroApresentation = () => {
    return (
        <div className="w-full relative h-1/4 flex flex-col items-center justify-center  ">
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">Salesforce faz a sua empresa <br/> mais eficiente </h1>
            <div className="flex w-full justify-center gap-5 mt-5 md:gap-10 lg:gap-18">
                <Link to="/whyChooseSalesforce"><MainHeroButton name="Por que usar a Salesforce"/></Link>
                <Link to="/salesCloudProduct"><MainHeroButton name="Produtos"/></Link>
            </div>
        </div>
    )
}

export default MainHeroApresentation;

