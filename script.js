window.addEventListener('DOMContentLoaded', () => {
    const greeting = document.getElementById('greeting');
    const hour = new Date().getHours();
    let text = "Welcome!";

    if(hour >= 5 && hour < 12){
        text = "Good Morning, Visitor!";
    } else if(hour >= 12 && hour < 18){
        text = "Good Afternoon, Visitor!";
    } else {
        text = "Good Evening, Visitor!";
    }

    greeting.textContent = text;
});