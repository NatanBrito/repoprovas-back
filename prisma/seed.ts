import prisma from "../src/config/db.js";

// create admin user
async function main() {
  // cria se já não existe -> se já existe, faz nada
  await prisma.user.create({
    data: { email: "admin2@gmail.com", password: "vai quebrar o db" },
  });
}

main()
  .catch((e) => {
    console.log(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
