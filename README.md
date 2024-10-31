
# CRUD Productos

Este proyecto es una aplicación CRUD para la gestión de productos. Está construido con Node.js, Angular, y Docker, y utiliza Sequelize para manejar la base de datos.

## Requisitos previos
Antes de comenzar, asegúrate de tener instalados los siguientes componentes en tu entorno:

* Node.js (v14 o superior)
* Angular CLI (v12 o superior)
* Docker Desktop (para ejecutar contenedores)
* Git (para clonar el repositorio)

## Primeros pasos 
1. Clonar el repositorio:
2. Instalar dependencias:

Navega a la carpeta del proyecto clonado e instala todas las dependencias necesarias usando npm:

```bash
$ npm install
```
3. Configuración del entorno

Asegúrate de tener un archivo .env configurado con las credenciales correctas para conectarte a la base de datos. Puedes basarte en el archivo **.env.template** para configurarlo.
## Ejecucion del Docker
1. Verifica que Docker esté instalado y corriendo:

Asegúrate de que Docker Desktop esté ejecutándose en tu sistema.

2. Levantar los servicios con Docker Compose:

Ejecuta el siguiente comando en la raíz del proyecto para iniciar los contenedores en segundo plano:
```bash
$ docker compose up -d 
```

## Migración de la base de datos
Para aplicar las migraciones y crear las tablas en la base de datos, utiliza el siguiente comando:

```bash
$ npx sequelize-cli db:migrate
```
# Ejecutar la aplicación

Una vez que las migraciones hayan sido exitosamente aplicadas, puedes iniciar la aplicación

```bash
$ ng serve
```
La aplicación estará disponible en http://localhost:3001/item

# Características
* Crear nuevos productos
* Leer información de productos existentes
* Actualizar productos
* Eliminar productos

