const menu = {
    _courses: {
        appetizers: [],
        mains: [],
        desserts: []
    },

    get courses(){
        return this._courses
    },

    addDishToCourse(courseName, dishName, dishPrice){
            const dish = {
            name: dishName,
            price: dishPrice
            }
        if (courseName === 'appetizers'){
            this._courses.appetizers.push(dish)
        } else if(courseName==='mains'){
            this._courses.mains.push(dish)
        } else if (courseName==='desserts'){
            this._courses.desserts.push(dish)
        }
    },
    
    getRandomDishFromCourse(courseName){
        dishes = this._courses[courseName]
        i = Math.floor(Math.random()*dishes.length);
        return dishes[i]
    },

    generateRandomMeal(){
        appetizer = this.getRandomDishFromCourse('appetizers');
        main = this.getRandomDishFromCourse('mains');
        dessert = this.getRandomDishFromCourse('desserts');
        totalPrice = (appetizer.price) + (main.price) + (dessert.price);
        return (`Your meal:
        ${appetizer.name}  -  ${appetizer.price}
        ${main.name}  -  ${main.price}
        ${dessert.name}  -  ${dessert.price}
        Total price: ${totalPrice}`)
    }
}

menu.addDishToCourse('mains', 'steak', 70);
menu.addDishToCourse('mains', 'fish', 85);
menu.addDishToCourse('mains', 'chicken', 60);
menu.addDishToCourse('appetizers', 'salad', 30);
menu.addDishToCourse('appetizers', 'carpaccio', 25);
menu.addDishToCourse('appetizers', 'bruschette', 27);
menu.addDishToCourse('desserts', 'cake', 30);
menu.addDishToCourse('desserts', 'fruit salad', 35);
menu.addDishToCourse('desserts', 'icecream', 27);

meal = menu.generateRandomMeal();
console.log (meal);
