export const saveToken = (token) => {
  token
    ? localStorage.setItem("token", token)
    : console.log("No se ha guardado el token porque esta infefinido");
};
export const getToken = () => {
  return localStorage.getItem("token")
    ? localStorage.getItem("token")
    : "No se ha encontrado el token en localStorage";
};

export const deleteToken = () => {
  if (localStorage.getItem("token").length) {
    localStorage.removeItem("token");
    console.log("Token eliminado");
  }
  return "No se puede eliminar algo que no existe en localStorage";
};
