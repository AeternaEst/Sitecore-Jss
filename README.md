# Sitecore-Jss

<h3>Installation Guide</h3>

<b>Sitecore installation:</b>
1. Clone the repo into a folder of your choice
2. Setup an XP0 single developer instance by following the quick installation guide for Sitecore 9.2.0
3. My XP0-SingleDeveloper.ps1 variables look like this:
  # The Prefix that will be used on SOLR, Website and Database instances.
  $Prefix = "sitecorejss.9.2.xp0"
  # The Password for the Sitecore Admin User. This will be regenerated if left on the default.
  $SitecoreAdminPassword = "b"
  # The root folder with the license file and WDP files.
  $SCInstallRoot = "C:\Projects\Local\SitecoreJss\install"
  # The name for the XConnect service.
  $XConnectSiteName = "$prefix.xconnect"
  # The Sitecore site instance name.
  $SitecoreSiteName = "$prefix.sc"
  # Identity Server site name
  $IdentityServerSiteName = "$prefix.identityserver"
  # The Path to the license file
  $LicenseFile = "$SCInstallRoot\license.xml"
  # The URL of the Solr Server
  $SolrUrl = "https://localhost:8983/solr"
  # The Folder that Solr has been installed to.
  $SolrRoot = "C:\Program Files\Solr\solr-7.5.0"
  # The Name of the Solr Service.
  $SolrService = "Solr7.5.0"
  # The DNS name or IP of the SQL Instance.
  $SqlServer = "."
  # A SQL user with sysadmin privileges.
  $SqlAdminUser = "sa"
  # The password for $SQLAdminUser.
  $SqlAdminPassword = "<insert sa user password>"
  # The path to the XConnect Package to Deploy.
  $XConnectPackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_xp0xconnect.scwdp.zip").FullName
  # The path to the Sitecore Package to Deploy.
  $SitecorePackage = (Get-ChildItem "$SCInstallRoot\Sitecore 9* rev. * (OnPrem)_single.scwdp.zip").FullName
  # The path to the Identity Server Package to Deploy.
  $IdentityServerPackage = (Get-ChildItem "$SCInstallRoot\Sitecore.IdentityServer * rev. * (OnPrem)_identityserver.scwdp.zip").FullName
  # The Identity Server password recovery URL, this should be the URL of the CM Instance
  $PasswordRecoveryUrl = "http://$SitecoreSiteName"
  # The URL of the Identity Server
  $SitecoreIdentityAuthority = "https://$IdentityServerSiteName"
  # The URL of the XconnectService
  $XConnectCollectionService = "https://$XConnectSiteName"
  # The random string key used for establishing connection with IdentityService. This will be regenerated if left on the default.
  $ClientSecret = "SIF-Default"
  # Pipe-separated list of instances (URIs) that are allowed to login via Sitecore Identity.
  $AllowedCorsOrigins = "http://$SitecoreSiteName"
4. Final project structure should look like the following:
<root>
  - install
  - src
  - Websites
    - IdentityServer
    - Sitecore
    - XConnect
5. Install the jss package
6. Run a unicorn sync
7. Verify that sitecore works by accessing 'sitecorejss.9.2.xp0.sc/sitecore'
8. Verify that you can access the webservice at 'http://sitecorejss.9.2.xp0.sc/sitecore/api/layout/render/jss?item=/&sc_apikey={6032E77B-7C77-4883-9D84-C575192E3F2C}'

<b>Connecting the frontend</b>
1. Go to src/Frontend/blogsite and run an 'npm install'
2. Install jss cli globally by running 'npm install -g @sitecore-jss/sitecore-jss-cli'
3. Go to src/Frontend/blogsite and run an 'jss start'
4. Veries that the site is running on a localhost
...todo add info about pushing frontend site into sitecore
   
  
