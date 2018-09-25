// REQUIRE MONGOOSE AND REFRENCE SCHEMA CONSTRUCTOR
// ===================================================================
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

// NEW OBJECT USING CONSTRUCTOR
// ===================================================================
const NoteSchema = new Schema ({
    title: String,
    body: String
});

// CREATE MODEL
// ===================================================================
const Note = mongoose.model("Note", NoteSchema);

// EXPORT
// ===================================================================
module.exports = Note;