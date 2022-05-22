getrandommeal();

async function getrandommeal() {
  const ranadommeal = await fetch(
    "https://www.themealdb.com/api/json/v1/1/random.php"
  );

  const respons = await ranadommeal.json();
  const random = respons.meals[0];
  console.log(random);

  addmeal(random, true);
}

async function gemealById(id) {
  const meal = await fetch(
    "https://www.themealdb.com/api/json/v1/1/lookup.php?i=" + id
  );
}

async function getmealBySearch() {
  const meals = await f;
  etch("https://www.themealdb.com/api/json/v1/1/search.php?s=" + term);
}

const meals = document.getElementById("meals");

function addmeal(mealdata, random = false) {
  const meal = document.createElement("div");
  meal.classList.add("meal");

  meal.innerHTML = `
        <div class="meal_header">
            ${random ? `<span class="random">random_recipe</span>` : ""}
        
            <img src="${mealdata.strMealThumb}" alt="${mealdata.strMeal}">
        </div>
        <div class="meal_body">
            <h4>${mealdata.strMeal}</h4>
            <button class="fav_btn"><i id="heart" class="fa-solid fa-heart"></i></button>
        </div>
   
    
    `;
  meals.appendChild(meal);

  const btn = meal.querySelector(".meal_body .fav_btn");

  btn.addEventListener("click", () => {
    btn.classList.toggle("active");
  });
}

function removemealLS(mealid) {
  const mealids = getmealFromLS();

  localStorage.setItem(
    "mealIds",
    JSON.stringify(mealids.filter((id) => id !== mealid))
  );
}

function addmealToLS(meald) {
  const mealids = getmealFromLS();

  localStorage.setItem("mealIds", JSON.stringify([...mealids, meald]));
}

function getmealFromLS() {
  const mealds = JSON.parse(localStorage.getItem("mealIds"));
  return mealds;
}
