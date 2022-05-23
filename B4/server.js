const express = require('express')
const fs = require('fs')
const app = express()

app.use(express.json())
// const nameJson = fs.readFile('name.json')

const addUser = async (data) => {
    try {
        const listUserJSON = await fs.promises.readFile('name.json', { encoding: 'utf-8' })
        const listUser = JSON.parse(listUserJSON)
        const newListUser = [
            ...listUser,
            {
                id: listUser.length + 1,
                ...data
            }
        ]
        return newListUser
    } catch (error) {
        console.log(error);
    }
}

const updateUSer = async (userId, data) => {
    try {
        const listUserJSON = await fs.promises.readFile('name.json', { encoding: 'utf-8' })
        const listUser = JSON.parse(listUserJSON)
        const user = listUser.filter(item => item.id != userId)
        const newListUser = [
            ...user,
            {
                id: userId,
                ...data
            }
        ]
        return newListUser
    } catch (error) {
        console.log(error);
    }
}
const detailUSer = async (userId, data) => {
    try {
        const listUserJSON = await fs.promises.readFile('name.json', { encoding: 'utf-8' })
        const listUser = JSON.parse(listUserJSON)
        const user = listUser.filter(item => item.id == userId)
        return user
    } catch (error) {
        console.log(error);
    }
}

app.get('/list-user', (req, res) => {

    fs.readFile("name.json", (err, data) => {
        const listName = JSON.parse(data)
        res.json(listName)
    })
})

app.post('/add-user', async (req, res) => {
    const data = req.body
    const listUSer = await addUser(data)
    res.json(listUSer)
})

app.post('/update-user/:id', async (req, res) => {
    const data = req.body
    const { id } = req.params
    const listUSer = await updateUSer(id, data)
    res.json(listUSer)
})

app.get('/detail-user/:id', async (req, res) => {
    const { id } = req.params
    const listUSer = await detailUSer(id)
    res.json(listUSer)
})

app.listen(9000, () => {
    console.log('connect server port 9000')
})
