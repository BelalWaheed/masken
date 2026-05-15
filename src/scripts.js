const properties = {
    'villa': {
        title: 'Luxury Villa with Private Pool',
        price: '25,000,000 EGP',
        image: '../assets/img/villa.jpg',
        size: '450 m²',
        beds: '5',
        baths: '4',
        location: 'New Cairo, District 5',
        type: 'FOR SALE',
        description: 'This magnificent luxury villa offers the pinnacle of modern living. Featuring a private overflow swimming pool and a landscaped Mediterranean garden.',
        features: ['Private Swimming Pool', 'Smart Home System', 'Solar Power Panels', 'Rooftop Terrace']
    },
    'apartment': {
        title: 'Modern Apartment in Downtown',
        price: '25,000 EGP / Month',
        image: '../assets/img/apartment.jpg',
        size: '180 m²',
        beds: '3',
        baths: '2',
        location: 'Zamalek, Cairo',
        type: 'FOR RENT',
        description: 'A stylish, fully furnished apartment in one of Cairo’s most historic neighborhoods. Perfect for families or professionals seeking comfort and style.',
        features: ['City View', '24/7 Security', 'Modern Kitchen', 'High-Speed Internet']
    },
    'mansion': {
        title: 'Exclusive Mansion with Garden',
        price: '45,000,000 EGP',
        image: '../assets/img/mansion.jpg',
        size: '800 m²',
        beds: '7',
        baths: '6',
        location: 'Sheikh Zayed City',
        type: 'FOR SALE',
        description: 'An architectural masterpiece featuring a sprawling garden, private gym, and a home cinema. Designed for absolute privacy and luxury.',
        features: ['Private Gym', 'Home Cinema', 'Maid Room', 'Driver Room']
    },
    'studio': {
        title: 'Cozy Studio in Maadi',
        price: '12,000 EGP / Month',
        image: '../assets/img/cozyStudio.jpeg',
        size: '65 m²',
        beds: '1',
        baths: '1',
        location: 'Maadi, Cairo',
        type: 'FOR RENT',
        description: 'A charming studio apartment perfect for students or young professionals. Recently renovated with modern appliances.',
        features: ['Close to Metro', 'Air Conditioned', 'Fully Furnished', 'Quiet Street']
    },
    'office': {
        title: 'Premium Office Space',
        price: '45,000 EGP / Month',
        image: '../assets/img/office.jpg',
        size: '250 m²',
        beds: '0',
        baths: '2',
        location: 'Smart Village',
        type: 'FOR RENT',
        description: 'Modern office unit ready for immediate occupancy. Located in a prime business hub with high-speed connectivity.',
        features: ['Meeting Rooms', 'Fiber Optic', 'Underground Parking', 'Reception Service']
    },
    'retail': {
        title: 'High-Traffic Retail Shop',
        price: '8,500,000 EGP',
        image: '../assets/img/retail.jpg',
        size: '120 m²',
        beds: '0',
        baths: '1',
        location: 'Heliopolis, Cairo',
        type: 'FOR SALE',
        description: 'Prime retail location with excellent visibility and high foot traffic. Ideal for luxury brands or high-end boutiques.',
        features: ['Large Storefront', 'Storage Area', 'Alarm System', 'Prime Location']
    },
    'factory': {
        title: 'Large Industrial Factory',
        price: '9,300,000 EGP',
        image: '../assets/img/factory.jpg',
        size: '2000 m²',
        beds: '0',
        baths: '4',
        location: 'Nasr City Industrial Zone',
        type: 'FOR SALE',
        description: 'Spacious industrial facility suitable for manufacturing or large-scale storage. Fully equipped with heavy-duty power lines.',
        features: ['Heavy Power', 'High Ceilings', 'Loading Docks', 'Office Annex']
    },
    'workshop': {
        title: 'Modern Workshop Space',
        price: '960,000 EGP',
        image: '../assets/img/workshop_v2.png',
        size: '840 m²',
        beds: '0',
        baths: '2',
        location: 'Obour City',
        type: 'FOR SALE',
        description: 'Versatile workshop space with easy truck access and durable flooring. Perfect for automotive or light assembly businesses.',
        features: ['Truck Access', 'Durable Floors', 'Security Gated', 'Natural Light']
    }
};

document.addEventListener('DOMContentLoaded', () => {

    const mobileMenuButton = document.getElementById('mobile-menu-button');
    const mobileMenu = document.getElementById('mobile-menu');

    if (mobileMenuButton && mobileMenu) {
        mobileMenuButton.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });
    }


    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');

    if (propertyId && properties[propertyId]) {
        const data = properties[propertyId];
        

        document.getElementById('prop-title').textContent = data.title;
        document.getElementById('prop-price').textContent = data.price;
        document.getElementById('prop-location').textContent = data.location;
        document.getElementById('prop-type').textContent = data.type;
        document.getElementById('prop-description').textContent = data.description;
        document.getElementById('prop-size').textContent = data.size;
        document.getElementById('prop-beds').textContent = data.beds;
        document.getElementById('prop-baths').textContent = data.baths;
        document.getElementById('prop-image').src = data.image;


        const featureContainer = document.getElementById('prop-features');
        if (featureContainer) {
            featureContainer.innerHTML = '';
            data.features.forEach(feature => {
                const div = document.createElement('div');
                div.className = 'flex items-center gap-3 text-slate-300';
                div.innerHTML = `<i class="fa-solid fa-check text-yellow-500"></i> ${feature}`;
                featureContainer.appendChild(div);
            });
        }
    }
});
