export const usePermission = (moduleKey: string) => {
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
  if (user.roleSlugId === "admin") {
    return {
      readPermission: true,
      createPermission: true,
      updatePermission: true,
      deletePermision: true,
      isAdmin: true,
    };
  }
  const permissions: string[] = user.roleSlugId?.permissions || [];
  console.log("permissions", permissions);

  return {
    readPermission: permissions.includes(`read:${moduleKey}`),
    createPermission: permissions.includes(`create:${moduleKey}`),
    updatePermission: permissions.includes(`update:${moduleKey}`),
    deletePermision: permissions.includes(`delete:${moduleKey}`),
    isAdmin: false,
  };
};
