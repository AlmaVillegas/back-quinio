import ContentModel from "../../models/content";
import serviceData from "../../utils/services";
import Message from "../../utils/messages";

module.exports = {
    __addData
};

/**
 * Get data
 *
 * SERVICE
 *
 * @resolve {data}
 */
async function __addData() {
  try {

      const data = await getData();

      data.map(format =>{
        saveData(format).then(function(){
            console.log('Agregados')
        }).catch(err => {throw {code: 503, message: Message.saving_error}})
      })
      
      } catch (err) {
        throw err;
      }
}

async function getData(){

    const data = await serviceData.getData();
    return data;
}

async function saveData(dta) {

    const createdContent = await ContentModel.create(dta);
      
    return createdContent;
}
