// пример протокола, используется для отлавливания ошибок несоответствия
// типизации протокола и его валидации
// version 1.15
const example = {
    "type": "user_info",
    "data": {
        "time": 1594492370,
        "flow": [{
            "id": 1254,
            "time": 1594492370,
            "type": "chat",
            "title": "Name Chat",
            "info": "Info about this chat"
        }],
        "message": [{
            "id": 1,
            "text": "some text...",
            "from_user_uuid": 1254,
            "time": 1594492370,
            "from_flow_id": 123655455,
            "file_picture": "jkfikdkdsd",
            "file_video": "sdfsdfsdf",
            "file_audio": "fgfsdfsdfsdf",
            "file_document": "fghsfghsfgh",
            "emoji": "sfdfsdfsdf",
            "edited_time": 1594492370,
            "edited_status": true
        }],
        "user": [{
            "uuid": 5855,
            "login": "username1",
            "password": "lksdjflksjfsd",
            "salt": "salt",
            "key": "key",
            "username": "Vasya",
            "is_bot": true,
            "auth_id": "4646hjgjhg64",
            "email": "querty@querty.com",
            "avatar": "fffdddddd",
            "bio": "My bio"
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