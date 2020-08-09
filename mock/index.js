const Mock = require("mockjs");
const util = require("./util");

module.exports = (app) => {
    app.get('/user/userinfo', (rep, res)=>{
        var json = util.getJSONFile('./')
    })
};
