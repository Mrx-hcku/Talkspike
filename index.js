const express = require('express');
const admin = require('firebase-admin');
const cors = require('cors');

const app = express();
app.use(express.json());
app.use(cors());

// Firebase Admin SDK Direct Initialization (No .env required)
admin.initializeApp({
  credential: admin.credential.cert({
    projectId: "twitter-clone-f467f",
    clientEmail: "firebase-adminsdk-fbsvc@twitter-clone-f467f.iam.gserviceaccount.com",
    privateKey: `-----BEGIN PRIVATE KEY-----\nMIIEugIBADANBgkqhkiG9w0BAQEFAASCBKQwggSgAgEAAoIBAQDPyU9zglysPcit\ntIfyyKLVsS6XcVA2Q11cYmAP+c/8+NqlfmWQZgjtfv5XyYGl5xYOyToCDwTyC2VT\nt4xVe4M+nKQIuGnWNuZKz1ntNpoeXA7oWYtSoCDlsEQxYeObIPf4f2MjSygrZKXP\ln3Go/7bTkS/ZAHr1n0+My5neEXrhaUkXCN8VjB5l5I+N294K0dwK6SxBo0hpf/D\nTor2nbDQxSv9ICiolDq9HD0F2hdX13Ikf77YsiCFNNkytPf78izH228pvMLi0k3e\no40bXOajBc2A7IQn1vJGRUZCd5nHDnpMO5egUkf4rFwd8/l/gdUtHy7is+PXi31x\nr9fQkx8dAgMBAAECgf9qrTsdJoAxYSycPfAQdBSO7JWGiijldr9twteYz5RN7Mqk\nhsd/znRYfxuxI3fVxApw7Ef56bwYulegilAnnPaIdOgSoR2XChX6UmYP/tBEV4GC\BMc3TwijwIDTwHf7+pvM/ZmxAnuN/d0ExZjcXbovI76MPen/2i3SDH7Qgj93gm/9\nfTxW1xOm0LsJedavxzoO8lWBnvmsjGNh9NRfFxfzu2owa7t0PdsNfh4LlUvFoDqM\nc2CjO6V34SczuJ0Ru5esF1mnBz64g5VowkXMOxnp8Cny277i4OHWJ4MzqzoPNkOC\nmO8Y84/kMQ/yuASkfUEQglJwHptt3Lt/iTTAE00CgYEA65dy5QunOuySFDVqpCVL\qzlw0jLLFzBYkCttHpNydcIsdOtREPB6dd+pxl0FRfTRRlF7nlxphs6ySgsj5DSZ\niFMy7isg8csOVPwGdGIq0CXAh2bFkLmqtx1h+aGG1JdYRml4obvuzBlNlu+Fed+u\nfaESUOeb5yWagpNkuNPkV9cCgYEA4ck+i2zoUKxvMEH9sWFebEuz/EVp/r569DcU\nm3NT1ul4TSBClc4S3TFdFqq2jflO9qo9mMVDWYV6gzHHl651QfjYZBYL/rlxV916\nY4bBqCN7M8LqtOlFi4ksv/Y2oOYQPaGcBKfZPkUO7MgLpbkwilU/cbINDYAG5JaB\nNDLm0isCgYByGTsv6uDnDMQCvYwUS2vGVV9qrebmKCf8SsviTw7UMWJOjdkJFy54\nAAa9Zzeylcr0/2mbXK5O97QpYBPV5hOljoXQC1s9P1aFmjmWDCUoAeCoswFkAkfH\nv5c/yxb9xv6du18NFXOlrWuCeiZuzAI6HdQ9Eq7S18dpDfFuAlFIqQKBgG2bq4A1\n64WWYBfWQVkGAreh/IsgC3e+cqPxxVA9qVqwVlVirtBYjPHST/V8BElh2QKH3IU4\nZhykXrgnx1QMPiI7spjL1yDeV3anLw330jVUnC+hlR0kDT3S5uV9mkF7zjCNLtdX\nwG+pSLiL2JOoFjdhcP45yHpgR3ha0/hKKaGnAoGAGcGTbmdKf93ssMPIZLnzNszH\nkc+ejdP+1XjW5ju6o3tr9QJXeMwFSzFvZLh52aHaQQQO18IU/M8luoc4LXBM0dhO\ncRy5qYIC5FP9pwrBt0i4mbgK5X5bHu4HBFWBYzLxDlVQxPiXpTyRtGklsyT4rS4O\nsMyGpe8JgyFH8W3Ka6M=\n-----END PRIVATE KEY-----\n`.trim()
  })
});

// Health check route for Render
app.get('/', (req, res) => {
  res.send('Server is running and Firebase Admin is connected successfully!');
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
