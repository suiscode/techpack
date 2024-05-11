import { db } from "@/lib/db";

export const userFetch = async (id) => {
  const user = await db.user.findUnique({
    where: { id: id },
    include: {
      cv: true,
    },
  });
  return user;
};
