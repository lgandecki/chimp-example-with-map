import td from "testdouble";
import {
  GqlContext,
  testReturnMyType,
} from "~generated/graphql/helpers/ReturnMyTypeQuerySpecWrapper";

test("ReturnMyType", async () => {
  const context = td.object<GqlContext>();

  // td.when(context.RemoveMeRepository.findOne()).thenResolve()

  // const result = await testReturnMyType( context);
});
