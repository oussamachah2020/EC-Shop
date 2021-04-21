const SideBtn = document.querySelector('.sideBar');
const SideBar = document.querySelector('.list');

SideBtn.addEventListener('click',function() {
    if(SideBar.classList.contains('show-SideBar')) {
        SideBar.classList.remove('show-SideBar');
    }else {
        SideBar.classList.add('show-SideBar');
    }
});

const Products = document.querySelectorAll('.product');
const FilterBtns = document.querySelectorAll('.btn');

for(let i = 0; i < FilterBtns.length; i++) {
    FilterBtns[i].addEventListener('click', (e) => {
        const id = e.currentTarget.dataset.id;

        Products.forEach((item) => {
            if(id === "all") {
                item.style.display = 'block';
            }else if(item.classList.contains(id)) {
                item.style.display = 'block';
            }else {
                item.style.display = 'none';
            }
        })
    })
}

const ShopBtn = document.querySelectorAll('.shop-btn');
ShopBtn.forEach((btn) => {
    btn.addEventListener('click',function() {
        if(confirm("Are you sure about your choice?")) {
            window.location.replace("file:///home/oussama/Desktop/E-Shop/pay_page/pay.html");        
        }
    })
})
