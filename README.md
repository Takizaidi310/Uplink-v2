# **UPLINK v2.0 // SECURE SHELL**

**UPLINK v2.0** is a high-fidelity, retro-themed terminal interface designed for secure, real-time communication. It mimics the aesthetic of an 80s CRT terminal while utilizing modern decentralized messaging protocols to connect users globally.

---

## **WHAT IS UPLINK?**

This project is a web-based chat application that requires no traditional database. Instead, it uses a **Secure Handshake** protocol to bridge users through specific radio-style frequencies. The interface features a custom-built CRT simulation, including scanlines, screen flicker, and a monospaced command-line environment.

## **HOW IT WORKS**

The system operates on the **MQTT (Message Queuing Telemetry Transport)** protocol. 
* **Frequencies:** When you enter a "Frequency," you are essentially subscribing to a specific data channel on a public broker. 
* **Security:** Only users tuned to that exact frequency can see and exchange messages, providing a layer of "security through obscurity".
* **Real-time:** Messages are broadcast instantly to all active nodes on the same frequency.

## **STEP-BY-STEP USAGE**

To establish a secure uplink, follow these instructions precisely:

1.  **ACCESS THE TERMINAL:** Open the provided **Vercel deployment link** in your web browser.
2.  **INITIALIZE HANDSHAKE:** Once the terminal boots up, you will be prompted for a **Codename**. Type your handle and press `ENTER`.
3.  **CONNECT TO FREQUENCY:** Enter the **Channel Frequency (Key)**. This is your private chat room ID.
4.  **ESTABLISH CONNECTION:** Press `ENTER`. Once the status badge in the top right turns **ONLINE**, the connection is secure.
5.  **SYNC WITH OTHERS:** Share your **Frequency** with a peer. Once they connect using the same frequency, you will both be visible in the same chat.

## **SYSTEM COMMANDS**

The terminal supports internal commands to manage your session:
* `/whoami` — Displays your current codename and the frequency you are tuned to.
* `/clear` — Wipes the console log of all previous messages.

## **TECHNICAL SPECIFICATIONS**

* **Front-end:** Pure HTML5/CSS3 with custom `@keyframes` for CRT flicker and scanline effects.
* **Protocol:** MQTT over WebSockets using the HiveMQ Public Broker.
* **Deployment:** Optimized for serverless hosting on Vercel.

---

## **CREDITS**

Project developed and maintained by **Taki Zaidi**.
