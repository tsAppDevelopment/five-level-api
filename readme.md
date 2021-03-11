# Required dependencies
1. install git https://www.atlassian.com/git/tutorials/install-git
2. install docker: https://docs.docker.com/get-docker/
3. install vscode: https://code.visualstudio.com/download
4. install the vs code extension: https://marketplace.visualstudio.com/items?itemName=ms-vscode-remote.remote-containers 
# To compose UI-API-DB
#### Mac
git clone https://code.il2.dso.mil/tron/products/five-level-app/frontend.git frontend && git clone https://code.il2.dso.mil/tron/products/five-level-app/api.git api && git clone https://code.il2.dso.mil/tron/products/five-level-app/docker-compose-dev.git fullstack-template && cd fullstack-template && bin/run.sh
#### Windows
git clone https://code.il2.dso.mil/tron/products/five-level-app/frontend.git frontend && git clone https://code.il2.dso.mil/tron/products/five-level-app/api.git api && git clone https://code.il2.dso.mil/tron/products/five-level-app/docker-compose-dev.git fullstack-template && cd fullstack-template && bin/run.ps1
# Setup your dev env
1. click on green button that looks like this in bottom left of vs code >< 
2. click open workspace in container
3. code stuff && profit?
# What the heck is a fullstack template?
BSwenson made a tool that mock the P1 env locally by injecting an auth header. This allows us to create roles and profiles for users authenticated with P1's Keycloak: https://code.il2.dso.mil/brandon.swenson/fullstack-template
# A REST API with auth using Prisma-Express-Node-PGSql
to view live data while running, use the examples with vs code rest client || attach terminal to running api container and run: npx prisma studio
### Postgresql img out of space on mac?
1. https://github.com/docker/for-mac/issues/371#issuecomment-248404423
2. reset docker to factory defaults
3. docker pull nginx && docker pull node:14.15.4 && docker pull nginx
### TODO?:
cascading updated && updatedBy for models?
1. "updated" can be added to all models without being concerned about cascading since it inherently would be taken care of.
2. "updatedBy" is reasonable and probably wouldn't be significant amount of work

logs for all routes? log: Datetime, email, role, req.route, req.method, req.body
1. Logs are likely important, but what is the purpose of the logging? This would dictate exactly what would be logged.
2. How long are logs kept? Would they be cleaned up by the app during production automatically i.e keep only last 30 days or would we really want to put human element of clicking clean up..

route to view logs?: req.params ?from=datetime1&to=datetime2
1. suggest this .... /logs?start_date=2012-01-01&end_date=2012-01-31 -
2. I liked the last comments on this site https://stackoverflow.com/questions/9637297/proper-rest-formatted-url-with-date-ranges "As the name of the parameter it should be meaningful. start could mean anything, but start_date is more meaningful."
3. Would it possibly make sense to streamline the logs to all fall under logs, have 1 column indicate the table, another indicate the remarks which would include what changed?

in mem array of all aircraft in front of /aircraft with frequent db polling?
1. Are you asking if maybe we should cache the list of possible aircraft on the client?

rm General.name from prisma/db then: /general => General.name = "First Last"
1. Honestly I don't think General is very clear name for what it represents. Recommend making more clear name.
2. I do agree with making separate properties - First, Last, etc and making function called FullName that puts them together somehow

rm all but 1 General from prisma/ db && rm General.role then: /general => General.role = req.role
1. It seems General is used to dynamically display Site menus based on role. Consider renaming it.
2. Not sure how I feel about the object and what it represents.

edited && editedBy for routes:
1. user - no cascade?
2. tank - cascade? aircraft
3. glossarys cascade? aircraft
4. config - cascade? aircraft
5. configcargo - cascade? config,aircraft
6. cargo - cascade? configcargo, aircraft, config
7. aircraft