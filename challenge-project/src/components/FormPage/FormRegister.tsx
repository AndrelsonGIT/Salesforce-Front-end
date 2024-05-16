import axios, {AxiosResponse} from 'axios'
import {FormEvent} from "react";

const FormRegister = () => {

    const handleSubmit = async (event: FormEvent<HTMLFormElement>) => {
        event.preventDefault();

        const formData: FormData = new FormData(event.currentTarget);

        const data = {
            name: formData.get('name'),
            email: formData.get('email'),
            password: formData.get('password'),
            position: formData.get('position'),
            companyName: formData.get('companyName'),
            companySector: formData.get('companySector')
        };

        try {
            const response: AxiosResponse = await axios.post('http://localhost:8080/user', JSON.stringify(data), {
                headers: {
                    'Content-Type': 'application/json'
                }
            });

            window.alert("Registrado com sucesso")


        } catch (error) {
            window.alert("Email ja registrado");
        }
    };


    return (
        <div className=" flex flex-col items-center justify-center gap-10">
            <img src="https://i.ibb.co/jwTJ76M/image-4-1.png" alt="Imagem de fundo floresta animada" className="absolute -z-10 lg:bottom-0"/>
            <img className="w-[35%] sm:w-40 container" src="https://i.ibb.co/Vj9Lp6Q/pngwing-com-1.png" alt="Logo salesforce"/>
            <h2 className="text-center">Inscreva-se para começar a sua avaliação gratuita</h2>
            <form onSubmit={handleSubmit} className="max-w-3xl p-5 w-full md:w-3/4 md:max-w-2xl rounded-xl bg-white">

                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="name" id="name"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                            border-0 border-b-2 border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="name"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                             peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Nome</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="fullname" id="fullname"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                            border-0 border-b-2 border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="fullname"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                             peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Sobrenome</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="email" name="email" id="email"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                            border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="email"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                             rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-7
                              5 peer-focus:-translate-y-6">E-mail</label>

                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="telephoneNumber" name="telephoneNumber" id="telephoneNumber"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                            border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="telephoneNumber"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                             rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-7
                              5 peer-focus:-translate-y-6">Nùmero de Telefone</label>

                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="password" id="password"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                            border-0 border-b-2 border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                             peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Senha</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="confirm_password" id="confirm_password"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                            border-0 border-b-2 border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder="" required/>
                    <label htmlFor="floating_password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                             peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Confirmar Senha</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="position" id="position"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                            border-0 border-b-2 border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder="" required/>
                    <label htmlFor="floating_password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                             peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Cargo</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="companyName" id="companyName"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="position"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform
                               -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                                rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100
                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Empresa
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="companySecotr" id="companySector"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="companyName"
                               className="peer-focus:font-medium absolute text-sm text-gray-500
                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                               peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                                 peer-focus:scale-75 peer-focus:-translate-y-6">Setor/Area</label>
                    </div>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="text" name="position" id="position"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                            border-0 border-b-2 border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder="" required/>
                    <label htmlFor="floating_password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                             peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Quantidade Funcionarios</label>
                </div>
                <button type="submit"
                        className="text-white bg-primary-color hover:bg-secondary-color
                        focus:ring-4 focus:outline-none mx-auto
                         focus:ring-blue-300 font-medium rounded-lg text-center mt-3 text-sm w-full sm:w-auto px-5 py-2.5
                       ">Inscrever-se
                </button>
            </form>
        </div>
    );
};

export default FormRegister;
