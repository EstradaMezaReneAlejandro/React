import { useState, useEffect } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Product from "./pages/Product";
import Homepage from "./pages/Homepage";
import Pricing from "./pages/Pricing";
import PageNotFound from "./pages/PageNotFound";
import Login from "./pages/Login";
import PageNav from "./components/PageNav";
import AppLayout from "./pages/AppLayout";
import CityList from "./components/CityList";

export default function App()
{
    const [cities, setCities] = useState({});
    const [isLoading, setIsLoading] = useState(false);

    useEffect(
        function ()
        {
            async function fetchCities()
            {
                
            }
        },
        []
    );

    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" element={<Homepage />} />
                    <Route path="product" element={<Product />} />
                    <Route path="pricing" element={<Pricing />} />
                    <Route path="login" element={<Login />} />
                    <Route path="applayout" element={<AppLayout />}>
                        <Route index element={<CityList />} />
                        <Route path="cities" element={<CityList />}/>
                        <Route path="countries" element={<p>list of countries</p>}/>
                        <Route path="form" element={<p>form</p>}/>
                    </Route>
                    <Route path="*" element={<PageNotFound />} />
                </Routes>
            </BrowserRouter>
        </>
    );
}