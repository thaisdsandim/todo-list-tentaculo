/* eslint-disable no-undef */
describe("Editar tarefa com sucesso", () => {
	it("Visita a página, adiciona uma tarefa e edita ela", () => {
		cy.visit("http://localhost:3000");

		cy.contains("Nova Tarefa").click();

		cy.get("input[name=\"title\"]").type("New Task Title");

		cy.contains("Adicionar").click();

		cy.contains("New Task Title").should("be.visible");

		cy.contains("✎").click();

		cy.get("input[name=\"description\"]").type("New Task Description");

		cy.contains("Salvar").click();

		cy.contains("New Task Description").should("be.visible");

		cy.contains("Tarefa editada com sucesso!").should("be.visible"); 
	});
});
