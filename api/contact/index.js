const { EmailClient } = require("@azure/communication-email");

module.exports = async function (context, req) {
    if (req.method !== "POST") {
        context.res = {
            status: 405,
            body: { error: "Method not allowed" },
        };
        return;
    }

    var name = req.body && req.body.name;
    var email = req.body && req.body.email;
    var subject = req.body && req.body.subject;
    var message = req.body && req.body.message;

    if (!name || !email || !message) {
        context.res = {
            status: 400,
            body: { error: "Name, email, and message are required." },
        };
        return;
    }

    var connectionString = process.env.COMMUNICATION_SERVICES_CONNECTION_STRING;
    var senderAddress = process.env.CONTACT_SENDER_EMAIL;
    var recipientAddress = process.env.CONTACT_RECIPIENT_EMAIL;

    if (!connectionString || !senderAddress || !recipientAddress) {
        context.res = {
            status: 500,
            body: { error: "Email configuration is missing." },
        };
        return;
    }

    var emailClient = new EmailClient(connectionString);

    var emailMessage = {
        senderAddress: senderAddress,
        content: {
            subject: "Portfolio contact: " + (subject || "No subject"),
            plainText:
                "Name: " +
                name +
                "\nEmail: " +
                email +
                "\nSubject: " +
                (subject || "No subject") +
                "\n\nMessage:\n" +
                message,
        },
        recipients: {
            to: [
                {
                    address: recipientAddress,
                },
            ],
        },
        replyTo: [
            {
                address: email,
                displayName: name,
            },
        ],
    };

    try {
        var poller = await emailClient.beginSend(emailMessage);
        await poller.pollUntilDone();

        context.res = {
            status: 200,
            body: { ok: true },
        };
    } catch (error) {
        context.log.error("Email send failed:", error);

        context.res = {
            status: 500,
            body: { error: "Could not send email." },
        };
    }
};