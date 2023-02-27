/// <reference types="cypress" />

describe("JSON Object", () => {
    it("Json Object Examples", () => {
        const exampleObject = {"key": "Dragan", "key2": "Maksimovic"};
        const exampleArrayOfValues = ["Sophie", "Rose", "Howard"];
        const exampleArrayOfObjects = [
            {
                "key": "Luke",
            },
            {
                "key2": "Skywalker"
            },
            {
                "key3": 22
            },
        ]

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
        cy.log(exampleArrayOfObjects[0].key); // Luke
        cy.log(exampleArrayOfObjects[1].key2); // Skywalker
        cy.log(exampleArrayOfObjects[2].key3); // 22
    });
})

