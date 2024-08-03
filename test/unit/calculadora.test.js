const calculadora = require("../../models/calculadora.js")

test("somar 2 + 2  deveria retornar 4", () => {
  const resultado = calculadora.somar (2, 2);
  expect(resultado).toBe(4);
});

test("somar 100 + 30  deveria retornar 130", () => {
  const resultado = calculadora.somar (100, 30);
  expect(resultado).toBe(130);
});

test("somar 'banana' + 30  deveria retornar 'Erro'", () => {
  const resultado = calculadora.somar ("banana", 30);
  expect(resultado).toBe("Erro");
});