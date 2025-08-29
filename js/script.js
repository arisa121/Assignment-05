const HeartButtons = document.querySelectorAll("#heart-icon");

  HeartButtons.forEach(buttonHeart => {
    buttonHeart.addEventListener("click", () => {
    const countElement = document.getElementById('heart-count');
    let count = parseInt(countElement.textContent);
    count += 1;
    countElement.textContent = count;
    console.log(countElement.textContent);
     
    });
  });

const callButtons = document.querySelectorAll(".call-btn");
const alartMessage =[
  'Calling National Emergency Number 999 ',
  'Calling Police Helpline Number 999 ',
  'Calling Fire Service Number 999 ',
  'Calling Ambulance Service Number 1994-999999 ',
  'Calling Women & Child Helpline 109 ',
  'Calling Anti-Corruption Helpline Number 106',
  'Calling Electricity Helpline Number 16216 ',
  'Calling Brac Helpline Number 16445',
  'Calling Bangladesh Railway Helpline Number 163'
]
const callHistory = document.getElementById('callHistoryList')

  callButtons.forEach((button,index) => {
    button.addEventListener("click", () => {
     const coin = parseInt(document.getElementById('coin-btn').textContent);
     const callBox = button.closest('.call-box');
     const title = callBox.querySelector('.call-title').textContent.trim()
     const number = callBox.querySelector('.call-number').textContent.trim()

  
    if(coin >=20){
      let newCoinValue = coin - 20;
      document.getElementById('coin-btn').innerText = newCoinValue;
    
      window.alert(alartMessage[index]);
    const li = document.createElement("li");
    const time = new Date().toLocaleTimeString();
    li.innerHTML = `<div style="display: flex; justify-content: space-between;">
      ${title}
      <span>${time}</span>
    </div>
    <div>${number}</div>
    `;
    callHistory.append(li)
    }
    else{
      window.alert('আপনার পর্যাপ্ত কয়েন নেই, কল করতে কমপক্ষে ২০ কয়েন লাগবে');
    }
    });
  });
  const clearButton = document.getElementById('reset-btn');
  clearButton.addEventListener("click", () => {
  callHistory.innerHTML = "";
});

const copybuttons = document.querySelectorAll('.copy-btn');
    const copyMessage = document.getElementById('copy-message');

    copybuttons.forEach(buttonC => {
      buttonC.addEventListener('click', () => {
        const callNum = buttonC.closest('.call-box')
        const numberEl = callNum.querySelector('.call-number');

        const textToCopy =numberEl.innerText;

        navigator.clipboard.writeText(textToCopy).then(() => {
          const result = copyMessage.innerText = 'নম্বর কপি হয়েছে: '+ textToCopy;
          window.alert(result)
          

          setTimeout(() => {
            copyMessage.style.display = 'none';
          }, 2000);
        }).catch(err => {
          alert('কপি করতে সমস্যা হয়েছে!');
        });
      });
    });
