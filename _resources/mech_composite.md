---
layout: page
title: Composite Materials
description: Overview of composite material construction techniques and recommendations
img: 
importance: 1
category: Mechanical
date: 2022-01-04
tags: [building, composite, fiber, fiberglass, carbonfiber, matrix, resin, epoxy]
---

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/composite_intro.png" class="m-auto img-fluid rounded z-depth-1" alt="Composite Fabrics" title="Composite Fabrics">
</div>

## Introduction

Composites are *composed* of two materials meant to correct for each others weaknesses, allowing for a stronger resultant *composite* material. In other words, the properties of both are meant to compliment each other and result in a more useful overall outcome. Generally, composites are made of a fiber cloth (eg carbon fiber, fiberglass, polyester, etc) that provides strength and a binding matrix (eg a resin like epoxy) that provides structure to the material. Manufacturing is more complicated than simply screwing together wood or metal, but composites make up for this in other ways. Notably, they can be used to make smooth and light surfaces ideal for aircraft and boat hulls. Although it may not seem like it, composites can be pretty tough and are a great choice for many projects.

Composites should be considered when a device needs to be **aerodynamic/hydrodynamic** or **lightweight**.

## Components

Normally when talking about composite materials, it is referring to those constructed out of a fiber and matrix.

### Fiber
The fiber is a cloth weave that provides the strength and stiffness. It is often made of:

<!-- Add link to website -->

* **Polyester** - General purpose, varying strengths available, customizable – easily altered at request for mixing with different fibers and different weaves, cheap.
* **Carbon Fiber** - Very strong, many weaves available, more expensive.
* **Fiberglass** - Very light, easy to find, easy to manufacture, cheap.
* **Kevlar** - Very robust and strong, high abrasion resistance.

<div class="col-sm-6 mx-auto">
        <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/kevlar_polyester.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Kevlar Polyester" title="Kevlar Polyester">
        <figcaption>Kevlar woven with polyester</figcaption>
</div>

### Matrix
The matrix is normally a resin that helps disperse the load and protect the fiber. Examples include:

* **Epoxy** - Very common, most often used, longer relative curing time.
* **Vinyl ester** - Cures very fast, more expensive, more toxic chemical emissions, UV resistant.
* **Polyester** - Good curing time, cheap, easy to get.

<div class="col-sm-6 mx-auto">
        <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/epoxy.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Epoxy" title="Epoxy">
        <figcaption>2-part epoxy mixture - catalyst and base - poured together to begin reaction and start working time</figcaption>
</div>

## Design Factors

There are a number of factors that should be considered when considering composites for a project. Think about these while designing:

* **Weight** - Composites are often used in situations where minimal weight is ideal.
* **Strength** - Composites are tough for their weight. They can be made stronger with extra layering.
* **Working Time** - For every 12 hrs of curing time, you’ll have 1hr of working time. More layers take longer to cure. It's harder to work with shorter curing times.
* **Cost** - Material costs vary between choices. Manufacturing costs vary greatly among methods.
* **Manufacturability** – Using a composite material helps with complex geometry but can be time consuming compared to other methods and may be ill advised for small pieces.
* **UV Resistance** - Composite materials have varying levels of UV resistance - consider the operating environment.
* **Emissions** - Chemicals used in the process have toxic byproducts - ensure proper PPE and understand the materials you work with.
* **Conductivity** - Carbon fiber blocks RF transmissions - not ideal for enclosed communication electronics.

### Weaves

When selecting a composite material, it is important to consider what fiber and matrix to use as well as the weave of the fiber. Important material properties to remember are its tensile and yield strength, which can be improved by the tightness of the weave.

* **Twill** - Common, general purpose, relatively strong in all directions. Doesn't crease well.
* **Square** - Common, general purpose, bidirectional strength. Easisest to find.
* **Satin** - Expensive, very strong in all directions. Tight and stiff.
* **Unidirectional** - Strong in one direction, weak in others. Cheaper. Harder to lay flat along curves.

<div class="row mt-3 mb-3">
    <div class="col-sm-6">
        <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/carbon_twill.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Carbon Fiber with Twill Weave" title="Carbon Fiber with Twill Weave">
    <figcaption>Carbon Fiber with Twill Weave</figcaption>
    </div>
    <div class="col-sm-6">
        <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/fiberglass_square.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Fiberglass with Square Weave" title="Fiberglass with Square Weave">
        <figcaption>Fiberglass with Square Weave</figcaption>
    </div>
</div>

## Manufacturing

When using composite materials, it is unlikely that you will be buying premade, though if that is the case, remember to check the ratio of fiber to resin. Roughly 30% fiber to 70% matrix (by weight) is ideal and what most composite strength estimates are based on. That being said, this ratio is difficult to achieve, and thin layers can be difficult to spread resin on, so expect to add more of your matrix. You’ll have to work quickly to avoid *kicking*, when the chemicals in the resin start to become too hot and sticky. When the product starts kicking (at the end of working time) you will no longer be able to add more layers or continue working. Also, avoid getting the matrix on anything you’re working with because it does not come off of cloth or other materials.

### Mold/Plug
Composite materials have to be built against an existing structure, so creating your composite form will require you to make a mold or plug. This will reflect the final outcome shape - design and manufacture it accordingly. If desired, a secondary mold or plug of higher quality material can be made using the original. They can be made of wood, foam, or silicone. If the structure is designed for fiber laid overtop it (like an extruded piece), it is called a plug. If it is designed for fiber to be laid inside of it (like a basin) it is called a mold. The side that touches the mold or plug will have a smooth finish, so when deciding whether to make a mold or plug, consider both the geometry and the exterior finish. For an improved finish, a release agent (eg wax or release spray) can be applied to the mold/plug before the manufacturing process.

[Easy Composite Mold-Making Tutorial](https://youtu.be/Cusncs4GaFg)

* **Wood** - Harder to construct curves. Reusable (with release agent). Expensive (depending on size).
* **Foam** - Easy to construct, although potentially time consuming. Consider emissions if sanding/cutting. Cheap. Hard to reuse. Varying foams will have varying performance - denser is generally better.
* **Silicone** - Easy to reuse like wood, expensive. Hard to make - requires an alternate mold to build or custom purchase. Light. Good for very small projects that need multiple uses.

### Resin Lay-up
Fiber laid on either side of mold/plug. Resin is “painted” on with brushes or rollers. Rollers are preferable because they can achieve a more even coat and are faster. Air bubbles may form inside resin during the process - spraying them with alcohol can remove them. This method is cheap but takes the longest labor time; however, the methods that follow this take extensive set up time, so the time factor among them evens out. 

[Hand Lay-up Tutorial on Small Pieces](https://youtu.be/EhAvCqtIo7w)

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/layup.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Resin Lay-up Process" title="Resin Lay-up Process">
    <figcaption>Resin Lay-up Process</figcaption>
</div>

### Vacuum Bagging
Fiber laid on the outside of the plug. Resin applied to the fiber by brushing/rolling or injection. Fiber, resin, and mold are wrapped by a plastic bag, which is then vacuum-sucked to remove excess resin and pull fiber tight to plug's surface. This also removes airbubbles in resin which can be difficult with manual lay-up.

[Easy Vacuum Bagging Tutorial](https://youtu.be/cj26c3V54SQ)

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/vacuum_bag.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Vacuum Bagging Process"" title="Vacuum Bagging Process">
    <figcaption>Vacuum Bagging Process</figcaption>
</div>

### Resin Infusion
A type of vacuum bagging. Fiber goes on inside or outside (ie mold or plug both work). Wrap fiber and mold/plug in vacuum bag. Resin is injected into the bag with a pump, where it will spread throughout the fiber layers. Apply vacuum to remove resin - allowing for precise selection of fiber/resin ratio through the removal of unwanted resin. Leads to thinner layers in the composite. Most expensive technique, but highest quality outcome.

[Easy Resin Infusion Tutorial](https://youtu.be/VodfQcrXpxc)

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/resin_infusion.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Resin Infusion Process" title="Resin Infusion Process">
    <figcaption>Resin Infusion Process</figcaption>
</div>

## What Could Go Wrong

Most of the things that can go wrong here are going to be time – the mold making process is time consuming and can even require multiple drafts. Depending on the material you use for your mold, you may also have difficulty removing it from the final product. On the VELA project, our foam mold was integrated into the boat for structural stability, but materials like LDF (low density foam) are practically cemented into the product even with the use of a release agent. 


## Our Usage and Tips

Previously on the VELA project we used the hand lay-up technique to fiberglass a boat with an LDF plug. One important thing we noted was that the theoretical working time of 1hr for every 12 hr curing time is often not the actual working time. Take your time planning out the layers, folding and cutting the fiber, and overall minimize the work that will be done after mixing the resin. Also, additional PPE like masks and gloves are recommended while dealing with the resin.

* Prep sufficiently before mixing resin. Working time is short - ensure you are completely ready beforehand.
* Use PPE - nitrile gloves and masks are helpful for the strong chemicals involved.
* Adequately research the process beforehand - know exactly what you're doing before you get started.
* Don't be afraid of failure - things will likely go wrong or not like you imagined. Improvise, adapt, overcome.

<div class="row mt-3 mb-3">
    <div class="col-sm-6">
        <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/plug_layup.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="VELA during fiberglass process" title="VELA during fiberglass process">
    <figcaption>VELA during the hand layup of fiberglass hull</figcaption>
    </div>
    <div class="col-sm-6">
        <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/vela_complete.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Completed fiberglass on VELA" title="Completed fiberglass on VELA">
        <figcaption>VELA after fiberglass cured</figcaption>
    </div>
</div>
