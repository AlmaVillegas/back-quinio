import serviceContent from "./service.content";

module.exports = {
    addData
};

/**
 * Consultar Endpoint 
 *
 * GET DATA ENDPOINT
 *
 * CONTROLLER
 */
function addData(req, res) {
    serviceContent.__addData(req)
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