const validator = require('../helpers/validate');

const saveBook = (req, res, next) => {
    const validationRule = {
        bookName: 'required|string',
        author: 'required|string',
        genre: 'required|string',
        yearPublished: 'required|numeric|min:4',
        publisher: 'required|string',
        pageCount: 'required|numeric',
        price: {
            hardcover: 'required|string',
            paperback: 'required|string',
            audio: 'required|string'
        }
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
            return;
        } else {
            next();
        }
    });
};

const saveAuthor = (req, res, next) => {
    const validationRule = {
        authorName: 'required|string',
        birthday: 'required|string',
        hometown: 'required|string',
        booksWritten: 'required|numeric',
        networth: 'required|string',
        children: 'required|numeric'
    };
    validator(req.body, validationRule, {}, (err, status) => {
        if (!status) {
            res.status(412).send({
                success: false,
                message: 'Validation failed',
                data: err
            });
            return;
        } else {
            next();
        }
    });
};

module.exports = {
    saveBook, 
    saveAuthor
};

