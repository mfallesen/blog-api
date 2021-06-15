const express = require('express')
const app = express();

describe('Test Server Connection', ()=> {

    let port = 8787

    app.listen(port, () => console.log(`port open on ${port}`))


    it('Should be port 8787', () => {
        expect(port).toBe(8787)
    })
})