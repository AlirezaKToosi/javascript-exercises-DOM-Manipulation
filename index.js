//Del 1
const recipeName = document.getElementById('recipe-name').innerText;
console.log('Recipe Name:', recipeName);

const recipeNameTag = document.getElementById('recipe-name').tagName;
console.log('Recipe Name Tag:', recipeNameTag);

const descriptionFontSize = document.querySelector('.description').style.fontSize;;
console.log('Description Font Size:', descriptionFontSize);

const imageAlt = document.querySelector('.image-container img').getAttribute('alt');
console.log('Image Alt Attribute:', imageAlt);

const imageElement=document.querySelector('.image-container img');
const imageObject={
    url:imageElement.scroll,
    height:imageElement.height,
    width:imageElement.width,
};
console.log('Image Object:',imageObject);

const pasteIngredientsCount = document.querySelectorAll('.ingredients-list-paste li').length;
console.log('Paste Ingredients Count:', pasteIngredientsCount);

const forthIngredient=document.querySelectorAll('.ingredients-list-paste li')[3].innerText;
console.log('Fourth Paste Ingredient:', forthIngredient);

const instructionArray=[];
const instructionElements=document.querySelectorAll('.instructions-list li');
instructionElements.forEach((instruction, index) => {
    instructionArray.push({
    order: index + 1,
    text: instruction.innerText.trim(),
  });
});
console.log('Instructions Array:', instructionArray);
//***************************************************************************** */