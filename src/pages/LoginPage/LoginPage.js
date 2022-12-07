import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  Stack,
  Button,
  Heading,
  Text,
  useColorModeValue,
  Spinner,
  Link,
} from "@chakra-ui/react";
import { useState } from "react";
import { BASE_URL } from "../../constants/url";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { gotToHomePage, goToSignUpPage } from "../../routes/coordinator";

const LoginPage = () => {
  // const [email, setEmail] = useState("")
  // const [password, setPassword] = useState("")

  const [form, setForm] = useState({
    email: "",
    password: "",
  });

  const onChangeFrom = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  // const onChangeEmail = (e) => {
  //     setEmail(e.target.value)

  // }
  // const onChangePassword = (e) => {
  //     setPassword(e.target.value)

  // }

  const login = async () => {
    try {
      setIsLoading(true);

      const body = {
        email: form.email,
        password: form.password,
      };

      const response = await axios.post(`${BASE_URL}/user/login`, body);
      window.localStorage.setItem("cookenu-token", response.data.token);

      gotToHomePage(navigate);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  return (
    <Flex
      minH={"100vh"}
      align={"center"}
      justify={"center"}
      bg={useColorModeValue("gray.50", "gray.800")}
    >
      <Stack spacing={8} mx={"auto"} maxW={"lg"} py={12} px={6}>
        <Stack align={"center"}>
          <Heading fontSize={"4xl"}>Entre em sua conta</Heading>
          <Text fontSize={"lg"} color={"gray.600"}>
            para aproveitar as melhores receitas cookenu ✌️
          </Text>
        </Stack>
        <Box
          rounded={"lg"}
          bg={useColorModeValue("white", "gray.700")}
          boxShadow={"lg"}
          p={8}
        >
          <Stack spacing={4}>
            <FormControl id="email">
              <FormLabel>Email</FormLabel>
              <Input
                type="email"
                name="email"
                value={form.email}
                onChange={onChangeFrom}
                autoComplete="off"
              />
            </FormControl>
            <FormControl id="password">
              <FormLabel>Senha</FormLabel>
              <Input
                type="password"
                name="password"
                value={form.password}
                onChange={onChangeFrom}
              />
            </FormControl>
            <Stack spacing={10}>
              <Button
                bg={"blue.400"}
                color={"white"}
                _hover={{
                  bg: "blue.500",
                }}
                onClick={login}
              >
                {isLoading ? <Spinner /> : "Entrar"}
              </Button>
            </Stack>
            <Stack paddingTop={5} paddingBottom={5}>
              <Text textAlign={"center"}>
                Ainda nao tem conta?{" "}
                <Link
                  color={"blue.400"}
                  onClick={() => goToSignUpPage(navigate)}
                >
                  Cadastre-se!
                </Link>
              </Text>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default LoginPage;
