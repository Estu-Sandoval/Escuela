import datos from './datos.json' with { type: 'json' };


let miFragmento = new DocumentFragment();

let contenedor_entregas = document.querySelector(".entregas");

window.addEventListener("load",()=>{
    datos.forEach(tarea=>{
        let div_tarea = document.createElement("div");
        let estudiante = document.createElement("h1");
        let tema = document.createElement("h2");
        let fecha_entrega = document.createElement("h2");
        let estado = document.createElement("p");
        let btn_calificar = document.createElement("button");

        div_tarea.classList.add("tarea");
        estudiante.classList.add("tarea__estudiante");
        tema.classList.add("tarea__title");
        fecha_entrega.classList.add("tarea__fecha_de_entrega");
        estado.classList.add("tarea__estado");
        btn_calificar.classList.add("tarea__corregir")

        estudiante.textContent = tarea.estudiante;
        tema.textContent = tarea.tema;
        fecha_entrega.textContent = tarea.fecha_de_entrega;
        estado.textContent = tarea.estado;
        btn_calificar.textContent = "Calificar"

        div_tarea.appendChild(estudiante);
        div_tarea.appendChild(tema);
        div_tarea.appendChild(fecha_entrega);
        div_tarea.appendChild(estado);
        div_tarea.appendChild(btn_calificar);
        miFragmento.appendChild(div_tarea); 
    })
    
    contenedor_entregas.appendChild(miFragmento);
})