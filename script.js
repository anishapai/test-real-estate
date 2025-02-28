document.addEventListener("DOMContentLoaded", function () {
    const propertyList = document.getElementById("property-list");

    // Sample property listings (update this monthly)
    const properties = [
        {
            image: "images/property1.jpg",
            title: "Luxury Villa",
            price: "$1,200,000",
            location: "Miami, FL"
        },
        {
            image: "images/property2.jpg",
            title: "Modern Apartment",
            price: "$750,000",
            location: "New York, NY"
        },
        {
            image: "images/property3.jpg",
            title: "Cozy Bungalow",
            price: "$450,000",
            location: "Austin, TX"
        }
    ];

    // Generate property cards dynamically
    properties.forEach(property => {
        let propertyDiv = document.createElement("div");
        propertyDiv.classList.add("bg-white", "p-5", "rounded-md", "shadow-md");

        propertyDiv.innerHTML = `
            <img src="${property.image}" alt="${property.title}" class="w-full h-48 object-cover rounded-md">
            <h3 class="text-xl font-semibold mt-3">${property.title}</h3>
            <p class="text-gray-700">Price: <span class="font-bold">${property.price}</span></p>
            <p class="text-gray-600">Location: ${property.location}</p>
        `;

        propertyList.appendChild(propertyDiv);
    });
});