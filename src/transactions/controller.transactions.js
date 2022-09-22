import serviceTransaction from "./service.transactions";

module.exports = {
    addData,
    getData,
    getDataBonus,
    getDataBonusD
};

/**
 * add transaction 
 *
 * GET DATA ENDPOINT
 *
 * CONTROLLER
 */
function addData(req, res) {
    serviceTransaction.__addData(req)
    .then((data) => {
      res.status(200).send({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(err.code).send({
        success: false,
        type: err.message,
      });
    });
}

/**
 * add transaction 
 *
 * GET DATA ENDPOINT
 *
 * CONTROLLER
 */
 function getData(req, res) {
    serviceTransaction.__getTransactions(req)
    .then((data) => {
      res.status(200).send({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(err.code).send({
        success: false,
        type: err.message,
      });
    });
}

/**
 * get bonus transaction week
 *
 * GET DATA ENDPOINT
 *
 * CONTROLLER
 */
 function getDataBonus(req, res) {
    serviceTransaction.__getTransactionsBonus(req)
    .then((data) => {
      res.status(200).send({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(err.code).send({
        success: false,
        type: err.message,
      });
    });
}

/**
 * get bonus transaction daily
 *
 * GET DATA ENDPOINT
 *
 * CONTROLLER
 */
 function getDataBonusD(req, res) {
    serviceTransaction.__getTransactionsBonusD(req)
    .then((data) => {
      res.status(200).send({
        success: true,
        data: data,
      });
    })
    .catch((err) => {
      res.status(err.code).send({
        success: false,
        type: err.message,
      });
    });
}