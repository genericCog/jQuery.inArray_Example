$(document).ready(function() {
  var names = ['vadim', 'thomas', 'tanya', 'timur', 'eve', 'kate', 'karen', 'peter'];

  $('#check').click(function() {
    var name = $('#name').val();
    if (jQuery.inArray(name, names)!='-1') {
      Label_Fadein('#status_label');
      $('#status_label').html('The text you entered is in the array: ' + name);
      Label_Fadeout('#status_label');
    } else {
      Label_Fadein('#status_label');
      $('#status_label').html('The text you entered is not in the array: ' + name);
      Label_Fadeout('#status_label');
    }
  });//END click event
  
  function Label_Fadeout(a_label){
    setTimeout(function() {
      $(a_label).fadeOut(1600, "linear", Label_Fadeout);
      $(a_label).val('');
    }, 2000 );
  }
  function Label_Fadein(a_label){
    setTimeout(function() {
      $(a_label).fadeIn(60, "linear", Label_Fadeout);
      $(a_label).val('');
    }, 60 );
  }
  
});//END DOM Ready