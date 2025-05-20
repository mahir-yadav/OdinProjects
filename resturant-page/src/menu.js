import pizzaImage from "./images/pizza.jpg";
import pastaImage from "./images/pasta.jpg";
import burgerImage from "./images/burger.jpg";
import lavacakeImage from "./images/lavacake.jpg";
import paneerImage from "./images/paneer.jpg";
import hakkaImage from "./images/hakka.jpg";


export function load_menu(content) {
    content.innerHTML = '';
    content.className = 'menu-page';

    const heroSection = document.createElement("div");
    heroSection.classList.add("menu-hero");

    const heroText = document.createElement("h1");
    heroText.textContent = "Our Menu";
    heroSection.appendChild(heroText);
    content.appendChild(heroSection);
    const menuContainer = document.createElement("div");
    menuContainer.classList.add("menu-container");
    const menuItems = [
        {
            name: "Margherita Pizza",
            description: "Classic delight with mozzarella & tomato.",
            price: "₹299",
            image: `${pizzaImage}`
        },
        {
            name: "Pasta Alfredo",
            description: "Creamy white sauce pasta with herbs.",
            price: "₹349",
            image: `${pastaImage}`
        },
        {
            name: "Veg Burger",
            description: "Loaded veggie patty with fresh lettuce.",
            price: "₹199",
            image: `${burgerImage}`
        },
        {
            name: "Chocolate Lava Cake",
            description: "Molten chocolate cake with gooey center.",
            price: "₹149",
            image: `${lavacakeImage}`
        }
        ,
        {
            name: "Paneer Tikka",
            description: "Chunks of paneer marinated in spices and grilled to perfection.",
            price: "₹249",
            image: `${paneerImage}`

        },
        {
            name: "Hakka Noodles",
            description: "Stir-fried noodles tossed with veggies and flavorful sauces.",
            price: "₹199",
            image: `${hakkaImage}`

        },

    ];

    menuItems.forEach(item => {
        const card = document.createElement("div");
        card.classList.add("menu-card");
        const img = document.createElement("img");
        img.src = item.image;
        img.alt = item.name;
        img.className = "menu-img";
        const name = document.createElement("h3");
        name.textContent = item.name;

        const desc = document.createElement("p");
        desc.textContent = item.description;

        const price = document.createElement("span");
        price.textContent = item.price;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(desc);
        card.appendChild(price);

        menuContainer.appendChild(card);
    });


    content.appendChild(menuContainer);
}