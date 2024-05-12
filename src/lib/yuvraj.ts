import { access } from "fs";

export const currentUser = () => {
  return {
    id: "1",
    name: "Yuvraj",
    emailAddresses: [{ emailAddress: "ysgaur9919@gmail.com" }],
    privateMetadata: { role: "AGENCY_OWNER" },
    Permissions: [
      {
        access: true,
        subAccountId: "1",
      },
    ],
    role: "AGENCY_OWNER",
  };
};

export type User = {
  id: string;
  name: string;
  emailAddresses: { emailAddress: string }[];
  privateMetadata: { role: "AGENCY_OWNER" };
  Permissions: [
    {
      access: true;
      subAccountId: string;
    }
  ];
  role: "AGENCY_OWNER";
};
