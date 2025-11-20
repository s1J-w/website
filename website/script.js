// Initialize Lucide icons
lucide.createIcons();

// JavaScript for Collapsible Sections (Ingredients)
const categoryState = {
  meats: false,
  seafood: false,
  vegetables: false,
  fruits: false,
  dairy: false,
};

/**
 * Toggles the visibility of an ingredient category (Accordion).
 * @param {string} categoryId - The ID suffix of the category (e.g., 'meats').
 */
function toggleCategory(categoryId) {
  const content = document.getElementById(`content-${categoryId}`);
  const icon = document.getElementById(`icon-${categoryId}`);

  categoryState[categoryId] = !categoryState[categoryId];
  
  if (categoryState[categoryId]) {
    content.style.display = 'flex'; 
    icon.setAttribute('data-lucide', 'chevron-up'); // Change icon to UP
  } else {
    content.style.display = 'none';
    icon.setAttribute('data-lucide', 'chevron-down'); // Change icon to DOWN
  }
  // Re-render icons after changing data-lucide attribute
  lucide.createIcons();
}

/**
 * Toggles the visibility of the main tabs (List, Menu, Favorite, Settings).
 * @param {string} tabId - The ID suffix of the tab (e.g., 'list', 'menu').
 */
function toggleTab(tabId) {
  // 1. Manage Navigation Icon Styling
  const navIcons = document.querySelectorAll('.nav-icon');
  navIcons.forEach(icon => {
    // Remove 'active' class from all icons
    icon.classList.remove('active');
    // If the icon's data-tab matches the requested tabId, add the 'active' class
    if (icon.getAttribute('data-tab') === tabId) {
      icon.classList.add('active');
    }
  });

  // 2. Manage Main Content Visibility
  const tabContents = document.querySelectorAll('.tab-content');
  tabContents.forEach(content => {
    // Remove 'active-tab' class from all content blocks
    content.classList.remove('active-tab');
    // If the content block's ID matches the requested tabId, add the 'active-tab' class to show it
    if (content.id === `content-${tabId}`) {
      content.classList.add('active-tab');
    }
  });
  // Re-render icons if needed (especially for placeholder icons)
  lucide.createIcons();
}

// Initial setup on page load
document.addEventListener('DOMContentLoaded', () => {
  // --- 1. Ingredient Category Setup (Collapsed by default) ---
  for (const id in categoryState) {
    const content = document.getElementById(`content-${id}`);
    const icon = document.getElementById(`icon-${id}`);

    if (content) {
      // Force display to 'none' based on initial state (false)
      content.style.display = 'none'; 
    }
    if (icon) {
      // Ensure initial icon state is 'chevron-down' (closed)
      icon.setAttribute('data-lucide', 'chevron-down');
    }
  }
  
  // --- 2. Initial Tab Setup ---
  // 'menu' is set as the default active tab in HTML, so we just ensure the content is shown
  // The `active-tab` class is already on `#content-menu` in the HTML, so no need to call toggleTab('menu') here.

  // Renders the Lucide icons when the page loads
  lucide.createIcons(); 
});