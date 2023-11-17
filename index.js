const contacts = require("./contacts");

const { Command } = require("commander");
const program = new Command();
program
  .option("-a, --action <type>", "choose action")
  .option("-i, --id <type>", "user id")
  .option("-n, --name <type>", "user name")
  .option("-e, --email <type>", "user email")
  .option("-p, --phone <type>", "user phone");

program.parse(process.argv);

const argv = program.opts();

// TODO: рефакторити
async function invokeAction({ action, id, name, email, phone }) {
  switch (action) {
    case "list":
      // ...
      const allContacts = await contacts.listContacts();
      return console.table(allContacts);
      break;

    case "get":
      // ... id
      const contactById = await contacts.getContactById(id);
      return console.table(contactById);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      return console.table(newContact);
      // ... name email phone
      break;

    case "remove":
      const removedContact = await contacts.removeContact(id);
      return console.table(removedContact);
      // ... id
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
  }
}

invokeAction(argv);
