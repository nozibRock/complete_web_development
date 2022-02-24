const searchFood = () => {
  const searchField = document.getElementById("searchField");
  const searchText = searchField.value;
  //   console.log(searchText);

  searchField.value = "";
  const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
  //   console.log(url);
  fetch(url)
    .then((response) => response.json())
    .then((data) => displaySearchResults(data.meals));
};

const displaySearchResults = (meals) => {
  //   console.log(meals);
  const searchResult = document.getElementById("search-result");
  meals.forEach((meal) => {
    // console.log(meal);
    const mealDiv = document.createElement("div");
    mealDiv.classList.add("col");
    mealDiv.innerHTML = `
            <div onClick=" loadMealDetail( ${
              meal.idMeal
            } ) "  class="card h-100">
                <img src="${meal.strMealThumb} " class="card-img-top" alt="${
      meal.strMeal
    }">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text"> ${meal.strInstructions.slice(
                      0,
                      250
                    )} </p>
                    
                    <button type="button" class="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="loadMealDetail()">Launch details</button>

                </div>
            </div>
        `;

    searchResult.appendChild(mealDiv);
  });
};

const loadMealDetail = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
  const mealDetails = document.getElementById("meal-details");
  mealDetails.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${meal.strMealThumb} " class="card-img-top img-fluid" alt="${meal.strMeal}">
    <p class="card-text">Meal Origin: ${meal.strArea} </p>
    <p class="card-text"> Category: ${meal.strCategory} </p>
    <p class="card-text"> ${meal.strInstructions} </p>
    <a href="${meal.strYoutube}" class="text-success text-decoration-none" target="_blank">Video recipe</a>
    `;
  mealDetails.appendChild(div);
};
