import { BrowserRouter, Route, Routes } from "react-router-dom"

import { Home } from "../pages/Home"
import { PokemonDetails } from "../pages/PokemonDetails"




export const AppRoutes = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route exact path="/" element={<Home />} />
                <Route exact path="/pokemon/:id" element={<PokemonDetails />} />
            </Routes>
        </BrowserRouter>
    )
}