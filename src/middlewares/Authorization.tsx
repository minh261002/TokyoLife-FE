import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { Navigate } from "react-router-dom";

interface AuthorizationProps {
  allowedPermissions: string[];
  children: React.ReactNode;
}

const Authorization: React.FC<AuthorizationProps> = ({
  allowedPermissions,
  children,
}) => {
  const { admin } = useSelector((state: RootState) => state.auth);
  const adminPermissions = Array.isArray(admin?.permissions?.[0])
    ? admin.permissions[0].map((permission) => permission.name)
    : [];

  const hasPermission = (requiredPermissions: string[]) => {
    return requiredPermissions.some((perm) => adminPermissions.includes(perm));
  };

  if (!hasPermission(allowedPermissions)) {
    return <Navigate to="/access-denied" />;
  }

  return <>{children}</>;
};

export default Authorization;
