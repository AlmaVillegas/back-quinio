import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const transactionsSchema = new Schema({
    startDate:  { type: Date},
    weekAyer:   { type: String},
    nBonus: { type: Number},
    totalSale:  { type: Number},
    amountBonus:{ type: Number},
    nRedeem:    { type: Number},
    amountRedeem:   { type: Number},
    nExpiration: { type: Number},
    amountExpiration: { type: Number},
    amountBalance: {type: Number}
});

const transactions = mongoose.model('Transactions', transactionsSchema);

export default transactions;