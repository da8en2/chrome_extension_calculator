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

    $('#plus').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'value1': storeValue});
        chrome.storage.sync.set({'operation': 'add'});
        $('#display').val('')
    });

    $('#minus').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'value1': storeValue});
        chrome.storage.sync.set({'operation': 'subtract'});
        $('#display').val('')
    });

    $('#times').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'value1': storeValue});
        chrome.storage.sync.set({'operation': 'multiply'});
        $('#display').val('')
    });

    $('#dividedby').click(function(){
        var storeValue = $('#display').val();
        chrome.storage.sync.set({'value1': storeValue});
        chrome.storage.sync.set({'operation': 'divide'});
        $('#display').val('')
    });

    $('#solve').click(function(){
      chrome.storage.sync.get(['value1', 'operation'], function(calc){
        var result = 0;
        var value2 = $('#display').val();
        if (calc.operation == 'add') {
          if (calc.value1) {
            result += parseInt(calc.value1);
            result += parseInt(value2);
          }
        } else if (calc.operation == 'subtract') {
          if (calc.value1) {
            result += parseInt(calc.value1);
            result -= parseInt(value2);
          }
        } else if (calc.operation == 'multiply') {
          if (calc.value1) {
            result = parseInt(value2)*parseInt(calc.value1);
          }
        } else if (calc.operation == 'divide') {
          result = parseInt(calc.value1)/parseInt(value2);
        }
        $('#display').val(result);
      });
    });
});
