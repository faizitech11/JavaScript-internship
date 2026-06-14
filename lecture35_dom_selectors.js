// ============================================
// LECTURE 35: DOM Selectors (NodeList vs HTMLCollection)
// ============================================

// NOTE: Yeh code browser ke console me test karne ka practical code hai (Node me nahi chalega)

const heading = document.getElementById('title');
heading.style.backgroundColor = 'green'; // Dynamic styling
heading.innerText = "Hello JS World";

// querySelectorAll se hamesha NodeList milti hai
const allLi = document.querySelectorAll('li');
allLi.forEach((li) => {
    li.style.color = 'orange'; // NodeList par forEach loop chal jata hai directly
});

// getElementsByClassName se HTMLCollection milti hai
const listItems = document.getElementsByClassName('list-item');
// listItems.forEach() => Error dega! Kyunki HTMLCollection par loop nahi chalta directly

// HTMLCollection ko Array me badalne ka sarkaari formula:
const convertedArray = Array.from(listItems);
convertedArray.forEach((li) => {
    li.style.color = 'blue'; // Ab loop mast chalega!
});
