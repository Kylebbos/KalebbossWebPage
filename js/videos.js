fetch("https://raw.githubusercontent.com/Kylebbos/kalebbossJson/refs/heads/main/kalebboss.json")
  .then(response => {

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }

    return response.json();
  })
  .then(function (responseJson) {

    displayVideos(responseJson);
  })
  .catch(function (error) {

    document.getElementById("vastaus").innerHTML = "<p>Failed to load video list.</p>";
    console.error("Error fetching the JSON file:", error);
  });

function displayVideos(data) {
  let htmlContent = "<ul>";

  data.forEach(video => {
    htmlContent += `
      <li>
        <div class="video-title">${video.title}</div>
        <a class="video-url" href="${video.url}" target="_blank">${video.url}</a>
        <div class="release-date">Release Date: ${video.releaseDate}</div>
      </li>
    `;
  });

  htmlContent += "</ul>";

  document.getElementById("vastaus").innerHTML = htmlContent;
}
