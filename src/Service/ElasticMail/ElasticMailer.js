let toast = require("react-toastify").toast;

let ElasticEmail = require("@elasticemail/elasticemail-client");
let defaultClient = ElasticEmail.ApiClient.instance;

let apikey = defaultClient.authentications["apikey"];
apikey.apiKey = process.env.REACT_APP_ELASTIC_API_KEY;
let api = new ElasticEmail.EmailsApi();

function sendMail(content, callback) {
  let email = ElasticEmail.EmailMessageData.constructFromObject({
    Recipients: [new ElasticEmail.EmailRecipient("bugra.ahmetozcan@gmail.com")],
    Content: {
      Body: [
        ElasticEmail.BodyPart.constructFromObject({
          ContentType: "HTML",
          Content: content,
        }),
      ],
      Subject: "Webden bir mesaj var",
      From: "bugra.ahmetozcan@gmail.com",
    },
  });

  api.emailsPost(email, callback);
}

module.exports = {
  sendMail,
};
