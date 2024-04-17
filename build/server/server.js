import express from 'express';
import mailjet from 'node-mailjet';

//EXPORTING EXPRESS FUNCTION TO BE USED IN VITE CONFIG, THIS IS NECESSARY FOR THIS SETUP
const app = express();
app.use(express.json());
const port = 3000;
app.post('/api/contact', async (req, res) => {
    if (!process.env.MAILJET_API_KEY || !process.env.MAILJET_SECRET_KEY)
        return res.json({ ok: false, message: 'Message failed to send' });
    const { name, email, message } = req.body;
    const data = JSON.stringify({
        Messages: [
            {
                From: { Email: 'alexwaldmann2004@gmail.com', Name: 'Alex' },
                To: [{ Email: 'alexwaldmann2004@gmail.com', Name: 'Alex' }],
                Subject: `Contact from ${name} @ ${email}`,
                TextPart: `${email}\n\n${name} says:\n${message}`,
            },
        ],
    });
    const mailRes = await mailjet
        .apiConnect(process.env.MAILJET_API_KEY, process.env.MAILJET_SECRET_KEY)
        .post('send', { version: 'v3.1' })
        .request(data);
    if (mailRes.response.status !== 200) {
        return res.json({ ok: false, message: 'Message failed to send' });
    }
    return res.json({ ok: true, message: 'Message sent' });
});
//IF NOT VITE, HAVE EXPRESS SERVE STATIC FILES AND OPEN SERVER, VITE WILL OTHERWISE DO THIS
if (!process.env['VITE']) {
    const frontendFiles = process.cwd() + '/build/';
    app.use(express.static(frontendFiles));
    app.get('/*', (_req, res) => {
        res.sendFile('index.html', { root: frontendFiles });
    });
    app.listen(process.env['PORT'] ? process.env['PORT'] : port);
    console.log(!process.env['PORT']
        ? `Server started on http://localhost:${port}` //FOR DEV AND BUILD
        : 'Server is running on host platform' //FOR HOSTING PLATFORM
    );
}

export { app };
//# sourceMappingURL=server.js.map