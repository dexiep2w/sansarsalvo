const express = require('express');
const app = express();
const port = process.env.PORT || 3000;

// Gelen verileri okumak için middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// API Rota Tanımlaması: /check
app.get('/check', (req, res) => {
    // URL'den gelen 'token' parametresini al
    const token = req.query.token;

    // Eğer token boşsa hata ver
    if (!token) {
        return res.status(400).json({ error: 'Token parametresi eksik' });
    }

    console.log(`Kontrol edilen Token: ${token}`);

    // Burada kendi kontrol mantığını yapabilirsin.
    // Örnek bir kontrol (Token "valid" kelimesini içeriyorsa geçerli sayalım)
    let isValid = false;
    if (token.includes('valid') || token.length > 10) {
        isValid = true;
    }

    // Sonucu JSON olarak geri döndür
    res.json({
        token: token,
        status: isValid ? 'VALID' : 'INVALID',
        timestamp: new Date().toISOString()
    });
});

// Sunucuyu başlat
app.listen(port, () => {
    console.log(`Sunucu port ${port} üzerinde çalışıyor.`);
});
