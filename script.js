document.addEventListener('DOMContentLoaded', () => {
    // Automatically open the popup when the page loads
    window.onload = function() {
        const overlay = document.getElementById("myOverlay");
        if (!localStorage.getItem("popupShown")) {
            overlay.style.display = "block";
            localStorage.setItem("popupShown", "true");
        }
    };

    // Close the popup after opening the link
    document.querySelector(".popup a").addEventListener("click", function(event) {
        //event.preventDefault(); // Prevent the link from navigating
        const overlay = document.getElementById("myOverlay");
        overlay.style.display = "none";
    });
    const games = {
        1: {
            name: 'Riding Extreme 3D',
            appToken: 'd28721be-fd2d-4b45-869e-9f253b554e50',
            promoId: '43e35910-c168-4634-ad4f-52fd764a843f',
            timing: 30000, // 30 seconds
            attempts: 25,
        },
        2: {
            name: 'Chain Cube 2048',
            appToken: 'd1690a07-3780-4068-810f-9b5bbf2931b2',
            promoId: 'b4170868-cef0-424f-8eb9-be0622e8e8e3',
            timing: 30000, // 30 seconds
            attempts: 20,
        },
        3: {
            name: 'My Clone Army',
            appToken: '74ee0b5b-775e-4bee-974f-63e7f4d5bacb',
            promoId: 'fe693b26-b342-4159-8808-15e3ff7f8767',
            timing: 180000, // 180 seconds
            attempts: 30,
        },
        4: {
            name: 'Train Miner',
            appToken: '82647f43-3f87-402d-88dd-09a90025313f',
            promoId: 'c4480ac7-e178-4973-8061-9ed5b2e17954',
            timing: 30000, // 30 seconds
            attempts: 15,
        },
        5: {
            name: 'Merge Away',
            appToken: '8d1cc2ad-e097-4b86-90ef-7a27e19fb833',
            promoId: 'dc128d28-c45b-411c-98ff-ac7726fbaea4',
            timing: 30000, // 30 seconds
            attempts: 25,
        },
        6: {
            name: 'Twerk Race 3D',
            appToken: '61308365-9d16-4040-8bb0-2f4a4c69074c',
            promoId: '61308365-9d16-4040-8bb0-2f4a4c69074c',
            timing: 30000, // 30 seconds
            attempts: 20,
        },
        7: {
            name: 'Polysphere',
            appToken: '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71',
            promoId: '2aaf5aee-2cbc-47ec-8a3f-0962cc14bc71',
            timing: 20000, // 20 seconds
            attempts: 20,
        },
        8: {
            name: 'Mow and Trim',
            appToken: 'ef319a80-949a-492e-8ee0-424fb5fc20a6',
            promoId: 'ef319a80-949a-492e-8ee0-424fb5fc20a6',
            timing: 20000, // 20 seconds
            attempts: 20,
        },
        9: {
            name: 'Mud Racing',
            appToken: '8814a785-97fb-4177-9193-ca4180ff9da8',
            promoId: '8814a785-97fb-4177-9193-ca4180ff9da8',
            timing: 20000, // 20 seconds
            attempts: 20,
        },
        10: {
            name: 'Tile Trio',
            appToken: 'e68b39d2-4880-4a31-b3aa-0393e7df10c7',
            promoId: 'e68b39d2-4880-4a31-b3aa-0393e7df10c7',
            timing: 20000, // 20 seconds
            attempts: 20,
        },
        11: {
            name: 'Zoopolis',
            appToken: 'b2436c89-e0aa-4aed-8046-9b0515e1c46b',
            promoId: 'b2436c89-e0aa-4aed-8046-9b0515e1c46b',
            timing: 20000, // 20 seconds
            attempts: 20,
        },
        12: {
            name: 'Fluff Crusade',
            appToken: '112887b0-a8af-4eb2-ac63-d82df78283d9',
            promoId: '112887b0-a8af-4eb2-ac63-d82df78283d9',
            timing: 20000, // 40 seconds
            attempts: 30,
        },
        13: {
            name: 'Stone Age',
            appToken: '04ebd6de-69b7-43d1-9c4b-04a6ca3305af',
            promoId: '04ebd6de-69b7-43d1-9c4b-04a6ca3305af',
            timing: 20000, // 40 seconds
            attempts: 30,
        },
        14: {
            name: 'Bouncemasters',
            appToken: 'bc72d3b9-8e91-4884-9c33-f72482f0db37',
            promoId: 'bc72d3b9-8e91-4884-9c33-f72482f0db37',
            timing: 20000, // 40 seconds
            attempts: 30,
        },
        15: {
            name: 'Hide Ball',
            appToken: '4bf4966c-4d22-439b-8ff2-dc5ebca1a600',
            promoId: '4bf4966c-4d22-439b-8ff2-dc5ebca1a600',
            timing: 40000, // 30 seconds
            attempts: 30,
        },
        16: {
            name: 'Pin Out Master',
            appToken: 'd2378baf-d617-417a-9d99-d685824335f0',
            promoId: 'd2378baf-d617-417a-9d99-d685824335f0',
            timing: 20000, // 30 seconds
            attempts: 30,
        },
        17: {
            name: 'Count Masters',
            appToken: '4bdc17da-2601-449b-948e-f8c7bd376553',
            promoId: '4bdc17da-2601-449b-948e-f8c7bd376553',
            timing: 20000, // 30 seconds
            attempts: 30,
        },
        18: {
            name: 'Infected Frontier',
            appToken: 'eb518c4b-e448-4065-9d33-06f3039f0fcb',
            promoId: 'eb518c4b-e448-4065-9d33-06f3039f0fcb',
            timing: 20000, // 30 seconds
            attempts: 30,
        },
        19: {
            name: 'Among Water',
            appToken: 'daab8f83-8ea2-4ad0-8dd5-d33363129640',
            promoId: 'daab8f83-8ea2-4ad0-8dd5-d33363129640',
            timing: 20000,
            attempts: 20,
        },
        20: {
            name: 'Factory World',
            appToken: 'd02fc404-8985-4305-87d8-32bd4e66bb16',
            promoId: 'd02fc404-8985-4305-87d8-32bd4e66bb16',
            timing: 20000, // 30 seconds
            attempts: 30,
        }
    };
    const gameCards = document.querySelectorAll('.game-card');
    const keyRange = document.getElementById('keyRange');
    const keyValue = document.getElementById('keyValue');
    const startBtn = document.getElementById('startBtn');
    const progressContainer = document.getElementById('progressContainer');
    const progressBar = document.getElementById('progressBar');
    const progressText = document.getElementById('progressText');
    const progressLog = document.getElementById('progressLog');
    const keyContainer = document.getElementById('keyContainer');
    const keysList = document.getElementById('keysList');
    const copyAllBtn = document.getElementById('copyAllBtn');
    const copyStatus = document.getElementById('copyStatus');
    
    let selectedGame = null;
    let selectedGameCard = null;

    gameCards.forEach(card => {
        card.addEventListener('click', () => {
            gameCards.forEach(card => card.classList.remove('selected'));
            card.classList.add('selected');
            selectedGame = card.dataset.game;
            selectedGameCard = card.cloneNode(true);

            document.querySelector('.game-selection').classList.add('hidden');
            document.querySelector('.key-generation').classList.remove('hidden');
            displaySelectedGameCard();
        });
    });

    keyRange.addEventListener('input', () => {
        keyValue.innerText = keyRange.value;
    });

    startBtn.addEventListener('click', async () => {
        const keyCount = parseInt(keyRange.value);
        if (!selectedGame) {
            alert('Please select a game first.');
            return;
        }

        const gameChoice = parseInt(selectedGame);
        const game = games[gameChoice];

        document.querySelector('.key-generation').classList.add('hidden');
        progressContainer.classList.remove('hidden');
        keyContainer.classList.add('hidden');
        keysList.innerHTML = '';
        copyAllBtn.classList.add('hidden');
        startBtn.classList.add('hidden');
        startBtn.disabled = true;

        let progress = 0;
        const updateProgress = (increment, message) => {
            progress += increment;
            progressBar.style.width = `${progress}%`;
            progressText.innerText = `${progress}%`;
            progressLog.innerText = message;
        };

        const generateKeyProcess = async () => {
            const clientId = generateClientId();
            let clientToken;
            try {
                clientToken = await login(clientId, game.appToken);
            } catch (error) {
                alert(`Failed to login: ${error.message}`);
                startBtn.disabled = false;
                return null;
            }

            for (let i = 0; i < game.attempts; i++) {
                const hasCode = await emulateProgress(clientToken, game.promoId);
                updateProgress((100 / game.attempts) / keyCount, `${i + 1}/${game.attempts}`);
                if (hasCode) {
                    break;
                }
                await sleep(game.timing);
            }

            try {
                const key = await generateKey(clientToken, game.promoId);
                updateProgress(100 / keyCount, 'Generating key...');
                return key;
            } catch (error) {
                alert(`Failed to generate key: ${error.message}`);
                return null;
            }
        };

        const keys = await Promise.all(Array.from({ length: keyCount }, generateKeyProcess));

        if (keys.length > 0) {
            keysList.innerHTML = keys.filter(key => key).map(key =>
                `<div class="key-item">
                    <input type="text" value="${key}" readonly>
                    <button class="copyKeyBtn" data-key="${key}">Copy Key</button>
                </div>`
            ).join('');
            copyAllBtn.classList.remove('hidden');
            copyAllBtn.style.display = 'block';
        }

        keyContainer.classList.remove('hidden');
        startBtn.classList.remove('hidden');
        progressBar.style.width = '100%';
        progressText.innerText = '100%';
        progressLog.innerText = 'Complete';

        startBtn.disabled = false;

        document.querySelectorAll('.copyKeyBtn').forEach(button => {
            button.addEventListener('click', (event) => {
                const key = event.target.getAttribute('data-key');
                copyToClipboard(key);
            });
        });

        copyAllBtn.addEventListener('click', () => {
            const keysText = keys.filter(key => key).join('\n');
            copyToClipboard(keysText);
        });
    });

    const displaySelectedGameCard = () => {
        const selectedGameContainer = document.getElementById('selectedGameContainer');
        const selectedGameCardContainer = document.getElementById('selectedGameCard');
        if (selectedGameCard) {
            selectedGameCardContainer.innerHTML = selectedGameCard.innerHTML;
            selectedGameContainer.classList.remove('hidden');
        } else {
            selectedGameContainer.classList.add('hidden');
        }
    };

    const generateClientId = () => {
        const timestamp = Date.now();
        const randomNumbers = Array.from({ length: 19 }, () => Math.floor(Math.random() * 10)).join('');
        return `${timestamp}-${randomNumbers}`;
    };

    const login = async (clientId, appToken) => {
        const response = await fetch('https://api.gamepromo.io/promo/login-client', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                appToken,
                clientId,
                clientOrigin: 'deviceid'
            })
        });

        if (!response.ok) {
            throw new Error('Failed to login');
        }

        const data = await response.json();
        return data.clientToken;
    };

    const emulateProgress = async (clientToken, promoId) => {
        const response = await fetch('https://api.gamepromo.io/promo/register-event', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${clientToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                promoId,
                eventId: generateUUID(),
                eventOrigin: 'undefined'
            })
        });

        if (!response.ok) {
            return false;
        }

        const data = await response.json();
        return data.hasCode;
    };

    const generateKey = async (clientToken, promoId) => {
        const response = await fetch('https://api.gamepromo.io/promo/create-code', {
            method: 'POST',
            headers: {
                'Authorization': `Bearer ${clientToken}`,
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                promoId
            })
        });

        if (!response.ok) {
            throw new Error('Failed to generate key');
        }

        const data = await response.json();
        return data.promoCode;
    };

    const generateUUID = () => {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            const r = Math.random() * 16 | 0, v = c === 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    };

    const sleep = ms => new Promise(resolve => setTimeout(resolve, ms));

    const copyToClipboard = (text) => {
        if (navigator.clipboard && navigator.clipboard.writeText) {
            navigator.clipboard.writeText(text).then(() => {
                copyStatus.classList.remove('hidden');
                setTimeout(() => copyStatus.classList.add('hidden'), 2000);
            }).catch(err => {
                console.error('Failed to copy text: ', err);
            });
        } else {
            const textArea = document.createElement('textarea');
            textArea.value = text;
            textArea.style.position = 'fixed';
            textArea.style.top = '0';
            textArea.style.left = '0';
            document.body.appendChild(textArea);
            textArea.focus();
            textArea.select();

            try {
                const successful = document.execCommand('copy');
                if (successful) {
                    copyStatus.classList.remove('hidden');
                    setTimeout(() => copyStatus.classList.add('hidden'), 2000);
                }
            } catch (err) {
                console.error('Fallback: Oops, unable to copy', err);
            }

            document.body.removeChild(textArea);
        }
    };
});
