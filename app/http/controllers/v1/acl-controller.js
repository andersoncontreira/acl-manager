const ApiResponse = require('./../../api-response')
const AccessControl = require('role-acl')
// TODO temporary grant list
const grantList = require('../../../../samples/acl.grant.list.json')
const ac = new AccessControl(grantList)

/**
 * Documentation
 * https://github.com/tensult/role-acl#readme
 */
class AclController {
  /**
   *
   */
  static getRoleResources (request, response) {
    const apiResponse = new ApiResponse(request, response)

    const systemParam = request.params.system
    const roleParam = request.params.role
    const role = systemParam + '/' + roleParam
    let data = {
      'resources': {}
    }

    try {
      const resources = ac.allowedResourcesSync({ role: role }).sort()
      for (let index in resources) {
        let resource = resources[index]
        data['resources'][resource] = {
          'actions': ac.allowedActionsSync({ role: role, resource: resource })
        }
      }
      apiResponse.body = {
        result: true,
        message: 'ACL resources retrieved with success',
        data: data
      }
    } catch (e) {
      console.error(e.message)
      apiResponse.status(400)
      apiResponse.body = {
        result: false,
        message: 'Unable to retrieve ACL resources',
        data: data
      }
    }

    apiResponse.json()
  }

  static async isAllowed (request, response) {
    const apiResponse = new ApiResponse(request, response)

    const systemParam = request.params.system
    const roleParam = request.params.role
    const resource = request.params.resource
    const action = request.params.action
    const role = systemParam + '/' + roleParam
    let data =  {
      granted: false,
      attributes: []
    }

    try {
      const permission = await ac.can(role).execute(action).on(resource)
      const result = permission.granted
      let message = 'Action Allowed'
      if (!result) message = 'Action not allowed'

      data = {
        granted: result,
          attributes: permission.attributes
      }

      apiResponse.body = {
        result: result,
        message: message,
        data: data
      }

    } catch (e) {
      console.error(e.message)
      apiResponse.status(400)// BadRequest
      apiResponse.body = {
        result: false,
        message: 'Unable to retrieve ACL resources',
        data: data
      }
    }

    apiResponse.json()
  }

  /**
   *
   */
  static list (request, response) {
    const apiResponse = new ApiResponse(request, response)

    try {
      apiResponse.body = {
        result: true,
        message: 'ACL role list success',
        data: grantList
      }

    } catch (e) {
      console.error(e.message)
      apiResponse.status(400)// BadRequest
      apiResponse.body = {
        result: false,
        message: 'Unable to retrieve ACL roles',
        data: []
      }
    }

    apiResponse.json()
  }

  static get (request, response) {
    const apiResponse = new ApiResponse(request, response)

    const systemParam = request.params.system
    const roleParam = request.params.role
    const role = systemParam + '/' + roleParam
    let data = null;

    try {
      grantList.forEach((item) => {
        if (item.role === role) {
          data = item
        }
      })

      let result = true
      let message = 'ACL role found'
      if (data == null) {
        data = {}
        result = false
        message = 'ACL role not found'
        apiResponse.status(404) //Not Found
      }
      apiResponse.body = {
        result: result,
        message: message,
        data: data
      }
    } catch (e) {
      console.error(e.message)
      apiResponse.status(400)// BadRequest
      apiResponse.body = {
        result: false,
        message: 'Unable to retrieve ACL role',
        data: data
      }
    }

    apiResponse.json()
  }

  /**
   *
   */
  static create (request, response) {
    const apiResponse = new ApiResponse(request, response)
    apiResponse.body = {
      result: false,
      message: 'Not Implemented yet!'
    }
    apiResponse.json()
    // const apiResponse = new ApiResponse(request, response)
    //
    // const person = personService.factoryPersonObject(request.body)
    //
    // if (personService.validate(person)) {
    //   const promise = personService.create(person)
    //   promise.then((res) => {
    //     // filter data
    //     // res.
    //
    //     apiResponse.body = {
    //       result: true,
    //       message: 'Person registered with success',
    //       data: res
    //     }
    //     apiResponse.status(201)
    //     apiResponse.json()
    //   }).catch((err) => {
    //     console.error(err)
    //
    //     apiResponse.status(400)
    //     apiResponse.body = {
    //       result: false,
    //       message: personService.getErrorMessage()
    //     }
    //     apiResponse.json()
    //   })
    // } else {
    //   apiResponse.status(400)
    //   apiResponse.body = {
    //     result: false,
    //     message: personService.getErrorMessage()
    //   }
    //   apiResponse.json()
    // }
  }

  /**
   *
   */
  static update (request, response) {
    const apiResponse = new ApiResponse(request, response)
    apiResponse.body = {
      result: false,
      message: 'Not Implemented yet!'
    }
    apiResponse.json()
  }

  static delete (request, response) {
    const apiResponse = new ApiResponse(request, response)
    apiResponse.body = {
      result: false,
      message: 'Not Implemented yet!'
    }
    apiResponse.json()
  }
}

module.exports = AclController

