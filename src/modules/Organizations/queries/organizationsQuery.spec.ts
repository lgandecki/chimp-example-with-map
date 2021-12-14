import td from "testdouble";
import {
  GqlContext,
  QueryOrganizationsArgs,
  testOrganizations,
} from "~generated/graphql/helpers/organizationsQuerySpecWrapper";

test("organizations", async () => {
  const context = td.object<GqlContext>();

  // td.when(context.OrganizationsRepository.findOne()).thenResolve()

  // const variables: QueryOrganizationsArgs = {}

  // const result = await testOrganizations(variables, context);
});
