import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testMyTypeSchools,
} from "~generated/graphql/helpers/MyTypeSchoolsSpecWrapper";

test("MyTypeSchools", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.RemoveMeRepository.findOne()).thenResolve()
  // const parent: ParentType = {}

  // const result = await testMyTypeSchools(parent,  context);
});
