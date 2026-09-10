export interface ConfigEmpresa {
  nome: string;
  telefone: string;
  whatsapp: string;
  emailComercial: string;
  unidadePrincipal: string;
  regioesAtendidas: string;
  wppMsgs: {
    vender: string;
    comprar: string;
    descomissionamento: string;
  };
}
