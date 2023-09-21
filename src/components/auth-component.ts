import styled from "styled-components";

export const Wrapper = styled.div`
  width: 420px;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 0;
`;
export const Title = styled.h1`
  font-size: 42px;
`;
export const Form = styled.form`
  margin-top: 50px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 100%;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  padding: 10px 20px;
  border-radius: 50px;
  border: 0;
  width: 100%;
  font-size: 16px;
  &[type="submit"] {
    cursor: pointer;
    color: white;
    background-color: #1d9bf0;
    &:hover {
      opacity: 0.8;
    }
  }
`;
export const Error = styled.span`
  font-weight: 600;
  color: tomato;
`;
export const Switcher = styled.span`
  margin-top: 20px;
  a {
    color: #1d9bf0;
    margin-left: 5px;
  }
`;
