document.addEventListener("DOMContentLoaded", function () {
  const githubUsername = "AbderemaneAttoumaniDEV";
  const projectContainer = document.getElementById("projects");

  fetch(`https://api.github.com/users/${githubUsername}/repos`)
      .then(response => response.json())
      .then(repos => {
          const section = document.createElement("section");
          section.classList.add("sm:py-16", "py-8", "bg-zinc-900");

          const wrapper = document.createElement("div");
          wrapper.classList.add("max-w-7xl", "mx-auto", "px-4", "sm:mb-16");

          const title = document.createElement("h2");
          title.classList.add("mainTitle", "md:text-5xl", "text-3xl", "mt-4", "sm:mb-20", "mb-12");
          title.textContent = "My Projects";

          const grid = document.createElement("div");
          grid.classList.add("grid", "grid-cols-1", "md:grid-cols-3", "gap-8");

          // Projets 3 à 8 (slice de 2 à 8 exclus)
          repos.slice(2, 11).forEach(repo => {
              const card = document.createElement("div");
              card.classList.add(
                  "bg-zinc-900", "shadow-lg", "border", "border-white", "border-opacity-10",
                  "overflow-hidden", "transform", "transition", "duration-300",
                  "hover:scale-105", "active:scale-95"
              );

              // On crée un nom de fichier image à partir du nom du repo
              const imageName = repo.name.toLowerCase().replace(/[^a-z0-9\-]/g, "-") + ".png";

              card.innerHTML = `
                  <a href="https://${githubUsername}.github.io/${repo.name}/" target="_blank">
                      <div class="overflow-hidden">
                          <img src="images/projects/${imageName}" alt="${repo.name}" 
                              class="w-full h-48 object-cover transition-transform duration-200 hover:scale-125">
                      </div>
                      <div class="p-6">
                          <h3 class="text-xl w-fit text-zinc-200 hover:text-white mainTitle mb-4">${repo.name}</h3>
                          <p class="text-zinc-400 paraFont mb-4">${repo.description || "Pas de description"}</p>
                      </div>
                  </a>
              `;

              grid.appendChild(card);
          });

          // Bouton vers le GitHub en bas de la section
          const githubLink = document.createElement("a");
          githubLink.href = `https://github.com/${githubUsername}/`;
          githubLink.target = "_blank";
          githubLink.rel = "noopener noreferrer";
          githubLink.className = "linkFont w-fit bg-white bg-opacity-70 font-semibold text-zinc-900 py-3 px-4 md:text-base text-sm shadow-lg hover:bg-zinc-300 inline-block mt-8";
          githubLink.textContent = "More in my GitHub..";

          wrapper.appendChild(title);
          wrapper.appendChild(grid);
          wrapper.appendChild(githubLink);
          section.appendChild(wrapper);
          projectContainer.appendChild(section);
      })
      .catch(error => console.error("Erreur de récupération des projets :", error));
});
