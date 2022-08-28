let postId = JSON.parse(localStorage.getItem('postID'));

let screen = document.createElement('div');
screen.classList.add('screen');

fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
    .then(response => response.json())
    .then(post => {
        let bigBox = document.createElement('div')
        bigBox.classList.add('bigBox');

        let userId = document.createElement('div');
        userId.innerText = `User ID: ${post.userId}`

        let id = document.createElement('div');
        id.innerText = `ID: ${post.id}`

        let title = document.createElement('div');
        title.innerText = `Title: ${post.title}`

        let body = document.createElement('div');
        body.innerText = `Body: ${post.body}`

        document.body.append(screen);
        screen.append(bigBox)
        bigBox.append(userId, id, title, body)

            let postBox = document.createElement('div')
            postBox.classList.add('postBox');

        fetch(`https://jsonplaceholder.typicode.com/posts/${postId}/comments`)
            .then(response => response.json())
            .then(comments => comments.forEach(comment => {
                let box = document.createElement('div');
                box.classList.add('post-box');

                let postId = document.createElement('div');
                postId.innerText = `Post ID: ${comment.postId}`

                let id = document.createElement('div');
                id.innerText = `Id: ${comment.id}`;

                let name = document.createElement('div');
                name.innerText = `Name: ${comment.name}`;

                let email = document.createElement('div');
                email.innerText = `Email: ${comment.email}`;

                let body = document.createElement('div');
                body.innerText = `Body: ${comment.body}`

                box.append(postId, id, name, email, body);
                postBox.append(box);
                document.body.append(postBox);

            }))
    })