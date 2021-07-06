import axios  from "axios";
import * as Config from './../constants/Config';

export default  function callAPI(endpoint, method, body) {
    return axios({
      method: method,
      url: `${Config.URLServer}/${endpoint}`,
      data: body,
    }).catch((err) => {
      console.log(err);
    });  
}

