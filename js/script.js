
document.getElementById("heart-icon").addEventListener("click", function () {

    const countElement = document.getElementById('heart-count');
    let count = parseInt(countElement.textContent);
    count += 1;
    countElement.textContent = count;
    console.log(countElement.textContent);
   
  });


  document.getElementById('call-btn').addEventListener('click', function(){
    
    const coin = parseInt(document.getElementById('coin-btn').textContent);
    
    if(coin >=20){
      let newCoinValue = coin - 20;
      document.getElementById('coin-btn').innerText = newCoinValue;
      window.alert('Calling National Emergency Number 999...')
    }
    else{
      window.alert('আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে');
    }

  });