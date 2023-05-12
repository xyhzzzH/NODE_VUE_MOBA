const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: {
        type: String
    },
    icon: {
        type: String
    },
    title: {
        type: String
    },
    categories: [{
        type: mongoose.SchemaTypes.ObjectId, ref: 'Category'
    }],
    scores: {
        difficult: { type: Number },
        skills: { type: Number },
        attack: { type: Number },
        survice: { type: Number }
    },
    skills: [{
        icon: { type: String },
        name: { type: String },
        description: { type: String },
        tips: { type: String }
    }],
    // 顺丰出装
    item1: [{
        type: mongoose.SchemaTypes.ObjectId, ref: 'Item'
    }],
    // 逆风出装
    item2: [{
        type: mongoose.SchemaTypes.ObjectId, ref: 'Item'
    }],
    usageTips: { type: String },
    battleTips: { type: String },
    teamTips: { type: String },
    parners: [
        {
            hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
            description: { type: String }
        }
    ]

})
module.exports = mongoose.model('Hero', schema)