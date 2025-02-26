import React, { useContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import Header from "../../components/Header";
import { GlobalContext } from "../../contexts/GlobalContext";
import { goToLoginPage } from "../../routes/coordinator";
import axios from "axios";
import { BASE_URL } from "../../constants/url";
import { Flex, Heading } from "@chakra-ui/react";
import RecipeCard from "./RecipeCard";

const Homepage = () => {
  const context = useContext(GlobalContext);
  const navigate = useNavigate();

  const [ recipes, setRecipes ] = useState([])


  // useEffect(() => {
  //   const token = window.localStorage.getItem("cookenu-token")
  //   if (!token) {
  //     goToLoginPage(navigate)
  //   }

  // }, [])

  useEffect(() => {
    if (!context.isAuth) {
      goToLoginPage(navigate);
    }
  }, []);

  useEffect(() => {
    fetchRecipes()
  }, [])
  
  console.log(recipes)

  const fetchRecipes = async () => {
    try {
      const config = {
        headers: {
          Authorization: localStorage.getItem("cookenu-token"),
        },
      };

      const response = await axios.get(`${BASE_URL}/recipe/all`, config);
      setRecipes(response.data)
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <Header />
      <Flex flexDirection={"column"} paddingTop={5}>
        <Heading>Receitas Cookenu</Heading>
        <Flex flexWrap={"wrap"} justifyContent={"space-between"} >
          {recipes.map((recipe) => {
            return <RecipeCard key={recipe.id} recipe={recipe} />
          })}
        </Flex>
      </Flex>
    </>
  );
};

export default Homepage;
