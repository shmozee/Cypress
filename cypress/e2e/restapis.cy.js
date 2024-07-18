//   install npm i chai
// check assertions for chai - https://docs.cypress.io/guides/references/assertions

describe('HTTP requests', function() {

    it('GET', function(){
        cy.request({
            method: 'GET',
            url: 'https://httpbin.org/get',
            // headers: {

            // }
        }).then(function(response){
            expect(response.body).have.property('url')
            // print(response.body)
        })
    })

    it('POST', function(){
        cy.request({
            method: 'POST',
            url: 'https://httpbin.org/post',
            body: {
                'name': 'zaid',
                'age': 28
            },
            headers: {
                'content-type': 'application/json'
            }
        }).then(function(response){
            expect(response.body).have.property('json')
            expect(response.body.json).to.deep.equal({
                "age": 28,
                "name": "zaid"
            })
            // print(response.body)
        })
    })
})