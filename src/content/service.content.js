import ContentModel from "../../models/content";
import serviceData from '../../utils/services';

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

      const data = await setData();

      data.map(format =>{
        saveData(format).then(function(){
            console.log('Agregados')
        })
      })
      
      } catch (err) {
        throw err;
      }
}


async function setData(){

    const data = await serviceData.getData();
    return data;
}

async function saveData(dta) {

    const createdContent = await ContentModel.create(dta);
      
    return createdContent;
  }
