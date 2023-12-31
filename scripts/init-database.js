const { db } = require('@vercel/postgres');

async function createUsersTable(client) {
  try {
    await client.sql`CREATE EXTENSION IF NOT EXISTS "uuid-ossp"`;
    await client.sql`
      CREATE TABLE IF NOT EXISTS users (
        id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email TEXT NOT NULL UNIQUE,
        password TEXT NOT NULL
      );
    `;
    console.log(`Created "users" table`);
  } catch (error) {
    console.error('Error seeding users:', error);
    throw error;
  }
}

async function main() {
  const client = await db.connect();
  await createUsersTable(client);
  await db.end();
}

main().catch((err) => {
  console.error(
    'An error occurred while attempting to seed the database:',
    err,
  );
});
