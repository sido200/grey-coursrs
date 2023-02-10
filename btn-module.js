const container = document.querySelector(".btns");

const renderModules = async () => {
  let uri = "http://localhost:3000/titres-modules";

  const rest = await fetch(uri);
  const modules = await rest.json();

  let template = "";

  modules.forEach((module) => {
    template += `
            <div class="btn">
           <a href="/module.html?id=${module.id}" ><button>${module.title}</button></a>
          </div>
        `;
  });
  container.innerHTML = template;
};

window.addEventListener("DOMContentLoaded", () => renderModules());
