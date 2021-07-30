import example from "./exampleProtocol/example"
import MainType from "./scemasType/main"
import validate_schema = require("./schemas/validate_schema")

class Validate{
    constructor(){
        var examp: MainType = example;
        if (validate_schema(examp)){
            console.log("validator is ready")
        } else {
            console.log("Валидатор не соответствует примеру")
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

const valid = new Validate()
var objecta = valid.new_object()
