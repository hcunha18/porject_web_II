import { createContext, useContext, useState } from "react";
import { auth } from "../servidor/firebase";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

export const AuthContext = createContext({});

export function AuthContextProvider(props) {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      setUser(JSON.parse(storedUser));
    }   
  }, [])

  async function login(user, password) {
    return signInWithEmailAndPassword(auth, user, password)
      .then((userCredential) => {
        setUser(userCredential);
        localStorage.setItem("user", JSON.stringify(userCredential))
        return (true);
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        console.log("erro", errorMessage, errorCode);
        if (errorCode == "auth/wrong-password") {
          alert("Senha inválida");
          return false;
        }
        if (errorCode == "auth/invalid-email") {
          alert("E-mail inválido");
          return false;
        }
        alert("Falha ao logar");
        return false;
      });
  }
  function logout(){
    setUser(null);
    localStorage.setItem("user", null)
  }

  async function createUser(user, password){
    return createUserWithEmailAndPassword(auth, user, password)
    .then((userCredential) => {
      setUser(userCredential);
      localStorage.setItem("user", JSON.stringify(userCredential))
      return (true);
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
    });
  }
  return (
    <AuthContext.Provider value={{ user, login, logout, createUser }}>
      {props.children}
    </AuthContext.Provider>
  );
}