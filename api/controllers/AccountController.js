/**
 * AccountController
 *
 * @description :: Server-side logic for managing your account
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

    // Account main page
    index: function (req, res) {

        console.log("+ ACCOUNT.INDEX");

        var accountLabel = "U"; // Empty User

        console.log(req.user);

        if (req.user) {

            if (req.user.firstname && req.user.lastname) {
                accountLabel = req.user.firstname[0];
                accountLabel += req.user.lastname[0];
            } else {
                if (req.user.name && req.user.name.length >= 2)
                    accountLabel = req.user.name.substring(0, 2).toUpperCase();
            }
        }

        User.find().exec(function countCB(error, models) {

            var usersFound = models.length;
            var localUsers = 0;
            var fbUsers = 0;
            var twUsers = 0;

            _.each(models, function (model) {

                if (model.provider == "local") localUsers++;
                else if (model.provider == "facebook") fbUsers++;
                else if (model.provider == "twitter") twUsers++;

            });

            return res.view({accountLabel: accountLabel, usersFound: usersFound, localUsers: localUsers, fbUsers: fbUsers, twUsers: twUsers});
        });
    },
    update: function (req, res) {
    
        var id=req.param(“id”,null);
        User.findOne(id).done(function(err, model) {
        if(req.method==“POST”&&req.param(“User”,null)!=null)
        {
            var p=req.param(“User”,null);
            model.name=p.name;
            model.age=p.age;
            model.save(function(err){
            if (err) {
                res.send(“Error”);

            }else {
                res.redirect( 'person/view/' + model.id);
            }
                    
                    
                  });
                
                }
                else
                {
                  
                  res.render( 'person/update’,{'model’:model});
                }
                

              });
      
       
          }
};