# Desafío - Veterinaria Js

En este desafío pondremos a prueba nuestros primeros conocimientos de Node Js desarrollando una pequeña aplicación backend que registre las horas de atención en una veterinaria.

Lee todo el documento antes de comenzar el desarrollo __individual__, para asegurarte de tener el máximo de puntaje y enfocar bien los esfuerzos.

## Descripción

Necesitarás crear 3 archivos:

  - __index.js:__ Archivo principal que deberá ser ejecutado para interactuar con la  aplicación. En este archivo se deberán importar las operaciones que creen y lean las citas de atención en la veterinaria.

  - __operaciones.js:__ En este archivo se deberán crear 2 funciones para:

    - Registrar: Agregar una nueva cita de una atención veterinaria que debe incluir:</br>
      - Nombre del animal</br>
      - Edad</br>
      - Tipo de animal</br>
      - Color del animal</br>
      - Enfermedad

    - Leer: Mostrar por consola todas las citas registradas.

- __citas.json:__ Deberá ser un json que simplemente guarde un arreglo vacío.

Para interactuar con el archivo index.js se deberán pasar argumentos por línea de comando especificando qué función se desea ejecutar, por ejemplo:

```node index.js registrar Benito "2 años" perro blanco vomitos```</br>
```node index.js leer```

Se deberá crear condiciones que evalúen, según el argumento correspondiente, qué función ejecutar:

```
if(operacion === "registrar"){
registrar(nombre, edad, animal, color, enfermedad)
}
if(operacion === "leer"){
leer()
}
```
<p align="center">
  <img src="https://github.com/Felipe-M-dev/nodejs-challenge01/blob/main/01.png?raw=true?raw=true" alt="Imagen 01"><br>
Imagen 1. Archivos del desafío</br>
Fuente: Desafío Latam
</p>

<p align="center">
  <img src="https://github.com/Felipe-M-dev/nodejs-challenge01/blob/main/02.png?raw=true?raw=true" alt="Imagen 02"><br>
Imagen 2. Archivo JSON de citas inicial</br>
Fuente: Desafío Latam
</p>

<p align="center">
  <img src="https://github.com/Felipe-M-dev/nodejs-challenge01/blob/main/03.png?raw=true?raw=true" alt="Imagen 03"><br>
Imagen 3. Archivo JSON de citas con 2 citas registradas</br>
Fuente: Desafío Latam
</p>

## Requerimientos

1. Ejecutar scripts con Node Js desde la terminal __(2 Puntos)__

2. Crear archivos con el módulo File System __(3 Puntos)__

3. Leer archivos con el módulo File System __(2 Puntos)__

4. Importar y exportar módulos en Node Js __(1 Punto)__

5. Utilizar argumentos escritos por línea de comandos __(2 Punto)__

😊¡Mucho éxito!
