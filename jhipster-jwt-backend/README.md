# jot
This application was generated using JHipster 4.10.0, you can find documentation and help at [http://www.jhipster.tech/documentation-archive/v4.10.0](http://www.jhipster.tech/documentation-archive/v4.10.0).

## Development

To start your application in the dev profile, simply run:

    ./mvnw


For further instructions on how to develop with JHipster, have a look at [Using JHipster in development][].

### Using angular-cli

You can also use [Angular CLI][] to generate some custom client code.

For example, the following command:

    ng generate component my-component

will generate few files:

    create src/main/webapp/app/my-component/my-component.component.html
    create src/main/webapp/app/my-component/my-component.component.ts
    update src/main/webapp/app/app.module.ts


## Building for production

To optimize the jot application for production, run:

    ./mvnw -Pprod clean package

To ensure everything worked, run:

    java -jar target/*.war


Refer to [Using JHipster in production][] for more details.

## Testing

To launch your application's tests, run:

    ./mvnw clean test

For more information, refer to the [Running tests page][].

## Using Docker to simplify development (optional)

You can use Docker to improve your JHipster development experience. A number of docker-compose configuration are available in the [src/main/docker](src/main/docker) folder to launch required third party services.
For example, to start a postgresql database in a docker container, run:

    docker-compose -f src/main/docker/postgresql.yml up -d

To stop it and remove the container, run:

    docker-compose -f src/main/docker/postgresql.yml down

You can also fully dockerize your application and all the services that it depends on.
To achieve this, first build a docker image of your app by running:

    ./mvnw package -Pprod dockerfile:build

Then run:

    docker-compose -f src/main/docker/app.yml up -d

For more information refer to [Using Docker and Docker-Compose][], this page also contains information on the docker-compose sub-generator (`jhipster docker-compose`), which is able to generate docker configurations for one or several JHipster applications.

## Continuous Integration (optional)

To configure CI for your project, run the ci-cd sub-generator (`jhipster ci-cd`), this will let you generate configuration files for a number of Continuous Integration systems. Consult the [Setting up Continuous Integration][] page for more information.

[JHipster Homepage and latest documentation]: http://www.jhipster.tech
[JHipster 4.10.0 archive]: http://www.jhipster.tech/documentation-archive/v4.10.0

[Using JHipster in development]: http://www.jhipster.tech/documentation-archive/v4.10.0/development/
[Using Docker and Docker-Compose]: http://www.jhipster.tech/documentation-archive/v4.10.0/docker-compose
[Using JHipster in production]: http://www.jhipster.tech/documentation-archive/v4.10.0/production/
[Running tests page]: http://www.jhipster.tech/documentation-archive/v4.10.0/running-tests/
[Setting up Continuous Integration]: http://www.jhipster.tech/documentation-archive/v4.10.0/setting-up-ci/


