export function mapper(object: any, mapperTo: any) {
  return new Promise((resolve) => {
    resolve(object.map(mapperTo));
  });
}
