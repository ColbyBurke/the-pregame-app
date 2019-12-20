const {filterByTerm} = require('../tests/jollotests/filterByTerm')
const JolloMapURL = require('../src/components/JolloMapURL')

describe("filter function", () => {
    test('it should filter by search term', () => {
        const input = [
            {id: 1, url: 'https://www.url1.dev'},
            {id: 2, url: 'https://www.url2.dev'},
            {id: 3, url: 'https://www.link3.dev'}
        ]
        const output2 = `https://maps.google.com/maps?q=charleston&t=&z=13&ie=UTF8&iwloc=&output=embed`
        
        const output = [{id: 3, url: 'https://www.link3.dev'}]
        expect(filterByTerm(input, 'link')).toEqual(output)
        expect(JolloMapURL('charleston')).toEqual(output2)
    })
})