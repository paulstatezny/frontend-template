'use strict';

var backend;

backend = __BACKEND__ || '%DEV_API_HOST%';

module.exports = {
    proxy : {
        hostname : backend
    }
};
