require("dotenv/config");

const JwtConfig = {
  privateKey: process.env.PRIVATE_KEY.replace(/\\n/g, "\n"),
  publicKey: process.env.PUBLIC_KEY.replace(/\\n/g, "\n"),
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
  JWTCONFIG: JwtConfig,
};
