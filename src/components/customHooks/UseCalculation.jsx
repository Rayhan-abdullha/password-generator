import { useState } from "react";

const useCalulation = () => {
    const [password, setPassword] = useState("");
    const [range, setRange] = useState(0);
    const [error, setError] = useState("");
    const [validation, setValidation] = useState({
      uppercase: false,
      lowercase: false,
      number: false,
      symbol: false,
    });
    const handleRange = (e) => {
      setRange(e.target.value);
    };
    const handleValidation = (e) => {
      setValidation({
        ...validation,
        [e.target.name]: e.target.name,
      });
    };
    const handlePassGen = () => {
      if (range >= 4 && range < 15) {
        let randomPass = {
          uppercase: "ABCDEFGHIJKLMNOPQRSTUVWXYZ",
          lowercase: "abcdefghijklmnopqrstuvwxyz",
          number: "01234567890123456789",
          symbol: "@#$@#$@",
        };
  
        function generatePass() {
          let rangeP = range-1;
          let key = Object.keys(validation).filter((k) => validation[k]);
          let passkey = "";
  
          for (const v of key) {
            if (v) {
              let pass = randomPass[v];
              passkey += pass;
            }
          }
          let pass = "";
          while (rangeP--) {
            let randomlyPassGen = Math.floor(Math.random() * passkey.length);
            pass += passkey[randomlyPassGen];
          }
          return pass;
        }
  
        let passwordGen = generatePass();
        let finalPass = "";
        if (validation.symbol) {
            let str = ["@", "#", "$"];
            let random = Math.floor(Math.random() * str.length);
            if (
              passwordGen.includes("@") &&
              passwordGen.includes("#") &&
              passwordGen.includes("$")
            ) {
              finalPass = passwordGen;
            } else {
              finalPass = passwordGen + str[random];
            }
          } else {
            finalPass = passwordGen
          }
        setPassword(finalPass);
      } else {
        setError("At least 4 Character!");
      }
  
      setRange(0);
      setValidation({
        uppercase: false,
        lowercase: false,
        number: false,
        symbol: false,
      });
    };
  
    function text() {
      let text = "";
      if (password) {
        text = password;
      } else if (error) {
        text = error;
      } else {
        text = "Create Password";
      }
      return text;
    }
    return {
        range,
        password,
        error,
        validation,
        handleRange,
        handleValidation,
        handlePassGen,
        text
    }
}

export default useCalulation