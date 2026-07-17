// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
    movementsDates: [
    '2025-11-18T21:31:17.178Z',
    '2025-12-23T07:42:02.383Z',
    '2026-01-28T09:15:04.904Z',
    '2026-04-01T10:17:24.185Z',
    '2026-05-08T14:11:59.604Z',
    '2026-07-03T17:01:17.194Z',
    '2026-07-04T23:36:17.929Z',
    '2026-07-05T10:51:36.790Z',
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
   movementsDates: [
    '2025-11-01T13:15:33.035Z',
    '2025-11-30T09:48:16.867Z',
    '2025-12-25T06:04:23.907Z',
    '2025-01-25T14:18:46.235Z',
    '2026-02-05T16:33:06.386Z',
    '2026-04-10T14:43:26.374Z',
    '2026-06-25T18:49:59.371Z',
    '2026-07-26T12:01:20.894Z',
  ],
  currency: 'USD',
  locale: 'en-US',
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
    movementsDates: [
    '2025-11-18T21:31:17.178Z',
    '2025-12-23T07:42:02.383Z',
    '2026-01-28T09:15:04.904Z',
    '2026-04-01T10:17:24.185Z',
    '2026-05-08T14:11:59.604Z',
    '2026-07-03T17:01:17.194Z',
    '2026-07-04T23:36:17.929Z',
    '2026-07-05T10:51:36.790Z',
  ],
  currency: 'GHS',
  locale: 'en-GH',
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
    movementsDates: [
    '2025-11-01T13:15:33.035Z',
    '2025-11-30T09:48:16.867Z',
    '2025-12-25T06:04:23.907Z',
    '2025-01-25T14:18:46.235Z',
    '2026-02-05T16:33:06.386Z',
    '2026-04-10T14:43:26.374Z',
    '2026-06-25T18:49:59.371Z',
    '2026-07-26T12:01:20.894Z',
  ],
  currency: 'NGN',
  locale: 'en-NG',
};

const account5 = {
  owner: 'Pajoe Jchmedtmann',
  movements: [200, 450, -400, 3000, -650,  70, 1300, 40000000],
  interestRate: 1.2, // %
  pin: 13579024680,
    movementsDates: [
    '2025-11-18T21:31:17.178Z',
    '2025-12-23T07:42:02.383Z',
    '2026-01-28T09:15:04.904Z',
    '2026-04-01T10:17:24.185Z',
    '2026-05-08T14:11:59.604Z',
    '2026-07-03T17:01:17.194Z',
    '2026-07-04T23:36:17.929Z',
    '2026-07-17T11:23:36.790Z',
  
  ],
  currency: 'EUR',
  locale: 'pt-PT',
};

const accounts = [account1, account2, account3, account4,account5];

const IN =document.querySelector('#IN')
const OUT =document.querySelector('#OUT')
const INTEREST = document.querySelector('#INTEREST')
const BALANCE = document.querySelector('#BALANCE')
const movementcontainer = document.querySelector('#movementcontainer')
const inputusername = document.querySelector('#inputusername')
const inputuserpin = document.querySelector('#inputuserpin')
const  loginbotton = document.querySelector('#loginbotton')
const main = document.querySelector('#main')
const welcomelabel = document.querySelector('#welcomelabel')
const transferuserinput = document.querySelector('#transferuserinput')
const transferuseramount = document.querySelector('#transferuseramount')
const transfer = document.querySelector('#transfer')
const loanbtn = document.querySelector('#loanbtn')
const loanamout = document.querySelector('#loanamout')
const deletepin = document.querySelector('#deletepin')
const deleteuser = document.querySelector('#deleteuser')
const deletebtn = document.querySelector('#deletebtn')
const sort = document.querySelector('#sort')
const dates = document.querySelector('#dates')
const timers = document.querySelector('#timers')
console.log(movementcontainer)



////date format
function datefomat(date,locale){
  
  function calsdate(date1,date2){
   return Math.round(Math.abs(date2-date1)/(1000*60*60*24))
  }
  const dayspassed = calsdate(new Date(),date)
  if (dayspassed ===0) return 'Today'
  if (dayspassed ===1) return 'Yesteday'
  if (dayspassed <= 7) return `${dayspassed} days ago`
  else{return new Intl.DateTimeFormat(locale).format(date)}
}

/////number format
function currency(value,locale,currency){
return  new Intl.NumberFormat(locale,{
    style:'currency',
    currency:currency
  }).format(value)

}

function movement(acc,sort = false){
  movementcontainer.innerHTML=''  
  const xs = sort ? acc.movements.slice().sort((a,b) => a-b) :acc.movements

xs.forEach((mov,key) => {
 
    const DW =mov>0? 'Deposit' : 'Withdrawal'
    const color = mov>0 ? 'bg-[green]' : 'bg-[red]'
 const dat = datefomat(new Date(acc.movementsDates[key]),acc.locale)
const html =`     <div class="flex justify-between border-b-1 border-solid border-[rgba(255,255,255,0.1)] p-5">
                    <div class="space-x-5">
                        <span class=" ${color} p-1 text-white px-3 rounded-l-full rounded-r-full ">${key+1} ${DW}</span>
                    <span class="text-slate-300">${dat}</span>
                    </div>
                    <div class="text-slate-100">
                        ${currency(mov,acc.locale,acc.currency)}
                    </div>
                </div>`
    
         movementcontainer.insertAdjacentHTML('afterbegin', html)   
});
}


////summary
function moneyin(acc){
    const sum = acc.movements.filter(acc => acc>0).reduce((acc,mov)=>acc+mov,0)
    IN.textContent=currency(sum,acc.locale,acc.currency)
     const out = acc.movements.filter(acc => acc<0).reduce((acc,mov)=>acc+mov,0)
    OUT.textContent=currency(Math.abs(out),acc.locale,acc.currency)
     const interest = acc.movements.filter(ac => ac>0).map(ac=>ac*`${(acc.interestRate/100)}`).reduce((acc,mov)=>acc+mov,0)
    INTEREST.textContent=currency(interest,acc.locale,acc.currency)
}



/////balance
function balance(acc){
  const balancs= acc.movements.reduce((acc,mov)=> acc+mov,0)
  acc.balance = balancs
  BALANCE.textContent=currency(acc.balance,acc.locale,acc.currency)
}



function username(acc){
    acc.forEach(acc=> acc.username = acc.owner.toLowerCase().split(' ').map(acc => acc[0]).join('')) 
}
username(accounts)

function all(){
  movement(currentaccount)
moneyin(currentaccount)
balance(currentaccount)
}


// time out?
function timerfun(){
  let time = 600
 function tick(){
  const min = String(Math.trunc(time/60)).padStart(2,0)
  const sec = String(Math.trunc(time%60)).padStart(2,0)
timers.textContent =`${min}:${sec}`
if(time === 0){
  clearInterval(timer)
   main.classList.add('opacity-0')
   welcomelabel.textContent = `Log in to get stated`

}
time--
  }
  tick()
  
const timer=setInterval(tick,1000)
return timer
}
let timer


loginbotton.addEventListener('click', function(e){
  e.preventDefault()
 currentaccount = accounts.find(acc=> acc.username === inputusername.value)
 console.log(currentaccount)
 if(currentaccount?.pin === Number(inputuserpin.value) && currentaccount.username === inputusername.value){
   main.classList.remove('opacity-0')
welcomelabel.textContent = `Welcome, ${currentaccount.owner.split(' ')[0]}`
moneyin(currentaccount)
all()
inputusername.value=''
inputuserpin.value=''
 }
dates.textContent= new Intl.DateTimeFormat(currentaccount.locale,{
  hour:'numeric',
  minute:'numeric',
  month:'numeric',
  day:'numeric',
  year:'numeric'
}).format(new Date()) 

clearInterval(timer)
timer = timerfun()
}
)

document.addEventListener('keydown', (e)=>{
if(e.key === 'Enter'){
 currentaccount = accounts.find(acc=> acc.username === inputusername.value)
 console.log(currentaccount)
 if(currentaccount?.pin === Number(inputuserpin.value) && currentaccount.username === inputusername.value){
   main.classList.remove('opacity-0')
welcomelabel.textContent = `Welcome, ${currentaccount.owner.split(' ')[0]}`
moneyin(currentaccount)
all()
inputusername.value=''
inputuserpin.value=''
inputuserpin.blur()
 }
dates.textContent= new Intl.DateTimeFormat(currentaccount.locale,{
  hour:'numeric',
  minute:'numeric',
  month:'numeric',
  day:'numeric',
  year:'numeric'
}).format(new Date()) 

clearInterval(timer)
timer = timerfun()
}
})

transfer.addEventListener('click', (e)=>{
  e.preventDefault()
  const reciver = accounts.find(acc=> acc.username === transferuserinput.value)
  if(transferuserinput.value !== currentaccount.username && 
    currentaccount.balance >0 
    && reciver && 
    currentaccount.balance>= Number(transferuseramount.value)){
      currentaccount.movements.push(-Number(transferuseramount.value))
      reciver.movements.push(Number(transferuseramount.value))
      currentaccount.movementsDates.push(new Date().toISOString())
      reciver.movementsDates.push(new Date().toISOString())
all()
transferuseramount.value=''
transferuserinput.value=''
    }
    clearInterval(timer)
timer = timerfun()
})

loanbtn.addEventListener('click',(e)=>{
  e.preventDefault()
const amount = Number(loanamout.value)
      const x =currentaccount.movements.some(acc=> acc > (Number(loanamout.value)*10/100))
  if( x && amount >0 ){
    
   setTimeout(function () {
     currentaccount.movementsDates.push(new Date().toISOString())
      currentaccount.movements.push(amount)
    all()
    
    },2500)
  }

loanamout.value=''
  clearInterval(timer)
timer = timerfun()
})

deletebtn.addEventListener('click',(e)=>{
  e.preventDefault()
  const current = accounts.findIndex(acc=>acc.username===currentaccount.username)

  if(deleteuser.value === currentaccount.username && currentaccount.pin=== Number(deletepin.value)){
main.classList.add('opacity-0')

accounts.splice(current,1)
deletepin.value = deleteuser.value = ''
welcomelabel.textContent = `You have just delete your account, ${currentaccount.owner.split(' ')[0]}`
welcomelabel.classList.remove('text-5xl')
welcomelabel.classList.add('text-3xl')
  }

})
let sorted = false
sort.addEventListener('click',(e)=>{
  e.preventDefault()
  movement(currentaccount,!sorted)
  sorted=!sorted
})

 setTimeout(function(){console.log('a bbbbbbbbbbbbbbbbbbbbbbbb')},3000)
new Intl.DateTimeFormat