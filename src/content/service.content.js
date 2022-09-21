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
      const data = setData();

        const createdContent = await ContentModel.insertMany(data);
      
        return createdContent;

      } catch (err) {
        throw err;
      }
}


function setData(){

    const data = serviceData.getData();

    return data;
}





