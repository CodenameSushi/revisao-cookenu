import { BrowserRouter, Routes, Route } from "react-router-dom"
import React from 'react'
import Homepage from "../pages/Homepage/Homepage"
import LoginPage from "../pages/LoginPage/LoginPage"
import CreateRecipePage from "../pages/CreateRecipePage/CreateRecipePage"
import DetailsPage from "../pages/DetailsPage/DetailsPage"
import SignupPage from "../pages/SignupPage/SignupPage"
import NotfoundPage from "../pages/NotfoundPage/NotfoundPage"

const Router = () => {
  return (
    <BrowserRouter>
        <Routes>
            <Route path="/" element={<Homepage/>}/>
            <Route path="/login" element={<LoginPage/>}/>
            <Route path="/signup" element={<SignupPage/>}/>
            <Route path="/recipe/:recipeId" element={<DetailsPage/>}/>
            <Route path="/recipe/new" element={<CreateRecipePage/>}/>
            <Route path="*" element={<NotfoundPage/>}/>
        </Routes>
    </BrowserRouter>
  )
}

export default Router