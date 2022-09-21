import superagent from 'superagent';
import config from '../config';


exports.getData = async function () {
try{
    const data = await superagent.get(`${config.host}/orders/v1/loyalty/bulk/export/transactions`)
    .set('Content-Type', 'application/json')
    .set('X-Escale-Details', config.token)
    .query({page:0, size: 20})
    .catch(err => reject(err))
    
    return data.body.content;
  }catch(err){
    throw err
  }
}
