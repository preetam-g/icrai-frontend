// import { useUpdateMyUser } from "../../api/MyUserApi";
// import UserProfileForm from "../../forms/profile-form/UserProfileForm";

// const UserProfilePage = () => {
//     const { updateUser, isLoading:isUpdateLoading } = useUpdateMyUser();

//     return <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} />
// };

// export default UserProfilePage;


import React, { useState } from "react";
import { useUpdateMyUser } from "../../api/MyUserApi";
import UserProfileForm from "../../forms/profile-form/UserProfileForm";
import Toast from "../../components/toast/Toast"; 

const UserProfilePage = () => {
  const { updateUser, isLoading: isUpdateLoading, isSuccess, isError, error, reset } = useUpdateMyUser();
  const [toast, setToast] = useState({ message: "", type: "" });

  // Effect to handle toast notifications
  React.useEffect(() => {
    if (isSuccess) {
      setToast({ message: "User profile updated!", type: "SUCCESS" });
    } else if (isError) {
      setToast({ message: error.toString(), type: "ERROR" });
      reset();
    }
  }, [isSuccess, isError, error, reset]);

  const handleCloseToast = () => {
    setToast({ message: "", type: "" });
  };

  return (
    <div>
      <UserProfileForm onSave={updateUser} isLoading={isUpdateLoading} />
      {toast.message && <Toast message={toast.message} type={toast.type} onClose={handleCloseToast} />}
    </div>
  );
};

export default UserProfilePage;
