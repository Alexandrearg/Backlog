// Objeto para armazenar usuários e suas informações
const users = {
    adm: { password: "1", firstLogin: true }, // Usuário administrador
};

// Função de login
function handleLogin(event) {
    event.preventDefault(); // Evita o recarregamento da página

    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;

    // Verifica se o usuário e senha são válidos
    if (users[username] && users[username].password === password) {
        // Se for o primeiro login, redireciona para a tela de alteração de senha
        if (users[username].firstLogin) {
            // Esconde o formulário de login
            document.getElementById("login-container").style.display = "none";
            // Exibe a tela de alteração de senha
            document.getElementById("change-password-container").style.display = "block";
        } else {
            // Esconde o formulário de login
            document.getElementById("login-container").style.display = "none";
            // Exibe o menu principal
            document.getElementById("menu-container").style.display = "block";
        }
    } else {
        alert("Usuário ou senha inválidos! Tente novamente.");
    }
}

// Função para alterar a senha
function handlePasswordChange(event) {
    event.preventDefault();

    const newPassword = document.getElementById("new-password").value;
    const confirmPassword = document.getElementById("confirm-password").value;

    // Verifica se as senhas coincidem
    if (newPassword === confirmPassword) {
        const username = document.getElementById("username").value;

        // Atualiza a senha do usuário e marca o primeiro login como concluído
        users[username].password = newPassword;
        users[username].firstLogin = false;

        // Esconde a tela de alteração de senha
        document.getElementById("change-password-container").style.display = "none";
        // Exibe o menu principal
        document.getElementById("menu-container").style.display = "block";
    } else {
        alert("As senhas não coincidem. Tente novamente.");
    }
}

// Exibe a tela de configurações
function showSettings() {
    const menuContainer = document.getElementById("menu-container");
    menuContainer.style.display = "none";

    const settingsContainer = document.getElementById("settings-container");
    settingsContainer.style.display = "block";
}

// Exibe a tela de usuários
function showUsers() {
    const settingsContainer = document.getElementById("settings-container");
    settingsContainer.style.display = "none";

    const usersContainer = document.getElementById("users-container");
    usersContainer.style.display = "block";

    // Exibe a lista de usuários cadastrados
    const userList = document.getElementById("user-list");
    userList.innerHTML = ""; // Limpa a lista antes de atualizá-la

    for (const user in users) {
        const li = document.createElement("li");
        li.textContent = `${user} - ${users[user].firstLogin ? "Primeiro login" : "Senha definida"}`;
        userList.appendChild(li);
    }
}

// Adiciona um novo usuário
function addUser() {
    const newUser = prompt("Digite o nome do novo usuário:");
    if (newUser && !users[newUser]) {  // Verifica se o nome do usuário não existe
        const newPassword = prompt("Digite a senha para o novo usuário:");
        if (newPassword) {
            // Adiciona o novo usuário ao objeto de usuários
            users[newUser] = { password: newPassword, firstLogin: true };
            showUsers(); // Atualiza a lista de usuários
        } else {
            alert("A senha é obrigatória!");
        }
    } else {
        alert("Usuário já existe ou nome inválido.");
    }
}

// Volta para o menu principal
function goBackToMenu() {
    // Esconde a tela de configurações
    document.getElementById("settings-container").style.display = "none";
    // Exibe o menu principal
    document.getElementById("menu-container").style.display = "block";
}

// Volta para a tela de configurações
function goBackToSettings() {
    // Esconde a tela de usuários
    document.getElementById("users-container").style.display = "none";
    // Exibe a tela de configurações
    document.getElementById("settings-container").style.display = "block";
}
