function moyenneS1() 
{
    var exam1 = parseFloat(document.getElementById("exam1").value);
    var exam2 = parseFloat(document.getElementById("exam2").value);
    var exam3 = parseFloat(document.getElementById("exam3").value);
    var exam4 = parseFloat(document.getElementById("exam4").value);
    var exam5 = parseFloat(document.getElementById("exam5").value);
    var exam6 = parseFloat(document.getElementById("exam6").value);
    var exam7 = parseFloat(document.getElementById("exam7").value);
    var cc1 = parseFloat(document.getElementById("cc1").value);
    var cc2 = parseFloat(document.getElementById("cc2").value);
    var cc3 = parseFloat(document.getElementById("cc3").value);
    var cc4 = parseFloat(document.getElementById("cc4").value);
    var cc5 = parseFloat(document.getElementById("cc5").value);
    var cc6 = parseFloat(document.getElementById("cc6").value);

   
    var moyenM1 = (exam1 * 0.6) + (cc1 * 0.4);
    var moyenM2 = (exam2 * 0.6) + (cc2 * 0.4);
    var moyenM3 = (exam3 * 0.6) + (cc3 * 0.4);
    var moyenM4 = (exam4 * 0.6) + (cc4 * 0.4);
    var moyenM5 = (exam5 * 0.6) + (cc5 * 0.4);
    var moyenM6 = (exam6 * 0.6) + (cc6 * 0.4);

    var moyen = (moyenM1 * 3 + moyenM2 * 3 + moyenM3*3 + moyenM4*2 + moyenM5*2 + moyenM6*2 +exam7) / 16;
    document.getElementById("moyen").value = moyen;
}

function moyenneS2() 
{
    var exams1 = parseFloat(document.getElementById("exams1").value);
    var exams2 = parseFloat(document.getElementById("exams2").value);
    var exams3 = parseFloat(document.getElementById("exams3").value);
    var exams4 = parseFloat(document.getElementById("exams4").value);
    var exams5 = parseFloat(document.getElementById("exams5").value);
    var exams6 = parseFloat(document.getElementById("exams6").value);
    var exams7 = parseFloat(document.getElementById("exams7").value);
    var ccs1 = parseFloat(document.getElementById("ccs1").value);
    var ccs2 = parseFloat(document.getElementById("ccs2").value);
    var ccs3 = parseFloat(document.getElementById("ccs3").value);
    var ccs4 = parseFloat(document.getElementById("ccs4").value);
    var ccs5 = parseFloat(document.getElementById("ccs5").value);
    var ccs6 = parseFloat(document.getElementById("ccs6").value);

   
    var moyenSM1 = (exams1 * 0.6) + (ccs1 * 0.4);
    var moyenSM2 = (exams2 * 0.6) + (ccs2 * 0.4);
    var moyenSM3 = (exams3 * 0.6) + (ccs3 * 0.4);
    var moyenSM4 = (exams4 * 0.6) + (ccs4 * 0.4);
    var moyenSM5 = (exams5 * 0.6) + (ccs5 * 0.4);
    var moyenSM6 = (exams6 * 0.6) + (ccs6 * 0.4);

    var moyensem2 = (moyenSM1 * 3 + moyenSM2 * 3 + moyenSM3*3 + moyenSM4*2 + moyenSM5*2 + moyenSM6*2 +exams7) / 16;
    document.getElementById("moyens").value = moyensem2;
}
