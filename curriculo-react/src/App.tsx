import './App.css';
import ExperienciaProfissional from './components/ExperienciaProfissional/ExperienciaProfissional';
import type { ExperienciaProfissionalProps } from './components/ExperienciaProfissional/ExperienciaProfissional';
import FormacaoAcademica from './components/FormacaoAcademica/FormacaoAcademica';
import type { FormacaoAcademicaProps } from './components/FormacaoAcademica/FormacaoAcademica';

// Componente Pai (onde tudo se junta)
function App() {

  const experiencias: ExperienciaProfissionalProps[] = [
    { titulo: "Desenvolvedor Front-end", empresa: "Tech Solutions", periodo: "2023 - Presente" },
    { titulo: "Estagiário de TI", empresa: "Agência Web", periodo: "2021 - 2023" }
  ];

  const formacoes: FormacaoAcademicaProps[] = [
    { titulo: "Análise e Desenvolvimento de Sistemas", instituicao: "Universidade Federal", anoConclusao: 2022 },
    { titulo: "Curso de React", instituicao: "Ada Tech", anoConclusao: 2026 }
  ];

  return (
    <div className='container'>
      <h1>Meu Curriculo React</h1>

      <h2>Experiência Profissional</h2>
      {/* O '.map' é o nosso novo 'forEach' da aula passada */}
      {experiencias.map((experiencia, index) => (
        <ExperienciaProfissional 
          key={index}
          titulo={experiencia.titulo}
          empresa={experiencia.empresa}
          periodo={experiencia.periodo}
        />
      ))}

      <h2>Formação Acadêmica</h2>
      {formacoes.map((formacao, index) => (
        <FormacaoAcademica 
          key={index}
          titulo={formacao.titulo}
          instituicao={formacao.instituicao}
          anoConclusao={formacao.anoConclusao}
        />
      ))}
    </div>
  )
}

export default App
