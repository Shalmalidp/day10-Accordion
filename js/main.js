$('button').on('click',function(event){
   var btn = $(event.target);
   btn.siblings().addClass("para");
  // $('list-class').removeClass('para');
  btn.parent().siblings().find(".para").removeClass("para").addClass('collapse-para');
  // btn.parent().siblings().find("normal-button").css('background-color', '#00C7D9');
btn.css('background-color','#00DBEE')

});