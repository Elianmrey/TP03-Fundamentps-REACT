

import TodoList from './components/TodoList/TodoList.jsx'

function App() {
  const tasks = [
    { title: 'Comprar mantimentos', description: 'Comprar leite, pão, frutas e vegetais no supermercado.' },
    { title: 'Enviar email para cliente', description: 'Responder ao email do cliente sobre o novo projeto.' },
    { title: 'Reunião com a equipe', description: 'Participar da reunião semanal de planejamento com a equipe.' },
    { title: 'Exercício físico', description: 'Fazer 30 minutos de corrida no parque.' },
    { title: 'Ler livro', description: 'Ler pelo menos 20 páginas do livro de desenvolvimento pessoal.' },
    { title: 'Atualizar portfólio', description: 'Adicionar novos projetos ao portfólio online.' },
    { title: 'Limpar a casa', description: 'Aspirar e organizar a sala e o quarto.' },
    { title: 'Estudar programação', description: 'Assistir a uma aula de JavaScript e praticar com exercícios.' },
    { title: 'Preparar jantar', description: 'Cozinhar um prato saudável para o jantar.' },
    { title: 'Planejar férias', description: 'Pesquisar destinos e opções de hospedagem para as próximas férias.' }
  ];

  return (
    <div>
      <TodoList tasks={tasks}/>
</div>
  )
}

export default App
