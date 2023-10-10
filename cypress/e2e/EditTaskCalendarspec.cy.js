/* eslint-disable no-undef */
describe("Editar tarefa no calendário", () => {
	it("Visita a página, adiciona uma tarefa com um título, ver o popup da tarefa e editar a tarefa", () => {
		cy.visit("http://localhost:3000");

		cy.contains("Nova Tarefa").click();

		cy.get("input[name=\"title\"]").type("New Task Title");

		cy.get("input[name=\"date\"]").type("2023-10-11");

		cy.contains("Adicionar").click();

		cy.contains("Tarefa adicionada com sucesso!").should("be.visible");
    
		cy.contains("Visualizar Calendário").click();

		cy.contains("New Task Title").click();

		cy.contains("Editar").click();

		cy.get("input[name=\"description\"]").type("New Task Description");

		cy.contains("Salvar").click();
    
		cy.contains("Tarefa editada com sucesso!").should("be.visible");

		cy.contains("Fechar").click();

		cy.contains("Visualizar Calendário").click();

		cy.contains("New Task Title").click();

		cy.contains("New Task Description").should("be.visible");
	});
});
