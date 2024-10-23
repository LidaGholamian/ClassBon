import { createData } from "@/core/http-service/http-service";
import { Signin } from "../types/signin.types";
import { useMutation } from "@tanstack/react-query";

const signIn = (model: Signin): Promise<void> => createData<Signin, void>("/signin", model);

type UseSignInOptions = {
    onSuccess? : ()=> void;

}

export const useSignIn = ({onSuccess}: UseSignInOptions)=> {
   const {mutate: submit, isPending } = useMutation({
        mutationFn: signIn,
        onSuccess: onSuccess,
    });

    return { submit, isPending}
}