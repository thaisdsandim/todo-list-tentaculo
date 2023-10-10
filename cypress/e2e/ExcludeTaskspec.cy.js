/* eslint-disable no-undef */
describe("Excluir tarefa com sucesso", () => {
	it("Visita a página, adiciona uma tarefa e confirma a exclusão", () => {
		cy.visit("http://localhost:3000");

		cy.contains("Nova Tarefa").click();

		cy.get("input[name=\"title\"]").type("New Task Title");

		cy.contains("Adicionar").click();

		cy.contains("New Task Title").should("be.visible");

		cy.contains("✖").click();

		cy.contains("Sim").click();

		cy.contains("New Task Title").should("not.exist");
	});
});

describe("Excluir tarefa sem sucesso", () => {
	it("Visita a página, adiciona uma tarefa e não confirma a exclusão", () => {
		cy.visit("http://localhost:3000");

		cy.contains("Nova Tarefa").click();

		cy.get("input[name=\"title\"]").type("New Task Title");

		cy.contains("Adicionar").click();

		cy.contains("New Task Title").should("be.visible");

		cy.contains("✖").click();

		cy.contains("Não").click();

		cy.contains("New Task Title").should("be.visible");
	});
});
