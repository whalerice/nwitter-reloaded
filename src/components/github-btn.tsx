import styled from "styled-components";
import { GithubAuthProvider, signInWithPopup } from "firebase/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { FirebaseError } from "firebase/app";

const Button = styled.span`
  margin-top: 50px;
  background-color: white;
  font-weight: 500;
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  display: flex;
  gap: 5px;
  align-items: center;
  justify-content: center;
  color: #333;
  width: 100%;
  cursor: pointer;
`;
const Logo = styled.img`
  height: 25px;
`;

const Error = styled.span`
  color: tomato;
  margin-top: 5px;
`;

export default function GithubBtn() {
  const navigate = useNavigate();
  const [error, setError] = useState("");

  const onClick = async () => {
    setError("");
    try {
      const provieder = new GithubAuthProvider();
      await signInWithPopup(auth, provieder);
      navigate("/");
    } catch (error) {
      if (error instanceof FirebaseError) {
        setError(error.message);
      }
    }
  };

  return (
    <>
      <Button onClick={onClick}>
        <Logo src="/github-logo.svg" />
        Continue with Github
      </Button>
      {error && <Error>{error}</Error>}
    </>
  );
}
