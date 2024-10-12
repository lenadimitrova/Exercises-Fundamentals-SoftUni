function friendsList(input) {
    let friends = input.shift().split(", ");

    let command = input.shift();
    while (command !== "Report") {
        let toDo = command.split(" ");
        let action = toDo.shift();
        let name = toDo.shift();
        let blackListed = [];
        let lost = [];
        let lostDueError = !lost.includes(name);
        let notIncluded = !blackListed.includes(name);
        switch (action) {
            case "Blacklist":
                blackListed.push(name);
                console.log(`${name} was blacklisted.`);
                if (!notIncluded) {
                    console.log(`${name} is not found`);
                }
                break;
            case "Error":
                let index = Number(toDo[0])
                if (index > 0 && index < friends.length - 1 && lostDueError == false) {
                    lost.push(name)
                    console.log(`${name} was lost due to an error.`);
                } else {
                    continue;
                }
                break;
            case "Report":
                console.log(blackListed);
                break;


            }
            command = input.shift();
        

    }
    }
    friendsList(["Mike, John, Eddie", "Blacklist Mike", "Error 0", "Report"])