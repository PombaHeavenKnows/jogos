let numeroSecreto;
let tentativas;

function iniciarJogo() {
  numeroSecreto = Math.floor(Math.random() * 10) + 1;
  tentativas = 3;

  document.getElementById("mensagem").textContent = "";
  document.getElementById("dica").textContent = "Escolha um número entre 1 e 10";
  document.getElementById("palpite").value = "";
}

function verificar() {
  const palpite = Number(document.getElementById("palpite").value);

  if (!palpite) {
    alert("Digite um número!");
    return;
  }

  if (tentativas <= 0) {
    document.getElementById("mensagem").textContent = "Você perdeu! 😢";
    return;
  }

  if (palpite === numeroSecreto) {
    document.getElementById("mensagem").textContent = "🎉 Acertou!";
  } else {
    tentativas--;

    if (tentativas > 0) {
      if (palpite > numeroSecreto) {
        document.getElementById("mensagem").textContent =
          "🔻 Muito alto! Tentativas restantes: " + tentativas;
      } else {
        document.getElementById("mensagem").textContent =
          "🔺 Muito baixo! Tentativas restantes: " + tentativas;
      }
    } else {
      document.getElementById("mensagem").textContent =
        "💀 Você perdeu! O número era: " + numeroSecreto;
    }
  }
}

function reiniciar() {
  iniciarJogo();
}

window.onload = iniciarJogo;