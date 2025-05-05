describe('Проверка формы Request A Quote', function () {

   it('Верный пароль и верный логин', function () {
        cy.visit('https://qatest.datasub.com/quote.html'); // Вошли на сайт 
        cy.get('#q_name').type('Test', { force: true }); // Вводим поле Name
        cy.get('#q_email').type('test@test.com', { force: true }); // Вводим поле Email
        cy.get('#q_message').type('test1', { force: true }); // Вводим поле Message
        cy.get('.row > :nth-child(5) > .btn').click({ force: true }); // Жмем кнопку
        cy.get('#quoteStatus').contains('Форма отправлена успешно!');        
    })

    it('Поле Message меньше 5 символов', function () {
        cy.visit('https://qatest.datasub.com/quote.html'); // Вошли на сайт 
        cy.get('#q_name').type('Test', { force: true }); // Вводим поле Name
        cy.get('#q_email').type('test@test.com', { force: true }); // Вводим поле Email
        cy.get('#q_message').type('test', { force: true }); // Вводим поле Message
        cy.get('#q_message').should('have.css', 'box-shadow').and('eq', 'rgba(220, 53, 69, 0.25) 0px 0px 0px 4px');
    })
})


// запуск через теринал: npx cypress open
