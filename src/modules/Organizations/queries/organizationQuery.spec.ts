import td from "testdouble";
import {
  GqlContext,
  QueryOrganizationArgs,
  testOrganization,
} from "~generated/graphql/helpers/organizationQuerySpecWrapper";

test("organization", async () => {
  const context = td.object<GqlContext>();

  // td.when(context.OrganizationsRepository.findOne()).thenResolve()

  // const variables: QueryOrganizationArgs = {}

  // const result = await testOrganization(variables, context);
});
