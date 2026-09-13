import { globalIgnores } from "eslint/config";
import next from "eslint-config-next";

const config = [...next, globalIgnores([".next/**", ".next-dev/**"])];

export default config;
