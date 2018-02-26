var request = require('request');

controller = {
    /**
     * 
     * 
     */
    authorize: function(req, res) {
        var key = 'fVDeLohOmS6TpdzSiuZTs4Wfy' + ':' + 'MmflNIA7Nqvh6wUjgNv2u1VABGcIQ3K4NKPLuNQwJE1ponB8y2';
        var uid = new Buffer(key).toString('base64');
        var token = 'Basic ' + uid;
        
        request.post('https://api.twitter.com/oauth2/token', { form: { 'grant_type': 'client_credentials' }, headers: { Authorization: token } }, function(error, response, body) {
            if(error)
                console.log(error);
            else {
                res.json({ success: true, data: JSON.parse(body).access_token });
            }
        })
    },
    
    /**
     * 
     */
    search: function(req, res) {
        let searchquery = req.body.query;
        let token = req.headers.authorization;
        let authorization = { 'Authorization': token };

        request.get('https://api.twitter.com/1.1/search/tweets.json?q=' + searchquery + '&result_type=mixed&count=50', { headers: authorization }, function(error, body, response) {
             if(error)
                console.log(error);
             else {
                 res.json({ success: true, data:JSON.parse(body.body) });
             }
         })
    }
}

module.exports = controller;