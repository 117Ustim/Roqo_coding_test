import "./App.css";
import { useState } from "react";
import Button from "./button/button";
import Email from "./email/email";
import Name from "./name/name";

export default function App() {
  const [data, setData] = useState("");
  const [dataOutput, setDataOutput] = useState("");
  const [errorMessageName, setErrorMessageName] = useState("");
  const [errorMessageEmail, setErrorMessageEmail] = useState("");

  console.log(data);

  const InputChange = (event) => {
    const { name, value } = event.target;

    if (name === "name") {
      if (value.length > 11) {
        setErrorMessageName("Name no more than 12 characters");
      } else if (name === "name" && /\d/.test(value)) {
        setErrorMessageName("The name must consist of letters only");
      }
    }
    if (name === "email") {
      if (value.length > 2 && !value.includes("@")) {
        setErrorMessageEmail('Email must contain the "@" symbol');
      } else {
        setErrorMessageEmail("");
      }
    }

    setData({ ...data, [name]: value });
  };

  const onClick = () => {
    setDataOutput({ ...data, dataOutput });

    setData("");
    setErrorMessageName("");
    setErrorMessageEmail("");
  };

  return (
    <div className="container">
      <form>
        <Name
          data={data}
          InputChange={InputChange}
          errorMessageName={errorMessageName}
        />
        <Email
          data={data}
          InputChange={InputChange}
          errorMessageEmail={errorMessageEmail}
        />
        <Button onClick={onClick} />
      </form>
    </div>
  );
}
