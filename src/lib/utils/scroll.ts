
const scrollTo = (element: HTMLElement, offset: number = 0) => {
    const y = element.getBoundingClientRect().top + window.pageYOffset + offset;
    window.scrollTo({ top: y, behavior: 'smooth' });
}

export function handleClick(event: MouseEvent, sectionId: string) {
    event.preventDefault();
    const section = document.getElementById(sectionId);
    if (section) {
        scrollTo(section);
    }
}


