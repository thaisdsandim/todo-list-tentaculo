/* eslint-disable no-undef */
describe("Excluir tarefa no calendário com sucesso", () => {
	it("Visita a página, adiciona uma tarefa com um título, ver o popup da tarefa e confirma a exclusão", () => {
		cy.visit("http://localhost:3000");

		cy.contains("Nova Tarefa").click();

		cy.get("input[name=\"title\"]").type("New Task Title");

		cy.get("input[name=\"date\"]").type("2023-10-11");

		cy.contains("Adicionar").click();

		cy.contains("Tarefa adicionada com sucesso!").should("be.visible");
    
		cy.contains("Visualizar Calendário").click();

		cy.contains("New Task Title").click();

		cy.contains("Excluir").click();

		cy.contains("Sim").click();

		cy.contains("New Task Title").should("not.exist");
	});
});

describe("Excluir tarefa no calendário sem sucesso", () => {
	it("Visita a página, adiciona uma tarefa com um título, ver o popup da tarefa e não confirma a exclusão", () => {
		cy.visit("http://localhost:3000");

		cy.contains("Nova Tarefa").click();

		cy.get("input[name=\"title\"]").type("New Task Title");

		cy.get("input[name=\"date\"]").type("2023-10-11");

		cy.contains("Adicionar").click();

		cy.contains("Tarefa adicionada com sucesso!").should("be.visible");
    
		cy.contains("Visualizar Calendário").click();

		cy.contains("New Task Title").click();

		cy.contains("Excluir").click();

		cy.contains("Não").click();

		cy.contains("New Task Title").should("be.visible");
	});
});