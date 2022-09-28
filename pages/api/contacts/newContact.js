import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function newContact(req, res) {
  const newContact = JSON.parse(req.body);

  const savedContact = await prisma.contact.create({
    data: newContact,
  });

  res.json(savedContact);
}
