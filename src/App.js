import React from 'react'
import { ChakraProvider } from '@chakra-ui/react'
import Router from './routes/Router'
import { GlobalStyle } from './GlobalStyle.styled'

const App = () => {
  return (
    <>
    <ChakraProvider>
      <GlobalStyle />
      <Router />
    </ChakraProvider>
    </>
  )
}

export default App
