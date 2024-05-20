import PriceCardProps from "../type/PriceCardType.tsx";
import MPButton from "../buttons/MPButton.tsx";
import { IoCheckmark } from "react-icons/io5";
import {Link} from "react-router-dom";
const PriceCard: React.FC<PriceCardProps> = ({cardName, cardPrice, plansBenefitsText }) => {
    return (

        <div className="w-full h-96 flex flex-col justify-center items-center gap-5 max-w-sm p-4 bg-white
        e border-4 border-t-primary-color rounded-lg sm:p-10">
            <h5 className="mb-4 text-xl font-medium text-primary-color">{cardName}</h5>
            <div className="flex flex-col items-center text-lg ">
                <h3 className="text-blue-800">${cardPrice}</h3>
                <h5>USD/usuário/mês</h5>
                <p>(cobrado anualmente)</p>
            </div>
            <ol className="flex flex-col items-center justify-center gap-3">
                {plansBenefitsText.map((element: string, index: number) =>(
                    <div className="max-w-sm flex items-center justify-center gap-2" key={index}>
                        <IoCheckmark/>
                        <p className="text-center w-[100%] text-sm text-s-gray">{element}</p>
                    </div>

                ))}
            </ol>
            <Link to="/formRegister"><MPButton name="Entre em contato conosco"></MPButton></Link>
        </div>


    );
};

export default PriceCard;