# TCC TD ACL Manager

Micro serviço em lambda para ACL do sistema SIGO que faz parte do meu TCC do curso Especialização em Arquitetura de Software Distribuído da PUC Minas

 
[comment]: <> ( ## Purpose)

[comment]: <> ( This project can be used for everyone to create lambda functions containing APIs with RESTful. )

[comment]: <> ( It are build with aws-express.)
    
  
 
 
[comment]: <> ( ## Last updates )

[comment]: <> ( In this section contains the release notes of the project.)
 
[comment]: <> ( > Version 0.0.1)
 

[comment]: <> ( Initial version of the project)
 
[comment]: <> ( All the changes must be tracked in [CHANGELOG.md]&#40;CHANGELOG.md&#41;)
 
[comment]: <> ( ## Prerequisites)

[comment]: <> ( * node: 6.10+)

[comment]: <> ( * aws-sdk)

[comment]: <> ( * aws-serverless-express)

[comment]: <> ( * node-cache)

[comment]: <> ( * uuid)
 
[comment]: <> ( ### development)

[comment]: <> ( * nodemon)

[comment]: <> ( * jest)
   
[comment]: <> ( ## Features)

[comment]: <> ( * Provides an structure for lambda function environment.)
 
[comment]: <> ( ## Installation)
 
[comment]: <> ( The first step is the installation of [Node.js]&#40;https://nodejs.org/en/&#41;, even though it is not installed.)

[comment]: <> ( The installation is done using the command `npm`  )
 
[comment]: <> ( ``` )

[comment]: <> ( npm install )

[comment]: <> ( ``` )

[comment]: <> ( The Development dependencies can be installed by this command:)

[comment]: <> ( ``` )

[comment]: <> ( npm install --only=dev)

[comment]: <> ( ``` )
 
[comment]: <> ( ## Getting started)

[comment]: <> ( ### Running locally for testing and development)
 
[comment]: <> ( This application are build for Aws Lambda functions, but to run locally this application uses the `express` module.)

[comment]: <> ( To run the application locally you need execute the follow command:)
 
[comment]: <> ( ``` )

[comment]: <> ( node server.js )

[comment]: <> ( ```)

[comment]: <> ( Or via npm: )

[comment]: <> ( ``` )

[comment]: <> ( npm server)

[comment]: <> ( ```)
 
[comment]: <> ( ### Running tests)
 
[comment]: <> ( To run the unit tests of the project you can execute the follow command:)

[comment]: <> ( ``` )

[comment]: <> ( npm test)

[comment]: <> ( ```)

[comment]: <> ( ### Usage)
 
[comment]: <> ( Open the browser of your preference and go to [localhost:3000]&#40;http://localhost:300&#41;.)
 
[comment]: <> ( After change the url to:)

[comment]: <> ( * http://localhost:3000/demo/v1/person)
 
[comment]: <> ( Response: )

[comment]: <> ( ```)

[comment]: <> ( {)

[comment]: <> (     "result": true,)

[comment]: <> (     "message": "Person list success",)

[comment]: <> (     "data": [)

[comment]: <> (         {)

[comment]: <> (             "uuid": "1da3c840-d688-11e9-a1e2-ff2b6767f962",)

[comment]: <> (             "firstName": "João",)

[comment]: <> (             "lastName": "Silva",)

[comment]: <> (             "email": "joao.silva@teste.com",)

[comment]: <> (             "photo": "",)

[comment]: <> (             "deleted": "0",)

[comment]: <> (             "active": "1",)

[comment]: <> (             "createdAt": "2019-09-14T00:39:31.268Z",)

[comment]: <> (             "updatedAt": null,)

[comment]: <> (             "deletedAt": null)

[comment]: <> (         },)

[comment]: <> (         {)

[comment]: <> (             "uuid": "1da41660-d688-11e9-a1e2-ff2b6767f962",)

[comment]: <> (             "firstName": "Maria",)

[comment]: <> (             "lastName": "Silva",)

[comment]: <> (             "email": "maria.silva@teste.com",)

[comment]: <> (             "photo": "",)

[comment]: <> (             "deleted": "0",)

[comment]: <> (             "active": "1",)

[comment]: <> (             "createdAt": "2019-09-14T00:39:31.270Z",)

[comment]: <> (             "updatedAt": null,)

[comment]: <> (             "deletedAt": null)

[comment]: <> (         })

[comment]: <> (     ])

[comment]: <> ( })

[comment]: <> ( ```)
 
[comment]: <> ( There is an example of an API response using a cache memory only for this demonstration, you can apply an dynamoDB or other DB of you preference. )
 
 
[comment]: <> ( <!--)

[comment]: <> ( ## Docs and references)

[comment]: <> (    * [Docs] &#40;https://github.com/Rentcars&#41;)

[comment]: <> (    * [Swagger] &#40;https://github.com/Rentcars&#41;)

[comment]: <> (    * [Others] &#40;https://github.com/Rentcars&#41;)

[comment]: <> ( -->)

[comment]: <> ( ## License)

[comment]: <> ( Code released under the [LICENSE]&#40;LICENSE&#41;  )
 
[comment]: <> ( ## Contributors)
 
[comment]: <> ( * Anderson de Oliveira Contreira [andersoncontreira]&#40;https://github.com/andersoncontreira&#41;)
 
[comment]: <> ( ## Contributions )

[comment]: <> (  Pull requests and new issues are welcome. See [CONTRIBUTING.md]&#40;CONTRIBUTING.md&#41; for details. )
