// Initialize your Controllers / Use Cases / Repositories here.
// This shape of this object will also be extended by your context.ts file to define a Gql Context

import { MyTypeDbObject } from "~generated/graphql/types";

const myTypeApi = {
  get: (): MyTypeDbObject => ({
    myTypeId: "someId",
    schoolIds: ["1", "2"],
  }),
};

const schoolApi = {
  schoolById: (id: string) =>
    [
      { id: "1", name: "some name" },
      { id: "2", name: "some name" },
    ].find((s) => s.id === id),
};

const organizationApi = {
  organizationById: (id: string) =>
    [
      { id: "1", name: "some organization name" },
      { id: "2", name: "some other organization name" },
    ].find((o) => o.id === id),
  organizationsByUserId: (userId: string) =>
    [{ userId: "1", organizationIds: ["1", "2"] }].find(
      (u) => u.userId === userId
    ).organizationIds,
};

export const root = {
  myTypeApi,
  schoolApi,
  organizationApi,
};

export type RootInterface = typeof root;
