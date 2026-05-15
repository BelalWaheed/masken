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

    //  Property Detail  
    const urlParams = new URLSearchParams(window.location.search);
    const propertyId = urlParams.get('id');

    if (propertyId && properties[propertyId]) {
        const data = properties[propertyId];
        
        if (document.getElementById('prop-title')) document.getElementById('prop-title').textContent = data.title;
        if (document.getElementById('prop-price')) document.getElementById('prop-price').textContent = data.price;
        if (document.getElementById('prop-location')) document.getElementById('prop-location').textContent = data.location;
        if (document.getElementById('prop-type')) document.getElementById('prop-type').textContent = data.type;
        if (document.getElementById('prop-description')) document.getElementById('prop-description').textContent = data.description;
        if (document.getElementById('prop-size')) document.getElementById('prop-size').textContent = data.size;
        if (document.getElementById('prop-beds')) document.getElementById('prop-beds').textContent = data.beds;
        if (document.getElementById('prop-baths')) document.getElementById('prop-baths').textContent = data.baths;
        if (document.getElementById('prop-image')) document.getElementById('prop-image').src = data.image;

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

    // regix for email validation 
    const validateEmail = (email) => {
        return String(email)
            .toLowerCase()
            .match(/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/);
    };

    const showError = (id, message, inputId) => {
        const el = document.getElementById(id);
        const input = document.getElementById(inputId);
        if (el) {
            el.textContent = message;
            el.classList.remove('hidden');
        }
        if (input) {
            input.classList.add('border-red-500', 'ring-1', 'ring-red-500/50');
            input.classList.remove('border-slate-700');
        }
    };

    const hideError = (id, inputId) => {
        const el = document.getElementById(id);
        const input = document.getElementById(inputId);
        if (el) {
            el.textContent = '';
            el.classList.add('hidden');
        }
        if (input) {
            input.classList.remove('border-red-500', 'ring-1', 'ring-red-500/50');
            input.classList.add('border-slate-700');
        }
    };

    const updateNavbar = () => {
        const currentUser = JSON.parse(localStorage.getItem('currentUser'));
        const navLinks = document.querySelector('.md\\:flex.items-center.space-x-8');
        const mobileLinks = document.getElementById('mobile-menu');

        if (currentUser && navLinks) {
            // Update desktop navbar
            const loginLink = Array.from(navLinks.querySelectorAll('a')).find(a => a.textContent === 'Login');
            if (loginLink) {
                const welcomeContainer = document.createElement('div');
                welcomeContainer.className = 'flex items-center gap-4';
                welcomeContainer.innerHTML = `
                    <span class="text-yellow-400 font-medium">Welcome, ${currentUser.firstName}</span>
                    <button id="logoutBtn" class="text-slate-300 hover:text-red-400 transition text-sm font-semibold">Logout</button>
                `;
                loginLink.replaceWith(welcomeContainer);

                document.getElementById('logoutBtn')?.addEventListener('click', () => {
                    localStorage.removeItem('currentUser');
                    window.location.reload();
                });
            }

            // Update mobile menu
            if (mobileLinks) {
                const mobileLogin = Array.from(mobileLinks.querySelectorAll('a')).find(a => a.textContent === 'Login');
                if (mobileLogin) {
                    const welcomeDiv = document.createElement('div');
                    welcomeDiv.className = 'py-2 border-t border-slate-700 mt-2';
                    welcomeDiv.innerHTML = `
                        <p class="text-yellow-400 font-semibold mb-2">Welcome, ${currentUser.firstName}</p>
                        <button id="mobileLogoutBtn" class="text-red-400 font-semibold">Logout</button>
                    `;
                    mobileLogin.replaceWith(welcomeDiv);

                    document.getElementById('mobileLogoutBtn')?.addEventListener('click', () => {
                        localStorage.removeItem('currentUser');
                        window.location.reload();
                    });
                }
            }
        }
    };

    // Initialize Navbar
    updateNavbar();

    // Registration Logic
    const registerForm = document.getElementById('registerForm');
    if (registerForm) {
        registerForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const firstName = document.getElementById('firstName').value.trim();
            const lastName = document.getElementById('lastName').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value.trim();
            const gender = registerForm.querySelector('input[name="gender"]:checked')?.value;
            const terms = document.getElementById('terms').checked;

            // Reset errors
            hideError('firstNameError', 'firstName');
            hideError('lastNameError', 'lastName');
            hideError('emailError', 'email');
            hideError('passwordError', 'password');
            hideError('genderError');
            hideError('termsError');
            hideError('formError');

            if (!firstName) { showError('firstNameError', 'First name is required', 'firstName'); isValid = false; }
            if (!lastName) { showError('lastNameError', 'Last name is required', 'lastName'); isValid = false; }
            if (!email) { showError('emailError', 'Email is required', 'email'); isValid = false; }
            else if (!validateEmail(email)) { showError('emailError', 'Invalid email format', 'email'); isValid = false; }
            if (!password) { showError('passwordError', 'Password is required', 'password'); isValid = false; }
            else if (password.length < 6) { showError('passwordError', 'Password must be at least 6 characters', 'password'); isValid = false; }
            if (!gender) { showError('genderError', 'Please select your gender'); isValid = false; }
            if (!terms) { showError('termsError', 'You must agree to the terms'); isValid = false; }

            if (isValid) {
                const users = JSON.parse(localStorage.getItem('maskanUsers')) || [];
                if (users.some(u => u.email === email)) {
                    showError('formError', 'Email already registered. Try logging in.');
                } else {
                    const newUser = { firstName, lastName, email, password, gender };
                    users.push(newUser);
                    localStorage.setItem('maskanUsers', JSON.stringify(users));
                    localStorage.setItem('currentUser', JSON.stringify(newUser));
                    window.location.href = 'index.html';
                }
            }
        });
    }

    // Login Logic
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', (e) => {
            e.preventDefault();
            let isValid = true;

            const email = document.getElementById('loginEmail').value.trim();
            const password = document.getElementById('loginPassword').value.trim();

            hideError('loginEmailError', 'loginEmail');
            hideError('loginPasswordError', 'loginPassword');
            hideError('loginFormError');

            if (!email) { showError('loginEmailError', 'Email is required', 'loginEmail'); isValid = false; }
            if (!password) { showError('loginPasswordError', 'Password is required', 'loginPassword'); isValid = false; }

            if (isValid) {
                const users = JSON.parse(localStorage.getItem('maskanUsers')) || [];
                const user = users.find(u => u.email === email && u.password === password);

                if (user) {
                    localStorage.setItem('currentUser', JSON.stringify(user));
                    window.location.href = 'index.html';
                } else {
                    showError('loginFormError', 'Invalid email or password');
                    showError('loginEmailError', '', 'loginEmail');
                    showError('loginPasswordError', '', 'loginPassword');
                }
            }
        });
    }
});
