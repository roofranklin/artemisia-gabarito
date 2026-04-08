// 1. Contrato da Experiência
export interface ExperienciaProfissionalProps {
    titulo: string;
    empresa: string;
    periodo: string;
}

// 2. Componente da Experiência
function ExperienciaProfissional(props: ExperienciaProfissionalProps) {
    return (
        <div className="item-curriculo experiencia">
            <h3>💼 { props.titulo }</h3>
            <p><strong>Empresa:</strong> { props.empresa }</p>
            <p><small>{ props.periodo }</small></p>
        </div>
    );
}

export default ExperienciaProfissional;