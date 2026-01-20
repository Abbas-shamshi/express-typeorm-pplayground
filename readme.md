# Express TypeORM Playground

A Node.js REST API built with Express.js, TypeORM, and PostgreSQL, featuring MQTT integration for IoT/messaging capabilities.

## 🚀 Features

- **Express.js** - Fast, minimalist web framework
- **TypeORM** - Object-Relational Mapping with PostgreSQL
- **MQTT Integration** - Real-time messaging support
- **Zod Validation** - Schema-based request validation
- **Migration System** - Database version control
- **Modular Architecture** - Clean, scalable code structure

## 📋 Prerequisites

- Node.js (v14 or higher)
- PostgreSQL database
- npm or yarn

## 🛠️ Installation

1. Clone the repository:
```bash
git clone <repository-url>
cd express-typeorm-playground
```

2. Install dependencies:
```bash
npm install
```

3. Configure your database:
   - Open [src/env/local.js](src/env/local.js)
   - Update the database credentials:
   ```javascript
   db_config: {
     type: "postgres",
     host: "localhost",
     port: 5432,
     username: "your_username",
     password: "your_password",
     database: "your_database"
   }
   ```

4. Create the database:
```bash
# Connect to PostgreSQL and create database
psql -U postgres
CREATE DATABASE your_database;
```

5. Run migrations:
```bash
npm run migration:run
```

## 🏃 Running the Application

Development mode with auto-reload:
```bash
npm run dev
```

The server will start on `http://localhost:3000`

## 📡 API Endpoints

### Health Check
- `GET /` - Check if API is running

### Users
- `GET /users` - Get all users
- `GET /users/:id` - Get user by ID
- `POST /users` - Create a new user
- `DELETE /users/:id` - Delete user by ID

### MQTT
- MQTT endpoints available at `/mqtt`

## 🗄️ Database Migrations

Generate a new migration:
```bash
npm run migration:generate
```

Run pending migrations:
```bash
npm run migration:run
```

Revert the last migration:
```bash
npm run migration:revert
```

## 📁 Project Structure

```
express-typeorm-playground/
├── src/
│   ├── env/                    # Environment configuration
│   │   └── local.js           # Local config (DB, MQTT, Server)
│   ├── middleware/            # Express middlewares
│   │   ├── errorMiddleware.js
│   │   └── validateMiddleware.js
│   ├── migrations/            # TypeORM migrations
│   ├── modules/               # Feature modules
│   │   └── users/
│   │       ├── user.controller.js
│   │       ├── user.entity.js
│   │       ├── user.repository.js
│   │       ├── user.routes.js
│   │       ├── user.schema.js
│   │       └── user.service.js
│   ├── mqtt/                  # MQTT integration
│   │   ├── mqtt.controller.js
│   │   ├── mqtt.routes.js
│   │   ├── mqtt.service.js
│   │   ├── mqttClient.js
│   │   └── mqttSubscriber.js
│   ├── utils/                 # Utility functions
│   │   └── appError.js
│   ├── database.js            # TypeORM DataSource
│   └── index.js               # Application entry point
├── package.json
├── typeorm.config.js          # TypeORM CLI configuration
└── readme.md
```

## 🔧 Technologies

- **Express.js** (v5.2.1) - Web framework
- **TypeORM** (v0.3.28) - ORM
- **PostgreSQL** - Database
- **MQTT** (v5.14.1) - Messaging protocol
- **Zod** (v4.3.5) - Validation library
- **Nodemon** (v3.1.11) - Development auto-reload

## 🧪 Development

The project uses:
- **Zod schemas** for request validation
- **Error middleware** for centralized error handling
- **Repository pattern** for data access
- **Service layer** for business logic
- **Controller layer** for request handling

## 📝 Configuration

Edit [src/env/local.js](src/env/local.js) to configure:
- Database connection settings
- MQTT broker URL (default: `mqtt://test.mosquitto.org`)
- Server port (default: 3000)

## 🤝 Contributing

1. Fork the repository
2. Create a feature branch
3. Commit your changes
4. Push to the branch
5. Open a Pull Request

## 📄 License

ISC

## 🐛 Troubleshooting

**Database connection failed:**
- Verify PostgreSQL is running
- Check database credentials in [src/env/local.js](src/env/local.js)
- Ensure the database exists

**MQTT connection issues:**
- Check MQTT broker URL
- Verify network connectivity
- Try alternative brokers if needed

**Migration errors:**
- Ensure database is accessible
- Check migration files in [src/migrations/](src/migrations/)
- Verify TypeORM configuration
