import {get} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/api.js";
import {setInnerText} from "https://cdn.jsdelivr.net/gh/jscroot/lib@0.2.0/element.js";


get("https://explorer.avn.network/api/getbalance/?address=RJWkuMKEXxkJTW9fjHjhAJucattmifADFP",runafterGet);


function runafterGet(result){
    console.log(result);
    setInnerText('timestamp',result.timestamp);
    setInnerText('address',result.address);
    setInnerText('balance',result.balance);

}
