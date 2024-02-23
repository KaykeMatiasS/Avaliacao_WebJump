// <reference type="Cypress" />
describe('Login', function(){
})
    it("Acesso ao login de Usuário.", function() {
        cy.visit('https://magento2-demo.magebit.com/')
        cy.title().should('be.equal','Magento 2 Commerce (Enterprise) Demo - Magebit')
        cy.contains("Sign In").click();
        cy.url().should("include", "/customer/account/login/referer");
    ;
    })
    it("Preencher campos vazios e realizar o login", function () {
        //Utilização de login fornecido 
        cy.get("#email").type("roni_cost@example.com");
        cy.get("#pass").type("roni_cost3@example.com");
        cy.get('button[class="action login primary"]').click();
        });
  