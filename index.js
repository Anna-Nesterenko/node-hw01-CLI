const contacts = require("./contacts");
const argv = require("yargs").argv;
const chalk = require("chalk");

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await contacts.listContacts();
      console.log(chalk.white.inverse("*** List of All Contacts ***"));
      console.table(allContacts);
      break;

    case "get":
      const oneContact = await contacts.getContactById(id);
      console.log(chalk.white.inverse("*** One Contact from the List ***"));
      console.table(oneContact);
      break;

    case "add":
      const newContact = await contacts.addContact({ name, email, phone });
      console.log(chalk.white.inverse("*** New Contact ***"));
      console.table(newContact);
      break;

    case "remove":
      const removedContact = await contacts.removeContact(id);
      console.log(chalk.white.inverse("*** Contact to be Removed ***"));
      console.table(removedContact);
      break;

    default:
      console.warn("\x1B[31m Unknown action type!");
      break;
  }
};

invokeAction(argv);
