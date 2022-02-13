---
layout: page
title: Printed Circuit Boards
description: Introduction to the design and layout of Printed Circuit Boards (PCBs).
importance: 1
category: Electronics
date: 2022-01-30
tags: [eda, software, jlcpcb, kicad, easyeda, frequency, rf, heat]
---

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/elec_pcb/Battery_Monitor_PCB.PNG" class="m-auto img-fluid rounded z-depth-1" alt="Battery Monitoring PCB" title="Battery Monitoring PCB">
</div>


## Introduction
A printed circuit board (PCB) is a hardware solution for implementing electrical circuit designs. They are robust, compact, and aesthetic compared to a breadboard or a spaghetti wire solution. It's easier than ever to design a PCB with plenty of online resources and software. If we can do it, you can too. Additionally, you can simply order a PCB from a vendor like JLCPCB and receive your PCB fully assembled in a week.

## Implementation Process
### Design
The first step is arguably the hardest. You'll need a design. This involves a solid understanding of the circuit and its components. Do your research and understand what every component's purpose is. Sketch out your circuit and how it connects.

### Schematic and Component Selection
Now you can move your design to software. We have had success with KiCad and EasyEDA. We recommend EasyEDA if you plan on ordering your PCB from JLCPCB and want to use their surface mount services (explained more below). EasyEDA and KiCad are free and have plenty of tutorials.

* [EasyEDA Browser](https://easyeda.com/)
* [KiCad Download](https://www.kicad.org/download/)
* [EasyEDA Tutorial](https://www.youtube.com/watch?v=_x2fzKEjUGQ)
* [KiCad Tutorial](https://youtu.be/c2niS9ZRBHo)

We recommend you go through the whole PCB design process with this playlist. Follow along and create the PCB with them. 

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/elec_pcb/5V_Controller_Schematic.PNG" class="m-auto img-fluid rounded z-depth-1" alt="Schematic of 5V Controller" title="Schematic of 5V Controller">
</div>

### Simulation
Simulation is essential and highly recommended. You will certainly find flaws in your design. Simulations won't guarantee your PCB will work.

Unfortantantly, KiCad and EasyEDA's simulation tools are limited. We have had success with simulations in Capture PSpice and Multisim. PSpice and Multisim are free for OKSTATE students at the [software distribution website](https://it.okstate.edu/services/software-distribution/index.html). A free alternative is [LTSpice](https://www.analog.com/en/design-center/design-tools-and-calculators/ltspice-simulator.html). It has most of the same functions as PSpice, but is lighter weight. It does not integrate directly with PCB design tools.

If you happen to be designing a DC/DC or AC/DC converter PCB, check out Texas Instrument's [WEBENCH](https://webench.ti.com/power-designer/). It will help you select components and provides simulation tools.

### PCB Components, Traces, and Stackup
Again, we recommend you follow a tutorial playlist. It is extremely helpful to go through the entire PCB creation process. It will make you a better designer.

Unless your circuit is incredibly simple, you should use a four-layer PCB. They don't cost much more, they create more ways to connect components, and you can use power/ground planes. 

Make sure your PCB manufacturer can create your PCB. Traces can't be too close, traces can't be too thin, etc. You can view [JLCPCB's rules](https://jlcpcb.com/capabilities/Capabilities). You can update your PCB software's design rules so it will tell you when you are violating a rule.

#### Advice
* Don't worry about how things look at first. Just move components around to their general location.
* Connect all the components with traces to see how everything connects but don't worry about how the traces look yet.
* Use your layers. You can route traces to other layers with vias.
* Keep traces short, especially traces with high current. Traces have non-zero resistance. Also, longer traces can couple with more electromagnetic noise.
* Keep sensitive components and traces away from noisy components. Keep sensitive analog traces short.
* Use a grounding plane. They make it easy to connect all your grounds and they help to reduce EMI. 
* Leave some space for vias and traces. Give your components some breathing room.

### PCB Layers
PCBs are constructed of several layers of fiberglass (or alternative) and copper sandwiched together. These are some of the most commonly referenced layers:

* Top Copper - copper traces and planes on the top side of the board.
* Bottom copper - same as top copper, but for the bottomside of the board.
* Inner copper - interior layers of traces or pours. Cannot include components, but useful for better routing.
* Silkscreen - Text or drawings placed above copper. Usually parts references e.g. C9, R4, U1. Useful if hand soldering, debugging, or additional information is necessary for usage.
* Solder mask - covers traces and vias to avoid accidental short circuiting. Does not cover pads where outside connections need to be made.

### PCB Finalization
* Reroute your traces and make them look good, but also consider crosstalk, EMI, and trace resistance.
* You can also change the width of the traces but be aware of [trace impedance matching](https://www.nwengineeringllc.com/article/impedance-matching-for-high-speed-signals-in-pcb-design.php) for high-frequency signal lines. 
* To find what the width of your traces should be you can use a [trace width calculator](https://www.4pcb.com/trace-width-calculator.html). Wider traces have less resistance and can support more current for less power loss. High-frequency signals have different requirements for trace width.
* Move component silkscreen labels to where it's obvious which component is referred to.

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/elec_pcb/3D_Model_5V_Controller.PNG" class="m-auto img-fluid rounded z-depth-1" alt="3D Model of 5V Controller" title="3D Model of 5V Controller">
</div>

### User Experience
It's important to spend some time imagining how people will interact with your board. 
#### Ask Yourself
* Will they want to mount the board with screw holes? Make sure those screws don't short anything.
* Will they want a status LED just to know that it's on?
* Are the component labels obvious?
* Do you need reverse voltage protection?
* How can things go wrong when the user is connecting to your PCB? Are there labels that make the required connections clear?
* How will the user/designer debug the device? Do you need test points?

## How JLCPCB and EasyEDA Work
EasyEDA connects to JLCPCB services, so you can see what parts are available from JLCPCB. Additionally, it has the component's datasheet embedded. 

JLCPCB provides two important services: PCB manufacturing and component assembly.

### PCB Manufacturing
JLCPCB can manufacture your PCB. They will make a minimum of 5 boards. You can just order these boards and solder all your components yourself. This is easy with through-hole components, and hard (but doable) with surface mount components. Of course, the smaller the component, the harder it is to solder. The more components you have, the more opportunities for error. You can also use JLCPCB's component assembly service.

### Component Assembly 
Many components are available for assembly. You can check if they have it here. If the part is a "basic part", there is no additional charge for assembly. If the part is an "extended part" you'll pay an additional $3 fee. Now, if you are using multiple of the same extended part, they only charge you for one fee. 

If the part is a through-hole type or is a special size it will require hand soldering which has a different fee. You can choose to omit assembly of these components.

JLCPCB will assembly a minimum of 2 PCBs. The shipping cost can be expected to be around $20. You can see all of [JLCPCB's fees](https://support.jlcpcb.com/article/62-what-cases-will-be-charged-of-extra-cost).

## Where Things Can Go Wrong

### Heat Generation
Heat will be generated by every component. It is worth a quick check to make sure your component won't overheat. This [PCB heat management](https://youtu.be/08nRFuh6nxA) tutorial can be used to help estimate expected temperature rise and maximum allowable power dissipation.

There are a few methods to help decrease thermal resistance.
* Copper Pours
  * You can place a large copper area directly under your component to give more area for the heat to spread.
* Heat Sinks
  * Some ICs have a heat sink you can add to remove more heat.
  * You can also mount heat sinks to the PCB itself.
  * There are even heat sinks for surface mount components.
* Thermal Redirection
  * You can use vias to channel heat to the other side of the PCB.
  * The other side would then have another large copper area.
  * Again, this creates more surface area for the heat to be removed.
* Forced Convection
  * Consider the operating environment. PCBs can be cooled with exterior fans if necessary.

### High Frequency
An oversimplification of electromagnetic fields and waves: electrical charges produce electric fields and current produces magnetic fields. Changes in magnetic fields induce electric fields and changes in electric fields induce magnetic fields. High-frequency signals have sharp changes that couple (interfere) with nearby conductors. This coupling creates induced voltages and currents which can interfere with PCB performance. 

High frequency circuits are complicated but here are some resources.
* Electromagnetism courses (ECEN3613 and ECEN3623 at OSU)
* [Transmission Theory](https://deltauniv.edu.eg/new/engineering/wp-content/uploads/chap.3.pdf)
* [High Frequcy PCBs](https://youtu.be/bVdwu1IoX4k)
* [JLCPCB Impedance Calculator](https://cart.jlcpcb.com/impedanceCalculation)

### Non-Ideal Components
Below are a few components and some of their nonidealities.

#### Capacitor

* [Capacitor Properties](https://www.electronics-notes.com/articles/electronic_components/capacitors/specifications-parameters.php)
* [Capacitor Type](https://www.murata.com/en-us/products/capacitor/polymer/library/basic/comparison) Matters!
  * Datasheets will sometimes recommend what type of capacitor to use.  
* Leakage Current
  * Capacitors can lose charge over time.
* Capacitance Isn't Constant
  * Capacitance can change with temperature, applied voltage, and age.
* ESR
  * Equivalent series resistance
  * Frequency-dependent
* Self-Resonating Frequency
  * You want the operating frequency to be much less than the self-resonating frequency.
  * Datasheets will state the operating frequency range.

#### Inductor

* [Inductor Properties](https://components101.com/articles/how-to-check-for-saturation-current-core-loss-and-other-parameters-for-selecting-an-inductor)
* DCR
  * Direct-Current Resistance
* Inductance isn't constant
  * Inductance can change over temperature, applied current, and age.
  * Once the inductor reaches a saturation current, the inductance decreases.
* Self-Resonating Frequency
  * You want the operating frequency to be much less than the self-resonating frequency.
  * Datasheets will state the operating frequency range.

## Terminology
* Copper Weight - expresses the thickness of the PCB
* EMI - electromagnetic interference
* FR-4 - most common PCB material arrangement
* Gerber File - PCB file type
* Ground Plane - large copper area used as a ground reference using vias
* Mil - a thousandths of an inch
* SMT - surface mount technology
* Via - electrical connection between layers

#### [More terminology](https://www.pcbcart.com/article/content/glossary-of-terms.html)