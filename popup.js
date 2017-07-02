$(function(){
    $('#1').click(function(){
      if ( $('#display').val().includes(' ') ) {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '1')
    });
    $('#2').click(function(){
      if ( $('#display').val().includes(' ') ) {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '2')
    });
    $('#3').click(function(){
      if ( $('#display').val().includes(' ') ) {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '3')
    });
    $('#4').click(function(){
      if ( $('#display').val().includes(' ') ) {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '4')
    });
    $('#5').click(function(){
      if ( $('#display').val().includes(' ') ) {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '5')
    });
    $('#6').click(function(){
      if ( $('#display').val().includes(' ') ) {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '6')
    });
    $('#7').click(function(){
      if ( $('#display').val().includes(' ') ) {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '7')
    });
    $('#8').click(function(){
      if ( $('#display').val().includes(' ') ) {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '8')
    });
    $('#9').click(function(){
      if ( $('#display').val().includes(' ') ) {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '9')
    });
    $('#0').click(function(){
      if ( $('#display').val().includes(' ') ) {
        $('#display').val('');
      }
      if ( $('#display').val() != '' ) {
          $('#display').val( $('#display').val() + '0')
      }
    });
    $('#decimalPoint').click(function(){
        if ( !($('#display').val()).includes('.') ) {
          $('#display').val( $('#display').val() + '.')
        }
    });

    $('#C').click(function(){
        $('#display').val('')
    });

    $('#plus').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'value1': storeValue});
        chrome.storage.sync.set({'operation': 'add'});
        $('#display').val(storeValue.toString() + ' ');
    });

    $('#minus').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'value1': storeValue});
        chrome.storage.sync.set({'operation': 'subtract'});
        $('#display').val(storeValue.toString() + ' ');
    });

    $('#times').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'value1': storeValue});
        chrome.storage.sync.set({'operation': 'multiply'});
        $('#display').val(storeValue.toString() + ' ');
    });

    $('#dividedby').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'value1': storeValue});
        chrome.storage.sync.set({'operation': 'divide'});
        $('#display').val(storeValue.toString() + ' ');
    });

    $('#solve').click(function(){
      chrome.storage.sync.get(['value1', 'operation'], function(calc){
        var result = 0;
        var value2 = $('#display').val();
        if (calc.operation == 'add') {
          if (calc.value1) {
            result += parseFloat(calc.value1);
            result += parseFloat(value2);
          }
        } else if (calc.operation == 'subtract') {
          if (calc.value1) {
            result += parseFloat(calc.value1);
            result -= parseFloat(value2);
          }
        } else if (calc.operation == 'multiply') {
          if (calc.value1) {
            result = parseFloat(value2)*parseFloat(calc.value1);
          }
        } else if (calc.operation == 'divide') {
          result = parseFloat(calc.value1)/parseFloat(value2);
        }
        $('#display').val(result.toString() + ' ');
        chrome.storage.sync.set({'value1': value2});
      });
    });
});
