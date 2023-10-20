module.exports = (mongoose) => {
    const bookSchema = mongoose.model(
    'books',
    mongoose.Schema ({
        bookName: {
            type: String,
        },
        author: {
            type: String,
        },
        genre: {
            type: String,
        },
        yearPublished: {
            type: Number,
            min: 4,
        },
        publisher: {
            type: String,
        },
        pageCount: {
            type: Number,
        },
        price: {
            hardcover: {
            type: String,
            },
            paperback: {
            type: String,
            },
            audio: {
            type: String,
            }
        }    
        }),
        );
        return bookSchema;
    };
