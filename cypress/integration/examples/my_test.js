describe ('My First Test', function () {
	it('Does not do much', function () {
		cy.visit('https://www.google.com/')
		cy.get('input[type=text]').type('Hello').type('{enter}') 
		//type('{downarrow}{enter}') // we send the Enter to the input field first down text

		//
	})
})