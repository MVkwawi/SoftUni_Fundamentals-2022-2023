function messageManager(info) {
  let maxMessages = Number(info.shift());
  let messageInfo = {};
  let usersCount = 0;

  for (const line of info) {
    let [command, name, sent, recieved] = line.split("=");

    let sum = 0;

    if (command === "Statistics") {
      break;
    }

    switch (command) {
      case "Add":
        if (!messageInfo[name]) {
          sent = Number(sent);
          recieved = Number(recieved);
          sum = sent + recieved;

          messageInfo[name] = sum;

          usersCount += 1;
        }
        break;
      case "Message":
        if ([name] in messageInfo && [sent] in messageInfo) {
          messageInfo[name] += 1;
          messageInfo[sent] += 1;
        }
        break;
      case "Empty":
        if (messageInfo[name]) {
          delete messageInfo[name];
          usersCount -= 1;
        } else if (name === "All") {
          for (const key in messageInfo) {
            delete messageInfo[key];
          }
          usersCount = 0;
        }
        break;
    }

    //checks who is over the limit and delete them
    for (const key in messageInfo) {
      if (messageInfo[key] >= maxMessages) {
        delete messageInfo[key];
        usersCount -= 1;
        console.log(`${key} reached the capacity!`);
      }
    }
  }

  if (usersCount > 0) {
    console.log(`Users count: ${usersCount}`);

    for (const key in messageInfo) {
      console.log(`${key} - ${messageInfo[key]}`);
    }
  }
}

messageManager([
  "20",
  "Add=Mark=3=9",
  "Add=Berry=5=5",
  "Add=Clark=4=0",
  "Empty=Berry",
  "Add=Blake=9=3",
  "Add=Michael=3=9",
  "Add=Amy=9=9",
  "Message=Blake=Amy",
  "Message=Michael=Amy",
  "Statistics",
]);

messageManager([
  "10",
  "Add=Berg=9=0",
  "Add=Kevin=0=0",
  "Message=Berg=Kevin",
  "Add=Mark=5=4",
  "Statistics",
]);

messageManager([
  "12",
  "Add=Bonnie=3=5",
  "Add=Johny=4=4",
  "Empty=All",
  "Add=Bonnie=3=3",
  "Statistics",
]);
