interface Flow {
    id?: number,
    time?: number,
    type?: string,
    title?: string,
    info?: string
}

interface Message {
    id?: number,
    text?: string,
    from_user_uuid?: number,
    from_flow_id?: number,
    time?: number,
    file_picture?: string,
    file_video?: string,
    file_audio?: string,
    file_document?: string,
    emoji?: string,
    edited_time?: number,
    edited_status?: boolean
}

interface User {
    uuid?: number,
    login?: string,
    username?: string,
    bio?: string,
    avatar?: string,
    password?: string,
    salt?: string,
    key?: string,
    is_bot?: boolean,
    auth_id?: string,
    email?: string
}

interface Data {
    time?: number,
    flow?: Flow[],
    message?: Message[]
    user?: User[]
    meta?: any
}

interface Errors {
    code?: number,
    status?: string,
    time?: number,
    detail?: string
}

interface JsonApi {
    version?: string
}

interface MainType {
    type?: string,
    data?: Data,
    errors?: Errors,
    jsonapi?: JsonApi,
    meta?: any
}

export { Flow, Message, User, Data, Errors, JsonApi };
export default MainType;