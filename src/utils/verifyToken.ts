import { jwtDecode } from "jwt-decode";

type TokenPayload = {
  email: string;
  role: string;
};

const verifyToken = (token: string) => {
  return jwtDecode<TokenPayload>(token);
};

export default verifyToken;
