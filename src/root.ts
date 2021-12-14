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

export const root = {
  myTypeApi,
  schoolApi,
};

export type RootInterface = typeof root;
