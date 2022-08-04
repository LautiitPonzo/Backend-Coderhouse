const { Contenedor } = require("./contenedor");
const productos = new Contenedor("./productos.txt");

const main = async () => {
  let idReferencia = 2;

  let idA = await productos.save({
    title: "Escuadra",
    price: 123.45,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/ruler-triangle-stationary-school-256.png",
  });
  let idB = await productos.save({
    title: "Calculadora",
    price: 234.56,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/calculator-math-tool-school-256.png",
  });
  let idC = await productos.save({
    title: "Globo Terraqueo",
    price: 345.67,
    thumbnail:
      "https://cdn3.iconfinder.com/data/icons/education-209/64/globe-earth-geograhy-planet-school-256.png",
  });
  console.log(
    `Estos son los productos insertados id: \n ${idA} id: ${idB} id: ${idC}`
  );

  let allProducts = await productos.getAll();
  console.log("Mostramos todos los productos guardados: \n", allProducts);

  const product = await productos.getById(idReferencia);
  if (product === undefined) {
    console.log("No se encuentra el producto con dicho ID");
  } else {
    console.log(`Producto con ID: ${idReferencia} \n`, product);
  }

  await productos.deleteById(idReferencia);
  delProducts = await productos.getAll();
  console.log(
    `Archivo sin el Producto con ID: ${idReferencia} \n`,
    delProducts
  );

  await productos.deleteAll();
  AlldeleteProducts = await productos.getAll();
  console.log("Archivo sin productos: \n", AlldeleteProducts);
};

main();
