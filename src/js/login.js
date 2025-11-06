function logar() {
  var login = document.getElementById('login').value;
  var senha = document.getElementById('senha').value;

  if (login === "usuario" && senha === "123456") {
      Swal.fire({
          title: "Login efetuado!",
          text: "Você será redirecionado para a área restrita.",
          icon: "success",
          background: "#12122B",
          color: "#AAAA91",
          confirmButtonColor:"#291e86"
      }).then((result) => {
          if (result.isConfirmed) {
              location.href = "/index.html";
          }
      });
  } else {
      Swal.fire({
          title: "Erro!",
          text: "Usuário ou senha incorretos.",
          icon: "error",
          background: "#12122B",
          color: "#AAAA91",
          confirmButtonColor:"#291e86"
      });
  }
}