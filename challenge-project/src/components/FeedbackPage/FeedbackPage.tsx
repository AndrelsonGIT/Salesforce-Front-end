import axios, {AxiosResponse} from "axios";
import API_URL from "../../services/configuration.ts";
import {FormEvent} from "react";

interface feedbackRequestData {
    feedbackType: string;
    feedbackText: string;
    feedbackNote: number;
    feedbackUserEmail?: string;
}

const FeedbackPage = () => {
    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData = new FormData(event.currentTarget);

        const data: feedbackRequestData = {
            feedbackType: formData.get('feedbackOption') ,
            feedbackText: formData.get('feedback'),
            feedbackNote: parseInt(formData.get('feedbackNote')),
        };

        const feedbackUserEmail: string = formData.get('optionalEmail');

        if(feedbackUserEmail && feedbackUserEmail.trim().length > 0){
            data.feedbackUserEmail = feedbackUserEmail;
        }


        try {
            const response : AxiosResponse = await axios.post(API_URL+'/feedback', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
            window.alert("Registrado com sucesso")


        } catch (error) {
            console.log(error)
        }
    };


    return (
        <main className="mt-5 sm:mt-10 flex flex-col items-center justify-center gap-10">
            <img src="https://i.ibb.co/jwTJ76M/image-4-1.png" alt="Imagem de fundo floresta animada" className="absolute -z-10 lg:bottom-0"/>
            <img className="w-[35%] sm:w-40 container" src="https://i.ibb.co/Vj9Lp6Q/pngwing-com-1.png" alt="Logo salesforce"/>
            <h2 className="text-center">Inscreva-se para começar a sua avaliação gratuita</h2>
            <form onSubmit={handleSubmit} className="max-w-3xl p-5 w-full md:w-3/4 md:max-w-2xl rounded-xl bg-white">

                <div className="relative z-0 w-full mb-5 group">
                    <select name="feedbackOption" id="feedbackOption"
                            className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                            required>
                        <option value="">Selecione uma opção de feedback</option>
                        <option value="Navegação">Navegação</option>
                        <option value="Chatbot">ChatBot</option>
                        <option value="VLibras">VLibras</option>
                        <option value="produtos">Produtos</option>
                        <option value="website">Website</option>
                        <option value="Outros">Outros</option>
                    </select>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    {/*<input type="number" max={5} min={0} name="email" id="email"*/}
                    {/*       className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2*/}
                    {/*        border-gray-300 appearance-none*/}
                    {/*         focus:outline-none focus:ring-0 focus:border-blue-600 peer"*/}
                    {/*       placeholder=" " required/>*/}
                    <div className="flex items-center justify-center py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                            border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer">
                        <select className="w-1/2 row-start-1 col-start-1 " name="feedbackNote" id="feedbackNote">
                            <option value={5}>5 - Fantástico</option>
                            <option value={4}>4 - Ótimo</option>
                            <option value={3}>3 - Okay</option>
                            <option value={2}>2 - Ruim</option>
                            <option value={1}>1 - Terrivel</option>
                        </select>
                    </div>

                    <label htmlFor="feedbackNote"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                             rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-7
                              5 peer-focus:-translate-y-6">NOTA</label>

                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <textarea name="feedback" id="feedback"
                           className="block py-10 px-0 w-full text-sm text-gray-900 bg-transparent
                            border-0 border-b-2 border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder="" minLength={50} required/>
                    <label htmlFor="feedback"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                             peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Escreva o seu feedback</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="optionalEmail" id="optionalEmail"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                            border-0 border-b-2 border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder="" />
                    <label htmlFor="optionalEmail"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                             peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Email (Opcional)</label>
                </div>
                <div className="flex">
                    <button type="submit"
                            className="text-white bg-primary-color hover:bg-secondary-color
                        focus:ring-4 focus:outline-none mx-auto
                         focus:ring-blue-300 font-medium rounded-lg text-center mt-3 text-sm w-full sm:w-auto px-5 py-2.5
                       ">Enviar feedback
                    </button>
                </div>

            </form>
        </main>
    );
};

export default FeedbackPage;