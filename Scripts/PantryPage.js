import {Ingredients} from '../dataScripts/ingredients.js';
import {pantryStorage, removePantry} from '../Scripts/Pantry.js';

renderStoredIngredients();
export function renderStoredIngredients(){


    let ingredientsHTML = '';

    pantryStorage.forEach((pantryItems)=>{

      const ingredientId = pantryItems.ingredientsId;
      let matchingIng;

          Ingredients.forEach((ing)=>{
              if(ing.id === ingredientId){

                matchingIng = ing;
              }

        });

    
    ingredientsHTML+=`  <div class="ingredients js-ingredients-content-${matchingIng.id}">

                  <div class="initial-content">

                        <div>
                            <img  class="ingredients-img" src="${matchingIng.image}" alt="">
                        </div>
                        
                        <div class="ingredients-title">
                            <p>${matchingIng.name}</p>
                          
                        </div>
                        
                  </div>

                

                  <div class="delete-btn-container"><button class="delete-btn" data-ing-id="${matchingIng.id}"><img src="landing-page-imgs/Delete.png" class="btn-img" alt=""></button></div>

              </div>`


  document.querySelector('.ingredients-container').innerHTML =  ingredientsHTML;




  });

  

/// Delete Button Code
    document.querySelectorAll('.delete-btn')
    .forEach((everyDeleteBtn)=>{

        everyDeleteBtn.addEventListener('click', ()=>{

                const ingredientId = everyDeleteBtn.dataset.ingId;
                removePantry(ingredientId);

                const ingContainer = document.querySelector(`.js-ingredients-content-${ingredientId}`);

                ingContainer.remove();
        });



    });
















  
}