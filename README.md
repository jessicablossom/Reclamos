# Pagina de Reclamos

Web app realizada con reactjs, componentes de material UI, dummy backend con mockapi & firebase para cloud storage de imagenes.


Instalacion inicial :
### `npm install`

El mismo va a instalar las dependencias necesarias como son Axios para endpoint request, material UI para componentes de layout, firebase para cloud image storage. 


## Correr el proyecto

Para ejecutar de manera local :

### `npm start`

Corre la aplicacion en development mode.\
Se abre en [http://localhost:3000](http://localhost:3000) en tu navegador preferido.

## Endpoints
API de reclamos: https://633a23d9e02b9b64c60c9d72.mockapi.io/claim

API de comunas: https://633a23d9e02b9b64c60c9d72.mockapi.io/Comunas

## Mejoras a futuro
Si bien el proyecto esta completamente funcional, podrian sumarse funcionalidades para mejorar la experiencia de usuario.
- Agregar el nombre de la imagen al lado del boton adjuntar, una vez que finalizo la carga con un action que permita removerla.
- Dar feedback al usuario mientras se procesa la informacion y se carga el reclamo (un loader y un badge de reclamo enviado exitosamente)
- Poder ingresar al detalle del reclamo (en un modal, dialog o con un componente collapse , para casos en los que el texto es muy largo, permitiendo que todas las cards tengan la misma altura)

