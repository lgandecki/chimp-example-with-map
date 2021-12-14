import { QueryResolvers } from "~generated/graphql/types";

export const organizationsQuery: QueryResolvers["organizations"] = (
  parent,
  args,
  context
) =>
  context.organizationApi
    .organizationsByUserId(args.userId)
    .map(context.organizationApi.organizationById);
