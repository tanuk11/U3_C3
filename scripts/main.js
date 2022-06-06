

document.querySelector("form").addEventListener("submit",myfunction)
// let amt=500;
// console.log(amt)
// let sum;

let data=JSON.parse(localStorage.getItem("user")) || []
function myfunction()
{
    event.preventDefault();
    let obj={
        name:document.getElementById("name").value,
        email:document.getElementById("email").value,
        address:document.getElementById("address").value,
        Wallet:document.getElementById("amount").value

    }

    data.push(obj)
    // console.log(data)
    // let amt=document.getElementById("amount").value
    // sum= `${sum} +${amt}`;
    // console.log(sum)
    localStorage.setItem("user",JSON.stringify(data))
    location.reload()
}
