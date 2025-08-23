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
 - 🎮 [DualShock4 emulator](https://github.com/r57zone/DualShock4-emulator) (converts XInput to DualShock 4)
 - ⚙️ [RemotePlay Version Patcher](https://github.com/streamingtools/remoteplay-version-patcher)
 - 📡 [RemotePlay v5.5.0.8250](https://remoteplay.dl.playstation.net/remoteplay/lang/en/index.html) for Windows

# Step-by-Step Guide

<div class="step">
    <h3>Step 1: Install and Configure XOutput</h3>
</div>

1. [Download XOutput](https://github.com/csutorasa/XOutput/releases) and extract it.
2. Connect your steering wheel to your PC via USB. Confirm it appears in XOutput:
    <p align="center" style="margin: 1rem 0;">
        <img src="https://github.com/user-attachments/assets/266e999f-0dd9-47b8-8617-624b4c483efb" width="450">
    </p>
3. In XOutput, click on _Edit_ and map your wheel's axes and buttons to XInput (Xbox controller format) according to your preference. You can find my custom configuration below as reference:
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
4. Test the mapping to ensure all buttons and axes respond correctly.

<div class="step">
    <h3>Step 2: Set Up DS4Emulator</h3>
</div>

1. [Download DS4Emulator](https://github.com/r57zone/DualShock4-emulator).
2. Launch DS4Emulator and select the XInput device created by XOutput.
3. Configure the DS4Emulator profile as needed. Your wheel will now appear as a PS4 controller to Windows.

<div class="step">
    <h3>Step 3: Patch RemotePlay</h3>
</div>

1. [Download RemotePlay Version Patcher](https://github.com/streamingtools/remoteplay-version-patcher).
2. [Download and install RemotePlay v5.5.0.8250](https://remoteplay.dl.playstation.net/remoteplay/lang/en/index.html).
3. Use the Version Patcher to enable auto-connect (no need to manually enter a code).

<div class="step">
    <h3>Step 4: Connect Everything</h3>
</div>

1. Start XOutput and DS4Emulator, confirming your wheel is detected and mapped.
2. Launch the patched RemotePlay app.
3. Log in with your PlayStation Network account and connect to your PS4.
4. RemotePlay should recognize DS4Emulator as a genuine DualShock 4 controller, allowing you to play with your wheel.

TODO: insert GIF here of PS4 controlled by wheel

<div class="step">
    <h3>Step 5: Play!</h3>
</div>

1. Start your favorite racing game on the PS4 via RemotePlay.
2. Enjoy driving with your Logitech WingMan Formula Force GP wheel!

TODO: insert GIF here of gameplay

---

**Troubleshooting Tips:**
- If buttons or axes do not respond, check your mappings in XOutput and DS4Emulator.
- Ensure only one XInput device is active to avoid conflicts.
- If RemotePlay does not recognize the controller, restart all applications and reconnect your devices.

**Congratulations!** You can now use your classic PC steering wheel to play PS4 games. 🏁
