
$(document).ready(function () {

  $("#form").submit(function (e) {

    e.preventDefault();

    var formData = new FormData(this);

    $.ajax({
      type: "POST",
      url: "/upload_json",
      data: formData,
      processData: false,
      contentType: false,
      enctype: 'multipart/form-data',

      success: function(data) {
        console.log('Ajax process sucess!');
     },

      error: function() {
        console.log('Ajax process error!');
      },

    });

  });


});





