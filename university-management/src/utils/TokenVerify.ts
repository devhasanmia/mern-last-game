import { jwtDecode } from "jwt-decode"

export const TokenVerify = (token: string) => {
    return jwtDecode(token)
}