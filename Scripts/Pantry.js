import {Ingredients} from '../dataScripts/ingredients.js';



/// Local Storage in pantry
export let pantryStorage = JSON.parse(localStorage.getItem('pantryStorage'));

if(!pantryStorage){

    pantryStorage = [{

    ingredientsId: 'beef241ds',
    name: 'beef', 
    quantity: 1


  }];

}


function saveStorage(){


   localStorage.setItem('pantryStorage', JSON.stringify(pantryStorage));

 
}



/// function Adding Ingredient Pantry Code
export function addToPantry(isIngredientInput){

  const ingredient = Ingredients.find(ing => ing.name === isIngredientInput || ing.name2 === isIngredientInput); // Find ingredient from Ingredients
    if (ingredient) {
        const storedIngredient = pantryStorage.find(item => item.name === isIngredientInput || item.name2 === isIngredientInput); // Check if already in pantryStorage

        if (storedIngredient) {
            // If ingredient exists in pantryStorage
            alert('already exist!');
            return;
          
            
        } else {
            // If not, add it with an initial quantity of 1
            pantryStorage.push({ingredientsId: ingredient.id,name: ingredient
            .name, name2: ingredient.name2, quantity: 1 });
         
        }

    }
    
saveStorage();
}


/// Function Removing Pantry/ When Removing ingredients The pantryStorage becomes new Pantry where in every remove it will become a new Stored Ingredients in Pantry Storage using array push.
export function removePantry(ingredientId){

  const newPantry = [];


  pantryStorage.forEach((pantryItem)=>{

    if(pantryItem.ingredientsId !== ingredientId){
        newPantry.push(pantryItem);
    }

  });

  pantryStorage = newPantry;
  saveStorage();


}