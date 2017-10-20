## Ionic in JHipster 💥

This repository consists of an example Ionic application that works with JHipster's backend. The only thing that's currently working is JWT authentication. Work on the others will developer with time.

To run this example, complete the following steps, run the JHipster backend first.

```
cd jhipster-jwt-backend
npm install
./mvnw
```

Then run the Ionic frontend:


```
cd ionic-jhipster-example
npm install -g ionic cordova
npm install
ionic serve
```

Login to <http://localhost:8100> and explore!
