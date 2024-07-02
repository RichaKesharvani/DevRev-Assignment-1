/*
 * Copyright (c) 2023 DevRev, Inc. All rights reserved.
 */

import { client } from "@devrev/typescript-sdk";

async function handleEvent(
  event: any,
) {
  const devrevPAT = "eyJhbGciOiJSUzI1NiIsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwia2lkIjoic3RzX2tpZF9yc2EiLCJ0eXAiOiJKV1QifQ.eyJhdWQiOlsiamFudXMiXSwiYXpwIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJva2RNbVpCYmI6ZGV2dS8xIiwiZXhwIjoxODE0NTEwMzkwLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VpZCI6ImRvbjppZGVudGl0eTpkdnJ2LXVzLTE6ZGV2by9zdXBlcjphdXRoMF91c2VyL2xpbmtlZGlufFY0OGllYWJkSDUiLCJodHRwOi8vZGV2cmV2LmFpL2F1dGgwX3VzZXJfaWQiOiJsaW5rZWRpbnxWNDhpZWFiZEg1IiwiaHR0cDovL2RldnJldi5haS9kZXZvX2RvbiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yb2tkTW1aQmJiIiwiaHR0cDovL2RldnJldi5haS9kZXZvaWQiOiJERVYtMm9rZE1tWkJiYiIsImh0dHA6Ly9kZXZyZXYuYWkvZGV2dWlkIjoiREVWVS0xIiwiaHR0cDovL2RldnJldi5haS9kaXNwbGF5bmFtZSI6InNhdGh5YWt1bWFyIiwiaHR0cDovL2RldnJldi5haS9lbWFpbCI6InNhdGh5YWt1bWFyLndlYmRldkBnbWFpbC5jb20iLCJodHRwOi8vZGV2cmV2LmFpL2Z1bGxuYW1lIjoiU2F0aHlha3VtYXIgUyIsImh0dHA6Ly9kZXZyZXYuYWkvaXNfdmVyaWZpZWQiOnRydWUsImh0dHA6Ly9kZXZyZXYuYWkvdG9rZW50eXBlIjoidXJuOmRldnJldjpwYXJhbXM6b2F1dGg6dG9rZW4tdHlwZTpwYXQiLCJpYXQiOjE3MTk5MDIzOTAsImlzcyI6Imh0dHBzOi8vYXV0aC10b2tlbi5kZXZyZXYuYWkvIiwianRpIjoiZG9uOmlkZW50aXR5OmR2cnYtaW4tMTpkZXZvLzJva2RNbVpCYmI6dG9rZW4veEtJRmxSUXQiLCJvcmdfaWQiOiJvcmdfd1hxMmp2SDFBWllYSDNBWCIsInN1YiI6ImRvbjppZGVudGl0eTpkdnJ2LWluLTE6ZGV2by8yb2tkTW1aQmJiOmRldnUvMSJ9.vHtQtsP2W2_0hRjau9zWzrrzxCIq2oQYZxl7ycJAKTWbE5rMT9bK85ijCceAtcQNI9D3qN6D__at4ZKzYbh29IsyOKCCXaHX8APbrx2bdWV9rB3IT0C7gTPus5NhAS3ewfBgCrsodnHIp35GYshmWsmT7q7psh-zzsWQvwNUIBsTHzxqfP_vIZSikjOJ8hzcfG25VHLg0peQDGNEBagoGRf7N4t8F5zcSKVWBguDmnhZIChLsvio-vkB07jlEnkW260AzPpexBilqyB8c5RawlAo94lrvEOXg7zb7Yge9lT_v5-JO5rlVkw1SaE4hzpiuVeycNMIn6I6zrEBAVwZlw";
  const API_BASE = "https://api.devrev.ai/";
  const devrevSDK = client.setup({
    endpoint: API_BASE,
    token: devrevPAT,
  })
  const workCreated = event.payload.work_created.work;
  const messageInput = event.input_data.global_values.input_field_1;
  let bodyComment = 'Hello World is printed on the work ' + workCreated.display_id + ' from the automation, with message: ' + messageInput;
  const extraComment = event.input_data.global_values.input_field_2;
  const extraNames = event.input_data.global_values.input_field_array;
  if (extraComment) {
    for (let name of extraNames) {
      bodyComment = bodyComment + ' ' + name;
    }
  }
  const body = {
    object: workCreated.id,
    type: 'timeline_comment',
    stage: workCreated.name,
    body:  bodyComment,
  }
  const response = await devrevSDK.timelineEntriesCreate(body as any);
  return response;

}

export const run = async (events: any[]) => {
  console.info('events', JSON.stringify(events), '\n\n\n');
  for (let event of events) {
    const resp = await handleEvent(event);
    console.log(JSON.stringify(resp.data));
  }
};

export default run;
