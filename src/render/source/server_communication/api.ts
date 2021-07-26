import Ajv, { JTDDataType } from "ajv/dist/core"
const ajv = new Ajv()

const MainScheme = {
    properties:{
        type: {type: "string"}
    }
}

type MainSchemeType = JTDDataType<typeof MainScheme>

const validate = ajv.compile<MainSchemeType>(MainScheme)

