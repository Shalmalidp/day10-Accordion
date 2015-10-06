$('button').on('click',function(event){
   var btn = $(event.target);
   btn.siblings().addClass("para");
  // $('list-class').removeClass('para');
  btn.parent().siblings().find(".para").removeClass("para").addClass('collapse-para');


});