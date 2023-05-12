const express  = require('express')

const app = express()

app.use(require('cors')())
app.use(express.json())
require('./routes/admin')(app);
require('./plugins/db')(app);
// 托管静态文件
app.use('/uploads',express.static(__dirname+'/uploads'))
app.listen(3000,()=>{
    console.log('serve run at http:localhost:3000');
})