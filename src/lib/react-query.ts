import { MutationCache, QueryCache, QueryClient } from "@tanstack/react-query";
import { error } from "node:console";


export const queryClient = new QueryClient({

    queryCache: new QueryCache({
        onError: (error)=> {
            //show notification
        }
    }),

    mutationCache: new MutationCache({
        onError: (error) => {
            //show notification
        }
    }),
    
    defaultOptions: {
        queries: {
            retry: false,
            refetchOnWindowFocus: false,
            throwOnError: false,
            gcTime: 1000 * 60 * 60 * 24
        }
    }
})