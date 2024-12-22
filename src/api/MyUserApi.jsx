// const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

// type CreateUserRequest = {
//     auth0Id: String;
//     email: string;
// }

// export const useCreateMyUser = () => {
//     const createMyUserRequest = async (user: CreateUserRequest) => {
//         const response = await fetch(`${API_BASE_URL}/user`, {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json",
//             },
//             body: JSON.stringify(user),
//         });

//         if(!response.ok)  {
//             throw new Error("Failed to create user");
//         }
//     };

//     const {
//          mutateAsync: createUser, 
//          isLoading,
//          isError,
//          isSuccess,
//         } = useMutation(createMyUserRequest);

//         return {
//             createUser,
//             isLoading,
//             isError,
//             isSuccess,
//         };
// };

import { useMutation, useQuery } from 'react-query';
import { useAuth0 } from '@auth0/auth0-react';

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

export const useGetMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const getMyUserRequest = async ()=> {
        const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/user`, {
            method: "GET",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
        });

        if(!response.ok){
            throw new Error("Failed to fetch user");
        }
        return response.json();
    };

    const { data: currentUser,
            isLoading,
            error, } = useQuery("fetchCurrentUser",getMyUserRequest);

    if(error){
        console.log(error.toString());
    }

    return{ currentUser,isLoading };
};

export const useCreateMyUser = () => {
    const createMyUserRequest = async (user) => {
        const response = await fetch(`${API_BASE_URL}/user`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(user),
        });

        if (!response.ok) {
            throw new Error("Failed to create user");
        }
    };

    const {
        mutateAsync: createUser, 
        isLoading,
        isError,
        isSuccess,
    } = useMutation(createMyUserRequest);

    return {
        createUser,
        isLoading,
        isError,
        isSuccess,
    };
};

// type UpdateMyUserRequest = {
//     name: string;
//     university: string;
//     age: string;
//     phone: string;
//     alternatePhone: string;
//     alternateEmail: string;
// }

// export const useUpdateMyUser = () => {
//     const { getAccessTokenSilently } = useAuth0();

//     const updateMyUserRequest = async(formData: UpdateMyUserRequest) => {
//         const accessToken = await getAccessTokenSilently();
//          const response = await fetch(`${API_BASE_URL}/user`,{
//              method: "PUT",
//              headers:{
//                 Authorization: `Bearer ${accessToken}`,
//                 "Content-Type": "application/json",
//              },
//              body: JSON.stringify(formData),
//          });

//          if(!response.ok){
//             throw new Error("Failed to update user");
//          }

//          return response.json();
//     };

//     const { mutateAsync: updateUser, isLoading , isSuccess, isError, error, reset,} = useMutation(updateMyUserRequest);

//     return { updateUser, isLoading };
// };

export const useUpdateMyUser = () => {
    const { getAccessTokenSilently } = useAuth0();

    const updateMyUserRequest = async (formData) => {
        const accessToken = await getAccessTokenSilently();
        const response = await fetch(`${API_BASE_URL}/user`, {
            method: "PUT",
            headers: {
                Authorization: `Bearer ${accessToken}`,
                "Content-Type": "application/json",
            },
            body: JSON.stringify(formData),
        });

        if (!response.ok) {
            throw new Error("Failed to update user");
        }

        return response.json();
    };

    const { mutateAsync: updateUser, isLoading, isSuccess, isError, error, reset } = useMutation(updateMyUserRequest);

    return { updateUser, isLoading, isSuccess, isError, error, reset };
};

