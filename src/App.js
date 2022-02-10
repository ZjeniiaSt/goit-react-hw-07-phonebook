import './App.css';
import Container from './components/Container';
import ContactForm from './components/ContactForm';
import Filter from './components/Filter';
import ContactList from './components/ContactList';
import Load from './components/Loader/Loader';
import { getLoading } from './redux/phonebook-selectors';

function App() {
  return (
    <Container title="Phonebook">
      <ContactForm />
      <Filter />
      {getLoading && <Load />}
      <ContactList></ContactList>
    </Container>
  );
}

export default App;
