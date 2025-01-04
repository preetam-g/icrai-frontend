import styles from './hackathonRegister.module.css'
import AddHackathon from '../../forms/hackathons-form/AddHackathon'
import React, { useState, useEffect } from "react";
import Toast from "../../components/toast/Toast"
import { useCreateMyCompany } from '../../api/MyUserApi';

const HackathonRegister = () => {
    const { createCompany, isLoading, isSuccess, isError, error, reset } = useCreateMyCompany();
    const [toast, setToast] = useState({ message: "", type: "" });

    useEffect(() => {
        if (isSuccess) {
            setToast({ message: "Hackathon added successfully!", type: "SUCCESS" });
        } else if (isError) {
            setToast({ 
                message: error?.message || "Failed to add Hackathon", 
                type: "ERROR" 
            });
            reset();
        }
    }, [isSuccess, isError, error, reset]);

    const handleCloseToast = () => {
        setToast({ message: "", type: "" });
    };

    const handleSave = async (formData) => {
        try {
            await createCompany(formData);
        } catch (err) {
            console.error('Error saving hackathon:', err);
            setToast({ 
                message: err?.message || "Failed to add Hackathon", 
                type: "ERROR" 
            });
        }
    };
    
    return(
        <div className={styles.container}>
            <AddHackathon onSave={handleSave} isLoading={isLoading} />
            {toast.message && (
                <Toast 
                    message={toast.message} 
                    type={toast.type} 
                    onClose={handleCloseToast} 
                />
            )}
        </div>
    );
}

export default HackathonRegister;
