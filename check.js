// api/check.js
module.exports = (req, res) => {
    const token = req.query.token;
    
    if (!token) {
        return res.status(400).json({ error: 'Token gerekli' });
    }

    // Buraya kendi kontrol kodunu yazabilirsin
    res.json({
        status: 'VALID',
        token: token,
        message: 'API Çalışıyor!'
    });
};
