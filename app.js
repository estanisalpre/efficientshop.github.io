//Inicializa los localStorage
//Llama a la funcion para inicializar
frutas();
lacteos();
carnes();
panaderia();
congelados();
conservas();
cereales();
legumbres();
bebidas();
snacks();
condimentos();
limpieza();
mascotas();
vehiculo();
otros();

//Frutas & Verduras
function frutas(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoFrutas");
    const inputCantidad = document.querySelector("#cantidadFrutas");
    const form = document.querySelector("#form_frutas");
    const ul = document.querySelector("#lista_frutas");
    const vacio = document.querySelector(".vacioFrutas");

    //Cargamos los datos del localStorage al inicio
    document.addEventListener('DOMContentLoaded', recuperarProductosFrutas);

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista

            //Guardamos el producto y cantidad ingresada
            guardarProductoLocalStorageFrutas(textProducto, textCantidad);

            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });

    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css

        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item

            //Elimina el producto del localStorage
            eliminarProductoLocalStorageFrutas(item);
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }

    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }
}
//Lacteos & Huevos
function lacteos(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoLacteos");
    const inputCantidad = document.querySelector("#cantidadLacteos");
    const form = document.querySelector("#form_lacteos");
    const ul = document.querySelector("#lista_lacteos");
    const vacio = document.querySelector(".vacioLacteos");

    //Cargamos los datos del localStorage al inicio
    document.addEventListener('DOMContentLoaded', recuperarProductosLacteos);

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
        
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad

        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista

            //Guardamos el producto y cantidad ingresada
            guardarProductoLocalStorageLacteos(textProducto, textCantidad);
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item

            //Elimina el producto del localStorage
            eliminarProductoLocalStorageLacteos(item);
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }  

    function recuperarProductosLacteos(){
        let productos = JSON.parse(localStorage.getItem('productosLacteos')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageLacteos(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosLacteos')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosLacteos', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageLacteos(item) {
        let productos = JSON.parse(localStorage.getItem('productosLacteos')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosLacteos', JSON.stringify(productos));
    }      
}
//Carnes & Pescados
function carnes(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoCarnes");
    const inputCantidad = document.querySelector("#cantidadCarnes");
    const form = document.querySelector("#form_carnes");
    const ul = document.querySelector("#lista_carnes");
    const vacio = document.querySelector(".vacioCarnes");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });

    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }   

    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }   
}
//Panaderia
function panaderia(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoPanaderia");
    const inputCantidad = document.querySelector("#cantidadPanaderia");
    const form = document.querySelector("#form_panaderia");
    const ul = document.querySelector("#lista_panaderia");
    const vacio = document.querySelector(".vacioPanaderia");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }    

    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }    
}
//Congelados
function congelados(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoCongelados");
    const inputCantidad = document.querySelector("#cantidadCongelados");
    const form = document.querySelector("#form_congelados");
    const ul = document.querySelector("#lista_congelados");
    const vacio = document.querySelector(".vacioCongelados");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }   

    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }     
}
//Conservas & Frascos
function conservas(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoConservas");
    const inputCantidad = document.querySelector("#cantidadConservas");
    const form = document.querySelector("#form_conservas");
    const ul = document.querySelector("#lista_conservas");
    const vacio = document.querySelector(".vacioConservas");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }     
    
    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }
}
//Cereales & Granos
function cereales(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoCereal");
    const inputCantidad = document.querySelector("#cantidadCereal");
    const form = document.querySelector("#form_cereal");
    const ul = document.querySelector("#lista_cereal");
    const vacio = document.querySelector(".vacioCereal");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }   
    
    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }
}
//Legumbres & Frutos Secos
function legumbres(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoLegumbres");
    const inputCantidad = document.querySelector("#cantidadLegumbres");
    const form = document.querySelector("#form_legumbres");
    const ul = document.querySelector("#lista_legumbres");
    const vacio = document.querySelector(".vacioLegumbres");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }    
    
    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }
}
//Bebidas
function bebidas(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoBebidas");
    const inputCantidad = document.querySelector("#cantidadBebidas");
    const form = document.querySelector("#form_bebidas");
    const ul = document.querySelector("#lista_bebidas");
    const vacio = document.querySelector(".vacioBebidas");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    } 
    
    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }
}
//Snacks & Golosinas
function snacks(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoSnacks");
    const inputCantidad = document.querySelector("#cantidadSnacks");
    const form = document.querySelector("#form_snacks");
    const ul = document.querySelector("#lista_snacks");
    const vacio = document.querySelector(".vacioSnacks");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }      
    
    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }
}
//Condimentos
function condimentos(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoCondimentos");
    const inputCantidad = document.querySelector("#cantidadCondimentos");
    const form = document.querySelector("#form_condimentos");
    const ul = document.querySelector("#lista_condimentos");
    const vacio = document.querySelector(".vacioCondimentos");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }      
    
    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }
}
//Limpieza & Hogar
function limpieza(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoLimpieza");
    const inputCantidad = document.querySelector("#cantidadLimpieza");
    const form = document.querySelector("#form_limpieza");
    const ul = document.querySelector("#lista_limpieza");
    const vacio = document.querySelector(".vacioLimpieza");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }  
    
    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }
}
//Mascotas
function mascotas(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoMascotas");
    const inputCantidad = document.querySelector("#cantidadMascotas");
    const form = document.querySelector("#form_mascotas");
    const ul = document.querySelector("#lista_mascotas");
    const vacio = document.querySelector(".vacioMascotas");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    } 
    
    function recuperarProductosFrutas(){
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageFrutas(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageFrutas(item) {
        let productos = JSON.parse(localStorage.getItem('productosFrutas')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosFrutas', JSON.stringify(productos));
    }
}
//Vehiculo
function vehiculo(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoVehiculo");
    const inputCantidad = document.querySelector("#cantidadVehiculo");
    const form = document.querySelector("#form_vehiculo");
    const ul = document.querySelector("#lista_vehiculo");
    const vacio = document.querySelector(".vacioVehiculo");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
        
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo
            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";
            
            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        }
    });
       
    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }   
    
    function recuperarProductosVehiculo(){
        let productos = JSON.parse(localStorage.getItem('productosVehiculo')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageVehiculo(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosVehiculo')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosVehiculo', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageVehiculo(item) {
        let productos = JSON.parse(localStorage.getItem('productosVehiculo')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosVehiculo', JSON.stringify(productos));
    }
}
//Otros
function otros(){
    //Declaramos variables
    const inputProducto = document.querySelector("#productoOtros");
    const inputCantidad = document.querySelector("#cantidadOtros");
    const form = document.querySelector("#form_otros");
    const ul = document.querySelector("#lista_otros");
    const vacio = document.querySelector(".vacioOtros");

    form.addEventListener('submit', (e) => {
        e.preventDefault(); //evita que se recargue pagina
    
        const textProducto = inputProducto.value.trim(); //captura lo que escribimos en input
        const textCantidad = inputCantidad.value.trim(); //captura la cantidad
    
        if (textProducto !== '' && textCantidad !== ''){
            const liProducto = document.createElement('li'); //crea un nuevo li
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p'); //crea un nuevo parrafo

            pProducto.textContent = textProducto; //al parrafo le agrega el texto capturado
            pCantidad.textContent = textCantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); //al li le agrega parrafo
            liProducto.appendChild(addDeleteBtn()); //al li le agrega el boton eliminar
            ul.appendChild(liProducto); //al ul le agrega la lista
        
            inputProducto.value = ""; //eliminar contenido del input productos
            inputCantidad.value = ""; //eliminar contenido del input cantidad
            vacio.style.display = "none"; //elimina el texto al agregarse el item
        } 
    });

    function addDeleteBtn(){
        const deleteBtn = document.createElement('button'); //crea un boton
    
        deleteBtn.textContent = "X"; //agrega un texto al boton 
        deleteBtn.className = "btn_eliminar"; //le agrega la clase css
        //funcion con un event listener tipo click
        deleteBtn.addEventListener('click', (e) => {
            const item = e.target.parentElement;
            ul.removeChild(item); //elimina el item
    
            //Si la cantidad de "ul" es '0' entonces mostrar texto
            if (ul.children.length === 0) { 
                vacio.style.display = "block";
            } else { //sino, no mostrarlo
                vacio.style.display = "none";
            }
        })
        return deleteBtn;
    }  
    
    function recuperarProductosOtros(){
        let productos = JSON.parse(localStorage.getItem('productosOtros')) || [];
        productos.forEach(({ producto, cantidad }) => {
            const liProducto = document.createElement('li');
            const pCantidad = document.createElement('p');
            const pProducto = document.createElement('p');
            pProducto.textContent = producto;
            pCantidad.textContent = cantidad;
            pCantidad.className = "p_cantidad";

            liProducto.appendChild(pCantidad);
            liProducto.appendChild(pProducto); // al li le agrega párrafo
            liProducto.appendChild(addDeleteBtn(producto)); // al li le agrega el botón eliminar
            ul.appendChild(liProducto); // al ul le agrega la lista
        });
        if (ul.children.length === 0) { 
            vacio.style.display = "block";
        } else {
        vacio.style.display = "none";
        }
    }    
    
    function guardarProductoLocalStorageOtros(producto, cantidad) {
        let productos = JSON.parse(localStorage.getItem('productosOtros')) || [];
        productos.push({ producto, cantidad });
        localStorage.setItem('productosOtros', JSON.stringify(productos));
    }

    function eliminarProductoLocalStorageOtros(item) {
        let productos = JSON.parse(localStorage.getItem('productosOtros')) || [];
        const productoText = item.querySelector('p:nth-child(2)').textContent;
        productos = productos.filter(({ producto }) => producto !== productoText);
        localStorage.setItem('productosOtros', JSON.stringify(productos));
    }
}

//Funcion abrir y cerrar hamburguesa
function abrir_menu(){
    document.getElementById("abrir_menu").style.display="flex";
    document.getElementById("abrir_menu").style.boxShadow="0px 0px 0px 100vmax rgba(0,0,0,.5)";
    //redes se ocultan y h5 footer
    document.getElementById("cont_redes").style.display="none";
    document.getElementById("dev_by").style.display="none";
}

function cerrar_menu(){
    document.getElementById("abrir_menu").style.display="none";
    //redes regresan a normalidad y h5 footer
    document.getElementById("cont_redes").style.display="flex";
    document.getElementById("dev_by").style.display="block";
}

//Funciones para abrir categorias y cerrarlas
//Declaramos variables dentro de "categorias"
const categorias = {
    contFrutas: document.getElementById("cont_frutas_verduras"),
    contLacteos: document.getElementById("cont_lacteos_huevo"),
    contCarnes: document.getElementById("cont_carnes_pescado"),
    contPanaderia: document.getElementById("cont_panaderia"),
    contCongelados: document.getElementById("cont_congelados"),
    contConservas: document.getElementById("cont_conservas_frascos"),
    contCereal: document.getElementById("cont_cereal_granos"),
    contLegumbres: document.getElementById("cont_legumbres"),
    contBebidas: document.getElementById("cont_bebidas"),
    contSnacks: document.getElementById("cont_snacks"),
    contCondimentos: document.getElementById("cont_condimentos"),
    contLimpieza: document.getElementById("cont_limpieza"),
    contMascotas: document.getElementById("cont_mascotas"),
    contVehiculo: document.getElementById("cont_vehiculo"),
    contOtros: document.getElementById("cont_otros")
};

//Declaramos Contenedor Categorias
const contCategorias = document.getElementById("cont_categorias");

function abrirCategoria(event) {
    const categoria = event.target.getAttribute('data-category');
    Object.values(categorias).forEach(cont => cont.style.display = "none");
    categorias[categoria].style.display = "flex";
    contCategorias.style.display = "none";
}

function regresar() {
    Object.values(categorias).forEach(cont => cont.style.display = "none");
    contCategorias.style.display = "flex";
}

