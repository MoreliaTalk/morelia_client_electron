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

interface Flow {
    uuid?: string,
    time?: number,
    type?: string,
    owner?: string,
    users?: string[],
    title?: string,
    info?: string,
    message_start?: number,
    message_end?: number
}

interface Message {
    uuid?: string,
    client_id?: number,
    text?: string,
    from_user?: string,
    from_flow?: string,
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
    uuid?: string,
    login?: string,
    username?: string,
    bio?: string,
    avatar?: string,
    password?: string,
    salt?: string,
    key?: string,
    is_bot?: boolean,
    auth_id?: string,
    email?: string,
    time_created?: number
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