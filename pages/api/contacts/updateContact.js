import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function updateContact(req, res) {
  const contact = JSON.parse(req.body);

  const savedContact = await prisma.contact.update({
    where: {
      id: contact.id,
    },
    data: contact,
  });

  res.json(savedContact);
}
