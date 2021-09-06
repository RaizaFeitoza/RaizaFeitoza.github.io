const criaNovaLinha = (userName,id,title,completed) => {
    const linhaNovoToDos = document.createElement("tr")
    const conteudo = `
        <td class="td" data-td>${id}</td>
        <td>${title}</td>
        <td>${userName}</td>
        <td>${completed}
        `
    linhaNovoToDos.innerHTML = conteudo
    return linhaNovoToDos
}

const tabela = document.querySelector("[data-tabela]");
const http = new XMLHttpRequest ();
const apiToDos = "https://jsonplaceholder.typicode.com/todos";
http.open("GET", apiToDos);
http.send();
http.onload = () => {
    const data = JSON.parse(http.response);
    data.forEach(to_dos => {
        const apiUsers = "https://jsonplaceholder.typicode.com/users/";
        const httpUsers = new XMLHttpRequest();
        httpUsers.open("GET", apiUsers + to_dos.userId)
        httpUsers.send();
        httpUsers.onload = () => {
            const data = JSON.parse(httpUsers.response);
            const username = data.username
            tabela.appendChild(criaNovaLinha(username,to_dos.id,to_dos.title,to_dos.completed));
        }
    })
    
}

