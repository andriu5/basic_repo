# 1. Obteniendo los 151 pokemones usando la API: https://pokeapi.co/

Se uso jQuery, especificamente la funcion $.get para hacer AJAX (que es una forma de obtener información de otra URL sin tener que volver a cargar su propia página). Si lo hiciéramos usando JavaScript puro (que es cómo se implementa la función $.get en jQuery), tendríamos que escribir mucho código para que AJAX funcione para todos los diferentes tipos y versiones de navegadores. Gracias jQuery!

# 2. API FLOW

En nuestro Localhost:8888 hacemos una peticion a nuestro servidor web, que corre en nuestro servidor local, y nos va alimentar nuestra paginas web. Dentro de esta pagina web usamos JQuery para hacer una llamada AJAX a la API.

La funcion que implementa el motodo GET de AJAX en JQuery es: `$.get(url, callback,'json')`

- url: Aqui vamos a darle la URL, la localizacion que nos indica donde se encuentra la API.
- callback: Es la funcion que corremos una vez obtenida la respuesta.
-json: es el tipo de dato que esta esperando va ser datos JSON.

Una vez que se obtiene respuesta de la llamada AJAX get, se llama a la funcion callback(), lo cual es un actualizador dinamico de nuestra pagina web.

## Note: el repo tiene un archivo .gitignore para controlar que se va compartir.
