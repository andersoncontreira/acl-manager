const path = require('path')
const packageConfig = require('../package')

module.exports.default = () => {

  // Load environment
  require('dotenv').config()

  if (typeof (process.env.ROOT_PATH) === 'undefined') {
    process.env.ROOT_PATH = '/' + path.basename(process.cwd())
  }

  if (typeof (process.env.REGION) === 'undefined') {
    process.env.REGION = 'sa-east-1'
  }

  if (typeof (process.env.PORT) === 'undefined') {
    process.env.PORT = '3000'
  }

  if (typeof (process.env.ARCH_VERSION) === 'undefined') {
    process.env.ARCH_VERSION = 'v1'
  }

  if (typeof (process.env.VERSION) === 'undefined') {
    process.env.VERSION = packageConfig.version
  }

  if (typeof (process.env.DYNAMODB_TABLE) === 'undefined') {
    process.env.DYNAMODB_TABLE = 'tcc-td-acl'
  }
}