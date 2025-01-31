const supaBase_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Inl3c2JtdXB4cXhleWRwY3R5Z3JmIiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcyODA2ODIsImV4cCI6MjA1Mjg1NjY4Mn0.4cfRlmu-77BvOC2ggVGa5xpIbTTURTSHFcu2MotBV0M";
const supaBase_URL = "https://ywsbmupxqxeydpctygrf.supabase.co";
const supa_base = supabase.createClient(supaBase_URL, supaBase_KEY);

// // const logoutBtn = document.createClient();

// async function handleLoginSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const email = form.email.value;
//   const password = form.password.value;

//   console.log("Username:", email);
//   console.log("Password:", password);
//   const { data, error } = await supa_base.auth.signInWithPassword({
//     email,
//     password,
//   });
//   if (handleLoginSubmit) {
//     window.location.href = "dashboard.html";
//   }
// }


// async function handleSignupSubmit(event) {
//   event.preventDefault();
//   const form = event.target;
//   const email = form.email.value;
//   const password = form.password.value;

//   console.log("Username:", email);
//   console.log("Password:", password);

//   //   async function signUpNewUser() {
//   //     const { data, error } = await supa_base.auth.signUp({
//   //       email: email,
//   //       password: password,
//   //       //   options: {
//   //       //     emailRedirectTo: 'https://example.com/welcome',
//   //       //   },
//   //     })
//   // }
//   const { data, error } = await supa_base.auth.signUp({
//     email: email,
//     password: password,
//   });
//   if (handleSignupSubmit) {
//     window.location.href = "dashboard.html";
//   }
// }



// // async function handleSignupSubmit(event) {
// //   event.preventDefault();
// //   const form = event.target;
// //   const email = form.email.value;
// //   const password = form.password.value;

// //   console.log("Username:", email);
// //   console.log("Password:", password);

// //   const { data, error } = await supa_base.auth.signUp({
// //     email: email,
// //     password: password,
// //   });

// //   console.log("data", data);
// //   console.log("error", error);

// // }



// async function signOut(event) {
//   const { error } = await supa_base.auth.signOut()
//   if (signOut) {
//     window.location.href = "index.html";
//   }
// }



// // const SUPABASE_KEY =
// //   "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImticGhpeHhocWFsbXptcmNxYnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxNDg5NTEsImV4cCI6MjA1MjcyNDk1MX0.KY-kDW1EJEGukt6xiadnnd9tCywb5LhsCKl7kWQPqHE";
// // const SUPABASE_URL = "https://kbphixxhqalmzmrcqbvt.supabase.co";
// // const supa_base = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);



// // const logoutBtn = document.getElementById("logout-btn");
// // const loader = document.getElementById("loaderBgg");

// // document.addEventListener("DOMContentLoaded", async () => {
// //   const { data, error } = await supa_base.auth.getSession();
// //   console.log("data-DOmContetnLoad", data);
// //   console.log("error-DOmContetnLoad", error);
// //   if (data.session) {
// //     // Redirect to dashboard if not already there
// //     if (window.location.pathname !== "/dashboard.html") {
// //       window.location.href = "dashboard.html";
// //     }
// //   }
// // //   else {
// // //     // Redirect to login if not already there
// // //     if (window.location.pathname !== "/index.html") {
// // //       window.location.href = "index.html";
// // //     }
// // //   }
// // });

// // async function handleLoginSubmit(event) {
// //   loader.classList.remove("hidden");
// //   event.preventDefault();
// //   const form = event.target;
// //   const email = form.email.value;
// //   const password = form.password.value;

// //   console.log("Username:", email);
// //   console.log("Password:", password);

// //   const { data, error } = await supa_base.auth.signInWithPassword({
// //     email,
// //     password,
// //   });
// //   if (error) {
// //     loader.classList.add("hidden");

// //     alert(error);
// //   }
// //   if (data?.session !== null) {
// //     loader.classList.add("hidden");

// //     window.location.href = "dashboard.html";
// //   }
// //   console.log("data", data);
// //   console.log("error-login", error);
// // }

// // async function handleSignupSubmit(event) {
// //   event.preventDefault();
// //   const form = event.target;
// //   const email = form.email.value;
// //   const password = form.password.value;

// //   console.log("Username:", email);
// //   console.log("Password:", password);

// //   const { data, error } = await supa_base.auth.signUp({
// //     email: email,
// //     password: password,
// //   });

// //   console.log("data", data);
// //   console.log("error", error);
// // }

// // logoutBtn?.addEventListener("click", async () => {
// //   const { error } = await supa_base.auth.signOut();
// //   console.log("error", error);
// //   window.location.href = "index.html";
// // });

// // Add event listener to the form (optional if already added inline in HTML)
// // document.addEventListener("DOMContentLoaded", () => {
// //   const form = document.querySelector("form");
// //   if (form) {
// //     form.addEventListener("submit", handleLoginSubmit);
// //   }
// // });






// // const SUPABASE_KEY =
// //     "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6ImticGhpeHhocWFsbXptcmNxYnZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE3MzcxNDg5NTEsImV4cCI6MjA1MjcyNDk1MX0.KY-kDW1EJEGukt6xiadnnd9tCywb5LhsCKl7kWQPqHE";
// // const SUPABASE_URL = "https://kbphixxhqalmzmrcqbvt.supabase.co";
// // const supa_base = supabase.createClient(SUPABASE_URL, SUPABASE_KEY);

// // // DOM Elements
// // const loginBtn = document.getElementById("login-btn");
// // const signUpBtn = document.getElementById("signup-btn");
// // const logoutBtn = document.getElementById("logout-btn");

// // const emailInput = document.getElementById("email");
// // const passwordInput = document.getElementById("password");
// // const signUpEmail = document.getElementById("signup-email");
// // const signUpPassword = document.getElementById("signup-password");

// // const errorMessage = document.getElementById("error-message");
// // const signUpErrorMsg = document.getElementById("error-message-signup");

// // const showSignupLink = document.getElementById("show-signup");
// // const showLoginLink = document.getElementById("show-login");



// // (async () => {
// //     try {
// //         const { data } = await supa_base.auth.getSession();
// //         // console.log("Session data:", data);

// //         // if (data.session) {
// //         //     // Only redirect if not already on the dashboard page
// //         //     if (window.location.pathname !== "/dashboard.html") {
// //         //         window.location.href = "dashboard.html";
// //         //     }
// //         // }
// //         if (data.session) {
// //             // Redirect to dashboard if not already there
// //             if (window.location.pathname !== "/dashboard.html") {
// //                 window.location.href = "dashboard.html";
// //             }
// //         } else {
// //             // Redirect to login if not already there
// //             if (window.location.pathname !== "/index.html") {
// //                 window.location.href = "index.html";
// //             }
// //         }
// //     } catch (error) {
// //         console.error("Error retrieving session:", error);
// //     }
// // })();

// // // document.addEventListener("DOMContentLoaded", (e) => {
// // //     const sessionToken = localStorage.getItem("access_token");

// // //     if (sessionToken) {
// // //         // Redirect to dashboard if token exists and not already there
// // //         if (window.location.pathname !== "/dashboard.html") {
// // //             window.location.href = "dashboard.html";
// // //         }
// // //     }
// // // });

// // // Login Functionality
// // loginBtn?.addEventListener("click", async (e) => {
// //     // e.preventDefault();
// //     const email = emailInput.value;
// //     const password = passwordInput.value;

// //     try {
// //         // Authenticate with Supabase
// //         const { data, error } = await supa_base.auth.signInWithPassword({
// //             email,
// //             password,
// //         });
// //         console.log('data', data);

// //         if (error) {
// //             // Display error message
// //             errorMessage.textContent = error.message;
// //         } else {
// //             // Redirect to home page on success
// //             errorMessage.textContent = "";
// //             alert("Login successful!");
// //             window.location.href = "dashboard.html"; // Replace with your home page
// //             // localStorage.setItem("access_token", data?.session?.access_token)
// //         }
// //     } catch (err) {
// //         console.error("Unexpected error:", err);
// //         errorMessage.textContent = "Something went wrong. Please try again.";
// //     }
// // });

// // signUpBtn?.addEventListener("click", async () => {
// //     const email = signUpEmail.value;
// //     const password = signUpPassword.value;

// //     if (!email || !password) {
// //         signUpErrorMsg.textContent = "Please fill in all fields.";
// //         return;
// //     }

// //     try {
// //         const { data, error } = await supa_base.auth.signUp({
// //             email,
// //             password,
// //         })
// //         console.log('data:', data);
// //         console.log('error:', error);



// //     }
// //     catch (err) {
// //         console.error("Unexpected error:", err);
// //         signUpErrorMsg.textContent = "Something went wrong. Please try again.";
// //     }

// // }
// // )

// // logoutBtn?.addEventListener("click", async () => {
// //     try {
// //         await supa_base.auth.signOut();
// //         alert("Logout successful!");
// //         window.location.href = "index.html";
// //     } catch (err) {
// //         console.error("Unexpected error:", err);
// //         errorMessage.textContent = "Something went wrong. Please try again.";
// //     }

// // })

// // // Redirect to Sign-up Page
// // showSignupLink?.addEventListener("click", (e) => {
// //     e.preventDefault(); // Prevent default anchor behavior
// //     window.location.href = "signup.html"; // Navigate to signup page
// // });


// // showLoginLink?.addEventListener("click", (e) => {
// //     e.preventDefault(); // Prevent default anchor behavior
// //     window.location.href = "index.html"; // Navigate to the login page
// // });


// // // if (supa_base.auth.getSession()) {
// // //    window.navigator.href = "dashboard.html";
// // // } else {
// // //     // showLoginPage();
// // //    window.navigator.href = "index.html";
// // // }



// DOM Elements
const loginBtn = document.getElementById("login-btn");
const signUpBtn = document.getElementById("signup-btn");
const logoutBtn = document.getElementById("logout-btn");
const createBlogBtn = document.getElementById("create-blog-btn");
const createBlogBtnSubmit = document.getElementById("create-blog-btn-submit");
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
    const { data, error } = await supa_base.auth.getSession();
    if (error) {
      console.error("Error retrieving session:", error);
      return;
    }
    console.log({ data });
  } catch (err) {
    console.error("Unexpected error:", err);
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
    console.log("data", data);

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
    });
    console.log("data:", data);
    console.log("error:", error);
  } catch (err) {
    console.error("Unexpected error:", err);
    signUpErrorMsg.textContent = "Something went wrong. Please try again.";
  }
});

logoutBtn?.addEventListener("click", async () => {
  try {
    await supa_base.auth.signOut();
    alert("Logout successful!");
    window.location.href = "index.html";
  } catch (err) {
    console.error("Unexpected error:", err);
    errorMessage.textContent = "Something went wrong. Please try again.";
  }
});

createBlogBtn?.addEventListener("click", () => {
  window.location.href = "create.html";
});

// Form submission handler
document?.getElementById("create-blog-form")?.addEventListener("submit", async (e) => {
    e.preventDefault();

    // Get form data
    const title = document.getElementById("blog-title").value;
    const description = document.getElementById("blog-description").value;
    const imageFile = document.getElementById("blog-image").files[0];

    // Upload image to Supabase storage
    const { data: imageData, error: imageError } = await supa_base?.storage
      .from("blog-images")
      .upload(`${Date.now()}-${imageFile.name}`, imageFile, {
        contentType: "image/jpg",
      });

    if (imageError) {
      console.error("Image upload failed:", imageError.message);
      return alert("Image upload failed!");
    }

    // Log the result of the upload
    console.log("Image Data:", imageData);

    // Ensure `path` exists before trying to generate the public URL
    if (!imageData?.path) {
      console.error("No path returned from image upload");
      return alert("Failed to upload image. No path returned.");
    }

    // Generate the public URL
    const { data: publicUrlData, error: publicUrlError } = supa_base.storage
      .from("blog-images")
      .getPublicUrl(imageData.path);

    if (publicUrlError) {
      console.error("Failed to generate public URL:", publicUrlError.message);
      return alert("Failed to generate public URL!");
    }

    // Ensure public URL is valid
    if (!publicUrlData?.publicUrl) {
      console.error("No public URL returned:", publicUrlData);
      return alert("Failed to get public URL for the image.");
    }

    const imageUrl = publicUrlData.publicUrl;
    console.log("Image Public URL:", imageUrl);
    let {
      data: { user: currentUser },
    } = await supa_base.auth.getUser();
    // Insert blog data into Supabase table
    const { error: insertError } = await supa_base
      .from("blogs")
      .insert([
        { user_id: currentUser?.id, title, description, image_url: imageUrl },
      ]);

    if (insertError) {
      console.error("Failed to insert blog:", insertError.message);
      return alert("Failed to create blog!");
    }

    alert("Blog created successfully!");
    window.location.href = "dashboard.html";
    // Optionally, reset the form
    e.target.reset();
  });

// Redirect to Sign-up Page
showSignupLink?.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  window.location.href = "signup.html"; // Navigate to signup page
});

showLoginLink?.addEventListener("click", (e) => {
  e.preventDefault(); // Prevent default anchor behavior
  window.location.href = "index.html"; // Navigate to the login page
});

document.addEventListener("DOMContentLoaded", async () => {
  let {
    data: { user: currentUser },
  } = await supa_base.auth.getUser();

  if (!currentUser) {
    console.error("User not authenticated");
    return;
  }

  const { data, error } = await supa_base
    .from("blogs")
    .select("*")
    .eq("user_id", currentUser?.id);

  if (error) {
    console.error("Error fetching blogs:", error);
  } else {
    const blogsContainer = document.getElementById("blogs");
    console.log({ data });

    data?.forEach((blog) => {
      const blogItem = document.createElement("div");
      blogItem.classList.add("blog-item");
      blogItem.innerHTML = `
          <div class="blog-image-wrapper">
            <img class="blog-image" src="${blog?.image_url}" alt="image">
          </div>
          <h3>${blog?.title}</h3>
          <p>${blog?.description}</p>
        `;
      blogsContainer.appendChild(blogItem);
    });
  }
});

// if (supa_base.auth.getSession()) {
//    window.navigator.href = "dashboard.html";
// } else {
//     // showLoginPage();
//    window.navigator.href = "index.html";
// }