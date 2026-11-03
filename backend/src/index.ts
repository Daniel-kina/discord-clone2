import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  console.log("🔄 Verbinde mit PostgreSQL...");

  const newUser = await prisma.user.create({
    data: {
      username: "daniel_dev",
    },
  });

  console.log("✅ User erfolgreich in DB angelegt:", newUser);

  const users = await prisma.user.findMany();
  console.log("📋 Alle User in der DB:", users);
}

main()
  .catch((e) => console.error("❌ DB-Fehler:", e))
  .finally(async () => {
    await prisma.$disconnect();
  });
