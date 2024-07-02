# Task 1 
## To utilize DevRev API

## Prerequisites
1. First, create a DevRev account or log in.
2. you’ll want to set up your development environment to connect and interact with the DevRev API.
3. Refer createWorkItem.js 
4. Send your first API request eg. `https://api.devrev.ai/works.create` using createWorkItem.js
5. [DevRev](https://app.devrev.ai/login) to see the work created.

Environment Variables: Ensure that the .env file is in the root directory and contains the PAT variable.
```
PAT=your_personal_access_token
```
[Obtain PAT token](https://developer.devrev.ai/about/authentication#generate-a-personal-access-token-pat)

API Endpoint: Verify that the apiEndpoint is correct. The endpoint might differ based on the API version or specific configurations.

``` 
https://api.devrev.ai/works.create
```
[DevRev API](https://developer.devrev.ai/api-reference/getting-started)

Payload Details: Ensure that the applies_to_part and owned_by fields are correct and match the expected format for your specific DevRev setup.
```
const payload = {
  type: 'issue',
  applies_to_part: 'PROD-1',
  owned_by: ['don:identity:dvrv-in-1:devo/2okdMmZBbb:devu/1'],
  title: 'Creation of issue'
};
 ```
### Using JavaScript to utilize the DevRev API to create an issue(work) in DevRev Workspace
![createWorkItem](https://github.com/Febiecode/DevRev-Hello-World-Snap-in/assets/93641901/2ab1b6fe-2317-4985-9819-d6c55e1c1361)

![createWorkItem_devrev_issuePanel](https://github.com/Febiecode/DevRev-Hello-World-Snap-in/assets/93641901/4fcec5c9-fb1c-481b-8f05-769e2071c9ea)
