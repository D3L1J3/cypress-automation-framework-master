/// <reference types="cypress" />

describe("JSON Object", () => {
    it("Json Object Examples", () => {
        const exampleObject = {"key": "Dragan", "key2": "Maksimovic"};
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"];

        const users = {
            "firstName": "Joe", 
            "lastName": "Blogs",
            "Age": 30,
            "Students": [
                {
                    "firstName": "Jim",
                    "lastName": "Blogs2",
                },
                {
                    "firstName": "Sara",
                    "lastName": "Parker",
                }
            ]
        }

        cy.log(exampleObject["key"]); // Dragan
        cy.log(exampleObject["key2"]); // Maksimovic
        cy.log(exampleObject.key2); // Maksimovic

        cy.log(exampleArrayOfValues[0]); // Sophie
        cy.log(exampleArrayOfValues[1]); // Rose

        cy.log(users.Students[0].lastName); // Blogs2
    });
})

