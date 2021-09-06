const criaNovaLinha = (username, id, title) => {
    const linhaNovoAlbum = document.createElement("tr")
    const conteudo = `
        <td class="td" data-td>${id}</td>
        <td>${title}</td>
        <td>${username}</td>
        `
    linhaNovoAlbum.innerHTML = conteudo
    return linhaNovoAlbum
}

const tabela = document.querySelector("[data-tabela]");
const apiAlbum = "https://jsonplaceholder.typicode.com/albums";

const http = new XMLHttpRequest();
http.open("GET", apiAlbum);
http.send();
http.onload = () => {
    const data = JSON.parse(http.response);
    data.forEach(album => {
        const apiUsers = "https://jsonplaceholder.typicode.com/users/";
        const httpUsers = new XMLHttpRequest();
        httpUsers.open("GET", apiUsers + album.userId)
        httpUsers.send();
        httpUsers.onload = () => {
            const data = JSON.parse(httpUsers.response);
            const username = data.username
            tabela.appendChild(criaNovaLinha(username, album.id, album.title));
        }
    })
}

