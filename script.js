var requestUrl = 'https://www.loc.gov/search/?q=';

var searchTerm = document.querySelector('#searchTerm')
var searchTermValue = searchTerm.val();
var JSON = '&fo=json';

var newUrl = requestUrl + searchTermValue + JSON;

var searchResultsPage = 'searchresults.html';

function getApi(request) {
    fetch(request)
      .then(function (response) {
        // Check the console first to see the response.status
        console.log(response.status);
        // Then write the conditional based on that response.status value
        // Make sure to display the response on the page
        if (response.status === 200) {
          location.replace(searchResultsPage);
        } else {
          responseText.textContent = response.status;
        }
      })
      .then(function (data) {
        console.log(data);
      });
}

var button = document.querySelector('#buton')
button.addEventListener('click', getApi(newUrl));

