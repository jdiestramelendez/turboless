import type { ValidatedAPIGatewayProxyEvent } from "helpers";
import { middyfy,formatJSONResponse } from "helpers";

import schema from './schema';

const hello = async (event: ValidatedAPIGatewayProxyEvent<typeof schema>) => {
  return formatJSONResponse({
    message: `Hello ${event.body.name} !`
  });
};

export const main = middyfy(hello);
