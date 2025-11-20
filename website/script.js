// Initialize Lucide icons
lucide.createIcons();

  // JavaScript for Collapsible Sections
  // *** CHANGE: Set initial state to false (closed) for all categories ***
const categoryState = {
  meats: false,
  seafood: false,
  vegetables: false,
  fruits: false,
  dairy: false,
};

/**
 * Toggles the visibility of an ingredient category.
 * @param {string} categoryId - The ID suffix of the category (e.g., 'meats').
 */
function toggleCategory(categoryId) {
  const content = document.getElementById(`content-${categoryId}`);
  const icon = document.getElementById(`icon-${categoryId}`);

  categoryState[categoryId] = !categoryState[categoryId];
  
  if (categoryState[categoryId]) {
    content.style.display = 'flex'; 
    icon.classList.remove('rotate-180');
  } else {
    content.style.display = 'none';
    icon.classList.add('rotate-180');
  }
  // Re-render icons if needed, though Lucide usually handles data-lucide change
  lucide.createIcons();
}

// Initial setup to ensure all categories are hidden on load
document.addEventListener('DOMContentLoaded', () => {
    for (const id in categoryState) {
        const content = document.getElementById(`content-${id}`);
        const icon = document.getElementById(`icon-${id}`);

    if (content) {
      // Force display to 'none' based on initial state (false)
      content.style.display = 'none'; 
    }
    if (icon) {
      // Ensure initial icon state is 'chevron-down' (closed)
      icon.classList.add('rotate-180');
      icon.setAttribute('data-lucide', 'chevron-down');
    }
  }
  // Renders the Lucide icons when the page loads
  lucide.createIcons(); 
});


function updateTabContent(tabKey) {
  // This is currently a placeholder function as tab content logic is not fully defined
  const contentDisplay = document.getElementById('tab-content');
  if (contentDisplay) {
    // Placeholder implementation for tab content update
    contentDisplay.innerHTML = `You are currently viewing the ${tabKey} tab.`;
  }
}

document.addEventListener('DOMContentLoaded', function() {
  // Renders the Lucide icons when the page loads
  lucide.createIcons(); 

  // Select all the clickable tab elements
  const navIcons = document.querySelectorAll('.nav-icon');

  // Add click listeners to all tab elements
  navIcons.forEach(icon => {
      icon.addEventListener('click', function() {
      // A. Remove 'active' class from the currently active item
      const currentActive = document.querySelector('.nav-icon.active'); // Note the '.' to target the class
      if (currentActive) {
        currentActive.classList.remove('active');
      }

      // B. Add 'active' class to the clicked item (changes styling)
      this.classList.add('active');

      // C. Update the content area using the data-tab key
      const tabKey = this.getAttribute('data-tab');
      if (tabKey) {
        updateTabContent(tabKey);
      }
    });
  });
});