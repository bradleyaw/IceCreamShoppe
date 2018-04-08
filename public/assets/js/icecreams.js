$(function() {
    $(".devour").on("click", function(event) {
      var id = $(this).data("id");
  
      // Send the PUT request.
      $.ajax("/api/icecreams/" + id, {
        type: "PUT",
        data: { devoured: 1 },
      }).then(
        function() {
          console.log("icecream has been devoured!");
          location.reload();
        }
      );
    });
  
    $(".addIce").on("submit", function(event) {
      event.preventDefault();
  
      var newIce = {
        icecream_name: $("#name").val().trim(),
        devoured: 0
      };
      console.log(newIce);
      // Send the POST request.
      $.ajax("/api/icecreams", {
        type: "POST",
        data: newIce
      }).then(
        function() {
          console.log("added a new ice cream");
          location.reload();
        }
      );
    });
  });