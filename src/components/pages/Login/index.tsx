"use client";
import { useTranslation } from "@/app/i18n/client";
import { Navbar } from "@/components/Navbar";
import { Bg } from "@/components/styles";
import { store } from "@/stores";
import { observer } from "mobx-react-lite";
import { Wrapper } from "./style";
import { createContext, useState } from "react";
import { LoginForm } from "./LoginForm";
import { RegisterForm } from "./RegisterForm";

export const formContext = createContext({
  form: "login",
  changeForm: () => {},
});

export const Login = observer(() => {
  const [form, setForm] = useState<"login" | "register">("login");
  const theme: "dark" | "light" = store.theme.currentTheme;

  const changeForm = () => {
    if (form === "login") {
      setForm("register");
    } else {
      setForm("login");
    }
  };

  return (
    <Bg theme={theme}>
      {" "}
      <div
        style={{
          flex: 1,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Navbar />
        <formContext.Provider value={{ form, changeForm }}>
          {form === "login" ? <LoginForm /> : <RegisterForm />}
        </formContext.Provider>
      </div>
    </Bg>
  );
});
