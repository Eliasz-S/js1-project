
        const NAMES = ['Mango People T-Shirt', 'Banana People T-Shirt', 'Strawberry People T-Shirt', 'Orange People T-Shirt', 'Pumpkin People T-Shirt', 'Pineapple People T-Shirt', 'Cucumber People T-Shirt', 'Tomato People T-Shirt'];
        const PRICES = [52, 53, 55, 67, 69, 94, 23, 45];

        //
        const catalog = {
            items: [],
            container: null,
            imgURL: 'https://raw.githubusercontent.com/Eliasz-S/static/main/JS1_shop',
            init() { 
                this.container = document.querySelector('#items-catalog');
                this.items = getItems(); 
                this.render(); 
            },
            render() { 
                let htmlStr = ''; 
                this.items.forEach((item, index) => { 
                    let imgURL = `${this.imgURL}/featured-items-${index + 1}.jpg`;
                    htmlStr += `
                        <div class="featured-items__item">
                            <div class="featured-items__item-top"><img src="${imgURL}" alt="featured-items-${index + 1}">
                                <div class="add-hover-div">
                                    <div>
                                        <a href="#"><img src="../src/assets/img/cart_small.png" alt="cart_small">Add to Cart</a>
                                        <a href="#"><i class="fas fa-retweet"></i></a>
                                        <a href="#"><i class="far fa-heart"></i></a>
                                    </div>
                                </div>
                            </div>
                            <div class="featured-items__item-bottom">
                                <div>${item.productName}</div>
                                <div>$${item.productPrice}.00</div>
                            </div>
                        </div>
                    `;
                });
                this.container.innerHTML = htmlStr;
            }
        }

        catalog.init();
        //

        function createNewItem(name, price) {
            return {
                productName: name,
                productPrice: price
            }
        }

        function getItems() {
            return NAMES.map((name, index) => createNewItem(NAMES[index], PRICES [index]));
        }