
const FormRegister = () => {
    return (
        <div className="mt-5 sm:mt-10 flex flex-col items-center justify-center gap-10">
            <img src="https://i.ibb.co/jwTJ76M/image-4-1.png" alt="Imagem de fundo floresta animada" className="absolute -z-10 lg:bottom-0"/>
            <img className="w-[35%] sm:w-40 container" src="https://i.ibb.co/Vj9Lp6Q/pngwing-com-1.png" alt="Logo salesforce"/>
            <h2 className="text-center">Inscreva-se para começar a sua avaliação gratuita</h2>
            <form className="max-w-3xl p-5 w-full md:w-3/4 md:max-w-2xl rounded-xl bg-white">

                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="floating_password" id="floating_password"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                            border-0 border-b-2 border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                             peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Nome</label>
                </div>

                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="repeat_password" id="floating_repeat_password"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2
                            border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_repeat_password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                             rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-7
                              5 peer-focus:-translate-y-6">E-mail</label>

                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="floating_password" id="floating_password"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                            border-0 border-b-2 border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                             peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Senha</label>
                </div>
                <div className="relative z-0 w-full mb-5 group">
                    <input type="password" name="floating_password" id="floating_password"
                           className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent
                            border-0 border-b-2 border-gray-300 appearance-none
                             focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                           placeholder=" " required/>
                    <label htmlFor="floating_password"
                           className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300
                            transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                             peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                              peer-placeholder-shown:scale-100
                              peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                        Confirmar Senha</label>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_first_name" id="floating_first_name"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_first_name"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform
                               -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0
                                rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600 peer-placeholder-shown:scale-100
                                 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Cargo
                        </label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_last_name" id="floating_last_name"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_last_name"
                               className="peer-focus:font-medium absolute text-sm text-gray-500
                               duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                               peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-blue-600
                                peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0
                                 peer-focus:scale-75 peer-focus:-translate-y-6">Empresa</label>
                    </div>
                </div>
                <div className="grid md:grid-cols-2 md:gap-6">
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="tel" pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}" name="floating_phone" id="floating_phone"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_phone"
                               className="peer-focus:font-medium absolute text-sm text-gray-500 duration-300 transform
                                -translate-y-6 scale-75 top-3 -z-10 origin-[0]
                                 peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                                  peer-focus:text-blue-600 peer-placeholder-shown:scale-100
                                  peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6">
                            Numero de telefone</label>
                    </div>
                    <div className="relative z-0 w-full mb-5 group">
                        <input type="text" name="floating_company" id="floating_company"
                               className="block py-2.5 px-0 w-full text-sm text-gray-900 bg-transparent border-0 border-b-2 border-gray-300 appearance-none
                                focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                               placeholder=" " required/>
                        <label htmlFor="floating_company"
                               className="peer-focus:font-medium
                                absolute text-sm
                                 text-gray-500 duration-300 transform
                                  -translate-y-6 scale-75 top-3
                                   -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4
                                    peer-focus:text-blue-600 peer-placeholder-shown:scale-100
                                     peer-placeholder-shown:translate-y-0 peer-focus:scale-75
                                     peer-focus:-translate-y-6">Setor/Area</label>

                    </div>

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
