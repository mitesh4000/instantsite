import { type RouteConfig, index, route } from "@react-router/dev/routes";

export default [
  index("routes/home.tsx"),
  route("/generated-sites/:id", "routes/generated.tsx"),
] satisfies RouteConfig;
