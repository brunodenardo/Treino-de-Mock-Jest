import api from "./api";

export default class Cptec {
  private removerAcentos(name: string): string {
    const str = name.toLocaleLowerCase();
    const mapaAcentos: {[key: string]: string} = {
        'á': 'a', 'à': 'a', 'â': 'a', 'ã': 'a', 'ä': 'a',
        'é': 'e', 'è': 'e', 'ê': 'e', 'ë': 'e',
        'í': 'i', 'ì': 'i', 'î': 'i', 'ï': 'i',
        'ó': 'o', 'ò': 'o', 'ô': 'o', 'õ': 'o', 'ö': 'o',
        'ú': 'u', 'ù': 'u', 'û': 'u', 'ü': 'u',
        'ç': 'c',
        'ñ': 'n'        
    };
    return str.replace(/[áàâãäéèêëíìîïóòôõöúùûüçñ]/g, (match) => mapaAcentos[match] || match);
  }

  async listaCidades(cidade: string) {
    const { data } = await api.get(`/listaCidades?city=${this.removerAcentos(cidade)}`);
    return data;
  }

  async previsao(id: string) {
    const { data } = await api.get(`/cidade/${id}/previsao.xml`);
    return data;
  }

  async previsao7dias(id: string) {
    const { data } = await api.get(`/cidade/7dias/${id}/previsao.xml`);
    return data;
  }

  async previsaoEstendida(id: string) {
    const { data } = await api.get(`/cidade/${id}/estendida.xml`);
    return data;
  }
}
