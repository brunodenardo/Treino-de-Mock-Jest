import Cptec from "../src/services/Cptec"
import { Request, Response } from "express"
import controller from "../src/controllers/PrevisaoController"


jest.mock("../src/services/Cptec", ()=>{
    const xml = "<cidades><cidade><nome>Caçapava</nome><uf>SP</uf><id>1065</id></cidade><cidade><nome>Caçapava do Sul</nome><uf>RS</uf><id>1066</id></cidade></cidades>"
    const funcaoMockadaMiddleware = jest.fn().mockImplementation((string)=>(xml))
    const funcaoMockadaDestino = jest.fn().mockImplementation((string)=>({"id": "1065", "nome": "Caçapava", "uf": "SP"}))
    const mCptec = {
        listaCidades: funcaoMockadaMiddleware,
        previsao: funcaoMockadaDestino,
        previsao7dias: funcaoMockadaDestino,
        previsaoEstendida: funcaoMockadaDestino
    }
    return jest.fn(()=>mCptec)
})

describe("Previsão Controller", ()=>{

    let req:Request
    let res:Response


    beforeEach(()=>{
        (Cptec as jest.Mock).mockClear();
        req = {
            params: { cidade: "caçapava" },
        } as unknown as Request;
        res = {
            locals: {},
            json: jest.fn()
        } as unknown as Response
    })
   

    test("Lista Cidade", async()=>{
        await controller.listaCidades(req, res, jest.fn())
        expect(res.locals.id).toBe("1065")
    })

})