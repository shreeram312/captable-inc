import { handle } from "hono/vercel";
import api from "../../../../server/api";

const handler = handle(api);

export {
  handler as GET,
  handler as POST,
  handler as PUT,
  handler as DELETE,
  handler as PATCH,
};
