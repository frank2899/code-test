const low = require('lowdb');
const FileSync = require('lowdb/adapters/FileSync');
const shortid = require('shortid');

const adapter = new FileSync('db.json');
const db = low(adapter);

const list = {
    getAll : async (req, res) => {
        const list = await db.get('list').value();
        return res.json({status: true, list});
    },
    delete : async (req, res) => {
        const { id } = req.params;
        console.log(id);
    
        await db.get('list')
          .remove({ id })
          .write()

        return res.json({status: true})
    },
    add : async (req, res) => {
        const { title, author } = req.body;
        const id = shortid.generate();
        console.log({ id, title, author })
        await db
        .get('list')
        .push({ id, title, author })
        .write();

        const getList = await db.get('list')
        .find({ id })
        .value();

        return res.json({status: true, list: getList})
    }
}

module.exports =  list