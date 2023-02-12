//scroll to the top button
const showOnPx = 900;
const backToTopButton = document.querySelector(".scroll-up-button");

const scrollContainer = () => {
  return document.documentElement || document.body;
};

document.addEventListener("scroll", () => {
  if (scrollContainer().scrollTop > showOnPx) {
    backToTopButton.classList.remove("caché");
  } else {
    backToTopButton.classList.add("caché");
  }
});
backToTopButton.addEventListener("click", function () {
  document.body.scrollIntoView({
    behavior: "smooth",
  });
});
/*
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
      <a href="#chap1"><button>${info.chap1}</button></a>
      <a href="#chap2"><button>${info.chap2}</button></a>
      <a href="#chap3"><button>${info.chap3}</button></a>
      <a href="#chap4"><button>${info.chap4}</button></a>
            <a href="#TD"><button>TD's</button></a>
         </div>
</div>
      </div>
      
      <div class="general-infos">

      <h1 id="chap1">${info.chap1}:</h1>
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
 <h1 id="chap2">${info.chap2}:</h1>
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
  <img src="./assets/image/Initialiser (1).png" alt="">
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

     <h1 id="chap3">${info.chap3}:</h1>
    <div class="infos-carres">

     <div class="element">
    <div class="titre-element">
   <div class="titre-element-p1"> <h2>Introduction</h2></div>
    <div class="titre-element-p2"> <h2>1</h2></div>
    </div>
    <div class="texte-element">
    <div class="p-element">
    <p>${info.intro_chap3}</p>
    </div>
    <div class="img-element">
    <img src="./assets/image/intro-file.png" alt="">
    </div>
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
    <div class="titre-element-p1"> <h2>${info.sous_titre_chap3_1}</h2></div>
    <div class="titre-element-p2"> <h2>2</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap3_1}</p>
   <img src="./assets/image/Initialiser.png" alt="">
    </div>
     </div>

     <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap3_2}</h2></div>
    <div class="titre-element-p2"> <h2>3</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap3_2}</p>
   <img src="./assets/image/Vide.png" alt="">
    </div>
     </div>

     <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap3_3}</h2></div>
    <div class="titre-element-p2"> <h2>4</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap3_3}</p>
  <img src="./assets/image/enfiler.png" alt="">
    </div>
     </div>

      <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap3_4}</h2></div>
    <div class="titre-element-p2"> <h2>5</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap3_4_part1}</p>
    <img src="./assets/image/Defiler.png" alt="">
   <p>${info.p_st_chap3_4_part2}</p>
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>Files circulaires</h2></div>
    <div class="titre-element-p2"> <h2>6</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.intro_chap3_bis}</p>
<img src="./assets/image/Structure (1).png" alt="">
    </div>
     </div>

      <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap3_bis_1}</h2></div>
    <div class="titre-element-p2"> <h2>7</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap3_bis_1}</p>
<img src="./assets/image/initialisation.png" alt="">
    </div>
     </div>

          <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap3_bis_2}</h2></div>
    <div class="titre-element-p2"> <h2>8</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap3_bis_2}</p>
<img src="./assets/image/TesterVide.png" alt="">
    </div>
     </div>

          <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap3_bis_3}</h2></div>
    <div class="titre-element-p2"> <h2>9</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap3_bis_3}</p>
<img src="./assets/image/Enfiler (1).png" alt="">
    </div>
     </div>

          <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap3_bis_4}</h2></div>
    <div class="titre-element-p2"> <h2>10</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap3_bis_4}</p>
<img src="./assets/image/defiler (1).png" alt="">
    </div>
     </div>
  
     </div>

   <h1 id="chap4">${info.chap4}:</h1>
    <div class="infos-carres">

     <div class="element">
    <div class="titre-element">
   <div class="titre-element-p1"> <h2>Introduction</h2></div>
    <div class="titre-element-p2"> <h2>1</h2></div>
    </div>
    <div class="texte-element">
    <div class="p-element">
    <p>${info.intro_chap4}</p>
    </div>
    <div class="img-element">
    <img src="./assets/image/arbre-intro-2.png" alt="">
    </div>
    <p>${info.p_chap4}</p>
    <div class="img-element">
<img src="./assets/image/Declaration-arbre.png" alt="">
    </div>
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
    <div class="titre-element-p1"> <h2>${info.sous_titre_chap4_1}</h2></div>
    <div class="titre-element-p2"> <h2>2</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap4_1}</p>
   <img src="./assets/image/Initialisation-arbre.png" alt="">
    </div>
     </div>

     <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap4_2}</h2></div>
    <div class="titre-element-p2"> <h2>3</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap4_2}</p>
   <img src="./assets/image/insert-arbre.png" alt="">
    </div>
     </div>

     <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap4_3}</h2></div>
    <div class="titre-element-p2"> <h2>4</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap4_3}</p>
<img src="./assets/image/Recherch.png" alt="">
    </div>
     </div>

      <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap4_4}</h2></div>
    <div class="titre-element-p2"> <h2>5</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap4_4}</p>
    <img src="./assets/image/arbre-intro-1.jpg" alt="">
    </div>
     </div>

       <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>${info.sous_titre_chap4_5}</h2></div>
    <div class="titre-element-p2"> <h2>6</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.p_st_chap4_5}</p>
<img src="./assets/image/Affichage-arbre.png" alt="">

    </div>
     </div>

        <div class="element">
    <div class="titre-element">
     <div class="titre-element-p1"> <h2>Remarque</h2></div>
    <div class="titre-element-p2"> <h2>7</h2></div>
    </div>
    <div class="texte-element">
    <p>${info.remarque_chap_5}</p>
    </div>
     </div>

      

</div>

<h1 id="TD">Exercices</h1>
   <div class="divs-pdf">
   
   
             

      <div class="doc">
        <a
          href="https://drive.google.com/drive/folders/1DxX6khEOMZDXFUndigPfIa7iH68_feUL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#32729a"
            stroke="#32729a"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M576 102.4H268.8c-14.08 0-25.6 11.52-25.6 25.6v742.4c0 14.08 11.52 25.6 25.6 25.6h512c14.08 0 25.6-11.52 25.6-25.6V332.8L576 102.4z"
                fill="#ffff"
              ></path>
              <path
                d="M780.8 908.8H268.8c-21.76 0-38.4-16.64-38.4-38.4V128c0-21.76 16.64-38.4 38.4-38.4h312.32L819.2 327.68V870.4c0 21.76-16.64 38.4-38.4 38.4zM268.8 115.2c-7.68 0-12.8 5.12-12.8 12.8v742.4c0 7.68 5.12 12.8 12.8 12.8h512c7.68 0 12.8-5.12 12.8-12.8V337.92L570.88 115.2H268.8z"
                fill="#ffff32729a"
              ></path>
              <path
                d="M576 307.2c0 14.08 11.52 25.6 25.6 25.6h204.8L576 102.4v204.8z"
                fill="#ffff008181"
              ></path>
              <path
                d="M806.4 345.6H601.6c-21.76 0-38.4-16.64-38.4-38.4V102.4c0-5.12 2.56-10.24 7.68-11.52 5.12-2.56 10.24-1.28 14.08 2.56l230.4 230.4c3.84 3.84 5.12 8.96 2.56 14.08-1.28 5.12-6.4 7.68-11.52 7.68zM588.8 133.12V307.2c0 7.68 5.12 12.8 12.8 12.8h174.08L588.8 133.12zM332.8 435.2h371.2v25.6H332.8zM332.8 524.8h371.2v25.6H332.8z"
                fill="#ffff32729a"
              ></path>
              <path
                d="M332.8 614.4h371.2v25.6H332.8z"
                fill="#ffff32729a"
              ></path>
              <path
                d="M332.8 716.8h371.2v25.6H332.8z"
                fill="#ffff32729a"
              ></path>
            </g>
          </svg>
          <h4> tableaux/listes</h4>
        </a>
      </div>

      <div class="doc">
        <a
          href="https://drive.google.com/drive/folders/1eqOpMLSCX0AfQxDSMgpQerD8ZDumJhpL"
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg
            viewBox="0 0 1024 1024"
            class="icon"
            version="1.1"
            xmlns="http://www.w3.org/2000/svg"
            fill="#32729a"
            stroke="#32729a"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            ></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M576 102.4H268.8c-14.08 0-25.6 11.52-25.6 25.6v742.4c0 14.08 11.52 25.6 25.6 25.6h512c14.08 0 25.6-11.52 25.6-25.6V332.8L576 102.4z"
                fill="#ffff"
              ></path>
              <path
                d="M780.8 908.8H268.8c-21.76 0-38.4-16.64-38.4-38.4V128c0-21.76 16.64-38.4 38.4-38.4h312.32L819.2 327.68V870.4c0 21.76-16.64 38.4-38.4 38.4zM268.8 115.2c-7.68 0-12.8 5.12-12.8 12.8v742.4c0 7.68 5.12 12.8 12.8 12.8h512c7.68 0 12.8-5.12 12.8-12.8V337.92L570.88 115.2H268.8z"
                fill="#ffff32729a"
              ></path>
              <path
                d="M576 307.2c0 14.08 11.52 25.6 25.6 25.6h204.8L576 102.4v204.8z"
                fill="#ffff008181"
              ></path>
              <path
                d="M806.4 345.6H601.6c-21.76 0-38.4-16.64-38.4-38.4V102.4c0-5.12 2.56-10.24 7.68-11.52 5.12-2.56 10.24-1.28 14.08 2.56l230.4 230.4c3.84 3.84 5.12 8.96 2.56 14.08-1.28 5.12-6.4 7.68-11.52 7.68zM588.8 133.12V307.2c0 7.68 5.12 12.8 12.8 12.8h174.08L588.8 133.12zM332.8 435.2h371.2v25.6H332.8zM332.8 524.8h371.2v25.6H332.8z"
                fill="#ffff32729a"
              ></path>
              <path
                d="M332.8 614.4h371.2v25.6H332.8z"
                fill="#ffff32729a"
              ></path>
              <path
                d="M332.8 716.8h371.2v25.6H332.8z"
                fill="#ffff32729a"
              ></path>
            </g>
          </svg>
          <h4>Arbres</h4>
        </a>
      </div>
   
   </div>
     </div>

      </div>

    

    </div>


    
    `;
    container.innerHTML = template;
  }
};

window.addEventListener("DOMContentLoaded", () => renderInfos());*/
