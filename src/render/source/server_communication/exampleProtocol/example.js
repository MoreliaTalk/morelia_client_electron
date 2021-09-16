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

// пример объекта протокола, используется для отлавливания ошибок несоответствия
// типизации протокола и его валидации
// version 1.16
const example = {
    "type": "user_info",
    "data": {
        "time": 1594492370,
        "flow": [{
            "uuid": "1254",
            "time": 1594492370,
            "type": "chat",
            "title": "Name Chat",
            "info": "Info about this chat",
            "owner": "123456",
            "users": ["123456", "65478"],
            "message_start": 0,
            "message_end": 100
        }],
        "message": [{
            "uuid": "1",
            "client_id": 123,
            "text": "some text...",
            "from_user": "1234567",
            "time": 1594492370,
            "from_flow": "123655455",
            "file_picture": "jkfikdkdsd",
            "file_video": "sdfsdfsdf",
            "file_audio": "fgfsdfsdfsdf",
            "file_document": "fghsfghsfgh",
            "emoji": "sfdfsdfsdf",
            "edited_time": 1594492370,
            "edited_status": true
        }],
        "user": [{
            "uuid": "1234567",
            "login": "username1",
            "password": "lksdjflksjfsd",
            "salt": "salt",
            "key": "key",
            "username": "Vasya",
            "is_bot": true,
            "auth_id": "4646hjgjhg64",
            "email": "querty@querty.com",
            "avatar": "fffdddddd",
            "bio": "My bio",
            "time_created": 2542445821452
        }],
        "meta": null
        },
    "errors": {
        "code": 200,
        "status": "OK",
        "time": 1594492370,
        "detail": "successfully"
    },
    "jsonapi": {
        "version": "1.0"
    },
    "meta": null
}

export default example;