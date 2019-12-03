document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();                 
});

function insertUser(name, email, phone, birthday, subscribe, alerts) {
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("phone: ", phone);
    console.log("birthday: ", birthday);
    console.log("subscribe: ", subscribe);
    console.log("alerts: ", alerts);
}