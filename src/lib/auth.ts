import { LibsqlDialect } from "@libsql/kysely-libsql";
import { betterAuth } from "better-auth";
import { dash } from "@better-auth/infra";

const dialect = new LibsqlDialect({
  url: process.env.TURSO_DATABASE_URL!,
  authToken: process.env.TURSO_AUTH_TOKEN,
})

export const auth = betterAuth({
  database: {
    dialect,
    type: 'sqlite'
},
  emailAndPassword: { enabled: true },
  plugins: [dash()]
});
