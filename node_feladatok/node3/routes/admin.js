import express from 'express'



router.get('/admin', (req, res) => {
    res.send("<h2>Admin Page</h2>")
})

router.get('/admin/product', (req, res) => {
    console.log('App use 2.üzenet')
    res.send(`<form action="/api/v1/admin/product" method="POST"> 
        <input type="text" name="userName">
        <button type="submit">Send</button>`)
})

router.post('/admin/product', (req, res) => {
    res.send(`<h2>POST metódussal jött!</h2>`)
})



export default router