import { MyTypeResolvers } from "~generated/graphql/types";

export const MyTypeId: MyTypeResolvers["id"] = (parent, args, context) =>
  parent.myTypeId;
