'use strict';

/* Services */

var blogServices = 
        angular.module('blogServices', ['ngResource']);

blogServices.factory('BlogPost', ['$resource',
function($resource) {
    return $resource(
            "http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blog/:id",
    {}, {
        get: {method: 'GET', cache: false, isArray: false},
        save: {method: 'POST', cache:false, isArray: false},
        update:{metod:  'POST', cache:false, isArray: false},
        delete:{method: 'POST', cache: false, isArray: false}
    }); 
}]);

blogServices.factory('BlogList', ['$resource', function($resource){
    return $resource( 
        "http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/blogList",
        {}, {get: {method: 'GET', cache:false, isArray: true}
    });
}]);

blogServices.factory('Login', 
['$resource',
    function($resource){
       return $resource(
                "http://nodeblog-micbuttoncloud.rhcloud.com/NodeBlog/login",
        {}, {
            login: {method: 'POST', cache:false, isArray:false}
            });
    }]);
