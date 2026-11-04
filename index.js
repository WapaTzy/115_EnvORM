
db.sequelize.sync()
    .then((result) => {
        app.listen(3000, () => {
            console.log('Server started');
        })
    })
    .catch((err) => {
        console.log(err);
    })


app.post('/komik', async (req, res) => {
    const data = req.body;
    try {
        const komik = await db.komik.create(data);
        res.send(komik);
    }catch (err) {
        res.send(err);
    }
});


app.get('/komik', async (req, res) => {
    try {
        const komik = await db.komik.findAll();
        res.send(komik);
    }catch (err) {
        res.send(err);
    }
});

app.put('/komik/:id', async (req, res) => {
    const id = req.params.id;
    const data = req.body;

    try {
        const komik = await db.komik.findByPk(id);
        if (!komik) {
            return res.status(404).send({ message: 'Komik tidak di temukan' });
        }   

        
        await komik.update(data);
        res.send({ message: 'Komik berhasil di update', komik });
    }catch (err) {
        res.statuus(500).send(err);
    }
});

app.delete('/komik/:id', async (req, res) => {
    const id = req.params.id;