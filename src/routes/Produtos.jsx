import { ListaProdutos } from "../components/ListaProdutos"

export default function Produtos() {
    return (
      <>
      <h1>Produtos informaticos - FIAPO</h1>

      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>NOME</th>
            <th>DESCRIÇÃO</th>
            <th>PREÇO</th>

          </tr>
        </thead>
        <tbody>
        {ListaProdutos.map((produto,indice)=>(
                    <tr key={indice}>
                      <td>{produto.id}</td>
                      <td>{produto.nome}</td>
                      <td>{produto.nome}</td>
                      <td>{produto.preco}</td>
                    </tr>
                ))}
        </tbody>

        <tfoot>
          <tr>
            <td colSpan={3}>PRODUTOS</td>
          </tr>
        </tfoot>
      </table>

      </>
    )
  }