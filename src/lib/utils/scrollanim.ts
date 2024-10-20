export function setupIntersectionObserver(selector: string) {
    if (typeof window !== 'undefined') {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'blur-sm', '-translate-x-full', 'translate-x-full');
                    entry.target.classList.add('opacity-100', 'blur-0', 'translate-x-0');
                    observer.unobserve(entry.target); // Stop observing once animation is triggered
                }
            });
        }, {
            threshold: 0.1
        });

        const animatedElements = document.querySelectorAll(selector);
        animatedElements.forEach((el) => observer.observe(el));

        return observer;
    }
    return null;
}

