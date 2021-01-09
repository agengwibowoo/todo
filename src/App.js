import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import Layout from './components/global/Layout';
import TodoContainer from './components/todo/TodoContainer';
import TodoCard from './components/todo/TodoCard';
import TodoCardAdd from './components/todo/TodoCardAdd';
import ModalAdd from './components/global/ModalAdd';
import ModalEdit from './components/global/ModalEdit';
import ModalDelete from './components/global/ModalDelete';
import { todo, selectedTodo } from './actions/todo_action';

const App = () => {
  const [showModalAdd, setShowModalAdd] = useState(false);
  const [showModalEdit, setShowModalEdit] = useState(false);
  const [showModalDelete, setShowModalDelete] = useState(false);
  const { payload } = useSelector((state) => state.todo);
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(todo());
  }, []);

  let todoList, doneList = [];
  if (payload) {
    const payloadSortByDate = payload.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
    todoList = payloadSortByDate.filter(({ status }) => status === 0).reverse().map(item =>
      <TodoCard
        key={item.id}
        title={item.title}
        desc={item.description}
        edit={() => handleCardEdit(item)}
        deleteCard={(e) => handleCardDelete(e)}
      />
    );
    doneList = payloadSortByDate.filter(({ status }) => status === 1).map(item =>
      <TodoCard
        key={item.id}
        title={item.title}
        desc={item.description}
        edit={() => handleCardEdit(item)}
      />
    );
  }

  const handleCardAdd = () => {
    setShowModalAdd(true);
  }
  const handleCardEdit = (item) => {
    dispatch(selectedTodo(item));
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
        {todoList}
        <TodoCardAdd
          add={() => handleCardAdd()}
        />
      </TodoContainer>
      <TodoContainer
        title="Done"
      >
        {doneList}
      </TodoContainer>
    </Layout>
  );
}

export default App;
