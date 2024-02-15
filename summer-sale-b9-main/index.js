


let titleCount = 1;
let totalPrice = 0;

const cards = document.querySelectorAll(".card");

for (let index = 0; index < cards.length; index++) {
    const card = cards[index];
    // console.log(card)

    card.addEventListener("click", function(){
        // console.log("clicked")

        const title = card.querySelector("h3").innerText;
        const price = parseFloat(card.querySelector("span").innerText.split(" ")[1]);
        // console.log(price)

        const titleContainer = document.getElementById("title-container");
        
        const p = document.createElement("p");
        p.innerText = titleCount + ". " + title;
        titleContainer.appendChild(p);
        titleCount++;


        // calculate price

        totalPrice += price;
        document.getElementById("totalPrice").innerText = totalPrice.toFixed(2);
       
    })
    
}


const btn = document.getElementById("apply-btn");
btn.addEventListener("click", function(){
    // console.log("clicked");

    const couponElement = document.getElementById("input-field").value;
    const couponCode = couponElement.split(" ").join("").toUpperCase();
    console.log(couponCode);

    if(totalPrice >= 200){
        if(couponCode === "SELL200"){
            const discountElement = document.getElementById("discountPrice");
            const discountAmount = totalPrice * 20/100;
            discountElement.innerText = discountAmount.toFixed(2);

            const restTotal = document.getElementById("total");
            restTotal.innerText = totalPrice - discountAmount.toFixed(2);

            document.getElementById("input-field").value = "";

        }else{
            alert("invalid coupon code");
        }
    }else{
        alert("plese at least $200 khoroch koren vai")
    }
})



const button = document.getElementById("btn");
// console.log(button);

button.addEventListener("click", function(){
    // console.log('clicked');

    const show = document.getElementById("text")
    console.log(show);
    show.classList.remove("hidden");

    const showTwo = document.querySelector("div");
    console.log(showTwo);
    showTwo.innerText = show;
    
})