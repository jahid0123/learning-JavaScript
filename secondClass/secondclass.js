//queston -1: create a const object called "product" to store information shown in the picture
const product = {
    title: 'Ball Pen',
    rating: 4,
    offer: 5,
    price: 270
};

console.log(product);

const profile = {
    username: '@jahidahmed',
    isFollow: false,
    follower: 123,
    following: 123
};

console.log(typeof(profile));
console.log(typeof(profile.username));
console.log(typeof(profile['isFollow']));