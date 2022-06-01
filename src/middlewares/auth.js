module.exports = (req, res, next) => {
    const token = req.headers['x-access-token']

    if (!!token){
        next()
    }else{
        res.sendStatus(401)
    }
}