import { login, cadastrarUsuario } from "./auth.js";

const loginBotao = document.getElementById('loginBotao');
const botaoCadastrar = document.getElementById('botaoCadastrar');
const loginError = document.getElementById('login-error');
const signupError = document.getElementById('signup-error');

loginBotao.addEventListener('click', async () => {
    const email = document.getElementById('areaUsu').value;
    const password = document.getElementById('areaSenha').value;

    const result = await login(email, password);

    if (result.success) {
        window.location.href = "./escolha.html";
    } else {
        loginError.textContent = "Erro: " + result.message;
    }
});

botaoCadastrar.addEventListener('click', async () => {
    const email = document.getElementById('cadastroEmail').value;
    const password = document.getElementById('cadastroPassword').value;

    const result = await cadastrarUsuario(email, password);

    if (result.success) {
        window.location.href = "./info.html";
    } else {
        signupError.textContent = "Erro: " + result.message;
    }
});
