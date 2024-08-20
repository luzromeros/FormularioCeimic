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
    });
}

let signaturePad = null;

window.addEventListener('load', async () => {

    //const canvas = document.querySelector("canvas");
   // canvas.height = canvas.offsetHeight;
    //canvas.width = canvas.offsetWidth;

    //signaturePad = new SignaturePad(canvas, {});

    const form = document.querySelector('#form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();

       
        let NombreSolicitante = document.getElementById('NombreSolicitante').value;
        let Nit = document.getElementById('Nit').value;
        let TelefonoContacto = document.getElementById('TelefonoContacto').value;
        let Direccion = document.getElementById('Direccion').value;
        let Cuidad = document.getElementById('Ciudad').value;
        //let hijos = document.querySelector('input[name="hijos"]:checked').value;
        let PersonaContacto = document.getElementById('PersonaContacto').value;
       // let discapacidad = document.querySelector('input[name="discapacidad"]:checked').value;
       // let discapacidadDesc = document.getElementById('discapacidad-desc').value;
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

        let multiresiduo = document.getElementById('multiresiduo').value;
        let ditios = document.getElementById('ditios').value;
        


        


        generatePDF( NombreSolicitante, Nit, TelefonoContacto, Direccion, Cuidad, PersonaContacto,NombreFacturante,NitFacturante,CuidadFacturante,TelefonoFacturante, fact, CorrResul, matriz, lugar, productor, fecha, codigo, sampler
                    , infadicional, multiresiduo,ditios
            );
    })

});

async function generatePDF(NombreSolicitante, Nit, TelefonoContacto, Direccion, Ciudad,PersonaContacto,NombreFacturante,NitFacturante,DireccionFacturante,TelefonoFacturante,fact, CorrResul, matriz, lugar, productor, fecha,codigo, sampler
                          , infadicional, multiresiduo,ditios
    ) {
    const image = await loadImage("imagenes/FormatoSolicitud2.jpg");
    
    const pdf = new jsPDF('1', 'pt', [792, 612]);

    pdf.addImage(image, 'PNG', 0, 0, 792, 612);
    //pdf.addImage(signatureImage, 'PNG', 200, 605, 300, 60);

    

    //const date = new Date();
    //pdf.text(date.getUTCDate().toString(), 235, 150);
    //pdf.text((date.getUTCMonth() + 1).toString(), 275, 150);
    //pdf.text(date.getUTCFullYear().toString(), 320, 150);

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
    /*pdf.setFillColor(0,0,0);

    if (parseInt(hijos) === 0) {
        pdf.circle(255, 374, 4, 'FD');
    } else {
        pdf.circle(190, 374, 4, 'FD');
        pdf.text(numeroHijos.toString(), 355, 378);
    }

    if (parseInt(discapacidad) === 0) {
        pdf.circle(285, 718, 4, 'FD');
    } else {
        pdf.circle(240, 718, 4, 'FD');
        pdf.text(discapacidadDesc, 350, 720);
    }
*/


    pdf.save("example.pdf");
}