const url = "https://icanhazdadjoke.com/";

async function getJokes() {
  try {
    const response = await fetch(url, {
      headers: {
        Accept: "application/json",
      },
    });
    const data = await response.json();
    return data.joke;
  } catch (error) {
    console.error("Error fetching joke:", error);
    return "Oops! Couldn't fetch a joke at the moment.";
  }
}

async function displayJoke() {
  const joke = await getJokes();
  const jokeElement = document.getElementById("joke");
  jokeElement.textContent = joke;
}
