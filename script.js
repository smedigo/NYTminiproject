var apikey = 'pTDHbLkBDl7s39rvLsTV8A1a0ZwlBc89'

$('.card-body').on('click', '#clearBtn', function(e) {
    e.preventDefault()
    $('input').empty()
})

$('.card-body').on('click', '#searchBtn', handleSearch)

$('#clearBtn').on('click', handleSearch)

function handleSearch(e) {

    e.preventDefault()

    var queryURL = "https://api.nytimes.com/svc/search/v2/articlesearch.json?q=election&api-key=" + apikey

    $.ajax({
        url: queryURL,
        method: "GET"
      })

      .then(function(response) {
        $("#searchTerm").val()
      })
}

