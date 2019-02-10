'use strict'
const createPostCard = function(post) {
    const cardDiv = document.querySelector('.movie'); 
    const movieImage = document.createElement('img');
    movieImage.classList.add('movie__image');
    movieImage.setAttribute('src', post.img);
    movieImage.setAttribute('alt', 'movie image');
  
    const movieBody = document.createElement('div');
    const movieTitle = document.createElement('h2');
    movieTitle.classList.add('movie__title');
    movieTitle.textContent = post.title;
  
    const movieDescription = document.createElement('p');
    movieDescription.classList.add('movie__description');
    movieDescription.textContent = post.text; 
  
    const link = document.createElement('a');
    link.textContent = post.link;
    link.setAttribute('href', post.link);
  
    cardDiv.append(movieImage, movieBody);
    movieBody.append(movieTitle, movieDescription, link);
    return cardDiv;
}
  



const createCards = posts => {
    const cardsArray = posts.forEach(element => {
        createPostCard(element);
    });
    return cardsArray;
};
const posts = [
    {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 1",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-1.com'
    },
    {
    img: "https://placeimg.com/400/150/nature",
    title: "Post title 2",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-2.com'
    },
    {
    img: "https://placeimg.com/400/150/arch",
    title: "Post title 3",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Fuga, nemo dignissimos ea temporibus voluptatem maiores maxime consequatur impedit nobis sunt similique voluptas accusamus consequuntur, qui modi nesciunt veritatis distinctio rem!",
    link: 'link-3.com'
    }
]
createCards(posts);

