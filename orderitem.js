// Get cart from localStorage (matches Amazon1.html)


import {hello} from 'https://unpkg.com/supersimpledev@1.0.1/hello.esm.js';
import dayjs from 'https://unpkg.com/supersimpledev@8.5.0/dayjs/esm/index.js';
const today = dayjs();
 const deliveryDate = today.add(7,'days');
deliveryDate.format('dddd,MMMM D')
    let cartitem = JSON.parse(localStorage.getItem('cartitem')) || [];

    const products = [
        { image: "https://images.unsplash.com/photo-1549298916-b41d501d3772?w=200", name: "Shoes", price: 15 },
        { image: "https://images.unsplash.com/photo-1543163521-1bf539c55dd2?w=200", name: "Women Shoes", price: 20 },
        { image: "https://images.unsplash.com/photo-1553062407-98eeb64c6a62?w=200", name: "Backpack", price: 15 },
        { image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=200", name: "Tshirt", price: 23 },
        { image: "https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?w=200", name: "Men shoes", price: 500 },
        { image: "https://images.unsplash.com/photo-1586351934193-6d78494cd762?w=200", name: "Socks", price: 15 },
        { image: "https://images.unsplash.com/photo-1568702846914-96b305d2aaeb?w=200", name: "Apple", price: 2 },
        { image: "https://images.unsplash.com/photo-1547514701-42782101795e?w=200", name: "Orange", price: 3 },
        { image: "https://images.unsplash.com/photo-1445282768818-728615cc910a?w=200", name: "Carrot", price: 8 },
        { image: "https://images.unsplash.com/photo-1546833999-b9f581a1996d?w=200", name: "Cabbage", price: 3 },
        { image: "https://images.unsplash.com/photo-1574856344991-aaa31b6f4ce3?w=200", name: "Pear", price: 15 },
        { image: "https://images.unsplash.com/photo-1550258987-190a2d41a8ba?w=200", name: "Pineapple", price: 20 },
        { image: "https://images.unsplash.com/photo-1571771894821-ce9b6c11b08e?w=200", name: "Banana", price: 15 },
        { image: "https://images.unsplash.com/photo-1553279768-865429fa0078?w=200", name: "Mango", price: 23 },
        { image: "https://images.unsplash.com/photo-1594633312681-425c7b97ccd1?w=200", name: "Grapes", price: 8 },
        { image: "https://images.unsplash.com/photo-1464454709131-ffd692591ee5?w=200", name: "Strawberry", price: 15 },
        { image: "https://images.unsplash.com/photo-1587496679742-bad502958fbf?w=200", name: "Lemon", price: 10 },
        { image: "https://images.unsplash.com/photo-1592924357228-91a4daadcfea?w=200", name: "Tomato", price: 8 },
        { image: "https://images.unsplash.com/photo-1518977676601-b53f82aba655?w=200", name: "Potato", price: 3 },
        { image: "https://images.unsplash.com/photo-1586201375761-83865001e31c?w=200", name: "Chili", price: 7 },
        { image: "https://images.unsplash.com/photo-1563114775-7cd29c9c4aaf?w=200", name: "Watermelon", price: 10 },
        { image: "https://images.unsplash.com/photo-1530836369250-ef72a3f5cda8?w=200", name: "Corn", price: 8 },
        { image: "https://images.unsplash.com/photo-1596727147705-61a532a659bd?w=200", name: "Smart TV", price: 299 },
        { image: "https://images.unsplash.com/photo-1593359677879-a4bb92f829d1?w=200", name: "Old TV", price: 99 },
        { image: "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=200", name: "Digital Camera", price: 199 },
        { image: "https://images.unsplash.com/photo-1585435557343-3b092031d5ad?w=200", name: "Alarm Clock", price: 25 },
        { image: "https://images.unsplash.com/photo-1511707171634-5f897ff02aa9?w=200", name: "Smart Phone", price: 599 },
        { image: "https://images.unsplash.com/photo-1496181133206-80ce9b88a853?w=200", name: "Laptop Computer", price: 899 },
        { image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=200", name: "LED Bulb", price: 8 },
        { image: "https://images.unsplash.com/photo-1599669454699-248893623440?w=200", name: "Microphone", price: 79 },
        { image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=200", name: "Smart Watch", price: 199 },
        { image: "https://images.unsplash.com/photo-1586816879360-004f5b0cac9a?w=200", name: "Satellite Dish", price: 149 },
        { image: "https://images.unsplash.com/photo-1589003077984-894e133dabab?w=200", name: "Vintage Radio", price: 45 },
        { image: "https://images.unsplash.com/photo-1587145820266-a5951ee6f620?w=200", name: "Calculator", price: 15 },
        { image: "https://images.unsplash.com/photo-1570197788417-0e82375c9371?w=200", name: "Ice Cream Cake", price: 12 },
        { image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?w=200", name: "Soft Serve", price: 8 },
        { image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?w=200", name: "Chocolate Cake", price: 25 },
        { image: "https://images.unsplash.com/photo-1524351199678-941a58a3df50?w=200", name: "Cheesecake", price: 18 }
        ,{
            image:
            'https://images.unsplash.com/photo-1567767292278-a4f21aa2d36e?w=400',
            name: 'Speaker',
            price:15
        },{
            image:
            'https://images.unsplash.com/photo-1593640408182-31c70c8268f5?w=400',
            name: 'Tablet',
            price:8
        },{
            image:
            'https://images.unsplash.com/photo-1586953208448-b95a79798f07?w=400',
            name: 'Gaming Console',
            price:6
        },
        {
            image:
            'https://images.unsplash.com/photo-1600003263720-95b45a4035d5?w=400',
            name: 'Wireless Earbuds',
            price:5
        },
        {
            image:
            'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400',
            name:'Monitor',
            price:6
        },{
            image:
            'https://images.unsplash.com/photo-1597872200969-2b65d56bd16b?w=400',
            name:'Keyboard',
            price:10
        },{
            image:
            'https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&auto=format&fit=crop&crop=center',
            name: 'mouse',
            price:12
            
        },{
            image:
            'https://images.unsplash.com/photo-1531297484001-80022131f5a1?w=400',
            name:  'Router',
            price:14
        },{
            image:
            'https://images.unsplash.com/photo-1592899677977-9c10ca588bbd?w=400&auto=format&fit=crop&crop=center',
            name: 'External Hard Drive',
            price:16
        },{
            image:
            'https://images.unsplash.com/photo-1587202372634-32705e3bf49c?w=400',
            name:'Power Bank',
            price:15
        },
        {
            image:
        'https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400',
        name: 'Headphones',
        price:16
        }
    ];

    // Function to calculate and update order summary
    function updateOrderSummary() {
        let itemsTotal = 0;
        let itemCount = 0;
        
        // Calculate total price and item count
        cartitem.forEach(item => {
            let product = products.find(p => p.name === item.itemsName);
            if (product) {
                itemsTotal += product.price * item.quantity;
                itemCount += item.quantity;
            }
        });
        
        // Calculate shipping (free if total < $5)
        const shippingCost = itemsTotal < 5 ? 0 : 4.99;
        
        // Calculate tax (10%)
        const taxRate = 0.10;
        const taxAmount = itemsTotal * taxRate;
        
        // Calculate totals
        const totalBeforeTax = itemsTotal + shippingCost;
        const orderTotal = totalBeforeTax + taxAmount;
        
        // Update the order summary display
        document.getElementById('item-count').textContent = itemCount;
        document.getElementById('items-total').textContent = itemsTotal.toFixed(2);
        
        const shippingElement = document.getElementById('shipping-cost');
        if (shippingCost === 0) {
            shippingElement.innerHTML = '<span class="free-shipping">Free-Shipping</span>';
        } else {
            shippingElement.textContent = '$' + shippingCost.toFixed(2);
        }
        
        document.getElementById('total-before-tax').textContent = totalBeforeTax.toFixed(2);
        document.getElementById('tax-amount').textContent = taxAmount.toFixed(2);
        document.getElementById('order-total').textContent = orderTotal.toFixed(2);
    }

    // Function to update cart display without reloading the page
    function updateCartDisplay() {
        let html = '';
        if (cartitem.length === 0) {
            html = '<div class="empty-cart">Your cart is empty. <a href="Amazon1.html">Continue shopping</a></div>';
        } else {
            cartitem.forEach(item => {
                let machingproduct = products.find(p => p.name === item.itemsName);
                if (machingproduct) {
                    html += `
                    <div class="totalcart">
                        <div class="delivery-date-js">Delivery date: Mon 2/2018</div>
                        <div class="cart-item">
                            <div class="image-js"><img src="${machingproduct.image}" alt="${machingproduct.name}"></div>
                            <div class="orderedItem">
                                <div class="name-js">${machingproduct.name}</div>
                                <div class="price-js">$${machingproduct.price}</div>
                                <div class="actions">
                                    <div class="quantity-controls">
                                        <button class="decrease-js" data-name="${item.itemsName}">➖</button>
                                        <span class="quantity-js">Quantity: ${item.quantity}</span>
                                        <button class="update-js" data-name="${item.itemsName}">➕</button>
                                    </div>
                                    <button class="delete-js" data-name="${item.itemsName}">Delete</button>
                                </div>
                            </div>
                            <div class="radioselector">
                                <input type="radio" name="${machingproduct.name}">
                                <input type="radio" name="${machingproduct.name}">
                                <input type="radio" name="${machingproduct.name}">
                            </div>
                        </div>
                    </div>
                    `;
                }
            });
        }
        
        document.querySelector('.dani').innerHTML = html;
        
        // Re-attach event listeners to the new buttons
        attachEventListeners();
        
        // Update order summary
        updateOrderSummary();
    }

    // Function to attach event listeners to cart buttons
    function attachEventListeners() {
        // Delete functionality
        document.querySelectorAll('.delete-js').forEach(button => {
            button.addEventListener('click', () => {
                const name = button.dataset.name;
                cartitem = cartitem.filter(item => item.itemsName !== name);
                localStorage.setItem('cartitem', JSON.stringify(cartitem));
                updateCartDisplay();
            });
        });

        // Increase quantity functionality
        document.querySelectorAll('.update-js').forEach(button => {
            button.addEventListener('click', () => {
                const name = button.dataset.name;
                let item = cartitem.find(i => i.itemsName === name);
                if (item) {
                    item.quantity += 1;
                    localStorage.setItem('cartitem', JSON.stringify(cartitem));
                    updateCartDisplay();
                }
            });
        });

        // Decrease quantity functionality
        document.querySelectorAll('.decrease-js').forEach(button => {
            button.addEventListener('click', () => {
                const name = button.dataset.name;
                let item = cartitem.find(i => i.itemsName === name);
                if (item) {
                    if (item.quantity > 1) {
                        item.quantity -= 1;
                    } else {
                        // Remove item if quantity becomes 0
                        cartitem = cartitem.filter(i => i.itemsName !== name);
                    }
                    localStorage.setItem('cartitem', JSON.stringify(cartitem));
                    updateCartDisplay();
                }
            });
        });
    }

    // Place order function
    function placeOrder() {
        if (cartitem.length === 0) {
            alert('Your cart is empty!');
            return;
        }
        
        const total = parseFloat(document.getElementById('order-total').textContent);
        alert(`Order placed successfully no q!\nTotal: $${total.toFixed(2)}\nThank you for shopping with us!`);
        
        // Clear cart after successful order
        cartitem = [];
        localStorage.setItem('cartitem', JSON.stringify(cartitem));
        updateCartDisplay();
    }


    // Initial cart display
    updateCartDisplay();
    
    
 
    