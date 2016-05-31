  $(document).ready(function() {
      $("button").click(function() {
      var imgUrl = $(this).data('rel');
      $("#oldMapPictures").width("<img src= '" + imgUrl + "' alt='description' />");
    });
});