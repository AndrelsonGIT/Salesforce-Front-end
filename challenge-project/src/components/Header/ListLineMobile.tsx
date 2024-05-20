import React from 'react';
import {Link} from "react-router-dom";

interface ListLineMobileProps {
    linkURL: string;
    functionOnClick: ()=> void;
    text: string;
}

const ListLineMobile: React.FC<ListLineMobileProps> = ({linkURL, functionOnClick, text}) => {
    return (
        <div>
            <li className="border-b border-primary-color"><Link to={linkURL} onClick={functionOnClick}>{
                text
            }</Link></li>
        </div>
    );
};

export default ListLineMobile;