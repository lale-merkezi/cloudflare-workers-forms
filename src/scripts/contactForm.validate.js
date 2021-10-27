"use strict";module.exports = validate10;module.exports.default = validate10;const schema11 = {"type":"object","properties":{"fname":{"type":"string","minLength":2,"maxLength":50},"lname":{"type":"string","minLength":2,"maxLength":50},"phone":{"type":"string","format":"tel","maxLength":200},"gdpr":{"const":true}},"required":["fname","lname","phone","gdpr"],"additionalProperties":false};const func4 = require("ajv/dist/runtime/ucs2length").default;const formats0 = require("../lib/my-formats").tel;function validate10(data, {instancePath="", parentData, parentDataProperty, rootData=data}={}){let vErrors = null;let errors = 0;if(errors === 0){if(data && typeof data == "object" && !Array.isArray(data)){let missing0;if(((((data.fname === undefined) && (missing0 = "fname")) || ((data.lname === undefined) && (missing0 = "lname"))) || ((data.phone === undefined) && (missing0 = "phone"))) || ((data.gdpr === undefined) && (missing0 = "gdpr"))){validate10.errors = [{instancePath,schemaPath:"#/required",keyword:"required",params:{missingProperty: missing0},message:"must have required property '"+missing0+"'"}];return false;}else {const _errs1 = errors;for(const key0 in data){if(!((((key0 === "fname") || (key0 === "lname")) || (key0 === "phone")) || (key0 === "gdpr"))){validate10.errors = [{instancePath,schemaPath:"#/additionalProperties",keyword:"additionalProperties",params:{additionalProperty: key0},message:"must NOT have additional properties"}];return false;break;}}if(_errs1 === errors){if(data.fname !== undefined){let data0 = data.fname;const _errs2 = errors;if(errors === _errs2){if(typeof data0 === "string"){if(func4(data0) > 50){validate10.errors = [{instancePath:instancePath+"/fname",schemaPath:"#/properties/fname/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"}];return false;}else {if(func4(data0) < 2){validate10.errors = [{instancePath:instancePath+"/fname",schemaPath:"#/properties/fname/minLength",keyword:"minLength",params:{limit: 2},message:"must NOT have fewer than 2 characters"}];return false;}}}else {validate10.errors = [{instancePath:instancePath+"/fname",schemaPath:"#/properties/fname/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs2 === errors;}else {var valid0 = true;}if(valid0){if(data.lname !== undefined){let data1 = data.lname;const _errs4 = errors;if(errors === _errs4){if(typeof data1 === "string"){if(func4(data1) > 50){validate10.errors = [{instancePath:instancePath+"/lname",schemaPath:"#/properties/lname/maxLength",keyword:"maxLength",params:{limit: 50},message:"must NOT have more than 50 characters"}];return false;}else {if(func4(data1) < 2){validate10.errors = [{instancePath:instancePath+"/lname",schemaPath:"#/properties/lname/minLength",keyword:"minLength",params:{limit: 2},message:"must NOT have fewer than 2 characters"}];return false;}}}else {validate10.errors = [{instancePath:instancePath+"/lname",schemaPath:"#/properties/lname/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}var valid0 = _errs4 === errors;}else {var valid0 = true;}if(valid0){if(data.phone !== undefined){let data2 = data.phone;const _errs6 = errors;if(errors === _errs6){if(errors === _errs6){if(typeof data2 === "string"){if(func4(data2) > 200){validate10.errors = [{instancePath:instancePath+"/phone",schemaPath:"#/properties/phone/maxLength",keyword:"maxLength",params:{limit: 200},message:"must NOT have more than 200 characters"}];return false;}else {if(!(formats0(data2))){validate10.errors = [{instancePath:instancePath+"/phone",schemaPath:"#/properties/phone/format",keyword:"format",params:{format: "tel"},message:"must match format \""+"tel"+"\""}];return false;}}}else {validate10.errors = [{instancePath:instancePath+"/phone",schemaPath:"#/properties/phone/type",keyword:"type",params:{type: "string"},message:"must be string"}];return false;}}}var valid0 = _errs6 === errors;}else {var valid0 = true;}if(valid0){if(data.gdpr !== undefined){const _errs8 = errors;if(true !== data.gdpr){validate10.errors = [{instancePath:instancePath+"/gdpr",schemaPath:"#/properties/gdpr/const",keyword:"const",params:{allowedValue: true},message:"must be equal to constant"}];return false;}var valid0 = _errs8 === errors;}else {var valid0 = true;}}}}}}}else {validate10.errors = [{instancePath,schemaPath:"#/type",keyword:"type",params:{type: "object"},message:"must be object"}];return false;}}validate10.errors = vErrors;return errors === 0;}