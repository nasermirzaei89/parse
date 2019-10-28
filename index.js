let Parse = require('parse/node');

async function run() {
    Parse.initialize('appId', 'javascriptKey');
    Parse.serverURL = 'http://localhost:1337/parse';

    Parse.LiveQuery.on('open', () => {
        console.log('socket connection established');
    });

    Parse.LiveQuery.on('close', () => {
        console.log('socket connection closed');
    });

    Parse.LiveQuery.on('error', (error) => {
        console.log(error);
    });

    let query = new Parse.Query('Message');
    let subscription = await query.subscribe();

    // console.debug(subscription);

    subscription.on('open', () => {
        console.log('subscription opened');
    });

    subscription.on('create', (object) => {
        console.log('object created');
        console.debug(object);
    });

    subscription.on('update', (object) => {
        console.log('object updated');
        console.debug(object);
    });

    subscription.on('enter', (object) => {
        console.log('object entered');
        console.debug(object);
    });

    subscription.on('leave', (object) => {
        console.log('object left');
        console.debug(object);
    });

    subscription.on('delete', (object) => {
        console.log('object deleted');
        console.debug(object);
    });

    subscription.on('close', () => {
        console.log('subscription closed');
    });

    // await subscription.unsubscribe();
}

(async () => {
    await run();
    console.log('ran');
})();

console.log('end');
