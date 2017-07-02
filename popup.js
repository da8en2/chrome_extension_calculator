// $(function() {
//   // chrome.storage.sync.get('amount', function(display) {
//   //   $('#amount').text(display.amount);
//   // });
//
//   $('#1').click(function() {
//     $('#disp').val('text');
//   });d
//
// });


$(function(){
    $('#1').click(function(){
        $('#display').val( $('#display').val() + '1')
    });
    $('#2').click(function(){
        $('#display').val( $('#display').val() + '2')
    });
    $('#3').click(function(){
        $('#display').val( $('#display').val() + '3')
    });
    $('#4').click(function(){
        $('#display').val( $('#display').val() + '4')
    });
    $('#5').click(function(){
        $('#display').val( $('#display').val() + '5')
    });
    $('#6').click(function(){
        $('#display').val( $('#display').val() + '6')
    });
    $('#7').click(function(){
        $('#display').val( $('#display').val() + '7')
    });
    $('#8').click(function(){
        $('#display').val( $('#display').val() + '8')
    });
    $('#9').click(function(){
        $('#display').val( $('#display').val() + '9')
    });
    $('#0').click(function(){
        $('#display').val( $('#display').val() + '0')
    });

    $('#C').click(function(){
        $('#display').val('')
    });
});
