let cats = ["Milo", "Otis", "Garfield"];

describe('index.js', function () {
  describe('cats', function () {
    it('is assigned an initial value of ["Milo", "Otis", "Garfield"]', function () {
      expect(cats).to.have.ordered.members(["Milo", "Otis", "Garfield"]);
    });
  });
});
function destructivelyAppendCat(name) {
  cats.push(name);
}
function destructivelyPrependCat(name) {
  cats.unshift(name);
}
function destructivelyRemoveLastCat() {
  cats.pop();
}
function destructivelyRemoveFirstCat() {
  cats.shift();
}
function appendCat(name) {
  const newCats = [...cats, name];
  return newCats;
}
function prependCat(name) {
  const newCats = [name, ...cats];
  return newCats;
}
function removeLastCat() {
  const newCats = cats.slice(0, -1);
  return newCats;
}
function removeFirstCat() {
  const newCats = cats.slice(1);
  return newCats;
}
  