import {Link} from "react-router-dom";
import {FormEvent, useState} from "react";
import API_URL from "../../services/configuration.ts";
import axios, {AxiosResponse} from "axios";
import Reloading from "../FormPage/Reloading.tsx";

const LogIn = () => {

    const [isSendingInfo, setIsSendingInfo] = useState<boolean>(false);

    const handleSubmit = async (event: FormEvent<HTMLFormElement>)=>{

        event.preventDefault()

        const formData: FormData = new FormData(event.currentTarget);

        const dataRequest = {
            email: formData.get('email'),
            password: formData.get('password')
        }

        try{
            const response: AxiosResponse = await axios.post(API_URL+"/login", dataRequest)

            console.log(response.data)

             setIsSendingInfo(true)
        }
        catch(error){
            console.log(error)
        }
    }

    return (
        <div>
        {
            !isSendingInfo ? (
                <main className="flex mt-5 flex-1 flex-col justify-center items-center px-6 py-12 lg:px-8">
                    <img src="https://i.ibb.co/jwTJ76M/image-4-1.png" alt="Imagem de fundo floresta animada"
                         className="absolute  -z-10 sm:bottom-0 "/>
                    <div className="sm:mx-auto flex flex-col items-center sm:w-full sm:max-w-sm">
                        <img className="w-[35%] sm:w-40 container" src="https://i.ibb.co/Vj9Lp6Q/pngwing-com-1.png"
                             alt="Logo salesforce"/>
                        <h2 className="mt-10 text-center text-2xl font-bold leading-9 tracking-tight text-gray-900">
                            Iniciar Sessão
                        </h2>
                    </div>

                    <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm md:max-w-md lg:max-w-lg">
                        <form onSubmit={handleSubmit} className="space-y-6 bg-white p-12 sm:bg-transparent" action="#" method="POST">
                            <div>
                                <label htmlFor="email" className="block text-sm font-medium leading-6 text-gray-900 ">
                                    Endereço de E-mail
                                </label>
                                <div className="mt-2">
                                    <input
                                        id="email"
                                        name="email"
                                        type="email"
                                        autoComplete="email"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <div className="flex flex-col gap-2 sm:flex-row sm:gap-0 items-center justify-between ">
                                    <label htmlFor="password"
                                           className="block text-sm font-medium leading-6 text-gray-900">
                                        Senha
                                    </label>
                                    <div className="text-sm">
                                        <p className="font-semibold text-secondary-color hover:text-primary-color">
                                            <Link to="/formRegister"> Não possui um cadastro? </Link>
                                        </p>
                                    </div>
                                </div>
                                <div className="mt-2">
                                    <input
                                        id="password"
                                        name="password"
                                        type="password"
                                        autoComplete="current-password"
                                        required
                                        className="block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                    />
                                </div>
                            </div>

                            <div>
                                <button
                                    type="submit"
                                    className="flex w-full justify-center rounded-md bg-secondary-color px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-primary-color focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                                >
                                    Acessar
                                </button>
                            </div>
                        </form>


                    </div>
                </main>
            ) : (
                <Reloading reloadingText="Recebendo dados de login" navigateTo="/" />
            )
        }
        </div>
)

    ;
};

export default LogIn;