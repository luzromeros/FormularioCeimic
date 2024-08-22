function loadImage(url) {
    return new Promise(resolve => {
        const xhr = new XMLHttpRequest();
        xhr.open('GET', url, true);
        xhr.responseType = "blob";
        xhr.onload = function (e) {
            const reader = new FileReader();
            reader.onload = function(event) {
                const res = event.target.result;
                resolve(res);
            }
            const file = this.response;
            reader.readAsDataURL(file);
        }
        xhr.send();
    });}

let signaturePad = null;

window.addEventListener('load', async () => {

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
  
        let NombreSolicitante = document.getElementById('NombreSolicitante').value;
        let Nit = document.getElementById('Nit').value;
        let TelefonoContacto = document.getElementById('TelefonoContacto').value;
        let Direccion = document.getElementById('Direccion').value;
        let Cuidad = document.getElementById('Ciudad').value;
        let PersonaContacto = document.getElementById('PersonaContacto').value;
        let NombreFacturante = document.getElementById('NombreFacturante').value;
        let NitFacturante = document.getElementById('NitFacturante').value;
        let DireccionFacturante = document.getElementById('DireccionFacturante').value;
        let CuidadFacturante = document.getElementById('CuidadFacturante').value;
        let TelefonoFacturante = document.getElementById('TelefonoFacturante').value;
       

        if (document.getElementById('FacturanteSi').checked) {
            NombreFacturante = NombreSolicitante
            NitFacturante= Nit
            DireccionFacturante = Direccion
            CuidadFacturante= Cuidad
            TelefonoFacturante= TelefonoContacto

        } else {
            NombreFacturante = NombreFacturante
            NitFacturante= NitFacturante 
            DireccionFacturante= DireccionFacturante
            CuidadFacturante= CuidadFacturante  
            TelefonoFacturante= TelefonoFacturante                  
        }

        if (document.getElementById('FacturanteNo').checked) {
            NombreFacturante = NombreFacturante
            NitFacturante= NitFacturante 
            DireccionFacturante= DireccionFacturante
            CuidadFacturante= CuidadFacturante  
            TelefonoFacturante= TelefonoFacturante

        } else {
            NombreFacturante = NombreSolicitante
            NitFacturante= Nit
            DireccionFacturante = Direccion
            CuidadFacturante= Cuidad
            TelefonoFacturante =TelefonoContacto
        }


        let fact = document.getElementById('fact').value;
        let CorrResul = document.getElementById('CorrResul').value;
        let matriz = document.getElementById('matriz').value;
        let lugar = document.getElementById('lugar').value;
        let productor = document.getElementById('productor').value;
        let fecha= document.getElementById('fecha').value;
        let codigo= document.getElementById('codigo').value;
        let sampler= document.getElementById('sampler').value;
        let infadicional= document.getElementById('infadicional').value;
        let anotaciones = document.getElementById('anotaciones').value;
        let fechaenvio = document.getElementById('fechaenvio').value;
        let enviante = document.getElementById('enviante').value;

        let multiresiduo = document.getElementById('multiresiduo').value;
        let micotox = document.getElementById('micotox').value;
        let antimonio = document.getElementById('antimonio').value;
        let arsenico = document.getElementById('arsenico').value;
        let boro = document.getElementById('boro').value;
        let cadmio = document.getElementById('cadmio').value;
        let cinc = document.getElementById('cinc').value;
        let cobre = document.getElementById('cobre').value;
        let cromo = document.getElementById('cromo').value;
        let estaño = document.getElementById('estaño').value;
        let hierro = document.getElementById('hierro').value;
        let magnesio = document.getElementById('magnesio').value;
        let manganeso = document.getElementById('manganeso').value;
        let mercurio = document.getElementById('mercurio').value;
        let plata = document.getElementById('plata').value;
        let plomo = document.getElementById('plomo').value;
        let selenio = document.getElementById('selenio').value;
        let sodio = document.getElementById('sodio').value;
        let potasio = document.getElementById('potasio').value;
        let metalesSi = document.getElementById('metalesSi');
        let glyfo = document.getElementById('glyfo');
        let fosetyl = document.getElementById('fosetyl');
        let etefon = document.getElementById('etefon');
        let clorato = document.getElementById('clorato');
        let diquat = document.getElementById('diquat');
        let kasugamicina = document.getElementById('kasugamicina');
        let validamicina = document.getElementById('validamicina');
        let hidroxiq= document.getElementById('hidroxiq');
        let acidoOx = document.getElementById('acidoOx');
        let acrilamida = document.getElementById('acrilamida');
        let usa = document.getElementById('usa').value;
        let eu = document.getElementById('eu').value;
        let codex = document.getElementById('codex').value;
        let can = document.getElementById('can').value;
        let aus = document.getElementById('aus').value;
        let uk = document.getElementById('uk').value;
        let jap = document.getElementById('jap').value;
        let kor = document.getElementById('kor').value;
        let chin = document.getElementById('chin').value;
        let chil = document.getElementById('chil').value;
        let pan = document.getElementById('pan').value;
        let normal = document.getElementById('normal');
        let express = document.getElementById('express');
        let superexpress = document.getElementById('superexpress');
        let ditios = document.getElementById('ditios').value;
        

        generatePDF( NombreSolicitante, Nit, TelefonoContacto, Direccion, Cuidad, PersonaContacto,NombreFacturante,NitFacturante,CuidadFacturante,TelefonoFacturante, fact, CorrResul, matriz, lugar, productor, fecha, codigo, sampler
                    , infadicional,anotaciones,fechaenvio,enviante,multiresiduo,micotox,antimonio,arsenico,boro,cadmio,cinc,cobre,cromo,estaño,hierro, magnesio,manganeso,mercurio,plata, plomo,selenio,sodio,potasio,metalesSi,glyfo,fosetyl,etefon,clorato,diquat,kasugamicina,validamicina,hidroxiq,acidoOx,acrilamida,usa,eu,codex,can,aus,uk,jap,kor,chin,chil,pan,normal,express,superexpress,
                    ditios
            );
    })

});

async function generatePDF(NombreSolicitante, Nit, TelefonoContacto, Direccion, Ciudad,PersonaContacto,NombreFacturante,NitFacturante,DireccionFacturante,TelefonoFacturante,fact, CorrResul, matriz, lugar, productor, fecha,codigo, sampler
                          , infadicional,anotaciones, fechaenvio, enviante, multiresiduo,micotox,antimonio,arsenico,boro,cadmio,cinc,cobre,cromo,estaño,hierro, magnesio,manganeso,mercurio,plata, plomo,selenio,sodio,potasio, metalesSi,glyfo,fosetyl,etefon,clorato,diquat,kasugamicina,validamicina,hidroxiq,acidoOx,acrilamida
                          ,usa,eu,codex,can,aus,uk,jap,kor,chin,chil,pan
    ) {
    const image = await loadImage("imagenes/FormatoSolicitud2.jpg");
    
    const pdf = new jsPDF('1', 'pt', [792, 612]);

    pdf.addImage(image, 'PNG', 0, 0, 792, 612);
    
    pdf.setFontSize(9);
    pdf.text(NombreSolicitante, 120, 101);
    pdf.text(Nit, 425, 101);
    pdf.text(Direccion, 120, 119);
    pdf.text(Ciudad, 425, 119);
    pdf.setFontSize(7);
    pdf.text(PersonaContacto, 625, 101);
    pdf.setFontSize(7);
    pdf.text(TelefonoContacto, 625, 119);
    pdf.setFontSize(9);
    pdf.text(NombreFacturante, 220, 160);
    pdf.text(NitFacturante, 625, 160);
    pdf.text(DireccionFacturante, 220, 180);
    pdf.text(TelefonoFacturante, 625, 180);
    pdf.setFontSize(8);
    pdf.text(fact, 225, 195);
    pdf.text(CorrResul, 225, 220);
    pdf.setFontSize(9);
    pdf.text(matriz, 220, 265);
    pdf.text(lugar, 545, 265);
    pdf.text(productor, 220, 280);
    pdf.text(fecha, 545, 280);
    pdf.text(codigo, 220, 295);
    pdf.text(sampler, 545, 295);
    pdf.text(infadicional, 220, 315);
    pdf.setFontSize(8);
    pdf.text(multiresiduo, 154, 364);
    pdf.text(micotox, 684, 364);
    
    // IMPRESION METALES
    const metals = [
        'antimonio', 'arsenico', 'boro', 'cadmio', 'cinc', 'cobre','cromo', 'estaño', 'hierro', 'magnesio', 'manganeso', 'mercurio','plata', 'plomo', 'selenio', 'sodio', 'potasio'];
    
    const selectedValues = metals
    .filter(metalId => document.getElementById(metalId).checked)  
    .map(metalId => document.getElementById(metalId).value)  
    .filter(value => value.trim() !== '')  
    .join(', ');  

    pdf.setFontSize(10);
    pdf.text(selectedValues, 575, 417);
     
    const mrls = [
        'usa','eu','codex','can','aus','uk','jap','kor','chin','chil','pan'];
    
    const selectedmrls = mrls
    .filter(mrlsId => document.getElementById(mrlsId).checked)  
    .map(mrlsId => document.getElementById(mrlsId).value)  
    .filter(value => value.trim() !== '')  
    .join(', ');  

    pdf.setFontSize(8);
    pdf.text(selectedmrls, 25, 470); 
    pdf.setFontSize(8);
    pdf.text(metalesSi.value, 690, 400);
    pdf.setFontSize(11);
    pdf.text(glyfo.value, 163, 418);
    pdf.text(fosetyl.value, 368, 365);
    pdf.text(etefon.value, 368, 383);
    pdf.text(clorato.value, 368, 400);
    pdf.text(diquat.value, 368, 418);
    pdf.text(kasugamicina.value, 525, 365);
    pdf.text(validamicina.value, 525, 383);
    pdf.text(hidroxiq.value, 525, 400);
    pdf.text(acidoOx.value, 525, 418);
    pdf.text(acrilamida.value, 700, 383);
    pdf.setFontSize(9);


    const maxWidth = 500; // ancho máximo
    const lines = pdf.splitTextToSize(anotaciones, maxWidth);  
    pdf.text(lines, 235, 460); 
   
    pdf.text(fechaenvio, 325, 540);
    pdf.text(enviante, 540, 540);
  
    
    function updateDT() {
        const selectElement = document.getElementById('ditios');
        const selectedValue = selectElement.value;

        // Determina las coordenadas basadas en el valor seleccionado
        let coordinates = { x: 0, y: 0 };

        switch (selectedValue) {
            case ' ':
                coordinates = { x: 154, y: 383 }; // Coordenadas para valor vacío
                break;
            case 'DT1':
                coordinates = { x: 154, y: 383 }; // Coordenadas para Propineb
                break;
            case 'Propineb':
                coordinates = { x: 154, y: 400 }; // Coordenadas para Propineb
                break;
            case 'Mancozeb':
                coordinates = { x: 154, y: 400 }; // Coordenadas para Mancozeb
                break;
            case 'Thiram':
                coordinates = { x: 154, y: 400 }; // Coordenadas para Thiram
                break;
            case 'Metiram':
                coordinates = { x: 154, y: 400 }; // Coordenadas para Metiram
                break;
            default:
                coordinates = { x: 154, y: 400 }; // Coordenadas por defecto
        }

        return { text: selectedValue, coordinates: coordinates };
    }

    const { text, coordinates } = updateDT();

        pdf.setFontSize(8);
        pdf.text(text, coordinates.x, coordinates.y);
        const normalChecked = document.getElementById("normal").checked;  
            const expressChecked = document.getElementById("express").checked;  
            const superexpressChecked = document.getElementById("superexpress").checked;  

            // Imprimimos 'X' o '' dependiendo de si están seleccionados  
            pdf.text(normalChecked ? 'X' : '', 360, 506);  
            pdf.text(expressChecked ? 'X' : '', 540, 506);  
            pdf.text(superexpressChecked ? 'X' : '', 700, 506);  


    pdf.save("example.pdf");
}