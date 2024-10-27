Introduction : 
This project is a multi-step form integrated with a draggable and dynamic navigation bar, both built using React. The form collects detailed customer data across multiple steps, while the draggable navbar allows users to reorder and add menu items dynamically. The project focuses on user experience, responsive design, and form validation.

Features

Multi-Step Form:
Navigate between multiple form steps.
Collect data such as property type, price range, and city.
Summarize submission data in a modal.

Draggable Navbar:
Drag and reorder navigation links using @hello-pangea/dnd.
Add new menu items with form validation for name and URL.

Responsive Design:
Works across different screen sizes using Tailwind CSS.
Responsive layouts for form and navbar.
Prerequisites
Before running the project, ensure you have the following installed:

Usage

Navbar Usage:
Drag and reorder items on the navbar.
Click "Add +" to open a modal for adding new menu items.
Fill in the name and URL fields and click "Add Menu" to save the item.

Multi-Step Form Usage:
Navigate between steps using the Next and Previous buttons.
Submit the form on the final step to display a summary modal.
The form tracks input such as property type, area, budget, and more.
Components Overview

NavBar:
A draggable and dynamic navbar that allows reordering and adding new menu items using a modal.

MultiStepForm:
Handles navigation through multiple steps, collects form data, and displays a submission summary modal on completion.

StepIndicator:
Displays the current step number and highlights progress through the form.

Form Steps (StepOne, StepTwo, etc.):
Collect different parts of the form data, such as customer information, property details, and price range.

Customization
Adding More Form Steps:
Create new step components under src/components/ and update the renderStep() function in MultiStepForm.js to include them.

Custom Navbar Styling:
Modify the styles in App.css or use Tailwind classes to adjust the appearance of the navbar.

Validation Rules:
Update the validateNewItem() function in NavBar.js to change the rules for adding new menu items.

Technologies Used
React: For building UI components.
Tailwind CSS: For styling the components.
@hello-pangea/dnd: For implementing drag-and-drop functionality.
JavaScript: For component logic.


