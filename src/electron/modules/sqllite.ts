//import sqlite from "sqlite3";
import { getAssetPath } from "../pathResolver.js";
import fs from "fs";

const dbPath = getAssetPath("/data/data-base.db");

export async function initialCheck(): Promise<boolean> {
  console.log("pepe");
  return await checkDBExist();
}

async function checkDBExist(): Promise<boolean> {
  console.log("pepe2");
  try {
    if (!fs.existsSync(dbPath)) {
      fs.writeFileSync(dbPath, "");
    }
    return true;
  } catch (error) {
    console.log(error);
    return false;
  }
}

// export const db = () => {
//   console.log(dbPath);

//   if (!fs.existsSync(dbPath)) {
//     fs.writeFileSync(dbPath, "");
//   }
//   // Connect to the database in a physical file
//   const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, (error) => {
//     console.log(error);
//   });

//   // Database operations
//   db.serialize(() => {
//     // Create a table
//     db.run("CREATE TABLE lorem (info TEXT)");

//     // Insert data into the table
//     const stmt = db.prepare("INSERT INTO lorem VALUES (?)");
//     for (let i = 0; i < 10; i++) {
//       stmt.run("Ipsum " + i);
//     }
//     stmt.finalize();

//     // Query data from the table
//     db.each("SELECT rowid AS id, info FROM lorem", (_err, row: Row) => {
//       console.log(row.id + ": " + row.info);
//     });
//   });

//   // Close the connection when you're done
//   db.close();
// };

// export async function dbCreate(): Promise<boolean> {
//   try {
//     if (!fs.existsSync(dbPath)) {
//       fs.writeFileSync(dbPath, "");
//     }
//     // Connect to the database in a physical file
//     const db = new sqlite.Database(dbPath, sqlite.OPEN_READWRITE, (error) => {
//       console.log(error);
//     });
//   } catch (error) {
//     console.log(error);
//     return false;
//   }
// }

// export function dbClose(): void {
//   db.close();
// }
