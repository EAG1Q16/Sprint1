/**
 * Created by tonim on 05/10/2016.
 */
var mongoose = require('mongoose');

module.exports = mongoose.model('Users', {
    name:'string',
    email:'string',
    description:'string',
    photo:'string'
});