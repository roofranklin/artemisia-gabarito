// 1. Contrato da Formação
export interface FormacaoProps {
  titulo: string;
  instituicao: string;
  anoConclusao: number;
}

// 2. O Componente da Formação
// DICA: Mostre a Desestruturação das props aqui, é um atalho elegante!
function FormacaoAcademica({ titulo, instituicao, anoConclusao }: FormacaoProps) {
  return (
    <div className="item-curriculo formacao">
      <h3>🎓 {titulo}</h3>
      <p><strong>Instituição:</strong> {instituicao}</p>
      <p><small>Concluído em: {anoConclusao}</small></p>
    </div>
  );
}

export default FormacaoAcademica;
