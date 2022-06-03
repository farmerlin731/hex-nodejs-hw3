const errorHandler = (res, err) => {
    message = err ? err.message : "欄位未填寫正確，或無此 todo id"
    res.status(400).send({
        "status:":"failure",
        message
    });
};

module.exports = errorHandler;