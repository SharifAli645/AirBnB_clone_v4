$(() => {
  $.get('http://localhost:5001/api/v1/status/', (data) => {
    const isAvailable = data.status === 'OK';
    $('div#api_status').toggleClass('available', isAvailable);
  });
  $('input').css({ 'margin-right': '10px' });
  const listAmt = {};
  $("input[type='checkbox']").each(function () {
    const amId = $(this).data('id');
    const amNa = $(this).data('name');

    if ($(this).prop('checked')) {
      listAmt[amId] = amNa;
    } else {
      delete listAmt[amId];
    }
  });
  $('.amenities h4').text(Object.values(listAmt).join(', '));

  $('input:checkbox').on('change', function () {
    if ($(this).prop('checked')) {
      listAmt[$(this).data('id')] = $(this).data('name');
      console.log(listAmt);
    } else {
      delete listAmt[$(this).data('id')];
    }
    $('.amenities h4').text(Object.values(listAmt).join(', '));
  });
});
