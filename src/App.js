import Layout from './components/global/Layout';
import TodoContainer from './components/todo/TodoContainer';
import TodoCard from './components/todo/TodoCard';

const App = () => {
  const handleCardDetail = () => {
    alert('card opened')
  }
  return (
    <Layout>
      <TodoContainer
        title="To do"
      >
        <TodoCard
          title='card'
          desc='this is the description of the card'
          detail={() => handleCardDetail()}
        />
        <TodoCard
          title='card'
          desc='this is the description of the card'
          detail={() => handleCardDetail()}
        />
        <TodoCard
          title='card'
          desc='this is the description of the card'
          detail={() => handleCardDetail()}
        />
      </TodoContainer>
      <TodoContainer
        title="Done"
      >
        <TodoCard
          title='card'
          desc='this is the description of the card'
          detail={() => handleCardDetail()}
        />
        <TodoCard
          title='card'
          desc='this is the description of the card'
          detail={() => handleCardDetail()}
        />
      </TodoContainer>
    </Layout>
  );
}

export default App;
