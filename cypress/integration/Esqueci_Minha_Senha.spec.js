// <reference type="Cypress" />
describe('Esqueci Minha Senha', function(){
})
    it("Acesso ao menu de Esqueci minha senha.", function() {
        cy.visit('https://magento2-demo.magebit.com/')
        cy.title().should('be.equal','Magento 2 Commerce (Enterprise) Demo - Magebit')

        //primeiro deve-se acessar o menu de login
        cy.contains("Sign In").click();
        cy.url().should("include", "/customer/account/login/referer");

        //Enfim localizar o hyperlink de redefinição de senha
        cy.get('a[href*="https://magento2-demo.magebit.com/customer/account/forgotpassword/"]').first().click();
    ;
    })
    it("Preencher campos de informação", function () {
        cy.get("#email_address").type("roni_cost@example.com");
        //Entretanto a página conta com um verificador captcha, impossibilitando o seguimento da automação sem uso de serviços externos.
        });
  