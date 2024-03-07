// Get the editor textarea element by its ID
const editorTextarea = document.getElementById("editor");

// Get the preview div element by its ID
const previewDiv = document.getElementById("preview");

// Function to handle the change event
function handleChange() {
  // Get the current value of the editor textarea
  const inputValue = editorTextarea.value;

  // Convert the input value to HTML using the 'marked' library, with line breaks enabled
  const convertedHtml = marked.parse(inputValue, { breaks: true });

  // Set the converted HTML as the innerHTML of the preview div, rendering the preview
  previewDiv.innerHTML = convertedHtml;
}

// Add an input event listener to the editor textarea
editorTextarea.addEventListener("input", handleChange);

// Call the handleChange function initially to render the preview with the initial textarea content
handleChange();
