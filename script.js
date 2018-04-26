
var fetch = function (isbn) {
    $.ajax({
      method: "GET",
      url: 'https://www.googleapis.com/books/v1/volumes?q=isbn:'+isbn,
      success: function(data) {
        var result = data.items[0].volumeInfo;
        callBack(result);
            
      },
      error: function(jqXHR, textStatus, errorThrown) {
        console.log(textStatus);
      }
    }); 
  };

  
  
  


  
  


  $('.searchButton').on('click', function(){
    var isbn = $('.isbnCode').val()

    fetch(isbn);

  });


function callBack(obj){
    console.log(obj)
      
    var rObj = obj;

    var source = $('#searchResult').html();
    var template = Handlebars.compile(source);
    var newHTML = template(rObj);
    $('.results').append(newHTML);
};