let posts = [];

fetch("/search.json")
  .then(response => response.json())
  .then(data => {
    posts = data;
    console.log("Loaded posts:", posts);
  });

document.addEventListener("DOMContentLoaded", function () {
  const searchBox = document.getElementById('search-box');
  const resultsContainer = document.getElementById('search-results');

  searchBox.addEventListener('input', function () {
    const query = this.value.trim().toLowerCase();
    if (!query) {
      resultsContainer.innerHTML = '';
      return;
    }

    const keywords = query.split(/\s+/);

    const scored = posts.map(post => {
      let score = 0;
      const title = post.title.toLowerCase();
      const content = post.content.toLowerCase();

      keywords.forEach(word => {
        if (title.includes(word)) score += 10;
        if (content.includes(word)) score += 1;
      });

      return { post, score };
    });

    const sorted = scored
      .filter(entry => entry.score > 0)
      .sort((a, b) => b.score - a.score);

    // Clear old results
    resultsContainer.innerHTML = '';

    // Add results
    sorted.forEach(({ post }) => {
      const li = document.createElement('li');
      const a = document.createElement('a');
      a.href = post.url;

      // Highlight match in title
      let highlightedTitle = post.title;
      keywords.forEach(word => {
        const re = new RegExp(`(${word})`, 'gi');
        highlightedTitle = highlightedTitle.replace(re, '<mark>$1</mark>');
      });

      a.innerHTML = highlightedTitle;
      li.appendChild(a);
      resultsContainer.appendChild(li);
    });
  });
});
