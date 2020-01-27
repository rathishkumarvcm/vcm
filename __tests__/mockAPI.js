import axios from 'axios';
import Config from '../App/Shared/Network/Config';

class mockAPI {
  static async callApi(apiType) {
    let resp;
    switch(apiType){     
      case 'compareFunds':
        resp = await axios.post(Config.MOCKTEST.getfunddetails+Config.getfunddetails); // get funds API 
        return resp;       
      default : 
        break;  
    }
    return resp;   
  }  
}

export default mockAPI;