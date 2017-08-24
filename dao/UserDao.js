var mongoose = require('../db');
var MongooseDao = require('../dao/BaseDao');
var User = require('../model/User');
var Schema = mongoose.Schema;
var UserSchema = new Schema(User);

/*UserSchema.methods.find_by_name = function(cb) {
    return this.model('UserModel').find({
        username: this.username
    }, cb);
};

UserSchema.methods.is_exist = function(cb) {
    var query;
    query = {
        username: this.username,
        password: this.password
    };
    return this.model('UserModel').findOne(query, cb);
};

UserSchema.statics.delete_by_name = function(name, cb_succ, cb_fail){};*/

var UserModel = mongoose.model('Users', UserSchema);

module.exports = new MongooseDao(UserModel);
