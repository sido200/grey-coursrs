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
        <div class ="chapitres-menu">
          <button>${info.chap1}</button>
          <button>${info.chap2}</button>
          <button>${info.chap3}</button>
          </div>
            <button>TD's</button>
            <button>TP's</button>
            <button>examens</button>
            <button>tests</button>
         </div>

      </div>
      
      <div class="general-infos">

      <h1>${info.chap1}:</h1>
     <div class="infos-carres">

     <div class="element">
    <div class="titre-element">
   <div class="titre-element-p1"> <h2>Introduction</h2></div>
    <div class="titre-element-p2"> <h2>1</h2></div>
    </div>
    <div class="texte-element">
    <div class="p-element">
    <p>${info.introduction1}</p>
    </div>
    <div class="img-element">
    <img src="./assets/image/image_1_liste.png" alt="">
    </div>
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
    <div class="titre-element-p1"> <h2>${info.sous_titre_chap1_1}</h2></div>
    <div class="titre-element-p2"> <h2>2</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_1}</p>
    <img src="./assets/image/Initialiser Liste.png" alt="">
    </div>
     </div>

     <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap1_2}</h2></div>
    <div class="titre-element-p2"> <h2>3</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_2}</p>
    <img src="./assets/image/Insérer en tête Liste.png" alt="">
    </div>
     </div>

     <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap1_3}</h2></div>
    <div class="titre-element-p2"> <h2>4</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_3}</p>
    <img src="./assets/image/InsertFin.png" alt="">
    </div>
     </div>

      <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap1_4}</h2></div>
    <div class="titre-element-p2"> <h2>5</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_4}</p>
    <img src="./assets/image/Parcourir Liste.png" alt="">
    <p>${info.paragraphe}</p>
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap1_5}</h2></div>
    <div class="titre-element-p2"> <h2>6</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_5}</p>
   <img src="./assets/image/suppdebutcode.png" alt="">
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap1_6}</h2></div>
    <div class="titre-element-p2"> <h2>7</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap1_6}</p>
    <img src="./assets/image/suppfincode.png" alt="">
    </div>
     </div>

        <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>Remarque</h2></div>
    <div class="titre-element-p2"> <h2>8</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.remarque_chap_1}</p>
    </div>
     </div>
</div>
 <h1>${info.chap2}:</h1>
    <div class="infos-carres">

     <div class="element">
    <div class="titre-element">
   <div class="titre-element-p1"> <h2>Introduction</h2></div>
    <div class="titre-element-p2"> <h2>1</h2></div>
    </div>
    <div class="texte-element">
    <div class="p-element">
    <p>${info.intro_chap2}</p>
    </div>
    <div class="img-element">
    <img src="./assets/image/329556558_744202173988507_7473546778924599511_n.png" alt="">
    </div>
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
    <div class="titre-element-p1"> <h2>${info.sous_titre_chap2_1}</h2></div>
    <div class="titre-element-p2"> <h2>2</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap2_1}</p>
   <img src="./assets/image/Initialiser.png" alt="">
    </div>
     </div>

     <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap2_2}</h2></div>
    <div class="titre-element-p2"> <h2>3</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap2_2}</p>
   <img src="./assets/image/TestVide.png" alt="">
    </div>
     </div>

     <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap2_3}</h2></div>
    <div class="titre-element-p2"> <h2>4</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap2_3}</p>
   <img src="./assets/image/Empiler.png" alt="">
    </div>
     </div>

      <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap2_4}</h2></div>
    <div class="titre-element-p2"> <h2>5</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap2_4}</p>
   <img src="./assets/image/Depiler.png" alt="">
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap2_5}</h2></div>
    <div class="titre-element-p2"> <h2>6</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap2_5}</p>
<img src="./assets/image/Affichage.png" alt="">
    </div>
     </div>

      <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>Remarque</h2></div>
    <div class="titre-element-p2"> <h2>7</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.remarque_chap_2}</p>
    </div>
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
