function generateNeuraID() {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
  let id = '';
  for (let i = 0; i < 5; i++) {
    id += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return 'Noble-' + id;
}

document.getElementById('generateBtn').addEventListener('click', () => {
  const username = document.getElementById('username').value.trim();
  if (!username) {
    alert('Please enter your username.');
    return;
  }

  const card = document.getElementById('card');
  const cardUsername = document.getElementById('card-username');
  const cardId = document.getElementById('card-id');
  const qrcodeContainer = document.getElementById('qrcode');
  const downloadBtn = document.getElementById('downloadBtn');

  const neuraId = generateNeuraID();

  cardUsername.textContent = username;
  cardId.textContent = neuraId;

  qrcodeContainer.innerHTML = '';
  new QRCode(qrcodeContainer, {
    text: neuraId,
    width: 50,
    height: 50,
    colorDark: "#C0C0C0",
    colorLight: "transparent",
    correctLevel: QRCode.CorrectLevel.H
  });

  card.style.display = 'block';
  downloadBtn.style.display = 'inline-block';

  downloadBtn.onclick = () => downloadCardAsPNG(card, username);
});

function downloadCardAsPNG(card, username) {
  html2canvas(card, { backgroundColor: null }).then(canvas => {
    const link = document.createElement('a');
    link.download = `${username}_ID.png`;
    link.href = canvas.toDataURL('image/png');
    link.click();
  });
}
