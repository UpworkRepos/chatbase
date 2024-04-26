$(document).ready(function () {
    $('#sidebarCollapse').on('click', function () {
        $('#sidebar').toggleClass('active');
    });
});

$(document).ready(function(){
    $('[data-toggle="popover"]').popover();
});
$(document).ready(function(){
    $('.copy-btn').click(function(){
        var textToCopy = $(this).parent().text().trim();

        // Create a temporary textarea element
        var textarea = $('<textarea>').val(textToCopy).appendTo('body').select();

        // Copy the selected text
        document.execCommand('copy');

        // Remove the temporary textarea
        textarea.remove();

        // Change the icon to "done"
        $(this).html('<span class="material-symbols-outlined">done</span>');
    });
});


// Model.html jquery code : 
$(document).ready(function() {
    $("#customRange1").on("input", function() {
      // Get the current range value
      var rangeValue = $(this).val();
  
      // Update the label text with the range value
      $("#customRange1").prev("label").text(rangeValue);
    });
  });