const AclController = require('../../controllers/v1/acl-controller')

module.exports = {
  map: (router) => {
    const version = 'v1'
    const versionPath = '/' + version

    //Manager
    router.get(process.env.ROOT_PATH + versionPath + '/role/:system/:role', (request, response) => AclController.getRoleResources(request, response))
    router.get(process.env.ROOT_PATH + versionPath + '/can/:system/:role/:action/:resource', (request, response) => AclController.isAllowed(request, response))
    //CRUD
    router.get(process.env.ROOT_PATH + versionPath + '/acl', (request, response) => AclController.list(request, response))
    router.get(process.env.ROOT_PATH + versionPath + '/acl/:system/:role', (request, response) => AclController.get(request, response))
    // router.get(process.env.ROOT_PATH + versionPath + '/acl/:system/:role/:action/:resource', (request, response) => AclController.getRoleResources(request, response))
    // router.post(process.env.ROOT_PATH + versionPath + '/acl/:system/:role/:action/:resource', (request, response) => AclController.create(request, response))
    // router.put(process.env.ROOT_PATH + versionPath + '/acl/:system/:role/:action/:resource', (request, response) => AclController.update(request, response))
    // router.delete(process.env.ROOT_PATH + versionPath + '/acl/:system/:role/:action/:resource', (request, response) => AclController.delete(request, response))

    return router
  }
}
