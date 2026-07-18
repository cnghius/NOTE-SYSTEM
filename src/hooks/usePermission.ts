export const usePermission = (role: string) => {
  const checkUser = localStorage.getItem("user") as string;
  console.log("checkUser", checkUser);

  if (!checkUser) {
    return {
      readPermission: false,
      createPermission: false,
      updatePermission: false,
      deletePermision: false,
      isAdmin: false,
    };
  }
  const user = JSON.parse(checkUser);
  // Admin flag is stored in `user.role` or in roleSlugId metadata
  if (
    user.role === "admin" ||
    user.roleSlugId === "admin" ||
    user.roleSlugId?.roleSlug === "admin" ||
    user.roleSlugId?.roleName === "admin"
  ) {
    return {
      readPermission: true,
      createPermission: true,
      updatePermission: true,
      deletePermision: true,
      isAdmin: true,
    };
  }

  const permissions: string[] = Array.isArray(user.roleSlugId?.permissions)
    ? user.roleSlugId.permissions
    : [];
  console.log("permissions", permissions);

  const normalizedRole = String(role || "").toUpperCase();
  const normalizedPermissions = permissions.map((p) => String(p).toUpperCase());

  return {
    readPermission: normalizedPermissions.includes(`READ:${normalizedRole}`),
    createPermission: normalizedPermissions.includes(
      `CREATE:${normalizedRole}`,
    ),
    updatePermission: normalizedPermissions.includes(
      `UPDATE:${normalizedRole}`,
    ),
    deletePermision: normalizedPermissions.includes(`DELETE:${normalizedRole}`),
    isAdmin: false,
  };
};
