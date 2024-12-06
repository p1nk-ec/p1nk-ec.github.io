function showGreeting() {
   
    let name = document.getElementById("nameInput").value;

    
    if (name.trim() !== "") 
        {
     
        document.getElementById("greetingMessage").textContent = "Welcome,Good Evening! " + name;
    } else 
    {
    
        document.getElementById("greetingMessage").textContent = "Please enter your name!";
    }
}