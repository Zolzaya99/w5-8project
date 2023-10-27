module.exports = (mongoose) => {
    const authorSchema = mongoose.model(
    'authors',
    mongoose.Schema ({
        authorName: {
            type: String,
        },
        birthday: {
            type: String,
        },
        hometown: {
            type: String,
        },
        booksWritten: {
            type: Number,
        },
        networth: {
            type: String,
        },
        children: {
            type: Number,
        }
        }),
        );
        return authorSchema;
    };
