// npm install cypress

// https://www.npmjs.com/package/cypress-file-upload
// npm install --save-dev cypress-file-upload
// This is added to package.json
// Add import 'cypress-file-upload'; to commands file

const filepath = "dog.png"
describe('Upload a file', function() {
    it('Upload the file and assert the name of  the file uploaded', function() {
        cy.visit('https://ps.uci.edu/~franklin/doc/file_upload.html')
        cy.get('h1').contains('File Upload Test').should('be.visible').should('exist')
        cy.get('[type="file"]').attachFile(filepath)

    })
})