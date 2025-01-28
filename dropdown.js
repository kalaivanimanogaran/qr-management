
// Get references to the dropdown elements and the menu container
const categoryDropdown = document.getElementById('category');
const typeDropdown = document.getElementById('type');
const menuContainer = document.getElementById('menus');

// Menu data (you can keep this data in the backend or database in a real scenario)
const menuItems = [
  { id: 'menu-1', name: 'big burger', category: 'Main Course', type: 'Non-Veg', price: '$100.00', image: 'images/menu1.png'  },
  { id: 'menu-2', name: 'vegetable pizza', category: 'Main Course', type: 'Veg', price: '$130.00', image: 'images/menu2.png' },
  { id: 'menu-3', name: 'kabab turki', category: 'Main Course', type: 'Non-Veg', price: '$140.00', image: 'images/menu3.png' },
  { id: 'menu-4', name: 'big Hotdog', category: 'Main Course', type: 'Non-Veg', price: '$110.00', image: 'images/menu4.png' },
  { id: 'menu-5', name: 'French Fries', category: 'Starters', type: 'Veg', price: '$120.00', image: 'images/menu5.png' },
  { id: 'menu-6', name: 'Chicken Wings', category: 'Starters', type: 'Non-Veg', price: '$150.00', image: 'images/menu6.png' },
  { id: 'menu-7', name: 'Panner Butter Masala', category: 'Main Course', type: 'Non-Veg', price: '$150.00', image: 'images/menu7.png' },
  { id: 'menu-31', name: 'Chocolate Brownie', category: 'Desserts', type: 'Veg', price: '$150.00', image: 'images/menu31.png' },
  { id: 'menu-8', name: 'veg biryani', category: 'Main Course', type: 'Veg', price: '$180.00', image: 'images/menu8.png' },
  { id: 'menu-9', name: 'Dal Tadka', category: 'Main Course', type: 'Veg', price: '$110.00', image: 'images/menu9.png' },
  { id: 'menu-10', name: 'Chole Bhature', category: 'Main Course', type: 'Veg', price: '$150.00', image: 'images/menu10.png' },
  { id: 'menu-25', name: 'Lamp Chops', category: 'Starters', type: 'Non-Veg', price: '$150.00', image: 'images/menu25.png' },
  { id: 'menu-27', name: 'Gulab Jamun', category: 'Desserts', type: 'Veg', price: '$100.00', image: 'images/menu27.png' },
  { id: 'menu-37', name: 'Spring Rools', category: 'Starters', type: 'Veg', price: '$120.00', image: 'images/menu37.png' },
  { id: 'menu-38', name: 'veg Manchrian', category: 'Starters', type: 'Veg', price: '$150.00', image: 'images/menu38.png' },
  { id: 'menu-26', name: 'Egg Curry', category: 'Main Course', type: 'Non-Veg', price: '$150.00', image: 'images/menu26.png' },
  { id: 'menu-17', name: 'Chicken Tikka', category: 'Main Course', type: 'Non-Veg', price: '$150.00', image: 'images/menu17.png' },
  { id: 'menu-40', name: 'Panner Tikka', category: 'Starters', type: 'Veg', price: '$120.00', image: 'images/menu40.png' },
  { id: 'menu-19', name: 'Mutton Korma', category: 'Main Course', type: 'Non-Veg', price: '$110.00', image: 'images/menu19.png' },
  { id: 'menu-39', name: 'Harra Bhara kebab', category: 'Starters', type: 'Veg', price: '$130.00', image: 'images/menu39.png' },
  { id: 'menu-28', name: 'Rasmalai', category: 'Desserts', type: 'Veg', price: '$120.00', image: 'images/menu28.png' },
  { id: 'menu-29', name: 'Ice Cream Sundae', category: 'Desserts', type: 'Veg', price: '$100.00', image: 'images/menu29.png' },
  { id: 'menu-11', name: 'Shahi Panneer', category: 'Main Course', type: 'Veg', price: '$120.00', image: 'images/menu11.png' },
  { id: 'menu-12', name: 'Butter Chicken', category: 'Main Course', type: 'Non-Veg', price: '$150.00', image: 'images/menu12.png' },
  { id: 'menu-13', name: 'Chicken biryani', category: 'Main Course', type: 'Non-Veg', price: '$150.00', image: 'images/menu13.png' },
  { id: 'menu-30', name: 'Jalebi with Rabri', category: 'Desserts', type: 'Veg', price: '$110.00', image: 'images/menu30.png' },
  { id: 'menu-33', name: 'Cheese Cake', category: 'Desserts', type: 'Veg', price: '$100.00', image: 'images/menu33.png' },
  { id: 'menu-14', name: 'Mutton Rogan Josh', category: 'Main Course', type: 'Non-Veg', price: '$150.00', image: 'images/menu14.png' },
  { id: 'menu-15', name: 'Fish Curry', category: 'Main Course', type: 'Non-Veg', price: '$150.00', image: 'images/menu15.png' },
  { id: 'menu-32', name: 'Rasgulla', category: 'Desserts', type: 'Veg', price: '$100.00', image: 'images/menu32.png' },
  { id: 'menu-34', name: 'Carrot Halwa', category: 'Desserts', type: 'Veg', price: '$100.00', image: 'images/menu34.png' },
  { id: 'menu-16', name: 'Prawns Masala', category: 'Non-Veg', type: 'Veg', price: '$130.00', image: 'images/menu16.png' },
  { id: 'menu-35', name: 'Tiramisu', category: 'Desserts', type: 'Veg', price: '$120.00', image: 'images/menu35.png' },
  { id: 'menu-36', name: 'Kulfi', category: 'Desserts', type: 'Veg', price: '$110.00', image: 'images/menu36.png' },
];

// Function to filter and display menu items based on selected category and type
function filterMenu() {
  const selectedCategory = categoryDropdown.value;
  const selectedType = typeDropdown.value;

  // Filter the menu items based on the selected category and type
  const filteredItems = menuItems.filter(item => {
    const isCategoryMatch = selectedCategory ? item.category === selectedCategory : true;
    const isTypeMatch = selectedType ? item.type === selectedType : true;
    return isCategoryMatch && isTypeMatch;
  });

  // Clear the existing menu display
  menuContainer.innerHTML = '';

  // Display the filtered menu items
  filteredItems.forEach(item => {
    const menuItemDiv = document.createElement('div');
    menuItemDiv.classList.add('menu-item');
    menuItemDiv.innerHTML = `
      <img src="${item.image}" alt="${item.name}">
      <p>${item.name}</p>
      <p>Category: ${item.category}</p>
      <p>Type: ${item.type}</p>
      <h6>${item.price}</h6>
      <a href=""><button class="btn">Order</button></a>
    `;
    menuContainer.appendChild(menuItemDiv);
  });
}

// Add event listeners to dropdowns to trigger filtering when values change
categoryDropdown.addEventListener('change', filterMenu);
typeDropdown.addEventListener('change', filterMenu);

// Initially display all menu items (optional)
filterMenu();
