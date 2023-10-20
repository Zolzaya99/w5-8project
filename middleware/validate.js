const validator = require('../helpers/validate');

const saveJob = (req, res, next) => {
    const validationRule = {
        bookName: 'required|string',
        author: 'required|string',
        genre: 'required|string',
        yearPublished: 'required|string',
        publisher: 'required|string',
        pageCount: 'required|string',
        price: 'required|string'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
        } else {
            next();
        }
    });
};

module.exports = {
    saveJob
};