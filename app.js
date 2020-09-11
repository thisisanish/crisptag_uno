const fastify = require("fastify")({
    http2:true,
    logger:true
})

const port = process.env.PORT || 8080

// Routes
fastify.get('/g',(req,reply)=>{
    reply.redirect([302],'https://google.com')
})


// Listen
fastify.listen(port,(err,address)=>{
    if(err){
        fastify.log.error(err)
    }
    fastify.log.info(`Running on PORT ${address}`)
})