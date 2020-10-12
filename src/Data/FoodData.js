export function formatPrice(price) {
    return price.toLocaleString('en-UK', {
        style: 'currency',
        currency: 'EUR'
    })
}

export const foodItems = [
    {
        name: 'Margherita Pizza',
        img: '/img/pizza.png',
        section:'Pizzas',
        price: 4.5
    },
    {
        name: 'Pepperoni Pizza',
        img: '/img/pizza2.jpeg',
        section:'Pizzas',
        price: 5
    },
    {
        name: 'Chicken Pizza',
        img: '/img/chicken-pizza.jpeg',
        section:'Pizzas',
        price: 6
    },
    {
        name: 'Vegetariana Pizza',
        img: '/img/healthy-pizza.jpeg',
        section:'Pizzas',
        price: 4.5
    },   
    {
        name: 'Capricciosa Pizza',
        img: '/img/capricciosa.jpg',
        section:'Pizzas',
        price: 5
    }, 
    {
        name: 'Quattro Stagioni Pizza',
        img: '/img/quattro-stagioni.jpg',
        section:'Pizzas',
        price: 6
    }, 
    {
        name: 'Cheeseburger',
        img: '/img/burger.jpeg',
        section:'Sandwiches',
        price: 3
    },
    {
        name: 'Beef Wrap',
        img: '/img/gyro.jpeg',
        section:'Sandwiches',
        price: 3
    },
    {
        name: `Grilled Shrimp Po'Boy`,
        img: '/img/sandwich.jpeg',
        section:'Sandwiches',
        price: 4
    },
    {
        name: 'Pizza Sandwich',
        img: '/img/pizza-sandwich.jpg',
        section:'Sandwiches',
        price: 2.5
    },
    {
        name: 'French Fries',
        img: '/img/fries.jpeg',
        section:'Sides',
        price: 1.5
    },
    {
        name: 'Chicken Fingers',
        img: '/img/chicken-fingers.jpeg',
        section:'Sides',
        price: 3
    },
    {
        name: 'Mixed Seasonal Salad',
        img: '/img/mix-salad.jpg',
        section:'Sides',
        price: 1.5
    },
    {
        name: 'Caesar Salad',
        img: '/img/caesar-salad.jpg',
        section:'Sides',
        price: 2.5
    },
    {
        name: 'Soda',
        section:'Drinks',
        price: 1.5,
        choices: ['Coke', 'Sprite', 'Fanta', 'Root Beer']
    },
    {
        name: 'Beers',
        section:'Drinks',
        price: 3,
        choices: [`Beck's`, 'Krombacher', 'Warseiner', 'Bitburger']
    }
];

export const foods = foodItems.reduce((res, food) => {
  if(!res[food.section]){
      res[food.section] = [];
  }
  res[food.section].push(food);
  return res;
}, {});