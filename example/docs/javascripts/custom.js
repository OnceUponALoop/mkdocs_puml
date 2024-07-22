/**
 * Retrieves the current theme state based on system preferences.
 * @returns {string} - The current theme state ('dark' or 'light').
 */
function getThemeState() {
    const systemPreference = window.matchMedia("(prefers-color-scheme: dark)").matches ? "dark" : "light";
    log(`🌐 System Preference: ${systemPreference}`);
    return systemPreference;
  }
  
  /**
   * Retrieves the current theme state based on the data attribute on the body.
   * @returns {string} - The current theme state ('dark', 'light', or 'auto').
   */
  function getMkdocsThemeState() {
    const colorScheme = document.body.getAttribute("data-md-color-media");
  
    let themeState;
    switch (colorScheme) {
      case "(prefers-color-scheme: dark)":
        themeState = "dark";
        break;
      case "(prefers-color-scheme: light)":
        themeState = "light";
        break;
      case "(prefers-color-scheme)":
        themeState = "auto";
        break;
      default:
        themeState = getThemeState();
        break;
    }
  
    log(`📋 Mkdocs Preference: ${themeState}`);
    return themeState;
  }
  
  /**
   * Logs a message if DEBUG is true.
   * @param {string} message - The message to log.
   */
  function log(message) {
    const DEBUG = true;
    if (DEBUG) {
      console.log(message);
    }
  }
    /**
   * Updates the style of the status box based on the theme.
   * @param {HTMLElement} box - The status box element.
   * @param {string} theme - The theme ('dark', 'light', or 'auto').
   */
    function updateBoxStyle(box, theme) {
        switch (theme) {
          case 'dark':
            box.style.backgroundColor = '#333';
            box.style.color = '#fff';
            break;
          case 'light':
            box.style.backgroundColor = '#f0c14b';
            box.style.color = '#000';
            break;
          case 'auto':
            box.style.backgroundColor = '#888';
            box.style.color = '#fff';
            break;
          default:
            box.style.backgroundColor = '';
            box.style.color = '';
            break;
        }
      }
/**
 * Updates the theme statuses displayed in the HTML elements.
 */
function updateThemeStatuses() {
    // Find the elements based on the provided structure
    const statusContainer = document.querySelector('.grid.cards');
    const listItems = statusContainer.querySelectorAll('ul > li');
  
    // User preference and system preference elements
    const userPreferenceBox = listItems[0];
    const systemPreferenceBox = listItems[1];

    listItems.forEach((item) => {
        item.style.textAlign = 'center';
    });
  
    // Update the status text
    const userStatusElement = userPreferenceBox.querySelector('p + hr + p');
    const systemStatusElement = systemPreferenceBox.querySelector('p + hr + p');

  
    const systemTheme = getThemeState();
    const userTheme = getMkdocsThemeState();
  
    userStatusElement.textContent = userTheme.toUpperCase();
    systemStatusElement.textContent = systemTheme.toUpperCase();
  
    // Update the box styles
    updateBoxStyle(userPreferenceBox, userTheme);
    updateBoxStyle(systemPreferenceBox, systemTheme);
  
    // Update the font size and center the text
    updateFontSizeAndCenter(userStatusElement);
    updateFontSizeAndCenter(systemStatusElement);
  }
  

  
/**
 * Updates the font size and centers the status text.
 * @param {HTMLElement} element - The element containing the status text.
 */
function updateFontSizeAndCenter(element) {
    element.style.fontSize = '36px'; // Larger size
    element.style.fontWeight = 'bold';
    element.style.textAlign = 'center';
  }
  
  // Initial update
  updateThemeStatuses();
  
  // Listen for system preference changes
  window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', updateThemeStatuses);
    // Set up event listeners for the theme toggle inputs
    document.querySelectorAll('input[name="__palette"]').forEach((input) => {
        input.addEventListener("change", () => {
        updateThemeStatuses();
        });
    });