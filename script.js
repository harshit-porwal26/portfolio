document.addEventListener('DOMContentLoaded', () => {
    const skillsList = [
        'HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'Express.js', 'MongoDB', 'Git'
    ];

    const socialLinks = [
        { icon: 'fas fa-envelope', url: 'mailto:harshitporwal377@gmail.com', label: 'Email' },
        { icon: 'fab fa-github', url: 'https://github.com/harshit-porwal26', label: 'GitHub' },
        { icon: 'fab fa-linkedin', url: 'https://www.linkedin.com/in/harshitporwal377', label: 'LinkedIn' },
        { icon: 'fas fa-code', url: 'https://leetcode.com/u/harshitporwal/', label: 'LeetCode' }
    ];

    function populateSkills() {
        const skillsListElement = document.getElementById('skills-list');
        skillsList.forEach(skill => {
            const li = document.createElement('li');
            li.textContent = skill;
            skillsListElement.appendChild(li);
        });
    }

    function populateSocialLinks() {
        const socialLinksElement = document.getElementById('social-links');
        socialLinks.forEach(link => {
            const a = document.createElement('a');
            a.href = link.url;
            a.target = '_blank';
            a.rel = 'noopener noreferrer';
            a.setAttribute('aria-label', link.label);
            const i = document.createElement('i');
            i.className = link.icon;
            a.appendChild(i);
            socialLinksElement.appendChild(a);
        });
    }

    function updateYear() {
        const yearElement = document.getElementById('current-year');
        yearElement.textContent = new Date().getFullYear();
    }

    function addThemeToggle() {
        const button = document.createElement('button');
        button.textContent = 'Toggle Theme';
        button.className = 'theme-toggle';
        document.body.appendChild(button);

        button.addEventListener('click', () => {
            document.body.classList.toggle('dark-theme');
        });
    }

    function handleIntersection(entries, observer) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }

    function setupIntersectionObserver() {
        const observer = new IntersectionObserver(handleIntersection, {
            threshold: 0.1
        });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });
    }

    populateSkills();
    populateSocialLinks();
    updateYear();
    addThemeToggle();
    setupIntersectionObserver();

    console.log('Portfolio loaded successfully!');
});
