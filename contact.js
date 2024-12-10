<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Sign Up</title>
    <!-- favicon -->
    <link rel="icon" type="png" href="./images/logo.png">
    <link rel="stylesheet" href="./style.css"> <!-- Link to your CSS file -->
</head>

<body>
    <!-- header section start here  -->
    <header class="header">
        <div class="logoContent">
            <a href="./index.html" class="logo"><img src="./images/logo.png" alt=""></a>
            <h1 class="logoName">Akshu's Cake</h1>
        </div>
        <nav class="navbar">
            <a href="./index.html">Home</a>
            <a href="./contact.html">contact</a>
        </nav>
    </header>

    <section class="signup-section">
        <div class="form-container">
            <h2>Create Your Account</h2>
            <!-- Error message container -->
            <div id="error-message" class="error-message"></div>
            <form action="#" method="post">
                <div class="input-box">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" placeholder="Enter your username">
                </div>
                <div class="input-box">
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" placeholder="Enter your email">
                </div>
                <div class="input-box">
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" placeholder="Create a password">
                </div>
                <div class="input-box">
                    <label for="confirm-password">Confirm Password</label>
                    <input type="password" id="confirm-password" name="confirm-password"
                        placeholder="Confirm your password">
                </div>
                <button type="submit" class="btn">Sign Up</button>
                <p>Already have an account? <a href="./login.html">Log In</a></p>
            </form>
        </div>
    </section>

    <script>
        document.querySelector('form').addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission

            const username = document.getElementById('username').value.trim();
            const email = document.getElementById('email').value.trim();
            const password = document.getElementById('password').value;
            const confirmPassword = document.getElementById('confirm-password').value;
            const passwordPattern = new RegExp("^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)(?=.*[@$!%*?&])[A-Za-z\\d@$!%*?&]{5,12}$");
            const invalidBorder = "2px solid red";
            const validBorder = "2px solid green";

            // Error message container
            const errorNode6 = document.getElementById('error-message');

            // Reset error message
            errorNode6.textContent = "";
            document.getElementById('username').style.border = "";
            document.getElementById('email').style.border = "";
            document.getElementById('password').style.border = "";
            document.getElementById('confirm-password').style.border = "";

            let valid = true; // Track if the form is valid

            if (username === "") {
                errorNode6.textContent = "Username is required.";
                document.getElementById('username').style.border = invalidBorder;
                rvalid = false;
            } else if (!/^[a-zA-Z\s]+$/.test(username)) {
                errorNode6.textContent = "Username must only contain letters and spaces.";
                document.getElementById('username').style.border = invalidBorder;
                valid = false;
            } else {
                document.getElementById('username').style.border = validBorder;
            }

            // Email validation
            if (email === "") {
                errorNode6.textContent = "Email is required.";
                document.getElementById('email').style.border = invalidBorder;
                valid = false;

            } else if (!/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/.test(email)) {
                errorNode6.textContent = "Please enter a valid email address.";
                document.getElementById('email').style.border = invalidBorder;
                valid = false;
                return;
            } else {
                document.getElementById('email').style.border = validBorder;
            }
            // Password validation
            if (password === "") {
                errorNode6.textContent = "Password is required.";
                document.getElementById('password').style.border = invalidBorder;
                valid = false;
            } else if (!passwordPattern.test(password)) {
                errorNode6.textContent = "Password must contain at least one lowercase letter, one uppercase letter, one digit, one special character (@$!%*?&), and be 5 to 12 characters long.";
                document.getElementById('password').style.border = invalidBorder;
                valid = false;
            }
            else {
                document.getElementById('password').style.border = validBorder;
            }

            // Confirm Password validation

            if (password !== confirmPassword) {
                errorNode6.textContent = "Passwords do not match!";
                document.getElementById('confirm-password').style.border = invalidBorder;
                valid = false;
            } else {
                document.getElementById('confirm-password').style.border = validBorder;
            }

            if (valid) {
                alert('Sign-up successful! Redirecting to the home page...');
                window.location.href = 'index.html';
            }
        });
    </script>


</body>

</html>
