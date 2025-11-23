const contentful = require('contentful-management');

module.exports = async function getContentfulEnvironment() {
    const client = contentful.createClient({
        accessToken: process.env.CONTENTFUL_MANAGEMENT_ACCESS_TOKEN,
    });

    const space = await client.getSpace(process.env.CONTENTFUL_SPACE_ID);
    return await space.getEnvironment(process.env.CONTENTFUL_ENVIRONMENT_ID || 'master');
};
