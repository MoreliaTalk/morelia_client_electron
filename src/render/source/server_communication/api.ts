/*
Copyright (c) 2021 - present NekrodNIK

This file is part of MoreliaClientElectron.

MoreliaClientElectron is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

MoreliaClientElectron is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with MoreliaClientElectron. If not, see <https://www.gnu.org/licenses/>.
*/

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

export { Validate }