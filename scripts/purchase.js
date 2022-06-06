 let data=JSON.parse(localStorage.getItem("purchase"))

console.log(data)

let sum=0;
let ab=JSON.parse(localStorage.getItem("user"))
// console.log(ab)
ab.map(function(el){
  
      sum = sum +Number(el.Wallet)
    // amount.append(sum)
})

// let sub;
data.map(function(el){

    let div=document.createElement('div')
       div.setAttribute('class' ,'box')
    
    
       let name=document.createElement('div')
       name.innerText=el.name;
    
       let image=document.createElement("img")
       image.src=el.image;
    
       let price=document.createElement('div')
       price.innerText=el.price;
        // sub=amount - Number(el.price)
    
    
       div.append(image,name,price)
    
       document.getElementById("purchased_vouchers").append(div)

})

let amount=document.getElementById("wallet_balance").innerText=`${sum}`


let balance=document.getElementById("balance").innerText=`${sub}`
