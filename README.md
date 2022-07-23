# Hackaton-NUWE
repte #4 Operaciones CRUD

## Instructions:
The npm i (or npm install) is used to install all dependencies or devDependencies from package.json file

```
npm i
```

to run with node:
```
npm start
```

to run with nodemon:
```
npm run dev
```



Per a aquest repte s'ha d'implementar una API que contingui dos models bàsics on es puguin fer les operacions d'un CRUD amb cadascun i tornar les dades en format json.

## ✅ Objectius a implementar:

- L'api ha d'estar disponible al port: 3000

- S'han de proveir rutes per a les operacions següents:

    - obtenir tots els models d'una col·lecció
    - obtenir un model usant un identificador
    - crear un model
    - fer un update d'un model segons el vostre identificador
    - esborrar un model

- En cas que s'intenti consultar una ruta inexistent s'ha de contestar amb un codi de resposta 404.

- Les rutes per fer les operacions de cada model han d'estar separades, no hi ha d'haver una ruta general per obtenir tots els models, crear un model o actualitzar.

- Els models han d'estar emmagatzemats en una base de dades (SQL, MongoDB, etc.), cada petició que es faci a l'api, ha de fer una consulta a la base de dades per poder tornar la informació adequada.

- Les rutes han de complir amb les següents especificacions:

    - Ruta per obtenir tots els models:

        - S'ha d'implementar usant el mètode GET
        - Ha de tornar una llista amb les instàncies del model especificat:

    - Ruta de crear un model:

        - S'ha d'implementar amb el mètode POST
        - El cos de la petició HTTP ha de complir tots els camps del model, una vegada això sigui validat es procedirà a crear el model o tornar un missatge a l'usuari com que hi ha hagut un error.
        - Un cop creat el model s'ha de tornar amb un codi de resposta 201, i el cos de la resposta ha de contenir el model creat.

    - Ruta per obtenir un model segons identificador:

        - Usar el mètode GET

        - Aquesta ruta ha d'obtenir un identificador per poder buscar el model, la manera més senzilla de fer-ho és posar-lo a la URL. Per exemple: http://localhost:3000/models/asdf1jk2 .

        - Quan s'hagi realitzat la cerca d'acord amb l'identificador, s'ha de tornar un json amb la instància del model trobat.

        - En cas que no s'hagi trobat el model s'ha de tornar un codi de resposta 404.

    - Ruta per fer l'update:

        - S'ha d'implementar amb el mètode PUT

        - El cos de la petició HTTP ha de complir tots els camps del model, una vegada això sigui validat es procedirà a modificar el model o tornar un missatge a l'usuari com que hi ha hagut un error.

        - Un cop modificat el model s'ha de tornar amb un codi de resposta 201, i el cos de la resposta ha de contenir el model modificat.

    - Ruta per esborrar un model

        - Usar el mètode DELETE
        - Aquesta ruta ha d'obtenir un identificador per poder buscar el model, la manera més senzilla de fer-ho és posar-lo a la URL, com s'ha explicat abans.
        - Quan s'hagi realitzat la cerca d'acord a l'identificador, es procedirà a esborrar el model ia respondre amb un 201 de codi de resposta.
        - En cas que no s'hagi trobat el model s'ha de tornar un codi de resposta 404.

- L'estructura proposada per al sistema d'arxius és la següent:

    - Carpeta principal: Src

        - Aquesta carpeta servirà de contenidor per a totes les altres que continguin la lògica de funcionament de l'api. Dins d'aquesta inclourem els directoris següents:

            - Controller: lògica de funcionament de les peticions HTTP fetes al servidor. Aquesta carpeta ha de contenir en quina ruta rep l'api les peticions, quina informació n'extreu i com respon a cadascuna.

            - Middleware: és possible implementar interceptors per manejar temes com la validació del cos de les peticions HTTP o els paràmetres dels paràmetres passats per URL. En aquesta carpeta heu d'anar aquestes funcions.

            - Serveis: implementació de la lògica per interactuar amb la base de dades.

- Test amb Postman

## 🚚 Entrega

- Entregar el link al projecte de Github.
- La solució ha d'estar feta amb Java, Node.js o Php

## 🧐 Correcció

- Es miraran els objectius implementats: 400pts.
- Es mirarà si el projecte conté un README amb la informació bàsica per treballar amb el projecte i que segueixi: https://www.makeareadme.com: 100pts.
- Es mirarà la composició i l'estructura general del projecte: 100pts.
