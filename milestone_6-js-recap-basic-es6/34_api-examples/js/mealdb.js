

//error message
document.getElementById("error-message").style.display = "none";

const displayError = (error) => {
  document.getElementById("error-message").style.display = "block";
};
const searchFood = () => {
  const searchField = document.getElementById("searchField");
  const searchText = searchField.value;
  // clear data
  searchField.value = "";

  if (searchText == "") {
    // please write something to display
    alert("Please! Write your food name");
  } else {
    // load data
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
    //   console.log(url);
    fetch(url)
      .then((response) => response.json())
      .then((data) => displaySearchResults(data.meals))
      .catch((error) => displayError(error));
  }
};

const displaySearchResults = (meals) => {
  //   console.log(meals);
  const searchResult = document.getElementById("search-result");
  searchResult.innerHTML = "";
  if (meals.length === 0) {
    // show no result found
    alert("Sorry! This food is now unavailable");
  } else {
    meals.forEach((meal) => {
      const mealDiv = document.createElement("div");
      mealDiv.classList.add("col");
      mealDiv.innerHTML = `
        <div class="card h-100" data-bs-toggle="modal" data-bs-target="#exampleModal" onClick="loadMealDetail(${meal.idMeal})">
            <img src="${meal.strMealThumb}" class="card-img-top img-fluid img-thumbnail" 
              alt="${meal.strMeal}">
            <div class="card-body">
              <h5 class="card-title">${meal.strMeal}</h5>
              <p class="card-text"> ${meal.strInstructions.slice(0, 250)}</p>
            </div>
        </div>
        `;
      searchResult.appendChild(mealDiv);
    });
  }
};

const loadMealDetail = (mealId) => {
  const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
  fetch(url)
    .then((res) => res.json())
    .then((data) => displayMealDetails(data.meals[0]));
};

const displayMealDetails = (meal) => {
  const mealTitle = document.getElementById("exampleModalLabel");
  mealTitle.innerText = `${meal.strMeal}`;
  const mealDetails = document.getElementById("meal-details");
  mealDetails.innerHTML = "";
  const div = document.createElement("div");
  div.innerHTML = `
    <img src="${meal.strMealThumb} " class="card-img-top img-fluid" alt="${meal.strMeal}">
    <p class="card-text">Meal Origin: ${meal.strArea} </p>
    <p class="card-text"> Category: ${meal.strCategory} </p>
    <p class="card-text"> ${meal.strInstructions} </p>
    <button  class="btn btn-success" >
      <a href="${meal.strYoutube}" target="_blank" class="text-white text-decoration-none">Video recipe</a>
    </button>
    `;
  mealDetails.appendChild(div);
};
