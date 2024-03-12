import api from "../src/services/api"
import Cptec from "../src/services/Cptec"

jest.mock("../src/services/api", ()=>{
    const json = {
        "nome": "Caçapava",
        "uf": "SP",
        "id": "1065"
    };
    return {
        get:jest.fn().mockImplementation((rota)=>({ data:json }))
    }
})

describe("Cptec", ()=>{

    beforeEach(() => {
        // Antes de cada teste, resete as chamadas do mock
        (api.get as jest.Mock).mockClear();
      });

    test("listaCidade", async()=>{
        const mockGet = api.get as jest.Mock
        const cptec = new Cptec();
        const resposta = await cptec.listaCidades("caçapava");
        expect(resposta.nome).toBe("Caçapava");
        //Ver o que foi inserido como parâmetro
        expect(mockGet.mock.calls[0][0]).toBe("/listaCidades?city=cacapava");
    })

    test("previsao", async()=>{
        const id = "1065"
        const mockGet = api.get as jest.Mock
        const cptec = new Cptec();
        const resposta = await cptec.previsao(id);
        expect(resposta.nome).toBe("Caçapava");
        expect(mockGet.mock.calls[0][0]).toBe(`/cidade/${id}/previsao.xml`);
    })

    test("previsão de 7 dias", async()=>{
        const id = "1065"
        const mockGet = api.get as jest.Mock
        const cptec = new Cptec();
        const resposta = await cptec.previsao7dias(id);
        expect(resposta.nome).toBe("Caçapava");
        expect(mockGet.mock.calls[0][0]).toBe(`/cidade/7dias/${id}/previsao.xml`);
    })

    test("previsão estendida", async()=>{
        const id = "1065"
        const mockGet = api.get as jest.Mock
        const cptec = new Cptec();
        const resposta = await cptec.previsaoEstendida(id);
        expect(resposta.nome).toBe("Caçapava");
        expect(mockGet.mock.calls[0][0]).toBe(`/cidade/${id}/estendida.xml`);
    })

})