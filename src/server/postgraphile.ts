import { config } from "./config";
import { Pool } from 'pg';
import { postgraphile } from "postgraphile";

const pool = new Pool({
    user: config.DB_USER,
    host: config.DB_HOST,
    database: config.DB_DATABASE,
    password: config.DB_PASSWORD,
    port: config.DB_PORT,
});

export {pool as pg};

export default postgraphile(
  pool,
  config.DB_SCHEMA,
  {
    graphiql: true,
    enhanceGraphiql: true,
    graphqlRoute: "/api/graphql",
    graphiqlRoute: "/api/graphiql",
    retryOnInitFail: true, 
  }
);
