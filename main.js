function updateClock(){


 var now = new Date();
 var formattedTime = now.toLocaleTimeString("en-US", { hour12: true });

document.getElementById("clock").innerHTML = formattedTime;



}




setInterval(updateClock, 1000);
updateClock();


  async function fetchQuote() {
    try {
      const response = await fetch("https://api.quotable.io/random");
      const data = await response.json();
      const { content, author } = data;

      document.getElementById("quote").textContent = content;
      document.getElementById("author").textContent = `- ${author}`;
    } catch (error) {
      console.log("Error fetching quote", error);
    }
  }

  // Fetch a quote on page load
  fetchQuote();