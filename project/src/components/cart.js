
const cart = {
    items: [],
    wrapper: null,
    container: null,
    qtyContainer: null,
    url: 'https://raw.githubusercontent.com/kellolo/static/master/JSON/basket.json',

    init() {
        this.wrapper = document.querySelector('.cart-dropdown'); 
        this.container = document.querySelector('#checked-items'); 
        this.qtyContainer = document.querySelector('#qty');
        this._get(this.url)
        .then(cartObject => {
            this.items = cartObject.content
        })
        .then(() => {
            this._render();
            this._handleEvents();
            this._totalPrice();
            this._totalQty();
        })
    },

    _get(url) {
        return fetch(url).then(d => d.json()) 
    },

    _handleEvents() {
        document.querySelector('#toggle-cart').addEventListener('click', evt => {
            this.wrapper.classList.toggle('hidden')
        })
    },

    _render() {
        let htmlStr = '';
        this.items.forEach(item => {
            htmlStr += `
                <div class="cart-dropdown__checked-items">
                    <img src="${item.productImg}" alt="pic">
                    <div>
                        <h3>${item.productName}</h3>
                        <div><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star"></i><i class="fas fa-star-half-alt"></i></div>
                        <p>${item.amount} x $${item.productPrice}</p>
                    </div>
                    <a href="#" id="clear"><i class="fas fa-times-circle"></i></a>
                </div>
            `
        })
        htmlStr += `
            <div class="cart-dropdown__sum">
                <div>total</div>
                <div>$${this._totalPrice()}</div>
            </div>
        `;
        this.container.innerHTML = htmlStr;
        this.qtyContainer.innerHTML = this._totalQty();
    },

    _totalPrice() {
        let sum = 0;
        for(let i = 0; i < this.items.length; i++) {
            sum += this.items[i].productPrice * this.items[i].amount;
        }
        return sum;
    },

    _totalQty() {
        let qty = 0;
        for(let i = 0; i < this.items.length; i++) {
            qty += this.items[i].amount;
        }
        return qty;
    }
}



cart.init();