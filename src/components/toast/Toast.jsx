import { useEffect } from "react";
import "./toast-module.css";

const Toast = ({ message, type, onClose }) => {
  useEffect(() => {
    const timer = setTimeout(() => {
      onClose();
    }, 5000);

    return () => {
      clearTimeout(timer);
    };
  }, [onClose]);

  const containerClass =
    type === "SUCCESS" ? "toast-container toast-success" : "toast-container toast-error";

  return (
    <div className={containerClass}>
      <div className="toast-message">
        <span>{message}</span>
      </div>
    </div>
  );
};

export default Toast;
