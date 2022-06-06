
let cart=JSON.parse(localStorage.getItem("purchase")) ||[]
const url="https://masai-vouchers-api.herokuapp.com/api/vouchers"
let sum=0;
let ab=JSON.parse(localStorage.getItem("user"))
// console.log(ab)
ab.map(function(el){
  
      sum = sum +Number(el.Wallet)
    // amount.append(sum)
})

// console.log(ab.wallet)
// document.getElementById("wallet_balance").innerText =document.getElementById("amount").value

fetch(url)
.then(function(res){
    return res.json()
}).then(function(res){
    let voucher=res[0].vouchers
    console.log(voucher)
    append(voucher)
}).catch(function(err){
    console.log(err)
})


function append(data){
  data.map(function(el){

   let div=document.createElement('div')
   div.setAttribute('class' ,'voucher')


   let name=document.createElement('div')
   name.innerText=el.name;

   let image=document.createElement("img")
   image.src=el.image;

   let price=document.createElement('div')
   price.innerText=el.price;

 

   let btn=document.createElement("button")
   btn.innerText="Buy Now"
   btn.setAttribute('class','buy_voucher')
   btn.addEventListener("click",function(){
       purchase(el)
   })


   
  div.append(image,name ,price,btn)

  document.getElementById("voucher_list").append(div)

  })

}

let amount=document.getElementById("wallet_balance").innerText=`${sum}`



function purchase(el){
  let at=(`${el.price}`)
  console.log(at)
  console.log(amount)
        if (at < amount)
        {
            alert("Hurray! purchase successful")
            cart.push(el)
            localStorage.setItem("purchase",JSON.stringify(cart))
            // let a=amount-at;
            // console.log(a)
            // amount.innerHtml =`${a}`
        }
        else if (at > amount){
             alert("Sorry! insufficient balance" )
            }
      
}