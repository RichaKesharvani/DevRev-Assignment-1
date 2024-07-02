"use strict";
/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.run = void 0;
const typescript_sdk_1 = require("@devrev/typescript-sdk");
function handleEvent(event) {
    return __awaiter(this, void 0, void 0, function* () {
        const devrevPAT = "eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJva2RNbVpCYmI6ZGV2dS8xIiwiZXhwIjoxODc3NTc3OTAxLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufFY0OGllYWJkSDUiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnxWNDhpZWFiZEg1IiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yb2tkTW1aQmJiIiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMm9rZE1tWkJiYiIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6InNhdGh5YWt1bWFyIiwiaHR0cDovL2RldnJldi5haS9lbWFpbCI6InNhdGh5YWt1bWFyLndlYmRldkBnbWFpbC5jb20iLCJodHRwOi8vZGV2cmV2LmFpL2Z1bGxuYW1lIjoiU2F0aHlha3VtYXIgUyIsImh0dHA6Ly9kZXZyZXYuYWkvaXNfdmVyaWZpZWQiOnRydWUsImh0dHA6Ly9kZXZyZXYuYWkvdG9rZW50eXBlIjoidXJuOmRldnJldjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTpwYXQiLCJpYXQiOjE3MTk4OTc5MDEsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwianRpIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJva2RNbVpCYmI6dG9rZW4vYkJla0h1ak0iLCJvcmdfaWQiOiJvcmdfd1hxMmp2SDFBWllYSDNBWCIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yb2tkTW1aQmJiOmRldnUvMSJ9.gkwc7Pml1jobfNwnQ463kmRiBwGN8l6gYope7TWVmPQT2AV2gCgDa0gPGxkYlWceEsr0qJM6AJKtlBwz1g1_s-UlRUrVTnfbLw3CyK4LcUoGnQDfrAOUSvXORZwVAS_6FKDsBH0VJT1uTNz3aZRfAGgaNbGwSBjSBDkboZuJCYDUXEwkPQTEAy0ul_ByxgLrjwmvdogBJ85et2n7k3BQ3ZBzH16FZ3PW41j4oesA7z31-0QTT2IGU3q9a-MSJODmH2dYa1FunKVXKspBv1ezHmg3zYoaeX0UYAQfmEv_8_8cSHSYWcJCDC_8MRcsjxKXX2sblgylLfOheXtB-amftQ";
        const API_BASE = "https://api.devrev.ai/";
        const devrevSDK = typescript_sdk_1.client.setup({
            endpoint: API_BASE,
            token: devrevPAT,
        });
        const workCreated = event.payload.source_id;
        const bodyComment = 'Hello World is printed on the work from the command.';
        const body = {
            object: workCreated,
            type: 'timeline_comment',
            body: bodyComment,
        };
        const response = yield devrevSDK.timelineEntriesCreate(body);
        return response;
    });
}
const run = (events) => __awaiter(void 0, void 0, void 0, function* () {
    console.info('events', JSON.stringify(events), '\n\n\n');
    for (let event of events) {
        const resp = yield handleEvent(event);
        console.log(JSON.stringify(resp.data));
    }
});
exports.run = run;
exports.default = exports.run;
