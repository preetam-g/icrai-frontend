import { useUpdateMyUser } from "../../api/MyUserApi";
import UserProfileForm from "../../forms/profile-form/UserProfileForm";

const UserProfilePage = () => {
    const { updateUser, isLoading:isUpdateLoading } = useUpdateMyUser();

    return <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} />
};

export default UserProfilePage;