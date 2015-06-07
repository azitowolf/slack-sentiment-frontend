$('.generate').click(function(event) {
  $.ajax({
    url: 'https://slack-sentiment.herokuapp.com/response/1',
    type: 'GET',
    dataType: 'json',
  })
  .done(function(data) {
    console.log("success");
    data.forEach(function(item){
      $('.timeline').append(item['score'])
    })
  })
  .fail(function() {
    console.log("error");
  })
  .always(function() {
    console.log("complete");
  });

});
