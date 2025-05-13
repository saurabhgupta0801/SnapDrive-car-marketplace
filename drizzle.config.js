/** @type { import("drizzle-kit").Config } */
export default {
    schema: "./configs/schema.js",
    dialect: 'postgresql',
    dbCredentials: {
      url: 'postgresql://neondb_owner:npg_syCJPWiug72t@ep-wispy-moon-a40jgopj-pooler.us-east-1.aws.neon.tech/SNAPDRIVE?sslmode=require',
    }
  };