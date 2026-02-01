/**
 * Scrolls smoothly to an element by its ID
 * @param {string} id - The ID of the element to scroll to
 */
export function scrollToElement(id) {
  const element = document.getElementById(id);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
}
