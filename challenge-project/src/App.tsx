import './App.css'
import MainPage from "./components/MainPage/MainPage.tsx";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import FormRegister from "./components/FormPage/FormRegister.tsx";
import Header from "./components/Header/Header.tsx";
import LogIn from "./components/LogIn/LogIn.tsx";
import WhyChoose from "./components/WhyChoosePage/WhyChoose.tsx";
import SalesCloudProduct from "./components/products/SalesCloudProduct.tsx";

function App() {
  return (
    <>
        <Header/>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<MainPage/>}></Route>
                <Route path="/formRegister" element={<FormRegister/>}></Route>
                <Route path="/logIn" element={<LogIn/>}></Route>
                <Route path="/whyChooseSalesforce" element={<WhyChoose/>}></Route>
                <Route path="/salesCloudProduct" element={<SalesCloudProduct/>}></Route>
            </Routes>
        </BrowserRouter>

    </>
  )
}

export default App
