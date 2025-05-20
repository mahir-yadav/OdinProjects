export function load_about(content) {
    content.innerHTML = '';
    content.className = 'about-page';
    const heroSection = document.createElement("div");
    heroSection.classList.add("about-hero");

    const heroText = document.createElement("h1");
    heroText.textContent = "About us";
    heroSection.appendChild(heroText);
    content.appendChild(heroSection);
    const aboutContainer = document.createElement("div");
    aboutContainer.classList.add("about-container");

    const aboutContent = document.createElement("div");
    aboutContent.classList.add("about-content");
    aboutContainer.appendChild(aboutContent);
    const locationHeading = document.createElement('h2');
    locationHeading.textContent = "Our Location";

    const locationText = document.createElement('p');
    locationText.textContent = "123 Foodie Street, Flavor Town, Culinary City, 12345";

    const contactHeading = document.createElement('h2');
    contactHeading.textContent = "Contact Information";

    const contactInfo = document.createElement('p');
    contactInfo.innerHTML = `
        Phone: <a href="tel:+1234567890" style="color:#f9c74f;">+1 (234) 567-890</a><br>
        Email: <a href="mailto:contact@mahirsrestaurant.com" style="color:#f9c74f;">contact@mahirsrestaurant.com</a>
    `;

    const hoursHeading = document.createElement('h2');
    hoursHeading.textContent = "Opening Hours";

    const hoursList = document.createElement('ul');
    hoursList.style.listStyle = 'none';
    hoursList.style.paddingLeft = '0';
    const hours = [
        { day: "Monday - Friday", time: "10:00 AM - 10:00 PM" },
        { day: "Saturday", time: "11:00 AM - 11:00 PM" },
        { day: "Sunday", time: "Closed" }
    ];
    hours.forEach(h => {
        const li = document.createElement('li');
        li.textContent = `${h.day}: ${h.time}`;
        hoursList.appendChild(li);
    });

    const mapIframe = document.createElement('iframe');
    mapIframe.src = "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3153.019247888945!2d-122.41941548468251!3d37.77492977975964!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8085809c19e3d1a1%3A0x8a1b3b7c8144f918!2s123%20Foodie%20St%2C%20San%20Francisco%2C%20CA!5e0!3m2!1sen!2sin!4v1692714890403!5m2!1sen!2sin";
    mapIframe.width = "100%";
    mapIframe.height = "300";
    mapIframe.style.border = "0";
    mapIframe.loading = "lazy";
    mapIframe.referrerPolicy = "no-referrer-when-downgrade";
    mapIframe.allowFullscreen = true;


    aboutContent.appendChild(contactHeading);
    aboutContent.appendChild(contactInfo);
    aboutContent.appendChild(hoursHeading);
    aboutContent.appendChild(hoursList);
    aboutContent.appendChild(locationHeading);
    aboutContent.appendChild(locationText);
    aboutContent.appendChild(mapIframe);
    content.appendChild(aboutContainer);


}