export default function imageImport(r: __WebpackModuleApi.RequireContext) {
  let images = {} as { [key: string]: string };
  r.keys().map(item => images[item.replace('./', '')] = r(item));
  return images;
}