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


export const useGetMyCompany = () => {
    //const { getAccessTokenSilently } = useAuth0();

    const getMyCompanyRequest = async ()=> {
        //const accessToken = await getAccessTokenSilently();

        const response = await fetch(`${API_BASE_URL}/company`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            },
        });

        if(!response.ok){
            throw new Error("Failed to fetch Company");
        }
        return response.json();
    };

    const { data: currentCompany,
            isLoading,
            error, } = useQuery("fetchCurrentCompany",getMyCompanyRequest);

    if(error){
        console.log(error.toString());
    }

    return{ currentCompany,isLoading };
};


export const useCreateMyCompany = () => {
    const createMyCompanyRequest = async (company) => {
        try {
            console.log('Sending data to server:', company); // Debug log

            const response = await fetch(`${API_BASE_URL}/company`, {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(company),
            });

            if (!response.ok) {
                const errorData = await response.json();
                console.log('Server error response:', errorData); // Debug log
                throw new Error(errorData.message || "Failed to add Hackathon");
            }

            const data = await response.json();
            return data;
        } catch (error) {
            console.error('Detailed API Error:', error);
            throw error;
        }
    };

    const {
        mutateAsync: createCompany, 
        isLoading,
        isError,
        isSuccess,
        error,
        reset
    } = useMutation(createMyCompanyRequest);

    return {
        createCompany,
        isLoading,
        isError,
        isSuccess,
        error,
        reset
    };
};

export const useCreateMyTeam = () => {
    const { getAccessTokenSilently } = useAuth0();

    const createMyTeamRequest = async (teamData) => {
        try{
            const accessToken = await getAccessTokenSilently();
            const response = await fetch(`${API_BASE_URL}/team`, {
                method: "POST",
                headers: {
                    Authorization: `Bearer ${accessToken}`,
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(teamData),
            });

            const data = await response.json();

            if(!response.ok){
                throw new Error(data.message || "Failed to add Team");
            }

            return data;
        }
        catch(error){
            console.error('Error in createMyTeamRequest:', error);
            throw error;
        }
        
    };

    const {
        mutateAsync: createTeam, 
        isLoading,
        isError,
        isSuccess,
    } = useMutation(createMyTeamRequest);

    return {
        createTeam,
        isLoading,
        isError,
        isSuccess,
    };
}


