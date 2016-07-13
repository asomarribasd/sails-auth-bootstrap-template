/**
 * Development environment settings
 *
 * This file can include shared settings for a development team,
 * such as API keys or remote database passwords.  If you're using
 * a version control solution for your Sails app, this file will
 * be committed to your repository unless you add it to your .gitignore
 * file.  If your repository will be publicly viewable, don't add
 * any private information to this file!
 *
 */

module.exports = {

  /***************************************************************************
   * Set the default database connection for models in the development       *
   * environment (see config/connections.js and config/models.js )           *
   ***************************************************************************/
    grunt: {
        _hookTimeout: 60000
    },

    application_auth: {

        enableLocalAuth: true,

        // Get your keys from https://apps.twitter.com/
        enableTwitterAuth: false,
        twitterConsumerKey: "",
        twitterSecretKey: "",
        twitterCallbackURL: "http://localhost:1337/auth/twitter/callback",

        // Get your keys from https://developers.facebook.com/apps/
        enableFacebookAuth: false,
        facebookClientID: "",
        facebookClientSecret: "",
        facebookCallbackURL: "http://localhost:1337/auth/facebook/callback",

        enableGoogleAuth: false
    },
    
    connections: {
        localDiskDb:{
             adapter: 'sails-disk'
        } 
        //, prodMongodbServer: {
        //    adapter: 'sails-mongo',
        //    host: 'localhost',
        //    port: 27017,
            //user: '',
            //password: '',
        //    database: 'sails-auth'
        //}
    },

   models: {
     connection: 'localDiskDb'
   }

};
