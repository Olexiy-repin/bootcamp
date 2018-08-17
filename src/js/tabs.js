(() => {
  $('.sec-06__tabs-list').hide();
  $('.sec-06__tabs-list:first-of-type').show();

  $('.sec-06__tab').click(function() {
     $('.sec-06__tab').removeClass('active-tab');
     $(this).addClass('active-tab');
     $('.sec-06__tabs-list').hide();

     let tabId = $('#'+$(this).data('id'));
     tabId.fadeIn(1000);
  });
})();
