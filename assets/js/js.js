  /* code for loading screen*/
  jQuery(document).ready(function () {
      $("#loader").delay(1800).fadeOut(400, function () {
          $("#your-page").fadeIn(400);
      });
  });
