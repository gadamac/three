const variables = [
    { name: "NAME", valid: true },
    { name: "$num1", valid: true },
    { name: "typeof", valid: false },
    { name: "first-name", valid: false },
    { name: "attempt_2", valid: true },
    { name: "2ndAttempt", valid: false },
    { name: "full name", valid: false }
    ];
    
    const variableList = document.getElementById("variable-list");
    
    variables.forEach((variable) => {
    const listItem = document.createElement("li");
    listItem.textContent = ${variable.name} - ${variable.valid ? "Valid" : "Invalid"};
    variableList.appendChild(listItem);
    });
    