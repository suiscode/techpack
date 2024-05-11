import { UserInterface } from "@/lib/interface";
import React from "react";
import CVWrapper from "./CVWrapper";
import CVgeneral from "./CVgeneral";

const ProfileCV = ({ user }: { user: UserInterface }) => {
  return (
    <div className="flex flex-col w-full gap-4">
      <div>
        <h1 className="text-3xl font-semibold ">My CV</h1>
      </div>
      <CVgeneral />
      <CVgeneral />
      <CVgeneral />
    </div>
  );
};

export default ProfileCV;
