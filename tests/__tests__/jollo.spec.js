const {filterByTerm} = require('../tests/jollotests/filterByTerm')

describe("filter function", () => {
    Test('it should filter by search term', () => {
        const input = [
            {id: 1, url: 'https://www.url1.dev'},
            {id: 2, url: 'https://www.url2.dev'},
            {id: 3, url: 'https://www.link3.dev'}
        ]
        const output = [{id: 3, url: 'https://www.link3.dev'}]
        expect(filterByTerm(input, 'link')).toEqual(output)
    })
})