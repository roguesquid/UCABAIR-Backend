# UCABAIR-Backend

## Project Overview

UCABAIR-Backend is a comprehensive management system for a plane factory like Airbus or Boeing. This system manages various aspects such as inventory, personnel, raw materials, inter-site requests, testing of materials and aircraft parts, aircraft testing, roles, privileges, employee benefits, customer users, personnel, suppliers, aircraft payments, and supplier payments. The system is built with PostgreSQL as the database, utilizing triggers and stored procedures to automate database operations.

The project follows the Model-View-Controller (MVC) architecture pattern and is built using JavaScript on the server-side with the Express.js framework. The application is server-side rendered using EJS (Embedded JavaScript templating) and Bootstrap for the frontend. It uses the Datatables library for managing tables in the frontend and Zod for validations in the backend API. The model connects to the PostgreSQL database via the `pg` plugin. For login functionality, JSON Web Tokens (JWT) and cookies are used to store user sessions.

## Technologies Used

- **Backend Framework**: Express.js
- **Frontend Libraries**: Bootstrap, Datatables, EJS (Embedded JavaScript templating)
- **Database**: PostgreSQL
- **Validation**: Zod
- **Authentication**: JSON Web Tokens (JWT)
- **Session Management**: Cookies
- **Database Library**: pg
- **Others**: cookie-parser, cors

## Project Structure
```
UCABAIR-Backend/
├── controller/
│ ├── auth.js
│ ├── avion.js
│ ├── cliente_juridico.js
│ ├── cliente_natural.js
│ ├── empleado.js
│ ├── lugar.js
│ ├── proveedor.js
│ ├── prueba.js
│ ├── reporte.js
│ └── rol.js
├── public/
├── views/
│ ├── inicio.ejs
│ ├── login.ejs
│ ├── registro_cliente_juridico.ejs
│ └── registro_cliente_natural.ejs
├── index.js
├── config.js
├── package.json
└── README.md
```

## Endpoints

### Authentication

- `POST /login` - Verify user login.
- `POST /logout` - Logout the user.

### Lugar (Location)

- `GET /lugar/estado` - Retrieve states.
- `GET /lugar/:estadoId/municipio` - Retrieve municipalities by state ID.
- `GET /lugar/:municipioId/parroquia` - Retrieve parishes by municipality ID.

### Cliente Natural (Natural Client)

- `GET /registrar-cliente-natural` - Render natural client registration page.
- `POST /cliente_natural` - Create a natural client.

### Cliente Juridico (Juridical Client)

- `GET /registrar-cliente-juridico` - Render juridical client registration page.
- `POST /cliente_juridico` - Create a juridical client.

### Avion (Aircraft)

- `GET /avion` - Retrieve all aircraft.
- `POST /avion` - Create an aircraft.
- `GET /avion/:id` - Retrieve an aircraft by ID.
- `PUT /avion/:id` - Update an aircraft by ID.
- `POST /avion/:id/eliminar` - Delete an aircraft by ID.

### Prueba (Tests)

- `GET /prueba` - Retrieve all tests.
- `POST /prueba` - Create a test.
- `POST /prueba/:id` - Retrieve a test by ID.
- `PUT /prueba/:id` - Update a test by ID.
- `POST /prueba/:id/eliminar` - Delete a test by ID.

### Proveedor (Supplier)

- `GET /proveedor` - Retrieve all suppliers.
- `POST /proveedor` - Create a supplier.
- `GET /proveedor/:id` - Retrieve a supplier by ID.
- `PUT /proveedor/:id` - Update a supplier by ID.
- `POST /proveedor/:id/eliminar` - Delete a supplier by ID.

### Empleado (Employee)

- `GET /empleado` - Retrieve all employees.
- `POST /empleado` - Create an employee.
- `GET /empleado/:id` - Retrieve an employee by ID.
- `PUT /empleado/:id` - Update an employee by ID.
- `POST /empleado/:id/eliminar` - Delete an employee by ID.

### Rol (Role)

- `GET /rol` - Retrieve all roles.
- `POST /rol` - Create a role.
- `GET /rol/:id` - Retrieve a role by ID.
- `PUT /rol/:id` - Update a role by ID.
- `POST /rol/:id/eliminar` - Delete a role by ID.

### Reportes (Reports)

- `GET /reportes` - Retrieve reports page.
- `GET /reportes/:reporteNombre` - Retrieve a specific report page.
- `GET /reportes/pagos-a-proveedores/:fechaInicioFin` - Retrieve supplier payments report by date range.

## Installation

1. Clone the repository:
    ```sh
    git clone <repository-url>
    ```
2. Install dependencies:
    ```sh
    pnpm install
    ```
3. Create a `.env` file and configure your environment variables.
4. Start the server:
    ```sh
    pnpm dev
    ```

## License

This project is licensed under the ISC License. See the [LICENSE](LICENSE) file for details.

## Contributions

Contributions are welcome! Please open an issue or submit a pull request for any changes or enhancements.

## Contact

For any inquiries, please contact the author at [email@example.com].

---

Happy coding! 🚀
