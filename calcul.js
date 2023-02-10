function moyenneS3() {
    var exams = [       
        parseFloat(document.getElementById("exam1").value), 
        parseFloat(document.getElementById("exam2").value), 
        parseFloat(document.getElementById("exam3").value), 
        parseFloat(document.getElementById("exam4").value),
        parseFloat(document.getElementById("exam5").value), 
        parseFloat(document.getElementById("exam6").value),
        parseFloat(document.getElementById("exam7").value)    
    ];
    var ccs = [
        parseFloat(document.getElementById("cc1").value),
        parseFloat(document.getElementById("cc2").value),
        parseFloat(document.getElementById("cc3").value),
        parseFloat(document.getElementById("cc4").value), 
        parseFloat(document.getElementById("cc5").value), 
        parseFloat(document.getElementById("cc6").value)    
    ];


    // avec erreur message 


    /*avec l'alert 
    for (var i = 0; i < 7; i++) {
        if (isNaN(exams[i]) || exams[i] < 0 || exams[i] > 20) {
            alert("enter une note entre 0 et 20 dans la case " + (i + 1));
            return;
        }

    }

    for (var i = 0; i < 6; i++) {
        if (isNaN(ccs[i]) || ccs[i] < 0 || ccs[i] > 20) {
            alert("enter une note entre 0 et 20 dans la case  " + (i + 1));
            return;
        }
    }
    */

    //calcule de moyenne 

    var moyenS3 = [];
    for (var i = 0; i < 6; i++) {
        moyenS3[i] = (exams[i] * 0.6) + (ccs[i] * 0.4);
    }
    var moyenM7 = exams[6];

    var moyen = (
        (moyenS3[0] * 3 + moyenS3[1] * 3 + moyenS3[2] * 3 + moyenS3[3] * 2 + moyenS3[4] * 2 + moyenS3[5] * 2 + moyenM7) / 16
    );
    document.getElementById("moyen").value = moyen;
}


function moyenneS4() 
{
    var exams2 = [

        parseFloat(document.getElementById("exams1").value),
        parseFloat(document.getElementById("exams2").value),
        parseFloat(document.getElementById("exams3").value),
        parseFloat(document.getElementById("exams4").value),
        parseFloat(document.getElementById("exams5").value),
        parseFloat(document.getElementById("exams6").value),
        parseFloat(document.getElementById("exams7").value)
    ];

    var ccs2 = [

        parseFloat(document.getElementById("ccs1").value),
        parseFloat(document.getElementById("ccs2").value),
        parseFloat(document.getElementById("ccs3").value),
        parseFloat(document.getElementById("ccs4").value),
        parseFloat(document.getElementById("ccs5").value),
        parseFloat(document.getElementById("ccs6").value)
    ];

    var moyenS4 = [];
    for (var i = 0; i < 6; i++) {
        moyenS4[i] = (exams2[i] * 0.6) + (ccs2[i] * 0.4);
    }
    var moyenM7 = exams2[6];

    var MoyenneS4 = (
        (moyenS4[0] * 3 + moyenS4[1] * 3 + moyenS4[2] * 3 + moyenS4[3] * 2 + moyenS4[4] * 2 + moyenS4[5] * 2 + moyenM7) / 16
    );
    document.getElementById("moyens").value = MoyenneS4;
}


