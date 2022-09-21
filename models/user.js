import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const UserSchema = new Schema({
    name:   { type: String, requered: true },
    email:  { type: String},
    password:{ type: String}
});

const user = mongoose.model('User', UserSchema);

export default user;