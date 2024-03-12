## Atividade - Testes unitários e de integração

O código faz requisições no Web Service do CPTEC para obter as previsões do tempo (http://servicos.cptec.inpe.br/XML).

### Instruções de uso
Todos os pacotes necessários já estão no `package.json`.
```
git clone https://github.com/arleysouza/previsao.git
cd previsao
npm i
npm run dev
```
Utilize as URLs a seguir para testar o código no navegador:

- Previsão do tempo (http://localhost:3010/previsao/caçapava);
- Previsão para 7 dias (http://localhost:3010/previsao7/caçapava);
- Previsão estendida (http://localhost:3010/estendida/caçapava).


### Objetivos
- Fazer os testes unitários dos métodos das classes Cptec e PrevisaoController - use Jest. Não é necessário testar o método `removerAcentos`; 
- Fazer os testes das requisições HTTP - use Supertest e Jest.

### Requisitos
- Os testes da classe Cptec deverão estar no arquivo test/cptec.test.ts;
- Os testes da classe PrevisaoController deverão estar no arquivo test/previsaoController.test.ts;
- Os testes das requisições HTTP deverão estar no arquivo test/server.test.ts.
