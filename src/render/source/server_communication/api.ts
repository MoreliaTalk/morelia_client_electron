import MainType from "./scemasType/main"
import validate_schema = require("./schemas/validate_schema")

class Validate{
    constructor(){
        console.log("validator is ready")
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

const valid = new Validate()
var objecta = valid.new_object()
