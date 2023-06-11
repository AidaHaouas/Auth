require("dotenv/config");
const JwtConfig = {
  privateKey: "",
  publicKey: "",
};
const ServerConfig = {
  port: process.env.PORT,
};
const DataBaseConfig = {
  url: process.env.DATABASE_URL,
  dbName: process.env.DATABASE_Name,
};
module.exports = {
  SERVER_CONFIG: ServerConfig,
  DATABASE_CONFIG: DataBaseConfig,
};
