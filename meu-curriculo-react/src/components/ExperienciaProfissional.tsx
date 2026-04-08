// 1. O Contrato (Props): Igualzinho à aula passada, mas focado no que o componente vai RECEBER
export interface ExperienciaProps {
  titulo: string;
  empresa: string;
  periodo: string;
}

// 2. O Componente (A "Classe" moderna): Uma função que recebe Props e retorna JSX
function ExperienciaProfissional(props: ExperienciaProps) {
  return (
    <div className="item-curriculo experiencia">
      <h3>💼 {props.titulo}</h3>
      <p><strong>Empresa:</strong> {props.empresa}</p>
      <p><small>{props.periodo}</small></p>
    </div>
  );
}

export default ExperienciaProfissional;
