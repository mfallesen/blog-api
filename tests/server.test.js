const express = require('express')
const app = express();

describe('Test Server Connection', ()=> {

    
    
    
    it('Should be port 8787', async () => {
        let port = 8787
        app.listen(port,  () => console.log(`port open on ${port}`))
        expect(port).toBe(8787)
    })
})