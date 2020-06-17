(function(e, a) { for(var i in a) e[i] = a[i]; }(exports, /******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./src/lambdaHandlers/userHandler.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./src/lambdaHandlers/userHandler.ts":
/*!*******************************************!*\
  !*** ./src/lambdaHandlers/userHandler.ts ***!
  \*******************************************/
/*! exports provided: registration */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, \"registration\", function() { return registration; });\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! source-map-support/register */ \"source-map-support/register\");\n/* harmony import */ var source_map_support_register__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(source_map_support_register__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../models/User */ \"./src/models/User.ts\");\n/* harmony import */ var _service_UserService__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../service/UserService */ \"./src/service/UserService.ts\");\n/* harmony import */ var _repositories_UserRepositoryDynamoDB__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../repositories/UserRepositoryDynamoDB */ \"./src/repositories/UserRepositoryDynamoDB.ts\");\n\n\n\n\nconst userRepositoryDynamoDB = new _repositories_UserRepositoryDynamoDB__WEBPACK_IMPORTED_MODULE_3__[\"default\"](process.env.STAGE || 'local');\nconst userService = new _service_UserService__WEBPACK_IMPORTED_MODULE_2__[\"default\"](userRepositoryDynamoDB);\nconst registration = async (event) => {\n    const { body } = event;\n    const parsedBody = JSON.parse(body);\n    const newUser = Object.assign(new _models_User__WEBPACK_IMPORTED_MODULE_1__[\"default\"](), {\n        Email: parsedBody.user.email,\n        Name: parsedBody.user.name,\n        password: parsedBody.user.password,\n    });\n    try {\n        const response = await userService.register(newUser);\n        return {\n            statusCode: 200,\n            headers: {\n                'Access-Control-Allow-Origin': '*',\n                'Access-Control-Allow-Credentials': true,\n            },\n            body: JSON.stringify(response),\n        };\n    }\n    catch (error) {\n        return {\n            statusCode: 400,\n            body: JSON.stringify('ERROR'),\n        };\n    }\n};\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbGFtYmRhSGFuZGxlcnMvdXNlckhhbmRsZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbGFtYmRhSGFuZGxlcnMvdXNlckhhbmRsZXIudHM/ZTliYiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBBUElHYXRld2F5UHJveHlIYW5kbGVyIH0gZnJvbSAnYXdzLWxhbWJkYSc7XG5pbXBvcnQgJ3NvdXJjZS1tYXAtc3VwcG9ydC9yZWdpc3Rlcic7XG5cbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy9Vc2VyJztcblxuaW1wb3J0IFVzZXJTZXJ2aWNlIGZyb20gJy4uL3NlcnZpY2UvVXNlclNlcnZpY2UnO1xuaW1wb3J0IFVzZXJSZXBvc2l0b3J5RHluYW1vREIgZnJvbSAnLi4vcmVwb3NpdG9yaWVzL1VzZXJSZXBvc2l0b3J5RHluYW1vREInO1xuXG5jb25zdCB1c2VyUmVwb3NpdG9yeUR5bmFtb0RCID0gbmV3IFVzZXJSZXBvc2l0b3J5RHluYW1vREIocHJvY2Vzcy5lbnYuU1RBR0UgfHwgJ2xvY2FsJyk7XG5jb25zdCB1c2VyU2VydmljZSA9IG5ldyBVc2VyU2VydmljZSh1c2VyUmVwb3NpdG9yeUR5bmFtb0RCKTtcblxuZXhwb3J0IGNvbnN0IHJlZ2lzdHJhdGlvbjogQVBJR2F0ZXdheVByb3h5SGFuZGxlciA9IGFzeW5jIChldmVudCkgPT4ge1xuICAvLyBHZXQgUE9TVCBwYXJhbWV0ZXJzXG4gIGNvbnN0IHsgYm9keSB9ID0gZXZlbnQ7XG4gIGNvbnN0IHBhcnNlZEJvZHkgPSBKU09OLnBhcnNlKGJvZHkpO1xuXG4gIC8vIENyZWF0ZSB1c2VyIGZyb20gcGFyYW1ldGVyc1xuICBjb25zdCBuZXdVc2VyID0gT2JqZWN0LmFzc2lnbihuZXcgVXNlcigpLCB7XG4gICAgRW1haWw6IHBhcnNlZEJvZHkudXNlci5lbWFpbCxcbiAgICBOYW1lOiBwYXJzZWRCb2R5LnVzZXIubmFtZSxcbiAgICBwYXNzd29yZDogcGFyc2VkQm9keS51c2VyLnBhc3N3b3JkLFxuICB9KTtcblxuICAvLyBJbnNlcnQgdXNlclxuICB0cnkge1xuICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdXNlclNlcnZpY2UucmVnaXN0ZXIobmV3VXNlcik7XG5cbiAgICByZXR1cm4ge1xuICAgICAgc3RhdHVzQ29kZTogMjAwLFxuICAgICAgaGVhZGVyczoge1xuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctT3JpZ2luJzogJyonLFxuICAgICAgICAnQWNjZXNzLUNvbnRyb2wtQWxsb3ctQ3JlZGVudGlhbHMnOiB0cnVlLFxuICAgICAgfSxcbiAgICAgIGJvZHk6IEpTT04uc3RyaW5naWZ5KHJlc3BvbnNlKSxcbiAgICB9O1xuICB9IGNhdGNoIChlcnJvcikge1xuICAgIHJldHVybiB7XG4gICAgICBzdGF0dXNDb2RlOiA0MDAsXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeSgnRVJST1InKSxcbiAgICB9O1xuICB9XG59O1xuIl0sIm1hcHBpbmdzIjoiQUFDQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBRUE7QUFFQTtBQUNBO0FBRUE7QUFDQTtBQUVBO0FBRUE7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFHQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/lambdaHandlers/userHandler.ts\n");

/***/ }),

/***/ "./src/models/User.ts":
/*!****************************!*\
  !*** ./src/models/User.ts ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aws_dynamodb_data_mapper_annotations__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws/dynamodb-data-mapper-annotations */ \"@aws/dynamodb-data-mapper-annotations\");\n/* harmony import */ var _aws_dynamodb_data_mapper_annotations__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_dynamodb_data_mapper_annotations__WEBPACK_IMPORTED_MODULE_0__);\nvar __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {\n    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;\n    if (typeof Reflect === \"object\" && typeof Reflect.decorate === \"function\") r = Reflect.decorate(decorators, target, key, desc);\n    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;\n    return c > 3 && r && Object.defineProperty(target, key, r), r;\n};\nvar __metadata = (undefined && undefined.__metadata) || function (k, v) {\n    if (typeof Reflect === \"object\" && typeof Reflect.metadata === \"function\") return Reflect.metadata(k, v);\n};\n\nlet User = class User {\n};\n__decorate([\n    Object(_aws_dynamodb_data_mapper_annotations__WEBPACK_IMPORTED_MODULE_0__[\"hashKey\"])({\n        type: 'String',\n    }),\n    __metadata(\"design:type\", String)\n], User.prototype, \"Email\", void 0);\n__decorate([\n    Object(_aws_dynamodb_data_mapper_annotations__WEBPACK_IMPORTED_MODULE_0__[\"attribute\"])(),\n    __metadata(\"design:type\", String)\n], User.prototype, \"Name\", void 0);\n__decorate([\n    Object(_aws_dynamodb_data_mapper_annotations__WEBPACK_IMPORTED_MODULE_0__[\"attribute\"])(),\n    __metadata(\"design:type\", String)\n], User.prototype, \"password\", void 0);\nUser = __decorate([\n    Object(_aws_dynamodb_data_mapper_annotations__WEBPACK_IMPORTED_MODULE_0__[\"table\"])('users')\n], User);\n/* harmony default export */ __webpack_exports__[\"default\"] = (User);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvbW9kZWxzL1VzZXIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvbW9kZWxzL1VzZXIudHM/NDU4ZiJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQge1xuICBhdHRyaWJ1dGUsXG4gIGhhc2hLZXksXG4gIHRhYmxlLFxufSBmcm9tICdAYXdzL2R5bmFtb2RiLWRhdGEtbWFwcGVyLWFubm90YXRpb25zJztcblxuQHRhYmxlKCd1c2VycycpXG5jbGFzcyBVc2VyIHtcbiAgQGhhc2hLZXkoe1xuICAgIHR5cGU6ICdTdHJpbmcnLFxuICB9KVxuICBwdWJsaWMgRW1haWw/OiBzdHJpbmc7XG5cbiAgQGF0dHJpYnV0ZSgpXG4gIHB1YmxpYyBOYW1lPzogc3RyaW5nO1xuXG4gIEBhdHRyaWJ1dGUoKVxuICBwdWJsaWMgcGFzc3dvcmQ/OiBzdHJpbmc7XG59XG5cbmV4cG9ydCBkZWZhdWx0IFVzZXI7XG4iXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUFBO0FBT0E7QUFXQTtBQVBBO0FBSEE7QUFDQTtBQUNBOztBQUNBO0FBR0E7QUFEQTs7QUFDQTtBQUdBO0FBREE7O0FBQ0E7QUFWQTtBQURBO0FBQ0E7QUFhQTsiLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./src/models/User.ts\n");

/***/ }),

/***/ "./src/repositories/UserRepositoryDynamoDB.ts":
/*!****************************************************!*\
  !*** ./src/repositories/UserRepositoryDynamoDB.ts ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var _aws_dynamodb_data_mapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @aws/dynamodb-data-mapper */ \"@aws/dynamodb-data-mapper\");\n/* harmony import */ var _aws_dynamodb_data_mapper__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_aws_dynamodb_data_mapper__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var aws_sdk_clients_dynamodb__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! aws-sdk/clients/dynamodb */ \"aws-sdk/clients/dynamodb\");\n/* harmony import */ var aws_sdk_clients_dynamodb__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(aws_sdk_clients_dynamodb__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _models_User__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../models/User */ \"./src/models/User.ts\");\n\n\n\nclass UserRepositoryDynamoDB {\n    constructor(stage) {\n        console.log('Stage', stage);\n        let dynamoDB;\n        if (stage === 'local') {\n            dynamoDB = new aws_sdk_clients_dynamodb__WEBPACK_IMPORTED_MODULE_1___default.a({\n                region: 'localhost',\n                endpoint: 'http://localhost:8000',\n                accessKeyId: 'DEFAULT_ACCESS_KEY',\n                secretAccessKey: 'DEFAULT_SECRET',\n            });\n        }\n        else {\n            dynamoDB = new aws_sdk_clients_dynamodb__WEBPACK_IMPORTED_MODULE_1___default.a({\n                region: 'ap-southeast-2',\n            });\n        }\n        this.mapper = new _aws_dynamodb_data_mapper__WEBPACK_IMPORTED_MODULE_0__[\"DataMapper\"]({\n            client: dynamoDB,\n            tableNamePrefix: `${stage}-`,\n        });\n    }\n    async getByEmail(email) {\n        try {\n            const response = await this.mapper.get(Object.assign(new _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), { Email: email }));\n            return response;\n        }\n        catch (error) {\n            console.error(error);\n            return null;\n        }\n    }\n    async put(user) {\n        const toSave = Object.assign(new _models_User__WEBPACK_IMPORTED_MODULE_2__[\"default\"](), user);\n        try {\n            await this.mapper.put(toSave);\n            return true;\n        }\n        catch (error) {\n            console.error('ERROR', error);\n            return false;\n        }\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserRepositoryDynamoDB);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvcmVwb3NpdG9yaWVzL1VzZXJSZXBvc2l0b3J5RHluYW1vREIudHMuanMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vLi9zcmMvcmVwb3NpdG9yaWVzL1VzZXJSZXBvc2l0b3J5RHluYW1vREIudHM/MDQwYyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBEYXRhTWFwcGVyIH0gZnJvbSAnQGF3cy9keW5hbW9kYi1kYXRhLW1hcHBlcic7XG5pbXBvcnQgRHluYW1vREIgZnJvbSAnYXdzLXNkay9jbGllbnRzL2R5bmFtb2RiJztcblxuaW1wb3J0IHsgVXNlclJlcG9zaXRvcnlJbnRlcmZhY2UgfSBmcm9tICcuL1VzZXJSZXBvc2l0b3J5SW50ZXJmYWNlJztcblxuaW1wb3J0IFVzZXIgZnJvbSAnLi4vbW9kZWxzL1VzZXInO1xuXG5jbGFzcyBVc2VyUmVwb3NpdG9yeUR5bmFtb0RCIGltcGxlbWVudHMgVXNlclJlcG9zaXRvcnlJbnRlcmZhY2Uge1xuICBwcml2YXRlIG1hcHBlcjogRGF0YU1hcHBlcjtcblxuICBjb25zdHJ1Y3RvcihzdGFnZTogc3RyaW5nKSB7XG4gICAgY29uc29sZS5sb2coJ1N0YWdlJywgc3RhZ2UpO1xuICAgIGxldCBkeW5hbW9EQjtcblxuICAgIGlmIChzdGFnZSA9PT0gJ2xvY2FsJykge1xuICAgICAgZHluYW1vREIgPSBuZXcgRHluYW1vREIoe1xuICAgICAgICByZWdpb246ICdsb2NhbGhvc3QnLFxuICAgICAgICBlbmRwb2ludDogJ2h0dHA6Ly9sb2NhbGhvc3Q6ODAwMCcsXG4gICAgICAgIGFjY2Vzc0tleUlkOiAnREVGQVVMVF9BQ0NFU1NfS0VZJywgLy8gbmVlZGVkIGlmIHlvdSBkb24ndCBoYXZlIGF3cyBjcmVkZW50aWFscyBhdCBhbGwgaW4gZW52XG4gICAgICAgIHNlY3JldEFjY2Vzc0tleTogJ0RFRkFVTFRfU0VDUkVUJywgLy8gbmVlZGVkIGlmIHlvdSBkb24ndCBoYXZlIGF3cyBjcmVkZW50aWFscyBhdCBhbGwgaW4gZW52XG4gICAgICB9KTtcbiAgICB9IGVsc2Uge1xuICAgICAgZHluYW1vREIgPSBuZXcgRHluYW1vREIoe1xuICAgICAgICByZWdpb246ICdhcC1zb3V0aGVhc3QtMicsXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICB0aGlzLm1hcHBlciA9IG5ldyBEYXRhTWFwcGVyKHtcbiAgICAgIGNsaWVudDogZHluYW1vREIsXG4gICAgICB0YWJsZU5hbWVQcmVmaXg6IGAke3N0YWdlfS1gLCAvLyBUYWJsZSBwcmVmaXggdG8ga2VlcCBkZXYgYW5kIHByb2QgdGFibGVzIHNlcGFyYXRlXG4gICAgfSk7XG4gIH1cblxuICAvLyBHZXQgdXNlciBieSBlbWFpbFxuICBwdWJsaWMgYXN5bmMgZ2V0QnlFbWFpbChlbWFpbDogc3RyaW5nKTogUHJvbWlzZTxVc2VyPiB7XG4gICAgdHJ5IHtcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgdGhpcy5tYXBwZXIuZ2V0KE9iamVjdC5hc3NpZ24obmV3IFVzZXIoKSwgeyBFbWFpbDogZW1haWwgfSkpO1xuXG4gICAgICByZXR1cm4gcmVzcG9uc2U7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoZXJyb3IpO1xuICAgICAgcmV0dXJuIG51bGw7XG4gICAgfVxuICB9XG5cbiAgLy8gUHV0IHVzZXJcbiAgcHVibGljIGFzeW5jIHB1dCh1c2VyOiBVc2VyKTogUHJvbWlzZTxib29sZWFuPiB7XG4gICAgY29uc3QgdG9TYXZlID0gT2JqZWN0LmFzc2lnbihuZXcgVXNlcigpLCB1c2VyKTtcblxuICAgIHRyeSB7XG4gICAgICBhd2FpdCB0aGlzLm1hcHBlci5wdXQodG9TYXZlKTtcblxuICAgICAgcmV0dXJuIHRydWU7XG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ0VSUk9SJywgZXJyb3IpO1xuICAgICAgcmV0dXJuIGZhbHNlO1xuICAgIH1cbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyUmVwb3NpdG9yeUR5bmFtb0RCO1xuIl0sIm1hcHBpbmdzIjoiQUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUNBO0FBSUE7QUFFQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUdBO0FBQ0E7QUFDQTtBQUVBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBR0E7QUFDQTtBQUVBO0FBQ0E7QUFFQTtBQUNBO0FBQUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBRUE7Iiwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./src/repositories/UserRepositoryDynamoDB.ts\n");

/***/ }),

/***/ "./src/service/UserService.ts":
/*!************************************!*\
  !*** ./src/service/UserService.ts ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
eval("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! bcrypt */ \"bcrypt\");\n/* harmony import */ var bcrypt__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(bcrypt__WEBPACK_IMPORTED_MODULE_0__);\n\nconst BCRYPT_ROUNDS = 10;\nclass UserService {\n    constructor(repository) {\n        this.repository = repository;\n    }\n    async get(email) {\n        if (!email) {\n            throw new Error('Email can not be empty');\n        }\n        return this.repository.getByEmail(email);\n    }\n    async register(user) {\n        if (!user) {\n            throw new Error('User can not be empty');\n        }\n        if (!user.Email) {\n            throw new Error('Email can not be empty');\n        }\n        if (!user.Name) {\n            throw new Error('Name can not be empty');\n        }\n        if (!user.password) {\n            throw new Error('Password can not be empty');\n        }\n        const hash = await UserService.generateHash(null, user.password);\n        return this.repository.put(Object.assign(Object.assign({}, user), { password: hash.hash }));\n    }\n    static generateHash(salt, password) {\n        return new Promise((resolve, reject) => {\n            bcrypt__WEBPACK_IMPORTED_MODULE_0___default.a.hash(password, BCRYPT_ROUNDS, (err, hash) => {\n                if (err) {\n                    reject(err);\n                }\n                else {\n                    resolve({ salt, password, hash });\n                }\n            });\n        });\n    }\n}\n/* harmony default export */ __webpack_exports__[\"default\"] = (UserService);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zcmMvc2VydmljZS9Vc2VyU2VydmljZS50cy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy8uL3NyYy9zZXJ2aWNlL1VzZXJTZXJ2aWNlLnRzPzljZTAiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IGJjcnlwdCBmcm9tICdiY3J5cHQnO1xuXG5pbXBvcnQgeyBVc2VyUmVwb3NpdG9yeUludGVyZmFjZSB9IGZyb20gJy4uL3JlcG9zaXRvcmllcy9Vc2VyUmVwb3NpdG9yeUludGVyZmFjZSc7XG5cbmltcG9ydCBVc2VyIGZyb20gJy4uL21vZGVscy9Vc2VyJztcblxuLy8gRm9yIGJjcnlwdFxuY29uc3QgQkNSWVBUX1JPVU5EUyA9IDEwO1xuXG5jbGFzcyBVc2VyU2VydmljZSB7XG4gIHByaXZhdGUgcmVwb3NpdG9yeTogVXNlclJlcG9zaXRvcnlJbnRlcmZhY2U7XG5cbiAgcHVibGljIGNvbnN0cnVjdG9yKHJlcG9zaXRvcnk6IFVzZXJSZXBvc2l0b3J5SW50ZXJmYWNlKSB7XG4gICAgdGhpcy5yZXBvc2l0b3J5ID0gcmVwb3NpdG9yeTtcbiAgfVxuXG4gIHB1YmxpYyBhc3luYyBnZXQoZW1haWw6IHN0cmluZyk6IFByb21pc2U8VXNlcj4ge1xuICAgIGlmICghZW1haWwpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignRW1haWwgY2FuIG5vdCBiZSBlbXB0eScpO1xuICAgIH1cblxuICAgIHJldHVybiB0aGlzLnJlcG9zaXRvcnkuZ2V0QnlFbWFpbChlbWFpbCk7XG4gIH1cblxuICBwdWJsaWMgYXN5bmMgcmVnaXN0ZXIodXNlcjogVXNlcik6IFByb21pc2U8Ym9vbGVhbj4ge1xuICAgIC8vIFZhbGlkYXRlIGF0dHJpYnV0ZXNcbiAgICBpZiAoIXVzZXIpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignVXNlciBjYW4gbm90IGJlIGVtcHR5Jyk7XG4gICAgfVxuXG4gICAgaWYgKCF1c2VyLkVtYWlsKSB7XG4gICAgICB0aHJvdyBuZXcgRXJyb3IoJ0VtYWlsIGNhbiBub3QgYmUgZW1wdHknKTtcbiAgICB9XG5cbiAgICBpZiAoIXVzZXIuTmFtZSkge1xuICAgICAgdGhyb3cgbmV3IEVycm9yKCdOYW1lIGNhbiBub3QgYmUgZW1wdHknKTtcbiAgICB9XG5cbiAgICBpZiAoIXVzZXIucGFzc3dvcmQpIHtcbiAgICAgIHRocm93IG5ldyBFcnJvcignUGFzc3dvcmQgY2FuIG5vdCBiZSBlbXB0eScpO1xuICAgIH1cblxuICAgIC8vIEhhc2ggcGFzc3dvcmRcbiAgICBjb25zdCBoYXNoID0gYXdhaXQgVXNlclNlcnZpY2UuZ2VuZXJhdGVIYXNoKG51bGwsIHVzZXIucGFzc3dvcmQpO1xuXG4gICAgcmV0dXJuIHRoaXMucmVwb3NpdG9yeS5wdXQoeyAuLi51c2VyLCBwYXNzd29yZDogaGFzaC5oYXNoIH0pO1xuICB9XG5cbiAgLy8gR2VuZXJhdGVzIGhhc2ggdG8gc3RvcmUgaW5zdGVhZCBvZiBwbGFpbiBwYXNzd29yZFxuICBwcml2YXRlIHN0YXRpYyBnZW5lcmF0ZUhhc2goc2FsdCwgcGFzc3dvcmQpOiBQcm9taXNlPHsgc2FsdDogc3RyaW5nOyBwYXNzd29yZDogc3RyaW5nOyBoYXNoOiBzdHJpbmcgfT4ge1xuICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICBiY3J5cHQuaGFzaChwYXNzd29yZCwgQkNSWVBUX1JPVU5EUywgKGVyciwgaGFzaCkgPT4ge1xuICAgICAgICBpZiAoZXJyKSB7XG4gICAgICAgICAgcmVqZWN0KGVycik7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgcmVzb2x2ZSh7IHNhbHQsIHBhc3N3b3JkLCBoYXNoIH0pO1xuICAgICAgICB9XG4gICAgICB9KTtcbiAgICB9KTtcbiAgfVxufVxuXG5leHBvcnQgZGVmYXVsdCBVc2VyU2VydmljZTtcbiJdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQTtBQUFBO0FBQUE7QUFPQTtBQUVBO0FBR0E7QUFDQTtBQUNBO0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBRUE7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFFQTtBQUNBO0FBQ0E7QUFHQTtBQUVBO0FBQ0E7QUFHQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFBQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUVBOyIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./src/service/UserService.ts\n");

/***/ }),

/***/ "@aws/dynamodb-data-mapper":
/*!********************************************!*\
  !*** external "@aws/dynamodb-data-mapper" ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@aws/dynamodb-data-mapper\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGF3cy9keW5hbW9kYi1kYXRhLW1hcHBlci5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBhd3MvZHluYW1vZGItZGF0YS1tYXBwZXJcIj8wZWEyIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhd3MvZHluYW1vZGItZGF0YS1tYXBwZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@aws/dynamodb-data-mapper\n");

/***/ }),

/***/ "@aws/dynamodb-data-mapper-annotations":
/*!********************************************************!*\
  !*** external "@aws/dynamodb-data-mapper-annotations" ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"@aws/dynamodb-data-mapper-annotations\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiQGF3cy9keW5hbW9kYi1kYXRhLW1hcHBlci1hbm5vdGF0aW9ucy5qcyIsInNvdXJjZXMiOlsid2VicGFjazovLy9leHRlcm5hbCBcIkBhd3MvZHluYW1vZGItZGF0YS1tYXBwZXItYW5ub3RhdGlvbnNcIj8yMDRkIl0sInNvdXJjZXNDb250ZW50IjpbIm1vZHVsZS5leHBvcnRzID0gcmVxdWlyZShcIkBhd3MvZHluYW1vZGItZGF0YS1tYXBwZXItYW5ub3RhdGlvbnNcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///@aws/dynamodb-data-mapper-annotations\n");

/***/ }),

/***/ "aws-sdk/clients/dynamodb":
/*!*******************************************!*\
  !*** external "aws-sdk/clients/dynamodb" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"aws-sdk/clients/dynamodb\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXdzLXNkay9jbGllbnRzL2R5bmFtb2RiLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYXdzLXNkay9jbGllbnRzL2R5bmFtb2RiXCI/ODk4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJhd3Mtc2RrL2NsaWVudHMvZHluYW1vZGJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///aws-sdk/clients/dynamodb\n");

/***/ }),

/***/ "bcrypt":
/*!*************************!*\
  !*** external "bcrypt" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"bcrypt\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYmNyeXB0LmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwiYmNyeXB0XCI/Y2Y5YyJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJiY3J5cHRcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///bcrypt\n");

/***/ }),

/***/ "source-map-support/register":
/*!**********************************************!*\
  !*** external "source-map-support/register" ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

eval("module.exports = require(\"source-map-support/register\");//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyLmpzIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vL2V4dGVybmFsIFwic291cmNlLW1hcC1zdXBwb3J0L3JlZ2lzdGVyXCI/ZGExNiJdLCJzb3VyY2VzQ29udGVudCI6WyJtb2R1bGUuZXhwb3J0cyA9IHJlcXVpcmUoXCJzb3VyY2UtbWFwLXN1cHBvcnQvcmVnaXN0ZXJcIik7Il0sIm1hcHBpbmdzIjoiQUFBQSIsInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///source-map-support/register\n");

/***/ })

/******/ })));