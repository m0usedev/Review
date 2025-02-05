// @ts-check

import eslint from "@eslint/js";
import tseslint from "typescript-eslint";
import eslintPluginPrettierRecomended from "eslint-plugin-prettier/recommended";
import eslintConfigPrettier from "eslint-config-prettier";

export default tseslint.config(
  eslint.configs.recommended,
  ...tseslint.configs.strict,
  eslintPluginPrettierRecomended,
  eslintConfigPrettier,
  {
    files: ["src/electron/**/*.ts"], // Las reglas se aplican a todos los archivos .ts en cualquier lado de src/
  },
  {
    ignores: ["node_modules/", "dist-react/", "dist-electron/", "src/ui/", "**/*.js"], //ignoramos todo lo que esta dentro de node_modules/, dist/ y todo los archivos .js
  },
  {
    rules: {
      "@typescript-eslint/no-explicit-any": "error", // no puede haber any
      "@typescript-eslint/no-unused-vars": [
        "warn",
        {
          args: "all", // todos los argumentos y variables deben ser utilizados,
          argsIgnorePattern: "^_", // permite ignorar todos los argumentos que empiecen con _, util para funciones cuando aun no estas trabajando con toos los paramtetros y que ignore todos esos con los que no estas trabajando aun
          caughtErrors: "all", // lo mismo que args pero para los parametros de los catch
          caughtErrorsIgnorePattern: "^_", //lo mismo que argsIgnorePattern pero para los argumentos de los catch
        },
      ],
      "@typescript-eslint/explicit-function-return-type": "error", // las funciones deben declarar el tipo de valor que devuelven
    },
  },
);
