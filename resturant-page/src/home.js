export function load_homepage(content) {
    const textWrapper = document.createElement('div');
    const heading = document.createElement('h1');
    heading.textContent = `Welcome to Mahir's Restaurant`;
    const paragraph = document.createElement('p');
    paragraph.textContent = 'Experience the best dining in town';
    const button = document.createElement('button');
    button.textContent = 'Book a table';
    textWrapper.appendChild(heading);
    textWrapper.appendChild(paragraph);
    textWrapper.appendChild(button);
    content.appendChild(textWrapper);
}