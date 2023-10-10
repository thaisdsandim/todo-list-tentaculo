/* eslint-disable no-undef */
describe("Adicionar Tarefa com título", () => {
	it("Visita a página, adiciona uma tarefa com um título e confirma a inclusão", () => {
		cy.visit("http://localhost:3000");

		cy.contains("Nova Tarefa").click();

		cy.get("input[name=\"title\"]").type("New Task Title");

		cy.contains("Adicionar").click();

		cy.contains("Tarefa adicionada com sucesso!").should("be.visible");

		cy.contains("New Task Title").should("be.visible");
	});
});

describe("Adicionar Tarefa sem título", () => {
	it("Visita a página, adiciona uma tarefa com um título e veja o erro no popup", () => {
		cy.visit("http://localhost:3000/");

		cy.contains("Nova Tarefa").click();

		cy.contains("Adicionar").click();

		cy.contains("Título da tarefa não pode ficar em branco!").should("be.visible");
	});
});
