import * as validate_scheme from "./schemas/validate_schema"

class Validate{
    constructor(){
        console.log("validator is ready")
    }
    validate(data: {}){
        return validate_scheme(data)
    }
    new_object(){
        var a: MainSchemeType = {}
        if(validate_scheme(a)){
            console.log(a)
        }
    }
}

const valid = new Validate()
console.log(valid.new_object())