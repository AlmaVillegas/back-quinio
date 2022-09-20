import mongoose from 'mongoose';
const Schema = mongoose.Schema;

const contentSchema = new Schema({
  content: [{
    origin:  { type: String},
    type:    { type: String},
    walletId:{ type: String},
    orderId: { type: mongoose.Types.ObjectId },
    foreignTxId:  { type: mongoose.Types.ObjectId },
    expenses:     { type: String},
    saleAmount:   { type: Number},
    rewardAmount: { type: Number},
    amountUsed:   { type: Number},
    expirationDate: {type: Date, default: Date.now},
    createdAt: {type: Date, default: Date.now},
    status: { 
        type: String,
        enum: ["pending", "completed"],
    },
    collaboratorId: { type: mongoose.Types.ObjectId },
    originDetails:{
        tax:   { type: Number},
        group: { type: String},
        store: { type: String},
        total: { type: Number},
        details: [{
                qty: { type: Number},
                tax: { type: Number},
                type: { type: String},
                total: { type: Number},
                category: { type: String},
                discount: { type: Number},
                itemcode: { type: String},
                itemname: { type: String},
                subtotal: { type: Number},
                transactionkey: { type: String}
            }],
            cardcode: { type: String},
            cardname: { type: String},
            payments: [
                {
                    type: { type: String},
                    amount: { type: Number},
                    reference: { type: String},
                    transactionkey: { type: String}
                }
            ],
            subtotal: { type: Number},
            actualdate: {type: Date, default: Date.now},
            businessdate: {type: Date, default: Date.now},
            transactionkey: { type: String}
        },
        rewardsDetails: { type: String},
        userId: { type: mongoose.Types.ObjectId }
        
    }]
});

const Content = mongoose.model('Content', contentSchema);

export default Content;