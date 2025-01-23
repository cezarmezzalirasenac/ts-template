class Animal {
  private _especie: string;
  private _raca: string;
  private _cor: string;
  private _tamanho: number;
  private _sexo: string;
  private _nome?: string;

  constructor(
    especie: string,
    raca: string,
    cor: string,
    tamanho: number,
    sexo: string
  ) {
    this._especie = especie;
    this._raca = raca;
    this._cor = cor;
    this._tamanho = tamanho;
    this._sexo = sexo;
  }

  public get especie() {
    return this._especie;
  }

  public get raca() {
    return this._raca;
  }

  public get cor() {
    return this._cor;
  }

  public get tamanho() {
    return this._tamanho;
  }

  public get sexo() {
    return this._sexo;
  }

  public get nome() {
    return this._nome || "";
  }

  public getRacaCor() {
    return `${this._raca} - ${this._cor}`;
  }

  public set nome(nome: string) {
    this._nome = nome;
  }
}

export default Animal;
