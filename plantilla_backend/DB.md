Crear database en PostgresSQL

_Terminal_

plsq -U postgres (user BD)
123456 (password BD)

    Create database name_database;

    \c name_database

    Create table name_table ( id serial, elem1 varchar(50), elem2 int );

_database.js_

Actualizar configuración de conexión con la BD

    ```
        const pool = new Pool({
            host: "localhost",
            user: "postgres",
            password: "123456",
            database: "name_database",
            allowExitOnIdle: true,
        });
    ```

_index.js_

Crear metodos HTTPS en base a cada function creada en database.js
