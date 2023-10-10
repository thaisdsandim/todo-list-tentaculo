/* eslint-disable no-undef */
describe("Ver tarefa no calendário", () => {
	it("Visita a página, adiciona uma tarefa com um título e ver tarefa no calendário", () => {
		cy.visit("http://localhost:3000");

		cy.contains("Nova Tarefa").click();

		cy.get("input[name=\"title\"]").type("New Task Title");

		cy.get("input[name=\"date\"]").type("2023-10-11");

		cy.contains("Adicionar").click();

		cy.contains("Tarefa adicionada com sucesso!").should("be.visible");
    
		cy.contains("Visualizar Calendário").click();

		cy.contains("New Task Title").should("be.visible");
	});
});

describe("Ver tarefa no calendário", () => {
	it("Visita a página, adiciona uma tarefa com um título e ver o popup da tarefa", () => {
		cy.visit("http://localhost:3000");

		cy.contains("Nova Tarefa").click();

		cy.get("input[name=\"title\"]").type("New Task Title");

		cy.get("input[name=\"date\"]").type("2023-10-11");

		cy.contains("Adicionar").click();

		cy.contains("Tarefa adicionada com sucesso!").should("be.visible");
    
		cy.contains("Visualizar Calendário").click();

		cy.contains("New Task Title").click();

		cy.contains("11/10/2023").should("be.visible");
	});
});