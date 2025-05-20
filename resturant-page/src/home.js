export function load_homepage(content) {
    content.innerHTML = '';
    content.className = 'home-page';

    const textWrapper = document.createElement('div');
    textWrapper.className = 'home-content';
    const heading = document.createElement('h1');
    heading.className = 'home-heading';
    heading.textContent = `Welcome to Mahir's Restaurant`;

    const paragraph = document.createElement('p');
    paragraph.className = 'home-description';
    paragraph.textContent = 'Experience the best dining in town';

    const button = document.createElement('button');
    button.className = 'home-button';
    button.textContent = 'Book a table';

    textWrapper.appendChild(heading);
    textWrapper.appendChild(paragraph);
    textWrapper.appendChild(button);
    content.appendChild(textWrapper);
}