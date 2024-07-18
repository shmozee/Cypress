// npm install cypress-downloadfile

// add the below into e2e.js
// const { defineConfig } = require('cypress')
// const {downloadFile} = require('cypress-downloadfile/lib/addPlugin')

// module.exports = defineConfig({
//   // setupNodeEvents can be defined in either
//   // the e2e or component configuration
//   e2e: {
//     setupNodeEvents(on, config) {
//          on('task', {downloadFile})
//       }
//     }
// })

describe('Download a file', function() {
    it('download', function(){
        cy.downloadFile('https://file-examples.com/wp-content/storage/2017/10/file-sample_150kB.pdf', 'Download', 'demo.pdf')
    })
})