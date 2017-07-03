$(function(){
    $('#1').click(function(){
      if ( $('#display').val().includes(' ') || $('#display').val() === '0') {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '1')
    });
    $('#2').click(function(){
      if ( $('#display').val().includes(' ') || $('#display').val() === '0') {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '2')
    });
    $('#3').click(function(){
      if ( $('#display').val().includes(' ') || $('#display').val() === '0') {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '3')
    });
    $('#4').click(function(){
      if ( $('#display').val().includes(' ') || $('#display').val() === '0') {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '4')
    });
    $('#5').click(function(){
      if ( $('#display').val().includes(' ') || $('#display').val() === '0') {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '5')
    });
    $('#6').click(function(){
      if ( $('#display').val().includes(' ') || $('#display').val() === '0') {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '6')
    });
    $('#7').click(function(){
      if ( $('#display').val().includes(' ') || $('#display').val() === '0') {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '7')
    });
    $('#8').click(function(){
      if ( $('#display').val().includes(' ') || $('#display').val() === '0') {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '8')
    });
    $('#9').click(function(){
      if ( $('#display').val().includes(' ') || $('#display').val() === '0') {
        $('#display').val('');
      }
      $('#display').val( $('#display').val() + '9')
    });
    $('#0').click(function(){
      if ( $('#display').val().includes(' ') || $('#display').val() === '0') {
        $('#display').val('');
      }
      if ( $('#display').val() != '' ) {
          $('#display').val( $('#display').val() + '0')
      }
    });
    $('#decimalPoint').click(function(){
      if ( $('#display').val().includes(' ') || $('#display').val() === '0') {
        $('#display').val('');
      }
      if ( !($('#display').val()).includes('.') ) {
        $('#display').val( $('#display').val() + '.')
      }
    });

    $('#C').click(function(){
        $('#display').val('');
    });

    $('#plus').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'firstOperand': storeValue});
        chrome.storage.sync.set({'operation': 'add'});
        $('#display').val(storeValue.toString() + ' ');
    });

    $('#minus').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'firstOperand': storeValue});
        chrome.storage.sync.set({'operation': 'subtract'});
        $('#display').val(storeValue.toString() + ' ');
    });

    $('#times').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'firstOperand': storeValue});
        chrome.storage.sync.set({'operation': 'multiply'});
        $('#display').val(storeValue.toString() + ' ');
    });

    $('#dividedby').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'firstOperand': storeValue});
        chrome.storage.sync.set({'operation': 'divide'});
        $('#display').val(storeValue.toString() + ' ');
    });

    $('#solve').click(function(){
      chrome.storage.sync.get(['firstOperand', 'operation'], function(calc){
        var result = 0;

        var secondOperand = $('#display').val();

        if (calc.operation == 'add') {
          result = parseFloat(calc.firstOperand) + parseFloat(secondOperand);
        } else if (calc.operation == 'subtract') {
          result = parseFloat(calc.firstOperand) - parseFloat(secondOperand);
        } else if (calc.operation == 'multiply') {
          result = parseFloat(calc.firstOperand) * parseFloat(secondOperand);
        } else if (calc.operation == 'divide') {
          result = parseFloat(calc.firstOperand) / parseFloat(secondOperand);
        } else if (calc.operation == 'done') {
          result = $('#display').val();
        }

        chrome.storage.sync.set({'operation': 'done'});

        $('#display').val(result);
      });
    });
});
