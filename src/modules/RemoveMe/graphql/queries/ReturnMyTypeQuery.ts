import { MyTypeDbObject, QueryResolvers } from "~generated/graphql/types";

export const ReturnMyTypeQuery: QueryResolvers["ReturnMyType"] = (
  parent,
  args,
  context
) => context.myTypeApi.get();
