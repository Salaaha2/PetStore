// Assume we have a variable to keep track of the number of visitors
let visitors = 0;

// Function to check if the third person has visited
function checkVisitors() {
  visitors++;
  if (visitors % 3 === 0) {
    return "Congratulations! You have won a $50 gift card!";
  } else {
    return "Welcome to our store's landing page!";
  }
}

// Example usage
console.log(checkVisitors()); // Welcome to our store's landing page!
console.log(checkVisitors()); // Welcome to our store's landing page!
console.log(checkVisitors()); // Congratulations! You have won a $50 gift card!
console.log(checkVisitors()); // Welcome to our store's landing page!

var shop = [
    {
      title: 'Six Set Pokemon Balls',
      image: './images/ShopImages/SixSetPokeBalls.png',
      price: '$7,500-15,000',
      description: 'Highly rare Pokeballs, designed to catch only specific and rare pokemon types'
    },
    {
      title: 'Poke Food',
      image: './images/ShopImages/Poke_Food.jpeg',
      price: '$28-120',
      description: 'Feed your Pokemon only the best!'
    },
    {
      title: 'Pokemon',
      image: './images/Bulbasaur_Cute.webp',
      price: '$350-2M',
      description: 'Only The Best Pokemon sold here!'
    },
  
    
    ]
    
    var postHTML = " "
    
  
    
  
    for (var i=0; i < shop.length; i++){
        var heading = '<div class="product ' + '"><span><h5>' + shop[i].title + '</h5>'
        var image = '<img class=product_image src="' + shop[i].image + '"/>'
        var price = '<p> ' + shop[i].price + '</p></span>'
        var description = '<div class=""><p>'+ shop[i].description + '</p><button type="button" class="btn btn-warning"> add to cart</button></div></div>'
        var concatThis = heading + image + price + description;
        postHTML = postHTML + concatThis
    }
    document.getElementById('market').innerHTML = postHTML
  