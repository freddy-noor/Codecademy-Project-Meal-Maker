const menu = {
  _courses: {
    _appetizers: [],
    _mains: [],
    _desserts: [],

    get appetizers () {
      return this._appetizers;
    },
    set appetizers (appetizerIn) {
      this._appetizers = appetizerIn;
    },

    get mains () {
      return this._mains;
    },
    set mains (mainIn) {
      this._mains = mainIn;
    },

    get desserts () {
      return this._mains;
    },
    set desserts (dessertIn) {
      this._desserts = dessertIn;
    },
  },

  get courses () {
    return {
      appetizers: this._courses._appetizers,
      mains: this._courses._mains,
      desserts: this._courses._desserts,
    }
  },

  addDishToCourse (courseName, dishName, dishPrice) {
    const dish = {
      name: dishName,
      price: dishPrice,
    };
    this._courses[courseName].push(dish)
  },

  getRandomDishFromCourse (courseName) {
    const dishes = this._courses[courseName];
    const randomIndex = Math.floor(Math.random() * dishes.length);
    return dishes[randomIndex];
  },  

  generateRandomMeal () {
    const appetizer = this.getRandomDishFromCourse('appetizers');
    const main = this.getRandomDishFromCourse('mains');
    const dessert = this.getRandomDishFromCourse('desserts');
    const totalPrice = appetizer.price + main.price + dessert.price;
    return `Your meal is ${appetizer.name}, ${main.name}, ${dessert.name}. The price is ${totalPrice}.`;
  },
  
};

menu.addDishToCourse('appetizers', 'Egg Roll', 3.25);
menu.addDishToCourse('mains', 'Chicken Pasta', 10.55);
menu.addDishToCourse('desserts', 'Ice cream', 3.25);

menu.addDishToCourse('appetizers', 'Ceasar Salad', 4.25);
menu.addDishToCourse('mains', 'Lasagna', 9.75);
menu.addDishToCourse('desserts', 'Cheese Cake', 4.50);

menu.addDishToCourse('appetizers', 'Garlic Bread', 3.50);
menu.addDishToCourse('mains', 'Ribeye Steak', 14.95);
menu.addDishToCourse('desserts', 'Creme Brule', 4.25);

menu.addDishToCourse('appetizers', 'Prawn Coctail', 4.25);
menu.addDishToCourse('mains', 'Fish & Chips', 12.95);
menu.addDishToCourse('desserts', 'Cheese Board', 3.25);

const meal = menu.generateRandomMeal();

console.log(meal);
