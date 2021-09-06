const criaNovaLinha = (userName,id,title,body) => {
    const linhaNovoPost = document.createElement("tr")
    const conteudo = `
        <td class="td" data-td>${id}</td>
        <td>${title}</td>
        <td>${userName}</td>
        <td>${body}
        `
    linhaNovoPost.innerHTML = conteudo
    return linhaNovoPost
}

const tabela = document.querySelector("[data-tabela]");
const http = new XMLHttpRequest ();
const apiPostagem = "https://jsonplaceholder.typicode.com/posts";
http.open("GET", apiPostagem);
http.send();
http.onload = () => {
    const data = JSON.parse(http.response);
    
    data.forEach(post => {
        const apiUsers = "https://jsonplaceholder.typicode.com/users/";
        const httpUsers = new XMLHttpRequest();
        httpUsers.open("GET", apiUsers + post.userId)
        httpUsers.send();
        httpUsers.onload = () => {
            const data = JSON.parse(httpUsers.response);
            const username = data.username    
            tabela.appendChild(criaNovaLinha(username,post.id,post.title,post.body));
        }
    })
    
}
