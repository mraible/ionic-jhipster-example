## Ionic + JHipster 💥

This repository consists of an example Ionic application that works with JHipster's backend. The only thing that's currently working is JWT authentication. Work on the others will developer with time.

To run this example, complete the following steps, run the JHipster backend first.

```
cd jhipster-jwt-backend
./mvnw
```

Then run the Ionic frontend in another terminal window:

```
cd ionic-jhipster-example
npm install -g ionic cordova
npm install
ionic serve
```

Navigate to <http://localhost:8100>, login with `admin/admin` and explore!

## TODO

There is no entity generator integration at this point, but if you click on "Entities", you'll see what my vision is. 
