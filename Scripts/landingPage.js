import {Ingredients} from '../dataScripts/ingredients.js';
import { addToPantry, pantryStorage } from '../Scripts/Pantry.js';

renderInputUser();
function renderInputUser(){


    const InputHTML = `
    
      <div class="text-input relative">

                  <input class="input-user" type="text" placeholder="Add Ingredients">

                  <div class="add-btn">
                    <i class="fa-solid fa-cart-plus"></i>
                  </div>

                  <div>
                       <button class="search-btn"> <i class="fa-solid fa-magnifying-glass glass-btn"></i></button>
                  </div>
                 

              </div>

                <div class="user-button">


                 <button class="btn-user">Ingredients (0)</button>
                  <button class="btn-user">See Recipes</button>


              </div>

    
    
    
    
    `

    document.querySelector('.input-container').innerHTML = InputHTML;


updatePantry();
    function updatePantry(){
    
        let ingQty = 0; 

          pantryStorage.forEach((ing)=>{

              ingQty += ing.quantity;

          });


        document.querySelector('.storage-count').innerHTML = ingQty;
    
  }
    

    document.querySelector('.add-btn')
    .addEventListener('click', ()=>{

            const userInput = document.querySelector('.input-user');
            
            let isIngredientInput = userInput.value.toLowerCase();


            addToPantry(isIngredientInput);
            updatePantry();
          
            userInput.value='';
    });
























}