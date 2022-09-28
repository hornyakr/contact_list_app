import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function getContacts(req, res) {
  const contacts = await prisma.contact.findMany();
  res.json(contacts);
}
