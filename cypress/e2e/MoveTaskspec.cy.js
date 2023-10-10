/* eslint-disable no-undef */
describe("Mover tarefa com sucesso", () => {
	it("Visita a página, adiciona uma tarefa e move ela de status", () => {
		cy.visit("http://localhost:3000");

		cy.contains("Nova Tarefa").click();

		cy.get("input[name=\"title\"]").type("New Task Title");

		cy.contains("Adicionar").click();

		cy.contains("New Task Title").should("be.visible");

		cy.contains("➔").click();

		cy.get(".background-yellow").contains("New Task Title").should("be.visible");
	});
});
