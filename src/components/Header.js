import React, { useContext } from 'react'
import { Flex, Button } from "@chakra-ui/react"
import { useNavigate } from 'react-router-dom'
import { goToLoginPage } from '../routes/coordinator'
import { GlobalContext } from '../contexts/GlobalContext'

const Header = () => {
    const navigate = useNavigate()
    const context = useContext(GlobalContext)


    const logout = () => {
        window.localStorage.removeItem("cookenu-token")
        context.setIsAuth(false)
        goToLoginPage(navigate)
    }

  return (
    <Flex 
        h={20}
        bg="blue.500"
        justifyContent="end"
        alignItems="center"
        paddingRight={8}
        paddingLeft={8}
    >
        <Button onClick={logout} colorScheme="red">Deslogar</Button>
    </Flex>
  )
}

export default Header