
const SUPABASE_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3c2JtdXB4cXhleWRwY3R5Z3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODA2ODIsImV4cCI6MjA1Mjg1NjY4Mn0.4cfRlmu - 77BvOC2ggVGa5xpIbTTURTSHFcu2MotBV0M";
const SUPABASE_URL = "https://ywsbmupxqxeydpctygrf.supabase.co";
const supa_base = supa_base.createClient(SUPABASE_URL, SUPABASE_KEY);

// DOM Elements
const loginBtn = document.getElementById("login-btn");
const signUpBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");
const signUpEmail = document.getElementById("signup-email");
const signUpPassword = document.getElementById("signup-password");

const errorMessage = document.getElementById("error-message");
const signUpErrorMsg = document.getElementById("error-message-signup");

const showSignupLink = document.getElementById("show-signup");
const showLoginLink = document.getElementById("show-login");



(async () => {
    try {
        const { data } = await supa_base.auth.getSession();
        console.log("Session data:", data);

        // if (data.session) {
        //     // Only redirect if not already on the dashboard page
        //     if (window.location.pathname !== "/dashboard.html") {
        //         window.location.href = "dashboard.html";
        //     }
        // }
        if (data.session) {
            // Redirect to dashboard if not already there
            if (window.location.pathname !== "/dashboard.html") {
                window.location.href = "dashboard.html";
            }
        } else {
            // Redirect to login if not already there
            if (window.location.pathname !== "/index.html") {
                window.location.href = "index.html";
            }
        }
    } catch (error) {
        console.error("Error retrieving session:", error);
    }
})();

// document.addEventListener("DOMContentLoaded", (e) => {
//     const sessionToken = localStorage.getItem("access_token");

//     if (sessionToken) {
//         // Redirect to dashboard if token exists and not already there
//         if (window.location.pathname !== "/dashboard.html") {
//             window.location.href = "dashboard.html";
//         }
//     }
// });

// Login Functionality
loginBtn?.addEventListener("click", async (e) => {
    // e.preventDefault();
    const email = emailInput.value;
    const password = passwordInput.value;

    try {
        // Authenticate with Supabase
        const { data, error } = await supa_base.auth.signInWithPassword({
            email,
            password,
        });
        console.log('data', data);

        if (error) {
            // Display error message
            errorMessage.textContent = error.message;
        } else {
            // Redirect to home page on success
            errorMessage.textContent = "";
            alert("Login successful!");
            window.location.href = "dashboard.html"; // Replace with your home page
            // localStorage.setItem("access_token", data?.session?.access_token)
        }
    } catch (err) {
        console.error("Unexpected error:", err);
        errorMessage.textContent = "Something went wrong. Please try again.";
    }
});

signUpBtn?.addEventListener("click", async () => {
    const email = signUpEmail.value;
    const password = signUpPassword.value;

    if (!email || !password) {
        signUpErrorMsg.textContent = "Please fill in all fields.";
        return;
    }

    try {
        const { data, error } = await supa_base.auth.signUp({
            email,
            password,
        })
        console.log('data:', data);
        console.log('error:', error);



    }
    catch (err) {
        console.error("Unexpected error:", err);
        signUpErrorMsg.textContent = "Something went wrong. Please try again.";
    }

}
)

logoutBtn?.addEventListener("click", async () => {
    try {
        await supa_base.auth.signOut();
        alert("Logout successful!");
        window.location.href = "index.html";
    } catch (err) {
        console.error("Unexpected error:", err);
        errorMessage.textContent = "Something went wrong. Please try again.";
    }

})

// Redirect to Sign-up Page
showSignupLink?.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.href = "signup.html"; // Navigate to signup page
});


showLoginLink?.addEventListener("click", (e) => {
    e.preventDefault(); // Prevent default anchor behavior
    window.location.href = "index.html"; // Navigate to the login page
});


// if (supa_base.auth.getSession()) {
//    window.navigator.href = "dashboard.html";
// } else {
//     // showLoginPage();
//    window.navigator.href = "index.html";





























// const SupaBaseUrl = 'https://ywsbmupxqxeydpctygrf.supabase.co'; // Replace with your Supabase URL
// const SupaBase_ANON_KEY = 'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3c2JtdXB4cXhleWRwY3R5Z3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODA2ODIsImV4cCI6MjA1Mjg1NjY4Mn0.4cfRlmu-77BvOC2ggVGa5xpIbTTURTSHFcu2MotBV0M'; // Replace with your Supabase anon key

// const supabase = supabase.createClient(SUPABASE_URL, SUPABASE_ANON_KEY);

// // DOM Elements
// const authForm = document.getElementById('authForm');
// const emailInput = document.getElementById('email');
// const passwordInput = document.getElementById('password');
// const messageElement = document.getElementById('message');
// const toggleLink = document.getElementById('toggleLink');
// const formTitle = document.getElementById('formTitle');

// // Function to display user information
// async function displayUserInfo() {
//     const user = supabase.auth.user();
//     if (user) {
//         formTitle.innerText = 'Welcome to Your Dashboard';
//         authForm.style.display = 'none'; // Hide the form
//         messageElement.innerText = `Logged in as: ${user.email}`;
//         toggleLink.style.display = 'none'; // Hide the toggle link
//         createLogoutButton(); // Create logout button
//     } else {
//         formTitle.innerText = 'Sign Up / Login';
//         toggleLink.style.display = 'block'; // Show the toggle link
//     }
// }

// // Function to create a logout button
// function createLogoutButton() {
//     const logoutButton = document.createElement('button');
//     logoutButton.innerText = 'Logout';
//     logoutButton.id = 'logoutButton';
//     logoutButton.style.marginTop = '20px';
//     document.querySelector('.container').appendChild(logoutButton);

//     logoutButton.addEventListener('click', async () => {
//         try {
//             const { error } = await supabase.auth.signOut();
//             if (error) {
//                 console.error('Error logging out:', error.message);
//             } else {
//                 alert('You have been logged out.');
//                 window.location.reload(); // Reload the page to show the login form
//             }
//         } catch (error) {
//             console.error('Error logging out:', error.message);
//         }
//     });
// }

// // Event listener for form submission
// authForm.addEventListener('submit', async (event) => {
//     event.preventDefault();

//     const email = emailInput.value.trim();
//     const password = passwordInput.value.trim();

//     if (!email || !password) {
//         messageElement.innerText = 'Please enter both email and password.';
//         return;
//     }

//     try {
//         // Attempt to sign in
//         const { user, error } = await supabase.auth.signInWithPassword({
//             email: email,
//             password: password,
//         });

//         if (error) {
//             // If there's an error, try to sign up the user
//             const { user: newUser, error: signUpError } = await supabase.auth.signUp({
//                 email: email,
//                 password: password,
//             });

//             if (signUpError) {
//                 messageElement.innerText = signUpError.message;
//             } else {
//                 messageElement.innerText = 'Sign up successful! Please check your email for confirmation.';
//                 emailInput.value = '';
//                 passwordInput.value = '';
//             }
//         } else {
//             messageElement.innerText = 'Login successful! Welcome back!';
//             displayUserInfo(); // Show user info and dashboard
//         }
//     } catch (error) {
//         console.error('Error signing in or signing up:', error.message);
//         messageElement.innerText = 'An error occurred. Please try again.';
//     }
// });

// // Toggle between sign up and login
// toggleLink.addEventListener('click', (event) => {
//     event.preventDefault();
//     if (formTitle.innerText === 'Sign Up / Login') {
//         formTitle.innerText = 'Sign Up';
//         toggleLink.innerHTML = 'Already have an account? <a href="#" id="toggleForm">Login</a>';
//     } else {
//         formTitle.innerText = 'Sign Up / Login';
//         toggleLink.innerHTML = "Don't have an account? <a href='#' id='toggleForm'>Sign Up</a>";
//     }
// });

// // Display user info on page load
// displayUserInfo();
// }