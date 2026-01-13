# 🟢 UPLINK v4 // OMEGA PROTOCOL
> **Encrypted Mesh-Network Terminal for Stealth Communication**

UPLINK v4 is a zero-latency, browser-based secure communication suite designed for operatives requiring high-privacy text, file, and multimedia exchange. It utilizes a decentralized **WebRTC Mesh Topology** and **AES-256 GCM Encryption** to ensure that data remains strictly between participants.

![License](https://img.shields.io/badge/License-MIT-green.svg)
![Version](https://img.shields.io/badge/Version-4.1.0--Omega-33ff00)
![Security](https://img.shields.io/badge/Encryption-AES--256--GCM-success)

---

## ⚡ Key Features

* **Terminal Interface:** A high-fidelity, CRT-style hacker interface with scanlines and glitch effects.
* **End-to-End Encryption (E2EE):** All traffic is encrypted client-side using CryptoJS before entering the network tunnel.
* **Mesh Video/Voice:** Real-time group calls via WebRTC. No central media server means lower latency and higher privacy.
* **Secure File Tunneling:** Share photos, videos, and documents directly in the terminal. Files are converted to Base64 and encrypted.
* **Neural Voice Output:** Integrated Text-to-Speech (TTS) system for "eyes-busy" message monitoring.
* **Sliding Tactical Panel:** A retractable video grid UI designed for maximum screen real estate optimization.
* **Active Node Tracking:** Real-time heartbeat system to monitor who is currently connected to your frequency.

---

## 🛠 Technical Architecture

UPLINK v4 operates on a three-tier decentralized model:

1.  **Signaling Layer:** Uses the **MQTT Protocol** over WebSockets to facilitate initial handshakes (Offers/Answers/ICE Candidates).
2.  **Encryption Layer:** All payloads (JSON objects) are stringified and wrapped in an **AES-256** envelope using a PBKDF2-derived key from your Frequency.
3.  **Transport Layer:** Text and files move through the MQTT broker as ciphertext. Audio and Video move through **WebRTC DataChannels** and **MediaStreams** in a P2P mesh configuration.



[Image of Mesh Network Topology]


---

## 🚀 Deployment

UPLINK v4 is a "Single-File Solution." It requires no backend installation.

1.  **Open the link:**
    Given in the about section.
2.  **Establish a Frequency:**
    - Choose a unique **Codename**.
    - Choose a **Frequency Key** (Shared secret password).
    - Share the Key with your team.

---

## ⌨️ Command Manifest

| Command | Function |
| :--- | :--- |
| `/call` | Spawns the sliding panel and initializes a video/voice link. |
| `/upload` | Injects a file into the encrypted stream (800KB Limit). |
| `/users` | Lists all active nodes currently authenticated on your frequency. |
| `/mute` | Silences the AI Voice Synthesis output. |
| `/unmute` | Restores the AI Voice Synthesis output. |
| `/clear` | Purges the local terminal buffer (Shreds history). |
| `/scan` | Visual network diagnostic (Theatrical). |

---

## ⚠️ Tactical Security Protocols

To ensure maximum operational security, follow these protocols:

1.  **VPN Usage:** WebRTC naturally exposes local IP addresses to peers to establish connections. Always use a VPN to mask your location.
2.  **Key Entropy:** Use complex strings for your Frequency. Avoid common words. A 20-character alphanumeric key is recommended.
3.  **Browser Sandbox:** For maximum security, run UPLINK in an "Incognito" or "Private" window to ensure no local cache survives the session.
4.  **No Persistence:** This system is "Volatile." Once the tab is closed, all chat history and session data are permanently erased from RAM.

---

## 🤝 Contributing

Contributions are welcome to the OMEGA Protocol. Please feel free to submit Pull Requests for:
* Improved WebRTC stability.
* Additional `/commands`.
* Enhanced CRT/Shader effects.

---

## 📜 License

Distributed under the **MIT License**. See `LICENSE` for more information.

---

## 📡 Final Transmission
**"The walls have ears. We have encryption."**

Developed by Taki zaidi // Project uplink

## Email
Takizaidi112233@gmail.com
