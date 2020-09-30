# manwe_web

Repository to host manwe's project web

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