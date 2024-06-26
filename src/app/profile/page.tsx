import React from "react";
import { auth } from "../../../auth";
import { UserInterface, userCV } from "@/lib/interface";
import { userFetch } from "@/lib/fetch";
import ProfileCV from "@/components/profile/ProfileCV";

const ProfilePage = async () => {
  const session = await auth();
  const user = await userFetch(session?.user.id);
  const cv = user?.cv;

  return (
    <>
      <ProfileCV user={user as UserInterface} />
    </>
  );
};

export default ProfilePage;
