document.getElementById("submit").addEventListener("click", function(event) {
    event.preventDefault();
});

function insertUser(name, email, phone, birthday, subscribeArr, alertsArr) {
    /*
    console.log("name: ", name);
    console.log("email: ", email);
    console.log("phone: ", phone);
    console.log("birthday: ", birthday);
    console.log("subscribe: ", subscribe);
    console.log("alerts: ", alerts);
    */
    
    /* If user did not enter name, display error message and return. */
    if (name === "") {
        alert("The name field cannot be left blank.");
        return;
    }
    
    /* If user did not enter phone number, set to NULL. */
    if (phone === "") {
        phone = null;
    }
    
    /* If user did not enter birthday, display error message and return. */
    if (birthday === "") {
        alert("The birthday field cannot be left blank.");
        return;
    }
    
    /* Determine boolean value to assign to subscribe. */
    var subscribe;
    if (subscribeArr[0].checked) {
            subscribe = 1;
    }
    else {
        subscribe = 0;
    }
    
    /* Determine boolean value to assign to alerts. */
    var alerts;
    if (alertsArr[0].checked) {
            alerts = 1;
    }
    else {
            alerts = 0;
    }
    
    /* Make AJAX request to server to add data. */
    var req = new XMLHttpRequest();
    req.open("POST", "http://flip3.engr.oregonstate.edu:7994/add-user", true);
    req.setRequestHeader("Content-Type", "application/json");
    
    var reqBody = {
        "name":name,
        "email":email,
        "phone":phone, 
        "birthday":birthday, 
        "subscribe":subscribe,
        "alerts":alerts
    };
    
    reqBody = JSON.stringify(reqBody);
    
    /* Callback function for once request returns. */
    req.addEventListener("load", function redirectHome() {
        if (req.status >= 200 && req.status < 400) {
            var homeAddr = "http://flip3.engr.oregonstate.edu:7994/?uid=" + encodeURIComponent(email);
            window.location.replace(homeAddr);
        }
        else {
            alert("An error occurred posting data to the server.");
        }
    });
    
    req.send(reqBody);
}