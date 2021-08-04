import example from "./exampleProtocol/example"
import MainType from "./scemasType/main"
import validate_schema = require("./schemas/validate_schema")

class Validate{
    constructor(){
        var examp: MainType = example;
        if (validate_schema(examp)){
            console.log("validator is ready")
        } else {
            console.error("ERROR: The validator does not match the example")
        }
    }
    validate(data: {}){
        return validate_schema(data)
    }
    new_object(): MainType { 
        var main_object: MainType = {}
        validate_schema(main_object)
        return main_object
    }
}

export default Validate;