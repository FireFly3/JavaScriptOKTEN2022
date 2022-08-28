fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(users => users.forEach(user => {
            let div = document.createElement('div');
            div.innerText = user.name;
            document.body.appendChild(div);
        })
    )