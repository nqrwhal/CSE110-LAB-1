window.onload = function() {
    document.getElementById("subscribe-form").addEventListener("submit", alertSubFunc);
}

function alertSubFunc(event) {
    event.preventDefault();
    alert("Subscribed!");
}
    