let id = JSON.parse(localStorage.getItem('userID'));
console.log(id);

let screen = document.createElement('div');
screen.classList.add('screen')
document.body.append(screen)

fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
    .then(response => response.json())
    .then(user => {
        let block = document.createElement('div');
        block.classList.add('block')

        let id = document.createElement('h3');
        id.innerText = `Id: ${user.id}`;

        let name1 = document.createElement('h3');
        name1.innerText = `Name: ${user.name}`;

        let userName = document.createElement('h5');
        userName.innerText = `Username: ${user.username}`;

        let email = document.createElement('h5');
        email.innerText = `Email: ${user.email}`;

        let address = document.createElement('h5');
        address.innerText = `Address:  street: ${user.address.street} suite: ${user.address.suite} 
            city: ${user.address.city} zipcode: ${user.address.zipcode} geo: lat: ${user.address.geo.lat} 
            lng: ${user.address.geo.lng}`

        let phone = document.createElement('h5');
        phone.innerText = `phone: ${user.phone}`;

        let website = document.createElement('h5');
        website.innerText = `website: ${user.website}`;

        let company = document.createElement('h5');
        company.innerText = `company name: ${user.company.name} catchPhrase: ${user.company.catchPhrase} bs: ${user.company.bs} `;

        let posts = document.createElement('button');
        posts.classList.add('button1');
        posts.innerText = 'Posts of current user';

        block.append(id, name1, userName, email, address, phone, website, company)
        screen.append(block, posts)

        let blockOfUser = document.createElement('div');
        blockOfUser.classList.add('block-user')
        document.body.append(blockOfUser)

        posts.onclick = function () {
            fetch(`https://jsonplaceholder.typicode.com/users/${user.id}/posts`)
                .then(response => response.json())
                .then(posts => posts.forEach(post => {
                    let box = document.createElement('div');
                    box.classList.add('box')

                    let title = document.createElement('div');
                    title.classList.add('title');
                    title.innerText = `Title: ${post.title}`;

                    let postDetails = document.createElement('button');
                    postDetails.innerText = 'post-details'
                    postDetails.onclick = function () {
                        localStorage.setItem('postID', JSON.stringify(post.id))
                        location = 'post-details.html'
                    }
                    box.append(title, postDetails)
                    blockOfUser.appendChild(box)
                    document.body.append(blockOfUser)
                }))
        }
    })