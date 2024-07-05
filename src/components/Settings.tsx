import React from "react";

interface SettingsProps {
  children: React.ReactNode;
}

const Settings: React.FC<SettingsProps> = ({ children }) => {
  return (
    <div className="absolute bottom-0 h-[60px] w-screen px-5">{children}</div>
  );
};
export default Settings;
