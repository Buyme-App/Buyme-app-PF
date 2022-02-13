// Aqui se guarda el token que envia el back en el login
let token = localStorage.getItem("token");
// Separa el token y el rol del usuario
export function verifyTokenRole(param) {
  const role = param.data.data.role;
  return role;
}

// envia el header con el toquen

export function sendKey() {
  // header que se envia al backend
  const headers = {
    headers: {
      "Content-Type": "application/json",
      Authorization: `${token}`,
    },
  };

  return headers;
}
