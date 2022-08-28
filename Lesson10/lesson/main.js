//BOM

localStorage.setItem('user', JSON.stringify({name: 'vasya'}));

let item = localStorage.getItem('user');

console.log(JSON.parse(item));

let products = [
    {
        title: 'milk',
        price: 22,
        image: 'https://www.mcqueensdairies.co.uk/wp-content/uploads/2019/02/Mcqueens_1litre_whole_organic-300x300-3.jpg'
    },
    {
        title: 'juice',
        price: 27,
        image: 'https://images-na.ssl-images-amazon.com/images/I/61jL2GCuKLL._SX679_PIbundle-24,TopRight,0,0_AA679SH20_.jpg'
    },
    {
        title: 'tomato',
        price: 47,
        image: 'https://dictionary.cambridge.org/ru/images/thumb/tomato_noun_001_17860.jpg?version=5.0.74'
    },
    {
        title: 'tea',
        price: 15,
        image: 'https://yogiproducts.com/wp-content/uploads/2009/03/YT-US-CAR-RelaxedMind-C23-202201-V2-3DFront_withGlow-300DPI-1.png'
    },
]

products.forEach(product => {
    let productDiv = document.createElement('div');
    productDiv.innerText = product.title;

    let addToFavoriteBtn = document.createElement('button');
    addToFavoriteBtn.innerText = 'add to favorite';
    addToFavoriteBtn.onclick = function () {
        let array = JSON.parse(localStorage.getItem('products')) || [];
        array.push(product);
        localStorage.setItem('products', JSON.stringify(array))

    }
    productDiv.appendChild(addToFavoriteBtn);

    document.body.appendChild(productDiv);
});