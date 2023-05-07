import { migrateAll } from "../db";

try {
  console.log("Migrating complete ...");
  await migrateAll();
  console.log("Migration complete ...");
  process.exit(0);

} catch (err) {
  console.error(err);
  process.exit(1);
}