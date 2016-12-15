$(document).ready(function() {
  $('#submitBtn').on('click', function(){
  $('#searchResults').empty();
    let searchText = $('#searchBox').val();
    let $query = $('textarea').keyup(function() {
      var maxLength = $(this).attr('maxlength');
      var length = $(this).val().length;
      var length = maxLength-length;
    });
    $('#chars').text(length);

  //$('#submitBtn').on('click', function updateCount() {
  //      var cs = $(this).val().length;
  //      $('#searchResults').text(cs);
  //  })


    //$('#searchResults').empty();

    //let searchText = $('#searchBox').val();
    //let $query = searchresults.length;
