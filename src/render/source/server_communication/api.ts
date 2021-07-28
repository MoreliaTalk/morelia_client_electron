import MainType from "./scemasType/main"
import { Data } from "./scemasType/main"
import validate_schema = require("./schemas/validate_schema")

class Validate{
    constructor(){
        console.log("validator is ready")
    }
    validate(data: {}){
        return validate_schema(data)
    }
    new_object(){
        var main_object: MainType = {}
        main_object.type = ""
        main_object.data = {}
        main_object.errors = {}
        main_object.jsonapi = {}
        var validato = validate_schema(main_object)
        if(validato){
            console.log(main_object);
        } else {
            console.log(validate_schema)
        }
    }
}

const valid = new Validate()
console.log(valid.new_object())