// <reference type="Cypress" />
describe('Cadastro de Usuário', function(){
    })
    it("Acesso ao cadastro de Usuário.", function() {
        cy.visit('https://magento2-demo.magebit.com/')
        cy.title().should('be.equal','Magento 2 Commerce (Enterprise) Demo - Magebit')

        //no cy.get abaixo, foi necessário buscar o botão de cadastro através do elemento e link de redirecionamento, pois a cada refresh do site o ID do objeto era alterado.
        cy.get('a[href*="https://magento2-demo.magebit.com/customer/account/create/"]').first().click();
        cy.url().should("include", "/customer/account/create/");
    })
    it("Preenchimento de campos com sucesso", function() {
        cy.url().should('be.equal', 'https://magento2-demo.magebit.com/customer/account/create/');
        cy.get("#firstname").should("have.value", "");
        cy.get("#lastname").should("have.value", "");
        cy.get("#email_address").should("have.value", "");
        cy.get("#password").should("have.value", "");
        cy.get("#password-confirmation").should("have.value", "");

        // Preencher os campos obrigatórios
        cy.get("#firstname").type("John");
        cy.get("#lastname").type("Doe");
        cy.get("#email_address").type("exemplo@yahoo.com");
        cy.get("#password").type("Password123");
        cy.get("#password-confirmation").type("Password123");

        // Selecionar as opções de Newsletter
        cy.get('input[name="is_subscribed"]').check();

        // Verificar se os campos obrigatórios estão preenchidos
        cy.get("#firstname").should("have.value", "John");
        cy.get("#lastname").should("have.value", "Doe");
        cy.get("#email_address").should("have.value", "exemplo@yahoo.com");
        cy.get("#password").should("have.value", "Password123");
        cy.get("#password-confirmation").should("have.value", "Password123");
    })
    it("Criação de Conta", function() {
        //realiza o submit do formulário, poderia ser o usado o .submit(), porém existiam outros 3 forms na tela.
        cy.get('button[class="action submit primary"]').click();
    })