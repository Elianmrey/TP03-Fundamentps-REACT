
import TodoList from './components/TodoList/TodoList.jsx'


export default function App() {

const tasks = [
    {
      title: "Comprar mantimentos",
      description: "Comprar frutas, vegetais e pão no supermercado."
    },
    {
      title: "Completar relatório do projeto",
      description: "Finalizar o rascunho final do relatório do projeto até amanhã."
    },
    {
      title: "Agendar consulta no dentista",
      description: "Ligar para a clínica para agendar um check-up dentário."
    },
    {
      title: "Limpar a casa",
      description: "Passar o aspirador e limpar o chão, tirar o pó dos móveis."
    },
    {
      title: "Terminar de ler o livro",
      description: "Ler os dois últimos capítulos do romance de mistério."
    },
    {
      title: "Sessão de exercícios",
      description: "Fazer uma sessão de 30 minutos de cardio e musculação."
    },
    {
      title: "Preparar slides para apresentação",
      description: "Criar slides para a próxima reunião de equipe."
    },
    {
      title: "Responder e-mails",
      description: "Responder aos e-mails de trabalho pendentes até o final do dia."
    },
    {
      title: "Regar as plantas",
      description: "Regar todas as plantas internas e externas pela manhã."
    },
    {
      title: "Planejar viagem de fim de semana",
      description: "Pesquisar e reservar atividades para a viagem de fim de semana."
    }
  ];

  return (
    <div>
      <TodoList tasks={tasks} />
</div>
  )
}


