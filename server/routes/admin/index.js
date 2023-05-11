module.exports = app=>{
    const express = require('express')
    const router = express.Router({
        
    })
    // 新建分类，创建分类
    router.post('/',async(req,res)=>{
        const model = await Category.create(req.body)
        res.send(model)
    })
     // 分类列表，获取分类列表
    router.get('/',async(req,res)=>{
        // 限制找出来10条
        const items = await Category.find().populate('parent').limit(10)
        res.send(items)
    })
     // 分类列表，删除分类列表
     router.delete('/:id',async(req,res)=>{
        // 限制找出来10条
        const model = await Category.findByIdAndDelete(req.params.id)
        res.send({
            success:true
        })
    })
    // 编辑分类，获取当前id
    router.get('/:id',async(req,res)=>{
        const model = await Category.findById(req.params.id)
        res.send(model)
    })
     // 编辑分类，更新当前id
    router.put('/:id',async(req,res)=>{
        const model = await Category.findByIdAndUpdate(req.params.id,req.body)
        res.send(model)
    })
    app.use('/admin/api/rest/:resource',router)
}