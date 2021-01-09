import { Form, Field } from 'react-final-form';
import InputComponent from './components/form/InputComponent';
import SelectComponent from './components/form/SelectComponent';

const App = () => {
  const onSubmit = () => {
    console.log('submitted');
  }
  return (
    <div className="App">
      <Form onSubmit={onSubmit}>
        {props => (
          <>
            <Field
              name="input"
              type="Text"
              label="Input"
              placeholder="Masukkan text"
              component={InputComponent}
            />
            <Field
              name="Select"
              label="Select"
              placeholder="Pilih"
              component={SelectComponent}
            />
          </>
        )}
      </Form>
    </div>
  );
}

export default App;
