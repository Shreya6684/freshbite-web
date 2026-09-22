// ==========================================
// FRESHBITE - MAIN JAVASCRIPT
// ==========================================


// ==========================================
// RESTAURANT DATA
// ==========================================

const restaurants = {

    pizza: {
        name: "La Pino's Pizza",
        category: "Pizza",
        image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&w=900&q=85",

        items: [
            {
                name: "Margherita Pizza",
                price: 199,
                category: "Pizza",
                rating: "4.8",
                image: "https://images.unsplash.com/photo-1574071318508-1cdbab80d002?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Farmhouse Pizza",
                price: 249,
                category: "Pizza",
                rating: "4.7",
                image: "https://images.unsplash.com/photo-1566843972142-a7fcb70de55a?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Cheese Burst Pizza",
                price: 299,
                category: "Pizza",
                rating: "4.9",
                image: "https://images.unsplash.com/photo-1579751626657-72bc17010498?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Cold Drink",
                price: 90,
                category: "Snacks",
                rating: "4.6",
                image: "https://images.unsplash.com/photo-1544145945-f90425340c7e?auto=format&fit=crop&w=700&q=85"
            }
        ]
    },


    burger: {
        name: "Burger House",
        category: "Burgers",
        image: "https://images.unsplash.com/photo-1571091718767-18b5b1457add?auto=format&fit=crop&w=900&q=85",

        items: [
            {
                name: "Classic Burger",
                price: 149,
                category: "Burgers",
                rating: "4.7",
                image: "https://images.unsplash.com/photo-1550547660-d9450f859349?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Cheese Burger",
                price: 179,
                category: "Burgers",
                rating: "4.8",
                image: "https://images.unsplash.com/photo-1568901346375-23c9450c58cd?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Crispy Chicken Burger",
                price: 219,
                category: "Burgers",
                rating: "4.8",
                image: "https://images.unsplash.com/photo-1606755962773-d324e0a13086?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "French Fries",
                price: 99,
                category: "Snacks",
                rating: "4.6",
                image: "https://images.unsplash.com/photo-1573080496219-bb080dd4f877?auto=format&fit=crop&w=700&q=85"
            }
        ]
    },


    indian: {
        name: "Shree Sukh Sagar",
        category: "Indian",
        image: "https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=900&q=85",

        items: [
            {
                name: "Paneer Tikka",
                price: 229,
                category: "Indian",
                rating: "4.8",
                image: "https://images.unsplash.com/photo-1567188040759-fb8a883dc6d8?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Paneer Butter Masala",
                price: 179,
                category: "Indian",
                rating: "4.7",
                image: "https://images.unsplash.com/photo-1631452180519-c014fe946bc7?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Butter Chicken",
                price: 319,
                category: "Indian",
                rating: "4.9",
                image: "https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Veg Thali",
                price: 199,
                category: "Thali",
                rating: "4.8",
                image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg?auto=compress&cs=tinysrgb&w=700"
            },

            {
                name: "Samosa",
                price: 79,
                category: "Snacks",
                rating: "4.7",
                image: "https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=700&q=85"
            }
        ]
    },


    chinese: {
        name: "Think Asia",
        category: "Chinese",
        image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=900&q=85",

        items: [
            {
                name: "Veg Hakka Noodles",
                price: 179,
                category: "Noodles",
                rating: "4.7",
                image: "https://images.unsplash.com/photo-1552611052-33e04de081de?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Veg Fried Rice",
                price: 169,
                category: "Rice",
                rating: "4.6",
                image: "https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Chilli Paneer",
                price: 219,
                category: "Chinese",
                rating: "4.8",
                image: "https://www.cookwithmanali.com/wp-content/uploads/2016/01/Chilli-Paneer-Restaurant-Style.jpg"
            },

            {
                name: "Veg Momos",
                price: 149,
                category: "Snacks",
                rating: "4.7",
                image: "https://images.unsplash.com/photo-1625220194771-7ebdea0b70b9?auto=format&fit=crop&w=700&q=85"
            }
        ]
    },


    biryani: {
        name: "The Onyx",
        category: "Biryani",
        image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=900&q=85",

        items: [
            {
                name: "Chicken Biryani",
                price: 279,
                category: "Biryani",
                rating: "4.8",
                image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Veg Manchurian",
                price: 229,
                category: "Chinese",
                rating: "4.7",
                image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/veg-manchurian.jpg"
            },

            {
                name: "Paneer Biryani",
                price: 249,
                category: "Biryani",
                rating: "4.7",
                image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2023/02/paneer-biryani-recipe.jpg"
            },

            {
                name: "Crispy Chilli Babycorn",
                price: 69,
                category: "Chinese",
                rating: "4.5",
                image: "https://hebbarskitchen.com/wp-content/uploads/mainPhotos/baby-corn-chilli-recipe-chilli-baby-corn-crispy-chilli-baby-corn-2.jpeg"
            }
        ]
    },


    dessert: {
        name: "Brubeck Bakery",
        category: "Desserts",
        image: "https://images.unsplash.com/photo-1551024506-0bccd828d307?auto=format&fit=crop&w=900&q=85",

        items: [
            {
                name: "Chocolate Brownie",
                price: 99,
                category: "Desserts",
                rating: "4.8",
                image: "https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Chocolate Cake",
                price: 149,
                category: "Cakes",
                rating: "4.9",
                image: "https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Ice Cream",
                price: 89,
                category: "Desserts",
                rating: "4.7",
                image: "https://images.unsplash.com/photo-1563805042-7684c019e1cb?auto=format&fit=crop&w=700&q=85"
            },

            {
                name: "Strawberry Cake",
                price: 169,
                category: "Cakes",
                rating: "4.8",
                image: "https://images.unsplash.com/photo-1464349095431-e9a21285b5f3?auto=format&fit=crop&w=700&q=85"
            }
        ]
    }

};


let currentRestaurant = null;
let currentItems = [];



// ==========================================
// EXPLORE MENU PAGE
// ==========================================

function showExplorePage() {

    const grid =
        document.getElementById("explore-grid");

    const explore =
        document.getElementById("explore-results");

    const selected =
        document.getElementById("selected-menu-section");


    if (!grid) {
        return;
    }


    explore.style.display = "block";
    selected.classList.remove("show");


    grid.innerHTML = "";


    Object.keys(restaurants).forEach(key => {

        const restaurant =
            restaurants[key];


        grid.innerHTML += `

            <div class="explore-card">

                <img
                    src="${restaurant.image}"
                    alt="${restaurant.name}"
                >

                <div class="explore-card-info">

                    <h3>
                        ${restaurant.name}
                    </h3>

                    <p>
                        ${restaurant.category}
                    </p>

                    <p class="rating">
                        ⭐ 4.8 &nbsp; • &nbsp; 25-35 min
                    </p>

                    <button
                        onclick="openRestaurant('${key}')"
                    >
                        View Menu
                    </button>

                </div>

            </div>

        `;

    });

}



// ==========================================
// SEARCH RESTAURANT + FOOD
// ==========================================

function searchEverything() {

    const input =
        document.getElementById("menu-search");

    const grid =
        document.getElementById("explore-grid");


    if (!input || !grid) {
        return;
    }


    const search =
        input.value.trim().toLowerCase();


    grid.innerHTML = "";


    if (search === "") {

        showExplorePage();

        return;

    }


    let found = false;


    Object.keys(restaurants).forEach(key => {

        const restaurant =
            restaurants[key];


        const restaurantMatch =
            restaurant.name
                .toLowerCase()
                .includes(search);


        const foodMatch =
            restaurant.items.some(item =>
                item.name
                    .toLowerCase()
                    .includes(search)
            );


        if (restaurantMatch || foodMatch) {

            found = true;


            let matchingFood =
                restaurant.items.filter(item =>
                    item.name
                        .toLowerCase()
                        .includes(search)
                );


            let foodText = "";


            if (matchingFood.length > 0) {

                foodText =
                    matchingFood
                        .map(item => item.name)
                        .join(", ");

            } else {

                foodText =
                    "Restaurant found";

            }


            grid.innerHTML += `

                <div class="explore-card">

                    <img
                        src="${restaurant.image}"
                        alt="${restaurant.name}"
                    >

                    <div class="explore-card-info">

                        <h3>
                            ${restaurant.name}
                        </h3>

                        <p>
                            ${restaurant.category}
                        </p>

                        <p>
                            ${foodText}
                        </p>

                        <button
                            onclick="openRestaurant('${key}')"
                        >
                            View Menu
                        </button>

                    </div>

                </div>

            `;

        }

    });


    if (!found) {

        grid.innerHTML = `

            <div class="no-results">

                <h3>
                    No results found 😕
                </h3>

                <p>
                    Try searching for pizza, burger,
                    biryani, cake or a restaurant name.
                </p>

            </div>

        `;

    }

}



// ==========================================
// OPEN RESTAURANT
// ==========================================

function openRestaurant(key) {

    const restaurant =
        restaurants[key];


    if (!restaurant) {
        return;
    }


    currentRestaurant = key;

    currentItems = restaurant.items;


    document
        .getElementById("explore-results")
        .style.display = "none";


    const selected =
        document.getElementById("selected-menu-section");


    selected.classList.add("show");


    document
        .getElementById("selected-restaurant-name")
        .textContent = restaurant.name;


    document
        .getElementById("selected-restaurant-description")
        .textContent =
            "Fresh and delicious food from " +
            restaurant.name;


    document
        .getElementById("restaurant-menu-title")
        .textContent =
            restaurant.name;


    createCategories();

    displayFood(currentItems);


    window.scrollTo({
        top: 0,
        behavior: "smooth"
    });

}



// ==========================================
// CATEGORIES
// ==========================================

function createCategories() {

    const box =
        document.getElementById("menu-categories");


    const categories = [
        ...new Set(
            currentItems.map(item =>
                item.category
            )
        )
    ];


    box.innerHTML = `

        <button
            class="menu-category-btn active"
            onclick="filterFood('All', this)"
        >
            All
        </button>

    `;


    categories.forEach(category => {

        box.innerHTML += `

            <button
                class="menu-category-btn"
                onclick="filterFood('${category}', this)"
            >
                ${category}
            </button>

        `;

    });

}



function filterFood(category, button) {

    document
        .querySelectorAll(".menu-category-btn")
        .forEach(btn =>
            btn.classList.remove("active")
        );


    button.classList.add("active");


    if (category === "All") {

        displayFood(currentItems);

        return;

    }


    const filtered =
        currentItems.filter(
            item =>
                item.category === category
        );


    displayFood(filtered);

}



// ==========================================
// DISPLAY FOOD
// ==========================================

function displayFood(items) {

    const container =
        document.getElementById("restaurant-menu");


    container.innerHTML = "";


    if (items.length === 0) {

        container.innerHTML = `
            <div class="no-results">
                <h3>No food found.</h3>
            </div>
        `;

        return;

    }


    items.forEach(item => {

        container.innerHTML += `

            <div class="menu-card">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="menu-info">

                    <span class="food-type">
                        ${item.category}
                    </span>

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        Fresh and delicious
                        ${item.name.toLowerCase()}.
                    </p>

                    <div class="item-rating">
                        ⭐ ${item.rating}
                    </div>

                    <div class="item-bottom">

                        <strong>
                            ₹${item.price}
                        </strong>

                        <button
                            class="add-btn"
                            onclick='addToCart(
                                ${JSON.stringify(item)}
                            )'
                        >
                            Add +
                        </button>

                    </div>

                </div>

            </div>

        `;

    });

}



// ==========================================
// FOOD SEARCH INSIDE RESTAURANT
// ==========================================

function searchFood() {

    const input =
        document.getElementById("food-search");


    if (!input) {
        return;
    }


    const value =
        input.value.toLowerCase();


    const filtered =
        currentItems.filter(item =>
            item.name
                .toLowerCase()
                .includes(value)
        );


    displayFood(filtered);

}



// ==========================================
// CART
// ==========================================

let cart =
    JSON.parse(
        localStorage.getItem("freshbiteCart")
    ) || [];


function saveCart() {

    localStorage.setItem(
        "freshbiteCart",
        JSON.stringify(cart)
    );

}


function addToCart(item) {

    const existing =
        cart.find(
            cartItem =>
                cartItem.name === item.name
        );


    if (existing) {

        existing.quantity++;

    } else {

        cart.push({

            name: item.name,

            price: item.price,

            image: item.image,

            quantity: 1

        });

    }


    saveCart();

    updateCartCount();


    alert(
        item.name +
        " added to cart! 🛒"
    );

}



function updateCartCount() {

    const count =
        cart.reduce(
            (total, item) =>
                total + item.quantity,
            0
        );


    document
        .querySelectorAll("#cart-count")
        .forEach(element => {

            element.textContent = count;

        });

}



// ==========================================
// CART PAGE
// ==========================================

function showCart() {

    const container =
        document.getElementById("cart-items");


    if (!container) {
        return;
    }


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="no-results">

                <h3>
                    Your cart is empty 🛒
                </h3>

                <p>
                    Add some delicious food first.
                </p>

                <a
                    href="menu.html"
                    class="checkout-btn"
                >
                    Explore Menu
                </a>

            </div>

        `;

        updateCartTotal();

        return;

    }


    container.innerHTML = "";


    cart.forEach((item, index) => {

        container.innerHTML += `

            <div class="cart-item">

                <img
                    src="${item.image}"
                    alt="${item.name}"
                >

                <div class="cart-item-info">

                    <h3>
                        ${item.name}
                    </h3>

                    <p>
                        ₹${item.price}
                    </p>

                    <div class="quantity-box">

                        <button
                            onclick="decreaseQuantity(${index})"
                        >
                            −
                        </button>

                        <span>
                            ${item.quantity}
                        </span>

                        <button
                            onclick="increaseQuantity(${index})"
                        >
                            +
                        </button>

                    </div>

                </div>

                <strong class="item-price">
                    ₹${item.price * item.quantity}
                </strong>

            </div>

        `;

    });


    updateCartTotal();

}



function increaseQuantity(index) {

    cart[index].quantity++;

    saveCart();

    showCart();

    updateCartCount();

}



function decreaseQuantity(index) {

    if (cart[index].quantity > 1) {

        cart[index].quantity--;

    } else {

        cart.splice(index, 1);

    }


    saveCart();

    showCart();

    updateCartCount();

}



function updateCartTotal() {

    const total =
        cart.reduce(
            (sum, item) =>
                sum +
                item.price *
                item.quantity,
            0
        );


    const subtotal =
        document.getElementById(
            "cart-subtotal"
        );


    const totalElement =
        document.getElementById(
            "cart-total"
        );


    if (subtotal) {

        subtotal.textContent =
            "₹" + total;

    }


    if (totalElement) {

        totalElement.textContent =
            "₹" + total;

    }

}



// ==========================================
// CHECKOUT
// ==========================================

function loadCheckout() {

    const container =
        document.getElementById("checkout-items");


    if (!container) {
        return;
    }

    if (!getCurrentUser()) {
        localStorage.setItem("freshbiteReturnTo", "checkout.html");
        alert("Please login or register before placing an order.");
        window.location.href = "login.html";
        return;
    }


    if (cart.length === 0) {

        container.innerHTML = `

            <div class="no-results">

                <h3>
                    Your cart is empty 🛒
                </h3>

                <p>
                    Please add some food before checkout.
                </p>

                <a
                    href="menu.html"
                    class="checkout-btn"
                >
                    Explore Menu
                </a>

            </div>

        `;

        return;
    }


    container.innerHTML = "";


    cart.forEach(item => {

        container.innerHTML += `

            <div class="checkout-item">

                <span>
                    ${item.name} × ${item.quantity}
                </span>

                <strong>
                    ₹${item.price * item.quantity}
                </strong>

            </div>

        `;

    });


    const itemTotal =
        cart.reduce(
            (sum, item) =>
                sum + (item.price * item.quantity),
            0
        );


    const deliveryFee = 30;

    const taxes = 20;

    const finalTotal =
        itemTotal + deliveryFee + taxes;


    const subtotal =
        document.getElementById(
            "checkout-subtotal"
        );


    const total =
        document.getElementById(
            "checkout-total"
        );


    if (subtotal) {

        subtotal.textContent =
            "₹" + itemTotal;

    }


    if (total) {

        total.textContent =
            "₹" + finalTotal;

    }

}



function placeOrder(event) {

    event.preventDefault();

    const currentUser = getCurrentUser();

    if (!currentUser) {
        requireLogin(event);
        return;
    }


    if (cart.length === 0) {

        alert(
            "Your cart is empty. Please add food first."
        );

        window.location.href =
            "menu.html";

        return;

    }


    const name =
        document.getElementById("name").value.trim();

    const phone =
        document.getElementById("phone").value.trim();

    const address =
        document.getElementById("address").value.trim();

    const city =
        document.getElementById("city").value.trim();

    const pincode =
        document.getElementById("pincode").value.trim();


    if (
        name === "" ||
        phone === "" ||
        address === "" ||
        city === "" ||
        pincode === ""
    ) {

        alert(
            "Please fill all delivery details."
        );

        return;

    }


    const payment =
        document.querySelector(
            'input[name="payment"]:checked'
        );


    if (!payment) {

        alert(
            "Please select a payment method."
        );

        return;

    }


    const historyKey = getOrderHistoryKey(currentUser);
    const orderHistory = JSON.parse(localStorage.getItem(historyKey)) || [];

    orderHistory.unshift({
        id: "FB" + Date.now().toString().slice(-8),
        date: new Date().toLocaleString(),
        items: cart.map(item => ({
            name: item.name,
            quantity: item.quantity,
            price: item.price
        })),
        total: cart.reduce((sum, item) => sum + item.price * item.quantity, 0) + 50,
        payment: payment.value
    });

    localStorage.setItem(historyKey, JSON.stringify(orderHistory));

    alert("🎉 Order placed successfully!");


    cart = [];

    saveCart();

    updateCartCount();


    window.location.href =
        "index.html";

}



// ==========================================
// LOGIN
// ==========================================

function getCurrentUser() {
    return localStorage.getItem("freshbiteUser");
}

function getOrderHistoryKey(email) {
    return "freshbiteOrderHistory_" + email.toLowerCase();
}

function requireLogin(event) {
    if (getCurrentUser()) {
        return true;
    }

    if (event) {
        event.preventDefault();
    }

    localStorage.setItem("freshbiteReturnTo", "checkout.html");
    alert("Please login or register before placing an order.");
    window.location.href = "login.html";
    return false;
}

function showRegisterForm(event) {
    event.preventDefault();
    document.querySelector(".login-box").style.display = "none";
    document.getElementById("register-box").style.display = "block";
}

function showLoginForm(event) {
    event.preventDefault();
    document.getElementById("register-box").style.display = "none";
    document.querySelector(".login-box").style.display = "block";
}

function finishAuthentication(email, name) {
    localStorage.setItem("freshbiteUser", email);
    localStorage.setItem("freshbiteUserName", name || email.split("@")[0]);

    const returnTo = localStorage.getItem("freshbiteReturnTo");
    localStorage.removeItem("freshbiteReturnTo");
    window.location.href = returnTo || "index.html";
}

function loginUser(event) {

    if (event) {
        event.preventDefault();
    }


    const email =
        document.getElementById("email");


    const password =
        document.getElementById("password");


    if (!email || !password) {

        alert(
            "Login fields not found."
        );

        return;

    }


    if (
        email.value.trim() === "" ||
        password.value.trim() === ""
    ) {

        alert(
            "Please enter email and password."
        );

        return;

    }


    alert(
        "Login successful! 🎉"
    );

    finishAuthentication(email.value.trim());

}

function registerUser(event) {

    event.preventDefault();

    const name = document.getElementById("register-name").value.trim();
    const email = document.getElementById("register-email").value.trim();
    const password = document.getElementById("register-password").value.trim();

    if (!name || !email || !password) {
        alert("Please fill all registration details.");
        return;
    }

    alert("Registration successful! 🎉");
    finishAuthentication(email, name);

}

function logoutUser() {
    localStorage.removeItem("freshbiteUser");
    localStorage.removeItem("freshbiteUserName");
    window.location.reload();

}

function renderAccountPage() {

    const panel = document.getElementById("account-panel");
    const loginBox = document.querySelector("#login-form")?.closest(".login-box");
    const registerBox = document.getElementById("register-box");
    const currentUser = getCurrentUser();

    if (!panel) {
        return;
    }

    if (!currentUser) {
        return;
    }

    loginBox.style.display = "none";
    registerBox.style.display = "none";
    panel.style.display = "block";

    document.getElementById("account-welcome").textContent =
        "Welcome back, " + (localStorage.getItem("freshbiteUserName") || currentUser) + ".";
    document.getElementById("account-user-id").textContent = currentUser;

    const history = JSON.parse(localStorage.getItem(getOrderHistoryKey(currentUser))) || [];
    const historyContainer = document.getElementById("order-history");

    if (history.length === 0) {
        historyContainer.innerHTML = "<p class=\"empty-history\">No orders yet. Your completed orders will appear here.</p>";
        return;
    }

    historyContainer.innerHTML = history.map(order => `
        <div class="order-history-item">
            <div><strong>${order.id}</strong><span>${order.date}</span></div>
            <p>${order.items.map(item => item.name + " × " + item.quantity).join(", ")}</p>
            <strong>₹${order.total}</strong>
        </div>
    `).join("");

}



function googleLogin() {

    alert(
        "Google login is not connected yet."
    );

}



// ==========================================
// CONTACT
// ==========================================

function submitContact(event) {

    event.preventDefault();


    alert(
        "Thank you! Your message has been sent."
    );


    event.target.reset();

}



// ==========================================
// RESTAURANT PAGE SEARCH
// ==========================================

function setupRestaurantPage() {

    const search =
        document.getElementById(
            "restaurant-search"
        );


    if (search) {

        search.addEventListener(
            "input",
            function () {

                const value =
                    this.value.toLowerCase();


                document
                    .querySelectorAll(
                        ".restaurant-card"
                    )
                    .forEach(card => {

                        const text =
                            card.textContent
                                .toLowerCase();


                        card.style.display =
                            text.includes(value)
                                ? ""
                                : "none";

                    });

            }
        );

    }


    document
        .querySelectorAll(
            ".restaurant-filter"
        )
        .forEach(button => {

            button.addEventListener(
                "click",
                function () {

                    document
                        .querySelectorAll(
                            ".restaurant-filter"
                        )
                        .forEach(btn =>
                            btn.classList.remove(
                                "active"
                            )
                        );


                    this.classList.add(
                        "active"
                    );


                    const filter =
                        this.dataset.filter;


                    document
                        .querySelectorAll(
                            ".restaurant-card"
                        )
                        .forEach(card => {

                            if (
                                filter === "all" ||
                                card.dataset.category ===
                                filter
                            ) {

                                card.style.display =
                                    "";

                            } else {

                                card.style.display =
                                    "none";

                            }

                        });

                }
            );

        });

}



// ==========================================
// PAGE LOAD
// ==========================================

document.addEventListener(
    "DOMContentLoaded",
    function () {


        // MENU PAGE

        if (
            document.getElementById(
                "explore-results"
            )
        ) {

            const params =
                new URLSearchParams(
                    window.location.search
                );


            const restaurant =
                params.get("restaurant");


            if (restaurant &&
                restaurants[restaurant]) {

                openRestaurant(
                    restaurant
                );

            } else {

                showExplorePage();

            }


            const search =
                document.getElementById(
                    "menu-search"
                );


            if (search) {

                search.addEventListener(
                    "input",
                    searchEverything
                );

            }


            const foodSearch =
                document.getElementById(
                    "food-search"
                );


            if (foodSearch) {

                foodSearch.addEventListener(
                    "input",
                    searchFood
                );

            }

        }


        // RESTAURANTS PAGE

        setupRestaurantPage();


        // CART

        showCart();


        // CHECKOUT

        loadCheckout();


        // ACCOUNT

        renderAccountPage();


        // CART COUNT

        updateCartCount();

    }
);