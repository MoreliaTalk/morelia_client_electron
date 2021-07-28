"use strict";module.exports = validate20;module.exports.default = validate20;const schema22 = {"type":"object","properties":{"type":{"type":"string","default":null,"nullable":true},"data":{"$ref":"data.json","default":null},"errors":{"$ref":"errors.json","default":null},"jsonapi":{"$ref":"jsonapi.json","default":null},"meta":{"type":"null","default":null,"nullable":true}},"additionalProperties":false};const schema27 = {"$id":"errors.json","nullable":true,"type":"object","properties":{"code":{"type":"integer","default":null,"nullable":true},"status":{"type":"string","default":null,"nullable":true},"time":{"type":"integer","default":null,"nullable":true},"detail":{"type":"string","default":null,"nullable":true}}};const schema28 = {"$id":"jsonapi.json","nullable":true,"type":"object","properties":{"version":{"type":"string","default":null,"nullable":true}}};const schema23 = {"$id":"data.json","nullable":true,"type":"object","properties":{"time":{"type":"integer","default":null,"nullable":true},"flow":{"type":"array","items":{"$ref":"flow.json"},"default":null},"message":{"type":"array","items":{"$ref":"message.json"},"default":null},"user":{"type":"array","items":{"$ref":"user.json"},"default":null},"meta":{"type":"null","default":null,"nullable":true}}};const schema24 = {"$id":"flow.json","nullable":true,"type":"object","properties":{"id":{"type":"integer","default":null,"nullable":true},"time":{"type":"integer","default":null,"nullable":true},"type":{"type":"string","default":null,"nullable":true},"title":{"type":"string","default":null,"nullable":true},"info":{"type":"string","default":null,"nullable":true}}};const schema25 = {"$id":"message.json","nullable":true,"type":"object","properties":{"id":{"type":"integer","default":null,"nullable":true},"text":{"type":"string","default":null,"nullable":true},"from_user_uuid":{"type":"integer","default":null,"nullable":true},"from_flow_id":{"type":"integer","default":null,"nullable":true},"time":{"type":"integer","default":null,"nullable":true},"file_picture":{"type":"string","default":null,"nullable":true},"file_video":{"type":"string","default":null,"nullable":true},"file_audio":{"type":"string","default":null,"nullable":true},"file_document":{"type":"string","default":null,"nullable":true},"emoji":{"type":"string","default":null,"nullable":true},"edited_time":{"type":"integer","default":null,"nullable":true},"edited_status":{"type":"boolean","default":null,"nullable":true}}};const schema26 = {"$id":"user.json","nullable":true,"type":"object","properties":{"uuid":{"type":"integer","default":null,"nullable":true},"login":{"type":"string","default":null,"nullable":true},"username":{"type":"string","default":null,"nullable":true},"bio":{"type":"string","default":null,"nullable":true},"avatar":{"type":"string","default":null,"nullable":true},"password":{"type":"string","default":null,"nullable":true},"salt":{"type":"string","default":null,"nullable":true},"key":{"type":"string","default":null,"nullable":true},"is_bot":{"type":"boolean","default":null,"nullable":true},"auth_id":{"type":"string","default":null,"nullable":true},"email":{"type":"string","default":null,"nullable":true}}};function validate21(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){/*# sourceURL="data.json" */;let vErrors = null;let errors = 0;if((!(data && typeof data == "object" && !Array.isArray(data))) && (data !== null)){validate21.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.time === undefined){data.time = null;}if(data.flow === undefined){data.flow = null;}if(data.message === undefined){data.message = null;}if(data.user === undefined){data.user = null;}if(data.meta === undefined){data.meta = null;}let data0 = data.time;const _errs2 = errors;if((!(((typeof data0 == "number") && (!(data0 % 1) && !isNaN(data0))) && (isFinite(data0)))) && (data0 !== null)){validate21.errors = [{instancePath:instancePath+"/time",schemaPath:"#/properties/time/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid0 = _errs2 === errors;if(valid0){let data1 = data.flow;const _errs5 = errors;if(errors === _errs5){if(Array.isArray(data1)){var valid1 = true;const len0 = data1.length;for(let i0=0; i0<len0; i0++){let data2 = data1[i0];const _errs7 = errors;const _errs8 = errors;if((!(data2 && typeof data2 == "object" && !Array.isArray(data2))) && (data2 !== null)){validate21.errors = [{instancePath:instancePath+"/flow/" + i0,schemaPath:"flow.json/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}if(errors === _errs8){if(data2 && typeof data2 == "object" && !Array.isArray(data2)){if(data2.id === undefined){data2.id = null;}if(data2.time === undefined){data2.time = null;}if(data2.type === undefined){data2.type = null;}if(data2.title === undefined){data2.title = null;}if(data2.info === undefined){data2.info = null;}let data3 = data2.id;const _errs11 = errors;if((!(((typeof data3 == "number") && (!(data3 % 1) && !isNaN(data3))) && (isFinite(data3)))) && (data3 !== null)){validate21.errors = [{instancePath:instancePath+"/flow/" + i0+"/id",schemaPath:"flow.json/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid3 = _errs11 === errors;if(valid3){let data4 = data2.time;const _errs14 = errors;if((!(((typeof data4 == "number") && (!(data4 % 1) && !isNaN(data4))) && (isFinite(data4)))) && (data4 !== null)){validate21.errors = [{instancePath:instancePath+"/flow/" + i0+"/time",schemaPath:"flow.json/properties/time/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid3 = _errs14 === errors;if(valid3){let data5 = data2.type;const _errs17 = errors;if((typeof data5 !== "string") && (data5 !== null)){validate21.errors = [{instancePath:instancePath+"/flow/" + i0+"/type",schemaPath:"flow.json/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs17 === errors;if(valid3){let data6 = data2.title;const _errs20 = errors;if((typeof data6 !== "string") && (data6 !== null)){validate21.errors = [{instancePath:instancePath+"/flow/" + i0+"/title",schemaPath:"flow.json/properties/title/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs20 === errors;if(valid3){let data7 = data2.info;const _errs23 = errors;if((typeof data7 !== "string") && (data7 !== null)){validate21.errors = [{instancePath:instancePath+"/flow/" + i0+"/info",schemaPath:"flow.json/properties/info/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid3 = _errs23 === errors;}}}}}}var valid1 = _errs7 === errors;if(!valid1){break;}}}else {validate21.errors = [{instancePath:instancePath+"/flow",schemaPath:"#/properties/flow/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs5 === errors;if(valid0){let data8 = data.message;const _errs26 = errors;if(errors === _errs26){if(Array.isArray(data8)){var valid4 = true;const len1 = data8.length;for(let i1=0; i1<len1; i1++){let data9 = data8[i1];const _errs28 = errors;const _errs29 = errors;if((!(data9 && typeof data9 == "object" && !Array.isArray(data9))) && (data9 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1,schemaPath:"message.json/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}if(errors === _errs29){if(data9 && typeof data9 == "object" && !Array.isArray(data9)){if(data9.id === undefined){data9.id = null;}if(data9.text === undefined){data9.text = null;}if(data9.from_user_uuid === undefined){data9.from_user_uuid = null;}if(data9.from_flow_id === undefined){data9.from_flow_id = null;}if(data9.time === undefined){data9.time = null;}if(data9.file_picture === undefined){data9.file_picture = null;}if(data9.file_video === undefined){data9.file_video = null;}if(data9.file_audio === undefined){data9.file_audio = null;}if(data9.file_document === undefined){data9.file_document = null;}if(data9.emoji === undefined){data9.emoji = null;}if(data9.edited_time === undefined){data9.edited_time = null;}if(data9.edited_status === undefined){data9.edited_status = null;}let data10 = data9.id;const _errs32 = errors;if((!(((typeof data10 == "number") && (!(data10 % 1) && !isNaN(data10))) && (isFinite(data10)))) && (data10 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/id",schemaPath:"message.json/properties/id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid6 = _errs32 === errors;if(valid6){let data11 = data9.text;const _errs35 = errors;if((typeof data11 !== "string") && (data11 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/text",schemaPath:"message.json/properties/text/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs35 === errors;if(valid6){let data12 = data9.from_user_uuid;const _errs38 = errors;if((!(((typeof data12 == "number") && (!(data12 % 1) && !isNaN(data12))) && (isFinite(data12)))) && (data12 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/from_user_uuid",schemaPath:"message.json/properties/from_user_uuid/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid6 = _errs38 === errors;if(valid6){let data13 = data9.from_flow_id;const _errs41 = errors;if((!(((typeof data13 == "number") && (!(data13 % 1) && !isNaN(data13))) && (isFinite(data13)))) && (data13 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/from_flow_id",schemaPath:"message.json/properties/from_flow_id/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid6 = _errs41 === errors;if(valid6){let data14 = data9.time;const _errs44 = errors;if((!(((typeof data14 == "number") && (!(data14 % 1) && !isNaN(data14))) && (isFinite(data14)))) && (data14 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/time",schemaPath:"message.json/properties/time/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid6 = _errs44 === errors;if(valid6){let data15 = data9.file_picture;const _errs47 = errors;if((typeof data15 !== "string") && (data15 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/file_picture",schemaPath:"message.json/properties/file_picture/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs47 === errors;if(valid6){let data16 = data9.file_video;const _errs50 = errors;if((typeof data16 !== "string") && (data16 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/file_video",schemaPath:"message.json/properties/file_video/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs50 === errors;if(valid6){let data17 = data9.file_audio;const _errs53 = errors;if((typeof data17 !== "string") && (data17 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/file_audio",schemaPath:"message.json/properties/file_audio/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs53 === errors;if(valid6){let data18 = data9.file_document;const _errs56 = errors;if((typeof data18 !== "string") && (data18 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/file_document",schemaPath:"message.json/properties/file_document/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs56 === errors;if(valid6){let data19 = data9.emoji;const _errs59 = errors;if((typeof data19 !== "string") && (data19 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/emoji",schemaPath:"message.json/properties/emoji/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid6 = _errs59 === errors;if(valid6){let data20 = data9.edited_time;const _errs62 = errors;if((!(((typeof data20 == "number") && (!(data20 % 1) && !isNaN(data20))) && (isFinite(data20)))) && (data20 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/edited_time",schemaPath:"message.json/properties/edited_time/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid6 = _errs62 === errors;if(valid6){let data21 = data9.edited_status;const _errs65 = errors;if((typeof data21 !== "boolean") && (data21 !== null)){validate21.errors = [{instancePath:instancePath+"/message/" + i1+"/edited_status",schemaPath:"message.json/properties/edited_status/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid6 = _errs65 === errors;}}}}}}}}}}}}}var valid4 = _errs28 === errors;if(!valid4){break;}}}else {validate21.errors = [{instancePath:instancePath+"/message",schemaPath:"#/properties/message/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs26 === errors;if(valid0){let data22 = data.user;const _errs68 = errors;if(errors === _errs68){if(Array.isArray(data22)){var valid7 = true;const len2 = data22.length;for(let i2=0; i2<len2; i2++){let data23 = data22[i2];const _errs70 = errors;const _errs71 = errors;if((!(data23 && typeof data23 == "object" && !Array.isArray(data23))) && (data23 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2,schemaPath:"user.json/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}if(errors === _errs71){if(data23 && typeof data23 == "object" && !Array.isArray(data23)){if(data23.uuid === undefined){data23.uuid = null;}if(data23.login === undefined){data23.login = null;}if(data23.username === undefined){data23.username = null;}if(data23.bio === undefined){data23.bio = null;}if(data23.avatar === undefined){data23.avatar = null;}if(data23.password === undefined){data23.password = null;}if(data23.salt === undefined){data23.salt = null;}if(data23.key === undefined){data23.key = null;}if(data23.is_bot === undefined){data23.is_bot = null;}if(data23.auth_id === undefined){data23.auth_id = null;}if(data23.email === undefined){data23.email = null;}let data24 = data23.uuid;const _errs74 = errors;if((!(((typeof data24 == "number") && (!(data24 % 1) && !isNaN(data24))) && (isFinite(data24)))) && (data24 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2+"/uuid",schemaPath:"user.json/properties/uuid/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid9 = _errs74 === errors;if(valid9){let data25 = data23.login;const _errs77 = errors;if((typeof data25 !== "string") && (data25 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2+"/login",schemaPath:"user.json/properties/login/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs77 === errors;if(valid9){let data26 = data23.username;const _errs80 = errors;if((typeof data26 !== "string") && (data26 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2+"/username",schemaPath:"user.json/properties/username/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs80 === errors;if(valid9){let data27 = data23.bio;const _errs83 = errors;if((typeof data27 !== "string") && (data27 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2+"/bio",schemaPath:"user.json/properties/bio/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs83 === errors;if(valid9){let data28 = data23.avatar;const _errs86 = errors;if((typeof data28 !== "string") && (data28 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2+"/avatar",schemaPath:"user.json/properties/avatar/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs86 === errors;if(valid9){let data29 = data23.password;const _errs89 = errors;if((typeof data29 !== "string") && (data29 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2+"/password",schemaPath:"user.json/properties/password/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs89 === errors;if(valid9){let data30 = data23.salt;const _errs92 = errors;if((typeof data30 !== "string") && (data30 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2+"/salt",schemaPath:"user.json/properties/salt/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs92 === errors;if(valid9){let data31 = data23.key;const _errs95 = errors;if((typeof data31 !== "string") && (data31 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2+"/key",schemaPath:"user.json/properties/key/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs95 === errors;if(valid9){let data32 = data23.is_bot;const _errs98 = errors;if((typeof data32 !== "boolean") && (data32 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2+"/is_bot",schemaPath:"user.json/properties/is_bot/type",keyword:"type",params:{type: "boolean"},message:"must be boolean"}];return false;}var valid9 = _errs98 === errors;if(valid9){let data33 = data23.auth_id;const _errs101 = errors;if((typeof data33 !== "string") && (data33 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2+"/auth_id",schemaPath:"user.json/properties/auth_id/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs101 === errors;if(valid9){let data34 = data23.email;const _errs104 = errors;if((typeof data34 !== "string") && (data34 !== null)){validate21.errors = [{instancePath:instancePath+"/user/" + i2+"/email",schemaPath:"user.json/properties/email/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid9 = _errs104 === errors;}}}}}}}}}}}}var valid7 = _errs70 === errors;if(!valid7){break;}}}else {validate21.errors = [{instancePath:instancePath+"/user",schemaPath:"#/properties/user/type",keyword:"type",params:{type: "array"},message:"must be array"}];return false;}}var valid0 = _errs68 === errors;if(valid0){const _errs107 = errors;if(data.meta !== null){validate21.errors = [{instancePath:instancePath+"/meta",schemaPath:"#/properties/meta/type",keyword:"type",params:{type: "null"},message:"must be null"}];return false;}var valid0 = _errs107 === errors;}}}}}}validate21.errors = vErrors;return errors === 0;}function validate20(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){if(data.type === undefined){data.type = null;}if(data.data === undefined){data.data = null;}if(data.errors === undefined){data.errors = null;}if(data.jsonapi === undefined){data.jsonapi = null;}if(data.meta === undefined){data.meta = null;}const _errs1 = errors;for(const key0 in data){if(!(((((key0 === "type") || (key0 === "data")) || (key0 === "errors")) || (key0 === "jsonapi")) || (key0 === "meta"))){validate20.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){let data0 = data.type;const _errs2 = errors;if((typeof data0 !== "string") && (data0 !== null)){validate20.errors = [{instancePath:instancePath+"/type",schemaPath:"#/properties/type/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid0 = _errs2 === errors;if(valid0){const _errs5 = errors;if(!(validate21(data.data, {instancePath:instancePath+"/data",parentData:data,parentDataProperty:"data",rootData}))){vErrors = vErrors === null ? validate21.errors : vErrors.concat(validate21.errors);errors = vErrors.length;}var valid0 = _errs5 === errors;if(valid0){let data2 = data.errors;const _errs6 = errors;const _errs7 = errors;if((!(data2 && typeof data2 == "object" && !Array.isArray(data2))) && (data2 !== null)){validate20.errors = [{instancePath:instancePath+"/errors",schemaPath:"errors.json/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}if(errors === _errs7){if(data2 && typeof data2 == "object" && !Array.isArray(data2)){if(data2.code === undefined){data2.code = null;}if(data2.status === undefined){data2.status = null;}if(data2.time === undefined){data2.time = null;}if(data2.detail === undefined){data2.detail = null;}let data3 = data2.code;const _errs10 = errors;if((!(((typeof data3 == "number") && (!(data3 % 1) && !isNaN(data3))) && (isFinite(data3)))) && (data3 !== null)){validate20.errors = [{instancePath:instancePath+"/errors/code",schemaPath:"errors.json/properties/code/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid2 = _errs10 === errors;if(valid2){let data4 = data2.status;const _errs13 = errors;if((typeof data4 !== "string") && (data4 !== null)){validate20.errors = [{instancePath:instancePath+"/errors/status",schemaPath:"errors.json/properties/status/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs13 === errors;if(valid2){let data5 = data2.time;const _errs16 = errors;if((!(((typeof data5 == "number") && (!(data5 % 1) && !isNaN(data5))) && (isFinite(data5)))) && (data5 !== null)){validate20.errors = [{instancePath:instancePath+"/errors/time",schemaPath:"errors.json/properties/time/type",keyword:"type",params:{type: "integer"},message:"must be integer"}];return false;}var valid2 = _errs16 === errors;if(valid2){let data6 = data2.detail;const _errs19 = errors;if((typeof data6 !== "string") && (data6 !== null)){validate20.errors = [{instancePath:instancePath+"/errors/detail",schemaPath:"errors.json/properties/detail/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}var valid2 = _errs19 === errors;}}}}}var valid0 = _errs6 === errors;if(valid0){let data7 = data.jsonapi;const _errs22 = errors;const _errs23 = errors;if((!(data7 && typeof data7 == "object" && !Array.isArray(data7))) && (data7 !== null)){validate20.errors = [{instancePath:instancePath+"/jsonapi",schemaPath:"jsonapi.json/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}if(errors === _errs23){if(data7 && typeof data7 == "object" && !Array.isArray(data7)){if(data7.version === undefined){data7.version = null;}let data8 = data7.version;if((typeof data8 !== "string") && (data8 !== null)){validate20.errors = [{instancePath:instancePath+"/jsonapi/version",schemaPath:"jsonapi.json/properties/version/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs22 === errors;if(valid0){const _errs29 = errors;if(data.meta !== null){validate20.errors = [{instancePath:instancePath+"/meta",schemaPath:"#/properties/meta/type",keyword:"type",params:{type: "null"},message:"must be null"}];return false;}var valid0 = _errs29 === errors;}}}}}}else {validate20.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate20.errors = vErrors;return errors === 0;}