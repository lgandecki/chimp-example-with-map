import { MyTypeResolvers } from "~generated/graphql/types";

export const MyTypeSchools: MyTypeResolvers["schools"] = (
  parent,
  args,
  context
) => parent.schoolIds.map(context.schoolApi.schoolById);
