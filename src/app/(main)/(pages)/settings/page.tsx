import ProfileForm from "@/components/forms/profile-form";
import React from "react";
import ProfilePicture from "./_components/profile-picture";
import { db } from "@/lib/db";

type Props = {};

const Settings = (props: Props) => {
  // const removeProfileImage = async () => {
  //   "use server";
  //   const response = await db.user.update({
  //     where: {
  //       clerkId: authUser.id,
  //     },
  //     data: {
  //       profileImage: "",
  //     },
  //   });
  //   return response;
  // };

  return (
    <div className="flex flex-col gap-4">
      <h1 className="sticky top-0 z-[10] flex items-center justify-between border-b bg-background/50 p-5 text-2xl backdrop-blur-lg">
        <span>Settings</span>
      </h1>
      <div className="flex flex-col gap-10 p-5">
        <div>
          <h2 className="text-xl font-bold">User Profile</h2>
          <p className="text-sm text-white/50">
            Add or update your information
          </p>
        </div>
        {/* <ProfilePicture
          onDelete={removeProfileImage}
          onUpload={uploadProfileImage}
          userImage={user?.profileImage || ""}
        ></ProfilePicture> */}
        <ProfileForm />
      </div>
    </div>
  );
};

export default Settings;
