# manwe_web

Repository to host manwe's project web

[Ayuda React](README_react.md)

[Documentación Boostrap-React](react-bootstrap.github.io/)

[Documentación Boostrap](https://getbootstrap.com/docs/4.5/getting-started/introduction/)

## Primeros pasos

### Descargar el repositorio

`git clone https://github.com/jaimefm14/manwe_web`

### Configurar claves

`git config --global credential.helper store`

## Actulizar y subir cambios

`git pull`

`git add .`

`git commit -m "mensaje"`

`git push`

## Cambiar de rama

`git pull`

`git checkout nombreRama`

`git pull`

## Ramas

### gh-pages

**No subir cambios**
Rama en la donde estan los archivos ya en producción (github pages)

### master

Rama de preproducción, se suben cambios que ya hayan sido testeados y aprobados.

De esta rama pasarian a gh-pages

### develop

Rama para el desarrollo de la web, aquí se hacen las pull request de las ramas de caracteristicas.

De momento rama en la que se desarrollará todo

### feature/+

Rama para realizar cambios y mejoras en caracteristicas de la web.

El nombre se compone de *feature/* y el nombre de la característica a cambiar o añadir.

Ejemplo: `feature/traduccionIngles`

## Google Analyics

Para añadir google analytics a la web hay que añadir estos comandos despues de los *imports* y antes del *class*

```javascript
import ReactGA from 'react-ga';
const trackingId = "UA-30843009-3";
ReactGA.initialize(trackingId);
ReactGA.pageview(window.location.pathname + window.location.search);
```
## Deploy Github pages
Para realizar un despliegue de la web hay que ejecutar los comandos:

~~~
npm run predeploy
npm run deploy
~~~

Este despliegue crea una nueva rama (en caso de no exista ya) "gh-pages" en el repositorio y sube todos los archivos resultantes de la compilación que realiza react.

Cuando se realice el despliegue, como tenemos un dominio personalizado, habrá que ir a las opciones del repositorio de github y configurar el dominio personalizado `manwe.tech` para que se vuelva a añadir el archivo CNAME.