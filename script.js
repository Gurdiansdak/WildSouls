let $buyNow = document.querySelectorAll("#buy")
let $count = document.querySelector('#count')
let $logIn = document.querySelector("#logIn")
let $logInModal = document.querySelector('.modal')
let $modalClose = document.querySelector('.modal__close')
let $modalContent = document.querySelector('.modal__content')
let $cart = document.querySelector("#cart")
let $cartModal = document.querySelector('.cart-modal')
let $openMod = document.querySelector('#openMod')
let $crest = document.querySelector('#crest')
let $burger = document.querySelector(".burger")
let $closeBurger = document.querySelector("#closeBurger")
let $cartList = document.querySelector(".cart-list")
let $cartItem = document.querySelector(".cart-item")

let $disk = document.querySelector("#disk")
let $dots = document.querySelector("#dots")
let $crysa = document.querySelector("#crysa")

let $disk1 = document.querySelector("#disk1")
let $dots1 = document.querySelector("#dots1")
let $crysa1 = document.querySelector("#crysa1")

let $disk2 = document.querySelector("#disk2")
let $dots2 = document.querySelector("#dots2")
let $crysa2 = document.querySelector("#crysa2")






$logIn.addEventListener('click', openLogin)

function openLogin() {
    $logInModal.classList.remove('hide')
}

$modalClose.addEventListener("click", closeModal)

function closeModal() {
    $logInModal.classList.add("hide")
}

$logInModal.addEventListener('click', closeBackModal)

function closeBackModal(){
    $logInModal.classList.add("hide")
}

$modalContent.addEventListener("click", function(event){
    event.stopPropagation()
})

$disk.addEventListener("click", openDisk);

function openDisk(){
    if($dots.style.display === 'none'){
        $dots.style.display = 'inline';
        $disk.innerHTML = 'DISCOVER MORE'
        $crysa.style.display = 'none'
    }else{
        $dots.style.display = 'none';
        $disk.innerHTML = 'HIDE'
        $crysa.style.display = 'inline'
    }
}

$disk1.addEventListener("click", openDisk1);

function openDisk1(){
    if($dots1.style.display === 'none'){
        $dots1.style.display = 'inline';
        $disk1.innerHTML = 'DISCOVER MORE'
        $crysa1.style.display = 'none'
    }else{
        $dots1.style.display = 'none';
        $disk1.innerHTML = 'HIDE'
        $crysa1.style.display = 'inline'
    }
}

$disk2.addEventListener("click", openDisk2);

function openDisk2(){
    if($dots2.style.display === 'none'){
        $dots2.style.display = 'inline';
        $disk2.innerHTML = 'DISCOVER MORE'
        $crysa2.style.display = 'none'
    }else{
        $dots2.style.display = 'none';
        $disk2.innerHTML = 'HIDE'
        $crysa2.style.display = 'inline'
    }
}

$cart.addEventListener("click", showCartModal);


function showCartModal(){
    $cartModal.style.display = "block"
}


$crest.addEventListener("click", closeCartModal);

function closeCartModal(){
    $cartModal.style.display = "none"
}


$openMod.addEventListener("click", showBurger);

function showBurger(){
    $burger.style.display = "block"
    $openMod.style.display = "none"
}


$closeBurger.addEventListener("click", closedBurger);

function closedBurger(){
    $burger.style.display = "none"
    $openMod.style.display = "block"
}


let count = 0
// let productIndex


// let productsArray = [
//     {
//         img: "https://static.wildsouls.gr/app/uploads/2020/10/fistikovoutiro-1-800x880.png",
//         name: "The Wild Peanut Butter",
//         price: "4.90"
//     },
//     {
//         img: "https://static.wildsouls.gr/app/uploads/2020/10/taxini_kakoa_meli-800x880.png",
//         name: "Tahini with Cocoa & Honey",
//         price: "5.90"
//     },
//     {
//         img: "https://static.wildsouls.gr/app/uploads/2020/10/fountoukovoutiro-800x880.png",
//         name: "Hazelnut Butter",
//         price: "6.90"
//     },
//     {
//         img: "https://static.wildsouls.gr/app/uploads/2020/10/taxini_sisami-800x880.png",
//         name: "Peanut Butter",
//         price: "4.90"
//     },
//     {
//         img: "https://static.wildsouls.gr/app/uploads/2020/10/kasious-800x880.png",
//         name: "Cashew Butter",
//         price: "6.90"
//     },
//     {
//         img: "https://static.wildsouls.gr/app/uploads/2020/10/taxini_meli-800x880.png",
//         name: "Tahini with Honey",
//         price: "5.90"
//     },
//     {
//         img: "https://static.wildsouls.gr/app/uploads/2020/10/taxini_futikes-ines-800x880.png",
//         name: "High Fiber Tahini",
//         price: "5.90"
//     }
// ]



$buyNow.forEach(elem => {
    elem.addEventListener("click", () => {
        count++
        $count.innerHTML = `(${count})`
        // $cartList.innerHTML = ""
            $cartList.insertAdjacentHTML('afterbegin', `
                    <div class="cart-item">
                        <div>
                            <div>
                                <p>The Wild Hazelnut Butter </p>
                                <h1>€ 5,90</h1>
                                <h2></h2>
                            </div>
                            <img src="./img/Rectangle (26).svg">
                        </div>
                            <img id="closedItem" src="./img/icons8-удалить-50.png" onclick="closeItem()">      
                    </div>
            `)
    })
})

// let $closedItem = document.querySelector("#closedItem")

// $closedItem.addEventListener("click", closeItem);

function closeItem(){
    $cartList.style.display = "none"
    // console.log(clicked);
}





