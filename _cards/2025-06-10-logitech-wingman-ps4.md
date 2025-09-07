---
layout: default
title: Connect Logitech WingMan Formula Force GP to PlayStation 4
description: Connect your Logitech WingMan Formula Force GP (or any other) steering wheel to your PlayStation 4.
date: 2025-06-10
image: https://github.com/user-attachments/assets/87c196e9-2211-4e84-a7c0-a10c570b6eef
---

# Introduction

The Logitech WingMan Formula GP series, released on August 30, 2000, are classic PC racing wheels that offer a solid driving experience but lack native PlayStation 4 support. Fortunately, with a few lightweight and **free software** tools, you can bridge this gap and enjoy your favorite PS4 racing games using any wheel, with no expensive adapters required.

This guide will show you, step by step, how to set up your WingMan Formula Force GP (or any other) steering wheel to work with your PlayStation 4 via Remote Play for input purposes.

### What You'll Need

 - 🕹️ Logitech WingMan Formula Force GP (or similar PC wheel)
 - 🖥️ Windows PC
 - ⚙️ [XOutput](https://github.com/csutorasa/XOutput/releases) (converts DirectInput to XInput)
 - ⚙️ [ViGEmBus](https://github.com/nefarius/ViGEmBus/releases) (virtual gamepad emulation bus driver)
 - 🎮 [DualShock4 emulator](https://github.com/r57zone/DualShock4-emulator/releases) (converts XInput to DualShock 4)
 - 📡 PS RemotePlay v5.5 for Windows (recommended version)
 - ⚙️ [PS RemotePlay Version Patcher](https://github.com/xeropresence/remoteplay-version-patcher/releases)

# Step-by-Step Guide

<div class="step">
    <h3>Step 1: Set up the Steering Wheel and Pedals</h3>
</div>

1. Attach steering wheel to tabletop, tighten knobs on top of base.
2. Plug the 4-pin connector of the pedals' cable into the steering wheel base.
    <p align="center" style="margin: 1rem 0;">
        <img src="https://github.com/user-attachments/assets/f9e90f7a-c585-4478-bd52-039212b135ff" width="200">
    </p>
3. Plug the power cord connector into the base of the steering wheel.
4. Connect your steering wheel to your PC via USB. Once connected, gently turn the wheel **fully left and right** to calibrate its range before continuing.

<p align="center">
  <img src="https://github.com/user-attachments/assets/29a7dabb-cd21-4c94-84cd-c9e19f98eddf" width="200">
</p>

**Note:** The wheel may move or self-center when first powered on, this is normal. 

<div class="step">
    <h3>Step 2: Configure XOutput</h3>
</div>

1. [Download and install ViGEmBus](https://github.com/nefarius/ViGEmBus/releases).
2. [Download XOutput](https://github.com/csutorasa/XOutput/releases), extract it, and run the executable.
3. Confirm that your steering wheel appears in XOutput once connected:
    <p align="center" style="margin: 1rem 0;">
        <img src="https://github.com/user-attachments/assets/266e999f-0dd9-47b8-8617-624b4c483efb" width="450">
    </p>
4. Click on _Edit_, and map your wheel's axes and buttons to XInput (Xbox controller format) according to your preference. You can use my custom configuration below as a reference:
    ```ini
    [Logitech WingMan Formula Force GP USB(<your_UUID>)]
    SelectedDPad=-1
    StartWhenConnected=false
    A=Axis2,51,90,0
    B=Axis2,15,52,0
    X=Button6,0,100,0
    Y=Button5,0,100,0
    L1=Button1,0,100,0
    R1=Button2,0,100,0
    L3=Axis1,0,0,0
    R3=Button6,0,0,0
    Start=Button3,0,100,0
    Back=Button1,0,0,0
    Home=Button1,0,0,0
    UP=Button2,0,100,0
    DOWN=Button1,0,100,0
    LEFT=Button6,0,100,0
    RIGHT=Button4,0,100,0
    LX=Axis1,23,77,0
    LY=Button1,50,50,0
    RX=Axis1,50,50,0
    RY=Button1,50,50,0
    L2=Axis2,55,24,0
    R2=Axis2,50,84,0
    ```
5. Once you're happy with your configuration, click on _Start_.

<div class="step">
    <h3>Step 3: Install and Patch PS RemotePlay</h3>
</div>

1. Download and install PS RemotePlay v5.5 (recommended). You can usually find a download link in online forums, just search for "_Reddit PS RemotePlay v5.5_". Earlier versions should still work, but may require extra manual steps. The version I use is: `v5.5.0.8250`
2. [Download the RemotePlay Version Patcher](https://github.com/xeropresence/remoteplay-version-patcher/releases), extract it, and run its executable to patch PS RemotePlay to the latest version.

The version patcher will enable you to auto-connect to your PlayStation 4 without needing to manually enter a new code every time.

<div class="step">
    <h3>Step 4: Connect Everything</h3>
</div>

1. [Download DS4Emulator](https://github.com/r57zone/DualShock4-emulator/releases).
2. Turn-on your Playstation 4, and start your favorite racing game.
3. Launch the patched PS RemotePlay app. The first time you run it, it may ask you to log in with your PlayStation Network account. You'll have to manually connect to your PlayStation 4 using a code. To do this, go to _Settings_ > _Remote Play Connection Settings_ > _Add Device_ and follow the on-screen instructions.
4. Once in-game, run the DS4Emulator executable. RemotePlay should recognize DS4Emulator as a genuine DualShock 4 controller, allowing you to play with your wheel!

<p align="center">
    <img src="https://github.com/user-attachments/assets/af9c09d3-5db9-4319-b938-dbdc832737d6" width=600">
</p>

**Note:** For the best gameplay experience, connect your PS4 directly to your display via HDMI and use Remote Play only for controller input. This minimizes display lag compared to streaming. For optimal stability, connect both your PS4 and PC to your network via ethernet cable.

<div class="step">
    <h3>Step 5: Race! 🏁</h3>
</div>

<p align="center">
    <strong>Gran Turismo Sport Test Drive</strong><br>
    <iframe width="480" height="270" src="https://github.com/user-attachments/assets/a00f45bd-9882-45d7-8038-712bad51fbfa" frameborder="0" allowfullscreen></iframe>
</p>
