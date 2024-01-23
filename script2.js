// USED FOR TESTING

function validateSearch() {
    var allowedCountries = jobCountryList; 
    var searchTerm = document.getElementById('search').value;
    var searchResult = document.getElementById('searchResult');

    if (allowedCountries.includes(searchTerm)) {
      searchResult.textContent = 'Search successful for ' + searchTerm + '!';
      return true;
    } else {
      searchResult.textContent = 'Please enter a valid country.';
      return false; 
    }
}

const jobCountryList = [
    "Anywhere",
    "Australia",
    "China",
    "Japan",
    "New Zealand",
    "Philippenes",
    "Singapore",
    "South Korea",
    "Thailand",
    "Vietnam",
    "Austria",
    "Belgium",
    "Bulgaria",
    "Croatia",
    "Cyprus",
    "Czehcia",
    "Denmark",
    "Estonia",
    "Finland",
    "France",
    "Germany",
    "Greece",
    "Hungary",
    "Ireland",
    "Italy",
    "Latvia",
    "Lithuania",
    "Netherlands",
    "Norway",
    "Poland",
    "Portugal",
    "Romania",
    "Slovakia",
    "Slovenia",
    "Spain",
    "Sweden",
    "Switzerland",
    "UK",
    "Israel",
    "Turkey",
    "United Arab Emirates",
    "Argentina",
    "Brazil",
    "Costa Rica",
    "Mexico",
    "Canada",
    "USA"
]

console.log(jobCountryList);