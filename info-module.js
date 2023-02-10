const id = new URLSearchParams(window.location.search).get("id");

const container = document.querySelector(".module-template");

const renderInfos = async () => {
  const res = await fetch("http://localhost:3000/info-modules/" + id);
  const info = await res.json();

  if (id === "1") {
    console.log("ASD3 IS HERE!!!");

    const template = `
       
    <div class="in">

      <div class="menu">

      <div class="title">
      <h2>${info.nommodule}</h2>
      </div>

        <div class ="buttons-menu">
          <h2>Chapitres:</h2>
          <button>${info.chap1}</button>
          <button>${info.chap2}</button>
          <button>${info.chap3}</button>
           <h2>Sujets:</h2>
            <button>TD's</button>
            <button>TP's</button>
            <button>examens</button>
            <button>tests</button>
         </div>

      </div>
      
      <div class="general-infos">

      <h1>${info.chap1}</h1>
     <div class="infos-carres">

     <div class="element">
    <div class="titre-element">
    <h2>Introduction:</h2>
    </div>
    <div class="texte-element">
    <p>${info.introduction1}</p>
    <img src="" alt="">
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
    <h2>${info.sous_titre_chap1_1}</h2>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_1}</p>
    <img src="" alt="">
    </div>
     </div>

     <div class="element">
    <div class="titre-element">
    <h2>${info.sous_titre_chap1_2}</h2>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_2}</p>
    <img src="" alt="">
    </div>
     </div>

     <div class="element">
    <div class="titre-element">
    <h2>${info.sous_titre_chap1_3}</h2>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_3}</p>
    <img src="" alt="">
    </div>
     </div>

      <div class="element">
    <div class="titre-element">
    <h2>${info.sous_titre_chap1_4}</h2>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_4}</p>
    <img src="" alt="">
    <p>${info.paragraphe}</p>
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
    <h2>${info.sous_titre_chap1_5}</h2>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_5}</p>
    <img src="" alt="">
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
    <h2>${info.sous_titre_chap1_6}</h2>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_6}</p>
    <img src="" alt="">
    </div>
     </div>

        <div class="element">
    <div class="titre-element">
    <h2>Remarque:</h2>
    </div>
    <div class="texte-element">
    <p>${info.remarque_chap_1}</p>
    <img src="" alt="">
    </div>
     </div>

     </div>

      </div>



    </div>


    
    `;
    container.innerHTML = template;
  }
};

window.addEventListener("DOMContentLoaded", () => renderInfos());
