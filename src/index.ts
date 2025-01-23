import Animal from "./animal";

const cavalos: Animal[] = [
  new Animal("cavalo", "manga larga", "marrom", 1.9, "M"),
  new Animal("cavalo", "crioulo", "marrom", 1.9, "M"),
  new Animal("cavalo", "marchador", "marrom", 1.9, "M"),
];

for (const cavalo of cavalos) {
  const { especie, raca, cor, tamanho, sexo } = cavalo;
  const racaCor = cavalo.getRacaCor();
  cavalo.nome = ""

  console.log(`
    Espécie: ${especie}
    Raça: ${raca}
    Cor: ${cor}
    Tamanho: ${tamanho}
    Sexo: ${sexo}
    Raça e Cor ${racaCor}
    `);
}
