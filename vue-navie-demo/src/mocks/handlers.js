// src/mocks/handlers.js
import { rest } from "msw";

// doc https://mswjs.io/docs/getting-started/mocks/rest-api
export const handlers = [
  // // Handles a POST /login request
  // rest.post("/login", null),

  // // Handles a GET /user request
  // rest.get("/user", null),

  // rest.get("http://localhost:3000/api/test", (req, res, ctx) => {
  //   return res(
  //     ctx.status(200),
  //     ctx.json({
  //       code: 200,
  //       data: {},
  //     })
  //   );
  // }),
];
