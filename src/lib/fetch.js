import { db } from "@/lib/db";


export const userFetch = async (id) => {
  const user = await db.user.findUnique({ where: { id: id } });
  return user;
};
