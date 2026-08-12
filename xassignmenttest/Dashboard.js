    function switchTab(tabName) {
        // 1. Get all the sections and links
        const scheduleSection = document.getElementById('schedule');
        const submissionsSection = document.getElementById('submissions');
        const scheduleLink = document.getElementById('link-schedule');
        const submissionsLink = document.getElementById('link-submissions');

        // 2. Reset everything (Hide all sections, remove active class from all links)
        scheduleSection.style.display = 'none';
        submissionsSection.style.display = 'none';
        scheduleLink.classList.remove('active');
        submissionsLink.classList.remove('active');

        // 3. Show the requested tab and highlight the correct button
        if (tabName === 'schedule') {
            scheduleSection.style.display = 'block';
            scheduleLink.classList.add('active');
        } else if (tabName === 'submissions') {
            submissionsSection.style.display = 'block';
            submissionsLink.classList.add('active');
        } 
    }