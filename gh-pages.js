const pages = require('gh-pages');

console.info("Initiating upload to gh-pages...");
pages.publish('dist', (err) => {
    if(err != null) {
        console.info("There was an error publishing the site");
        console.error(err);
    } else {
        console.info("The page was published successfully!");
    }
});