

        function goToDashboard(event) {
            // This prevents the browser from just refreshing the page when you click submit
            event.preventDefault(); 
            
            // This sends the user to the dashboard page. 
            // IMPORTANT: Change 'dashboard.html' to whatever you actually named your dashboard file!
            window.location.href = 'dashboard.html'; 
        }

        // 2. The 'Show Password' Toggle Logic
        const togglePassword = document.getElementById('togglePassword');
        const passwordInput = document.getElementById('passInput');

        togglePassword.addEventListener('click', function () {
            // Check what type the input currently is, and swap it
            const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
            passwordInput.setAttribute('type', type);
            
            // Swap the FontAwesome icon from open eye to closed eye
            this.classList.toggle('fa-eye-slash');
        });