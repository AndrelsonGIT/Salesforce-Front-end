import React from 'react'
import "./MainHeroApresentation.css"
import MainHeroButton from "./MainHeroButton.tsx";

const MainHeroApresentation = () => {
    return (
        <div className="w-full relative h-1/4 flex flex-col items-center justify-center  ">
            {/*<div className="triangle left"></div>*/}
            {/*<div className="triangle right"></div>*/}
            <h1 className="text-3xl md:text-4xl lg:text-5xl text-center font-bold">Salesforce faz a sua empresa <br/> mais eficiente </h1>
            <div className="flex w-full justify-center gap-5 mt-5 md:gap-10 lg:gap-18">
                <MainHeroButton name="Por que usar a Salesforce"/>
                <MainHeroButton name="Produtos"/>
            </div>
        </div>
    )
}

export default MainHeroApresentation;

