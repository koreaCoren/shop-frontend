import { useMutation } from "react-query";
import { tokenCheck } from "./axios";

const { mutateAsync } = useMutation(tokenCheck);

export const checkToken = async (data, accessToken) => {
    const headers = {
        "Authorization": `Bearer ${accessToken}`,
        "Content-Type": `application/json`,
    }
    await mutateAsync(data, { headers });
}