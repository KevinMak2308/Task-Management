# Task Management Application

## Opsætning

Clone repository:

git clone https://github.com/yourusername/Task-Management.git
cd Task-Management

## Server

Navigere til server mappen:
cd server

Installere nodemodules
npm i

Start server:
nodemon.cmd app.js

Serveren kører på port 8080

**Bemærk:** `nodemon.cmd` bruges i stedet for `node` til at starte serveren, fordi `nodemon` automatisk genstarter serveren, når du foretager ændringer i din kode. Dette er nyttigt under udvikling, da det holder serveren kørende og opdaterer den med de nyeste ændringer uden manuel genstart.


## Client

Navigere til client mappen:
cd ../client

Installere nodemodules:
npm i

Start client:
npm start

Burde åbne dit brower vindue automatisk, ellers kører frontenden på `http://localhost:3000`.

**OBS** Jeg har bevidst valgt ikke at smide .env i .gitignore for at gøre det lettere, men under et 'rigtigt' udviklings miljø vil jeg selvfølgelig holde det intern til backend teamet. De sikre at folk udefra ikke vil kunne bruge vores endpoints og øge trafik på vores server.
