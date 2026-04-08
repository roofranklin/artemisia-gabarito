// 1. Contrato da Formacao
export interface FormacaoAcademicaProps {
    titulo: string;
    instituicao: string;
    anoConclusao: number;
}

// 2. Componente da Experiência
// Também posso desestruturar a props aqui para ficar mais elegante
function FormacaoAcademica ({ titulo, instituicao, anoConclusao }: FormacaoAcademicaProps) {
    return (
        <div className="item-curriculo formacao">
            <h3>🎓 { titulo }</h3>
            <p><strong>Instituição:</strong> { instituicao }</p>
            <p><small>Concluído em: { anoConclusao }</small></p>
        </div>
    );
}

export default FormacaoAcademica;