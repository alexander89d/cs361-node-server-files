/* Add event listener to prevent default action of "save" button. */
document.getElementById("save").addEventListener("click", function(event) {
    event.preventDefault();
});

/* Add event listener to prevent default action of "Cancel" button. */
document.getElementById("cancel").addEventListener("click", function(event) {
    event.preventDefault();
});

/* Onclick function to process form data when user clicks "Save." */
function updateUser(name, email, phone, birthday, subscribeArr, alertsArr) {
    /* If user deleted name and left field blank, display error message and return. */
    if (name === "") {
        alert("The name field cannot be left blank.");
        return;
    }
    
    /* If user left phone field blank, set to NULL. */
    if (phone === "") {
        phone = null;
    }
    
    /* If user left birthday field blank, display error message and return. */
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
            if (phone === null)
            {
                    alert("You must enter a phone number if you choose to receive text alerts.");
                    return;
            }
    }
    else {
            alerts = 0;
    }
    
    /* Make AJAX request to server to add data. */
    var req = new XMLHttpRequest();
    req.open("POST", "http://flip3.engr.oregonstate.edu:7994/update-user", true);
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

/* Onclick function so that pressing "cancel" redirects to user dashboard with email appended to URL. */
function cancelEdit(email)
{
    var homeAddr = "http://flip3.engr.oregonstate.edu:7994/?uid=" + encodeURIComponent(email);
    window.location.replace(homeAddr);
}