import Cabecalho from "./components/CAbecalho";
import Conteudo from "./components/Conteudo";
import Rodape from "./components/Rodape";
import viteLogo from "./assets/vite.svg";

export default function App() {
  //Área de declaração de variáveis/constantes/estados/refs/contexts/funções, etc...

  let viteLogoAlt = "Logo do Vite";

  return (
    <>
      {/* Vamos criar uma Cabeçalho com um header, um h1 com um título indicativo sobre o projeto e uma lista ul com 3 itens com links. */}
      <Cabecalho />
      {/* Vamos criar uma seção de conteúdo com uma div e 3 parágrafos com cada um tendo 3 linhas de lorem. Abaixo destes parágrafos vamos adicionar uma imagem */}

      <Conteudo viteLogoProps={viteLogo}  viteLogoAltProps={viteLogoAlt} />

      {/* Vamos criar uma seção de rodapé com uma div e uma lista ul com 3 itens com links para redes sociais. Um parágrafo com o seguinte texto: Todos os meus direitos reservado - 2023, adicione o código do símbolo de copyright.*/}
      <Rodape />
    </>
  );
}
