import { QueryResolvers } from "~generated/graphql/types";

export const organizationQuery: QueryResolvers["organization"] = (
  parent,
  args,
  context
) => context.organizationApi.organizationById(args.id);
