const fs = require("node:fs/promises");
const path = require("node:path");
const { nanoid } = require("nanoid");

//  * Розкоментуй і запиши значення
const contactsPath = path.join(__dirname, "db/contacts.json");
console.log(contactsPath);

// TODO: задокументувати кожну функцію
async function listContacts() {
  const data = await fs.readFile(contactsPath);
  const list = JSON.parse(data);

  return list;
  // ...твій код. Повертає масив контактів.
}
console.log(listContacts);

async function getContactById(contactId) {
  const contacts = await listContacts();
  const contact = contacts.find((contact) => contact.id === contactId);
  return contact || null;
  // ...твій код. Повертає об'єкт контакту з таким id. Повертає null, якщо контакт з таким id не знайдений.
}
console.log(getContactById);

async function removeContact(contactId) {
  const contacts = await listContacts();
  const index = contacts.findIndex((item) => item.id === contactId);
  if (index === -1) {
    return null;
  }
  const [result] = contacts.splice(index, 1);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return result;
  // ...твій код. Повертає об'єкт видаленого контакту. Повертає null, якщо контакт з таким id не знайдений.
}
console.log(removeContact);

async function addContact(name, email, phone) {
  const contacts = await listContacts();
  const addContact = {
    id: nanoid(),
    name,
    email,
    phone,
  };
  contacts.push(addContact);
  await fs.writeFile(contactsPath, JSON.stringify(contacts, null, 2));
  return addContact;
  // ...твій код. Повертає об'єкт доданого контакту.
}
console.log(addContact);

module.exports = { listContacts, getContactById, removeContact, addContact };
