var button = document.getElementById('button');
button.addEventListener('click', function(){
    var nums = document.getElementById('input').value;
    
    var exponent = document.getElementById('powerInput').value;

    var result = Math.pow(nums, exponent);

    document.getElementById('result').innerHTML= 'Your Result is:' + ' ' + result
})
