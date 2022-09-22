import ContentModel from "../../models/content";
import TransModel from "../../models/transactions";
import Message from "../../utils/messages";


module.exports = {
    __addData,
    __getTransactions,
    __getTransactionsBonus,
    __getTransactionsBonusD
};

/**
 * get a transactions
 *
 * SERVICE
 *
 * @resolve {data}
 */
 async function __getTransactions() {

     const transaction = await TransModel.find();
     return transaction 
}

/**
 * add data a transactions
 *
 * SERVICE
 *
 * @resolve {data}
 */
 async function __addData() {

    const content = await getContentcomplete();

    const bones = await nBonus();

    const amountTotal = await getAmounTotal();
    
    const amount = await getAmount();

    const formt = format(content, bones, amountTotal, amount)
    
     const transactions = await TransModel.create(formt)
  
     return transactions
}

/**
 * get a transactions report semanal
 *
 * SERVICE
 *
 * @resolve {data}
 */
 async function __getTransactionsBonus() {

    const transaction = await TransModel.find();
    const data = {
        Semana:transaction[0].weekAyer,
        bonus: transaction[0].nBonus 
    }
    return data
}

/**
 * get a transactions diario
 *
 * SERVICE
 *
 * @resolve {data}
 */
 async function __getTransactionsBonusD() {

    const transaction = await TransModel.find();
    const data = {
        Semana:transaction[0].weekAyer/360,
        bonus: transaction[0].nBonus/360 
    }
    return data
}

async function nBonus(){

    const bonus = await ContentModel.aggregate([
        {
          $group: {
            _id: "$type",
            count: {
             $sum: 1 
            }
        }
      }
      ])

    return bonus;
}

async function getAmounTotal(){
    const total = await ContentModel.aggregate([
        [
            {
                $group: {
                  _id: null,
                  total_count: {
                    $sum: "$saleAmount"
                  }
                }
              },
          ]
    ])

    return total;
}

async function getAmounBonus(){
    const total = await ContentModel.aggregate([
        [
            {
                $group: {
                  _id: '$type',
                  total_count: {
                    $sum: "$saleAmount"
                  }
                }
              },
          ]
    ])
    return total;
}

async function getAmount(){
    const total = await ContentModel.aggregate([
        [
            {
                $group: {
                  _id: '$type',
                  total_count: {
                    $sum: "$amountUsed"
                  }
                }
              },
          ]
    ])

    return total;
}

async function getContentcomplete(){
    const content = await ContentModel.find();

    return content
}

 function getWeekAyer(date){
    date = new Date();
    var oneJan = new Date(date.getFullYear(),0,1);
    var numberOfDays = Math.floor((date - oneJan) / (24 * 60 * 60 * 1000));
    var result = Math.ceil(( date.getDay() + 1 + numberOfDays) / 7);
    return result
}

function format(data, type, total, amount) {
    return {
        startDate: '2021-10-08T21:16:46.864+00:00',
        weekAyer: getWeekAyer(data.createdAt),
        nBonus: type[type.length - 1].count,
        totalSale: total[0].total_count,
        amountBonus: total[0].total_count,
        nRedeem: type[0].count,
        amountRedeem: 0,
        nExpiration: 0,
        amountExpiration: 0,
        amountBalance: amount[amount.length - 1].total_count
    }
}
