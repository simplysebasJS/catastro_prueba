
export const config = {
    DB_HOST: process.env.DB_HOST || 'localhost',
    DB_DATABASE: process.env.DB_DATABASE || 'catastro_db',
    DB_USER: process.env.DB_USER || 'postgres',
    DB_PASSWORD: process.env.DB_PASSWORD || 'superuser',
    DB_PORT: parseInt(process.env.DB_PORT, 10) || 5432,
    DB_SCHEMA: 'app',
}
