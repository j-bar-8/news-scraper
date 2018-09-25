// REQUIRE MONGOOSE AND REFRENCE SCHEMA CONSTRUCTOR
// ===================================================================
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// NEW OBJECT USING CONSTRUCTOR
// ===================================================================
const ArticleSchema = new Schema ({
    title: {
        type: String,
        required: true
    },
    link: {
        type: String,
        required: true
    },
    note: {
        type: Schema.Types.ObjectId,
        ref: "Note"
    }
});

// CREATE MODEL
// ===================================================================
const Article = mongoose.model("Article", ArticleSchema);

// EXPORT
// ===================================================================
module.exports = Article;