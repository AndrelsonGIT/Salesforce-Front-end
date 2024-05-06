import {MdKeyboardArrowDown} from "react-icons/md";
import React from "react";

interface ItemName{
    name:string;
}

const HeaderItem: React.FC<ItemName> = ({name}) => {
        return (
            <li className="cursor-pointer flex items-center gap-2 sm:text-base">{name}<MdKeyboardArrowDown className=" translate-y-[1.2px]"/></li>
        );
    }
;

export default HeaderItem;