import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export default async function deleteContact(req, res) {
  const id = JSON.parse(req.body);

  const savedContact = await prisma.contact.delete({
    where: {
      id: id,
    },
  });

  res.json(savedContact);
}
