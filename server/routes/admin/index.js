module.exports = app => {
    const express = require('express')
    const router = express.Router({
        mergeParams: true
    })
    // 新建分类，创建分类
    router.post('/', async (req, res) => {

        const model = await req.Model.create(req.body)
        res.send(model)
    })
    // 分类列表，获取分类列表
    router.get('/', async (req, res) => {
        let queryOptions = {}
        if(req.Model.modelName === 'Category'){
            queryOptions.populate = 'parent'
        }
        // 限制找出来10条
        const items = await req.Model.find().setOptions(queryOptions).limit(10)
        res.send(items)
    })
    // 分类列表，删除分类列表
    router.delete('/:id', async (req, res) => {

        // 限制找出来10条
        const model = await req.Model.findByIdAndDelete(req.params.id)
        res.send({
            success: true
        })
    })
    // 编辑分类，获取当前id
    router.get('/:id', async (req, res) => {
        const model = await req.Model.findById(req.params.id)
        res.send(model)
    })
    // 编辑分类，更新当前id
    router.put('/:id', async (req, res) => {
        const model = await req.Model.findByIdAndUpdate(req.params.id, req.body)
        res.send(model)
    })
    app.use('/admin/api/rest/:resource', async (req, res, next) => {
        const modelName = require('inflection').classify(req.params.resource);
        req.Model = require(`../../models/${modelName}`)
        next()
    }, router)
    
    const multer = require('multer')
    const upload = multer({dest:__dirname + '/../../uploads'})
    app.post('/admin/api/upload',upload.single('file'),async(req,res)=>{
        const file = req.file
        file.url = `http://localhost:3000/uploads/${file.filename}`
        res.send(file)
    })
}