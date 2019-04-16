let admin = (req, res, next) => {
    if(req.user.role === 0) {
        return res.send("You don't have permission to enter this place!");
    }

    next();
}

module.exports = { admin }