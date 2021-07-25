const Ajv = require("ajv")
const ajv = new Ajv({useDefaults: true})

const DataScheme = {
    type: "object",
    properties: {
        time: {type: "number", default: null}
    },
    required: ["time"]
}

const MainScheme = {
    type: "object",
    properties: {
        type: {type: "string", default: null},
        data: {type: "object", default: null},
    },
    required: ["type", "data"]
}

const validate = ajv.compile(MainScheme)
const validDS = ajv.compile(DataScheme)

var data = {}
data.data = {}

validate(data)
validDS(data.data)

console.log(data)