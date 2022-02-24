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
            <div onClick=" loadMealDetail( ${meal.idMeal} ) "  class="card h-100">
                <img src="${meal.strMealThumb} " class="card-img-top" alt="${
      meal.strMeal
    }">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text"> ${meal.strInstructions.slice(
                      0,
                      250
                    )} </p>
                    <button type="button" class="btn btn-info" onClick="loadMealDetail()" data-bs-toggle="modal" data-bs-target="#staticBackdrop">Meal Details</button>
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
  const mealDetails = document.getElementById("staticBackdrop");
  //   mealDetails.innerHTML = "";
  const div = document.createElement("div");
  div.classList.add("modal-dialog");
  div.innerHTML = `
    <div class="modal-content">
        <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">${meal.strMeal}</h5>
            <button id="meal-details" data-bs-toggle="modal" data-bs-target="#staticBackdrop" type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
        </div>
        <div class="modal-body">
            <img src="${meal.strMealThumb} " class="card-img-top" alt="${meal.strMeal}">
            <p class="card-text">Meal Origin: ${meal.strArea} </p>
            <p class="card-text"> Category: ${meal.strCategory} </p>
            <p class="card-text"> ${meal.strInstructions} </p>
            <a href=" ${meal.strYoutube} ">Video recipe</a>
        </div>
        <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        </div> 
    </div>
    `;
  mealDetails.appendChild(div);
};
