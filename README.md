#Web API Authentication from JavaScript Outside CRM

Web API, introduced in Dynamics CRM 2016, can be used from within CRM and also Outside CRM. To call Web API from JavaScript outside of CRM we have to implement authentication. In previous versions of Dynamics CRM, CORS was not implemented, so we cannot authenticate or can get Access Token from browsers. We had to use middleware Web Service API or SOAP Authentication to access CRM. CORS, Cross-Origin Resource Sharing, has been implemented in Dynamics CRM 2016 and now we can get access token using Azure Active Directory Authentication Library from JavaScript.

##Working

First of all the App must be registered. For Registration Please refer this link : [How to Register Dynamics CRM App with Azure Active Directory](http://scaleablesolutions.com/how-to-register-a-crm-app-with-azure-active-directory/).

In this App authentication is performed using Azure [Active Directory](https://github.com/AzureAD/azure-activedirectory-library-for-js) from JavaScript. First of all, Config is created in which details of Tenant, clientId, postLogoutRedirectUri, endpoints and cacheLocation is provided. For Microsoft Dynamics CRM Online, a tenant is the account you create in the Microsoft Online Services environment when you sign up for a CRM Online subscription. Tenant is created as org name preceeded by onmicrosoft.com (<org>.onmicrosoft.com). ClientId and PostLogoutRedirectUri can be found in Azure Active Directory where the App is registered. 

Then the Config is passed into **AuthenticationContext**. After that login function is called and the browser is redirected to Microsoft online login page.

After login, browser is redirected back to the page along with Authentication Token

**authContext.AcquireToken(resourceURL,callback)** function is used to acquire Access Token to access Dynamics CRM Web API. 

When the Access Token is Acquired, we can use it to call or access Dynamics CRM.
