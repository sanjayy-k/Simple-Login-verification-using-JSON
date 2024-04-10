document.addEventListener("DOMContentLoaded", function() {
    const login = async (userName, password) => {
        try {
            const response = await fetch("./first2.json");
            if (!response.ok) {
                throw new Error('Failed to fetch user data');
            }
            const data = await response.json();
            const users = data.users;
            // console.log(users) 
            if (!Array.isArray(users)) {
                throw new Error('User data is not in the expected format');
            }
            const user = users.find(user => user.name === userName && user.password === password);
            if (user) {
                return user;
            } else {
                throw new Error("Invalid username or password");
            }
        } catch (error) {
            throw error;
        }
    };
    document.getElementById("submitform").addEventListener("click", async (e) => {
        e.preventDefault();
        let userName = document.querySelector("#userName").value;
        let password = document.querySelector("#password").value;
        try {
            let user = await login(userName, password);
            console.log("User Logged In: ", user);
            // window.location.href="timetracker.html"
            alert("Log In Successfull")
        } catch (error) {
            console.log("Login Error: ", error.message);
            alert("Invalid Username or password")
        }
    });
});