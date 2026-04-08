import './App.css';
import ExperienciaProfissional from './components/ExperienciaProfissional';
import type { ExperienciaProps } from './components/ExperienciaProfissional';
import FormacaoAcademica from './components/FormacaoAcademica';
import type { FormacaoProps } from './components/FormacaoAcademica';

// O Componente Pai (Onde tudo se junta)
function App() {
  // Nossos dados (Poderiam vir de uma API no futuro!)
  const experiencias: ExperienciaProps[] = [
    { titulo: "Desenvolvedor Front-end", empresa: "Tech Solutions", periodo: "2023 - Presente" },
    { titulo: "Estagiário de TI", empresa: "Agência Web", periodo: "2021 - 2023" }
  ];

  const formacoes: FormacaoProps[] = [
    { titulo: "Análise e Desenvolvimento de Sistemas", instituicao: "Universidade Federal", anoConclusao: 2022 }
  ];

  // O React junta tudo usando tags HTML customizadas
  return (
    <div className="container">
      <h1>Meu Currículo React</h1>
      
      <h2>Experiência Profissional</h2>
      {/* O '.map' é o nosso novo 'forEach' da aula passada */}
      {experiencias.map((exp, index) => (
        <ExperienciaProfissional 
          key={index} 
          titulo={exp.titulo} 
          empresa={exp.empresa} 
          periodo={exp.periodo} 
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
  );
}

export default App;
