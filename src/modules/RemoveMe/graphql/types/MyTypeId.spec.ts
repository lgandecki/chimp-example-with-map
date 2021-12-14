import td from "testdouble";
import {
  GqlContext,
  ParentType,
  testMyTypeId,
} from "~generated/graphql/helpers/MyTypeIdSpecWrapper";

test("MyTypeId", async () => {
  const context = td.object<GqlContext>();
  // td.when(context.RemoveMeRepository.findOne()).thenResolve()
  // const parent: ParentType = {}

  // const result = await testMyTypeId(parent,  context);
});
