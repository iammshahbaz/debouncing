
function debounce(func, delay) {
    let timer;
    return function (...args) {
      clearTimeout(timer); 
      timer = setTimeout(() => func.apply(this, args), delay);
    };
  }
  

  function fetchSearchResults(query) {
    const searchResults = [
      "apple",
      "apricot",
      "banana",
      "grape",
      "application",
      "pineapple",
      "apocalypse",
      "aperture",
    ];
  
    return new Promise((resolve) => {
      setTimeout(() => {
        const results = searchResults.filter((item) =>
          item.toLowerCase().includes(query.toLowerCase())
        );
        resolve(results);
      }, 1000);
    });
  }
  
 
  function displayResults(results) {
    const resultsList = document.getElementById("results");
    resultsList.innerHTML = ""; 
  
    results.forEach((result) => {
      const listItem = document.createElement("li");
      listItem.textContent = result;
      resultsList.appendChild(listItem);
    });
  }
  

  function handleSearchInput(event) {
    const query = event.target.value;
    if (query.length > 0) {
      fetchSearchResults(query).then((results) => {
        displayResults(results);
      });
    } else {
      displayResults([]);
    }
  }
  
  const searchInput = document.getElementById("search-input");
  const debouncedSearch = debounce(handleSearchInput, 500); 
  
  searchInput.addEventListener("input", debouncedSearch);
  