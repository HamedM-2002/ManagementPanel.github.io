const checkbox = document.getElementById('themeToggle');
        const body = document.body;

        // Function to toggle theme
        function toggleTheme() {
            if (checkbox.checked) {
                body.setAttribute('data-theme', 'dark');
            } else {
                body.setAttribute('data-theme', 'light');
            }
        }

        // Add event listener
        checkbox.addEventListener('change', toggleTheme);