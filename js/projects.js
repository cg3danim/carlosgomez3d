export function initProjectLegends() {
    const projectItems = document.querySelectorAll('.project-item');
    const legendTitle = document.getElementById('legendTitle');
    const legendDescription = document.getElementById('legendDescription');

    if (!legendTitle || !legendDescription) return;

    const defaultTitle = "&nbsp;";
    const defaultDescription = "Hover over a project to see details";

    projectItems.forEach(item => {
        item.addEventListener('mouseenter', () => {
            legendTitle.innerHTML = item.getAttribute('data-title');
            legendDescription.textContent = item.getAttribute('data-description');
        });

        item.addEventListener('mouseleave', () => {
            legendTitle.innerHTML = defaultTitle;
            legendDescription.textContent = defaultDescription;
        });
    });
}
