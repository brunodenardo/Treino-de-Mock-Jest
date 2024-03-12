import Cptec from "../src/services/Cptec"
import { Request, Response} from "express"
import controller from "../src/controllers/PrevisaoController"



jest.mock("../src/services/Cptec", ()=>{
    const xml = "<cidades><cidade><nome>Caçapava</nome><uf>SP</uf><id>1065</id></cidade><cidade><nome>Caçapava do Sul</nome><uf>RS</uf><id>1066</id></cidade></cidades>"
    const funcaoMockada = jest.fn().mockImplementation((string)=>(xml))
    const mCptec = {
        listaCidades: funcaoMockada,
        previsao: funcaoMockada,
        previsao7dias: funcaoMockada,
        previsaoEstendida: funcaoMockada
    }
    return jest.fn(()=>mCptec)
})

describe("Previsão Controller", ()=>{

    let req:Request
    let res:Response

    beforeEach(()=>{
        req = {
            params: { cidade: "caçapava" },
        } as unknown as Request;
        res = {
            locals: { id: "1065" },
            json: jest.fn()
        } as unknown as Response
    })
   

    test("Lista Cidade", async()=>{
        const cptec = new Cptec()
        res.locals = {}
        const mockCptec = cptec.listaCidades as jest.Mock;
        await controller.listaCidades(req, res, jest.fn());
        expect(res.locals.id).toBe("1065");
        expect(mockCptec.mock.calls[0][0]).toBe("caçapava")
        mockCptec.mockClear()
    })

    test("previsao", async()=>{
        const cptec = new Cptec()
        const mockCptec = cptec.previsao as jest.Mock;
        await controller.previsao(req, res);
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({cidade:expect.arrayContaining([expect.anything(), expect.anything()])})
        )
        expect(mockCptec.mock.calls[0][0]).toBe("1065")
        mockCptec.mockClear()
    })

    test("Previsão 7 dias", async()=>{
        const cptec = new Cptec()
        const mockCptec = cptec.previsao7dias as jest.Mock;
        await controller.previsao7dias(req, res);
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({cidade:expect.arrayContaining([expect.anything(), expect.anything()])})
        )
        expect(mockCptec.mock.calls[0][0]).toBe("1065")
        mockCptec.mockClear()
    })

    test("Previsão Estendida", async()=>{
        const cptec = new Cptec()
        const mockCptec = cptec.previsaoEstendida as jest.Mock;
        await controller.previsaoEstendida(req, res);
        expect(res.json).toHaveBeenCalledWith(
            expect.objectContaining({cidade:expect.arrayContaining([expect.anything(), expect.anything()])})
        )
        expect(mockCptec.mock.calls[0][0]).toBe("1065")
        mockCptec.mockClear()
    })

})