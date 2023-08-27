import path, * as Path from "path";

const alias = [
  { find: "@app", replacement: path.resolve(__dirname, "..", "src/") },
  {
    find: "@assets",
    replacement: path.resolve(__dirname, "..", "src/asset/"),
  },
  {
    find: "@components",
    replacement: path.resolve(__dirname, "..", "src/components/"),
  },
  { find: "@utlis", replacement: path.resolve(__dirname, "..", "src/utlis/") },
  { find: "@pages", replacement: path.resolve(__dirname, "..", "src/Pages/") },
];

export default alias;
