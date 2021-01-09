import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/global/Layout';
import TodoContainer from './components/todo/TodoContainer';
import TodoCard from './components/todo/TodoCard';
import TodoCardAdd from './components/todo/TodoCardAdd';
import ModalAdd from './components/global/ModalAdd';
import ModalEdit from './components/global/ModalEdit';
import ModalDelete from './components/global/ModalDelete';

const App = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const handleCardAdd = () => {
    setShowModalAdd(true);
  }
  const handleCardEdit = () => {
    setShowModalEdit(true);
  }
  const handleCardDelete = (e) => {
    e.stopPropagation();
    setShowModalDelete(true);
  }
  return (
    <Layout>
      <ModalAdd
        show={showModalAdd}
        setShow={setShowModalAdd}
      />
      <ModalEdit
        show={showModalEdit}
        setShow={setShowModalEdit}
      />
      <ModalDelete
        show={showModalDelete}
        setShow={setShowModalDelete}
      />
      <TodoContainer
        title="To do"
      >
        <TodoCard
          title='card'
          desc='this is the description of the card'
          edit={() => handleCardEdit()}
          deleteCard={(e) => handleCardDelete(e)}
        />
        <TodoCardAdd 
          add={() => handleCardAdd()}
        />
      </TodoContainer>
      <TodoContainer
        title="Done"
      >
      </TodoContainer>
    </Layout>
  );
}

export default App;
