import { useSelector, useDispatch } from 'react-redux';
import { deleteContact } from '../../redux/phonebook-operations';
import { getvisibleContacts } from '../../redux/phonebook-selectors';
import { fetchContacts } from '../../redux/phonebook-operations';
import { BsTrashFill } from 'react-icons/bs';
import {
  ContactsRoster,
  ContactsData,
  ContactNumber,
  ContactDelete,
} from './ContactList.styled';
import { useEffect } from 'react';

function ContactList() {
  const contacts = useSelector(getvisibleContacts);
  const dispatch = useDispatch();

  useEffect(() => dispatch(fetchContacts()), [dispatch]);

  const onDelete = id => dispatch(deleteContact(id));

  return (
    <ContactsRoster>
      {contacts.map(({ id, name, number }) => (
        <ContactsData key={id}>
          <span>
            {name}: <ContactNumber>{number}</ContactNumber>
          </span>
          <ContactDelete type="button" onClick={() => onDelete(id)}>
            <BsTrashFill />
          </ContactDelete>
        </ContactsData>
      ))}
    </ContactsRoster>
  );
}

export default ContactList;
