# Sitecore-Jss

<h3>Installation Guide</h3>

<b>Sitecore installation:</b>
1. Clone the repo into a folder of your choice
2. Download all the required packes from sitecore or get the preset 'install' folder (recommended)
3. Setup an XP0 single developer instance by following the quick installation guide for Sitecore 9.2.0
  The following settings in the XP0-SingleDeveloper.ps1 must be as started below:
    $Prefix = "sitecorejss.9.2.xp0"
  Also remember to override the 'Site.PhysicalPath' settings directly in the '.json' files to set a custom install path
4. Final project structure should look like the following:
<root>
  - install
  - src
  - Websites
    - IdentityServer
    - Sitecore
    - XConnect
5. Install the jss package called 'Sitecore JavaScript Services Server for Sitecore 9.2 XP 12.0.0 rev. 190522' located in the install folder through the installation wizard in sitecore
6. Install the api keys package called 'jss api key-1.0' located in install/api key through the installation wizard in sitecore
7. Verify that sitecore works by accessing 'sitecorejss.9.2.xp0.sc/sitecore'
8. Find the api key in sitecore in the following path '/sitecore/system/Settings/Services/API Keys/Default API Key'
9. Verify that you can access the webservice at 'http://sitecorejss.9.2.xp0.sc/sitecore/api/layout/render/jss?item=/&sc_apikey=<API KEY ID>
10. Setup a binding manually in IIS for 'http://sitecorejss.blog.9.2.xp0.sc'
11. Add 'sitecorejss.blog.9.2.xp0.sc' to the host file

<b>Setting up the frontend in disconnected mode</b>
1. Go to src/Frontend/blogsite and run an 'npm install'
2. Install jss cli globally by running 'npm install -g @sitecore-jss/sitecore-jss-cli'
3. Go to src/Frontend/blogsite and run an 'jss start'
4. Verify that the site is running on a localhost

<b>Connecting the frontend to sitecore</b>
1. Go to the install/api key folder and copy the 'scjssconfig' file to src/Frontend/blogsite folder
2. Go to the install/api key folder and copy the 'blogsite.deploysecret' file to src/Frontend/blogsite/sitecore/config folder
3. Deploy the config files by opening a shell and running 'jss deploy config'
4. Deploy the app by opening a shell and running 'jss deploy app --includeContent --includeDictionary'
5. Verify you can access the site at 'http://sitecorejss.blog.9.2.xp0.sc'
6. Verify you can access sitecore in integrated mode by running a 'jss start:connected'

<b>Known Errors</b>
Error: Cannot find or do not have permissions to run node
Solution: Add node or nvm to the enviroment 'Path' or set permissions for IIS_IUSR on node.exe

   
  
