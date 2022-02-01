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
    <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/composite_intro.png" class="m-auto img-fluid rounded z-depth-1" alt="Responsive image" title="Composite thing">
</div>

## Introduction

( to do )

## Components

Composites are *composed* of two materials meant to correct for each others weaknesses, allowing for a stronger resultant *composite* material. Normally when talking about composite materials, it is referring to constructed out of a fiber and matrix.

### Fiber
The fiber is a cloth weave that provides the strength and stiffness. It is often made of:

* **Polyester** - General purpose, varying strengths available, customizable, cheap.
* **Carbon Fiber** - Very strong, many weaves available, more expensive.
* **Fiberglass** - Very light, easy to find, easy to manufacture, cheap.

### Matrix
The matrix is normally a resin that helps disperse the load and protect the fiber. Examples include:

* **Epoxy** - Very common, most often used, longer relative curing time.
* **Vinyl ester** - Cures very fast, more expensive, more toxic chemical emissions, UV resistant.
* **Polyester** - Good curing time, cheap, easy to get.

## Design Factors

There are a number of factors that should be considered when considering composites for a project. Think about these while designing:

* **Weight** - Composites are often used in situations where minimal weight is ideal.
* **Strength** - Composites are tough for their weight. They can be made stronger with extra layering.
* **Curing Time** - More layers take longer to cure. It's harder to work with shorter curing times.
* **Cost** - Material costs vary between choices. Manufacturing costs vary greatly among methods.
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
        <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/carbon_twill.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Responsive image" title="Carbon Fiber with Twill Weave">
    <figcaption>Carbon Fiber with Twill Weave</figcaption>
    </div>
    <div class="col-sm-6">
        <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/fiberglass_square.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Responsive image" title="Fiberglass with Square W">
        <figcaption>Fiberglass with Square Weave</figcaption>
    </div>
</div>

## Manufacturing

When using composite materials, it is unlikely that you will be buying premade, though if that is the case, remember to check the ratio of fiber to resin. Roughly 30% fiber to 70% matrix is ideal and what most composite strength estimates are based on. 

### Mold/Plug
Composite materials have to be built against an existing structure. This takes the form of a mold, with the fiber laid on the inside or outside. A male mold (ie fiber on outside) is also called a plug. Molds can be made out of wood, foam, or silicone. Consider applying a release agent (eg wax or release spray) to the mold before construction. This will make it easier to remove the mold from the completed piece, allowing for reuse. Also provides smooth inner surface to piece.

* **Wood** - Harder to construct curves. Reusable (with release agent). Expensive (depending on size).
* **Foam** - Easy to construct, although potentially time consuming. Consider emissions if sanding/cutting. Cheap. Hard to reuse. Varying foams will have varying performance - denser is generally better.
* **Silicone** - Easy to reuse like wood, expensive. Hard to make - requires an alternate mold to build or custom purchase. Light. Good for very small projects that need multiple uses.

### Resin Lay-up
Fiber laid on either side of mold. Resin is "painted" on with brushes or rollers. Rollers are preferable, because they can achieve a more even coat and are faster. This method is cheap but takes the longest and requires the most labor. Air bubbles may form inside resin during the process - spraying them with alcohol can remove them.

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/layup.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Responsive image" title="Resin Lay-up Process">
    <figcaption>Resin Lay-up Process</figcaption>
</div>

### Vacuum Bagging
Fiber laid on the outside of the mold (plug in this case). Resin applied to the fiber by brushing/rolling or injection. Fiber, resin, and mold are wrapped by a plastic bag, which is then vacuum-sucked to remove excess resin and pull fiber tight to mold. Helpfully, it removes airbubbles in resin which can be hard to remove with manual lay-up.

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/vacuum_bag.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Responsive image" title="Vacuum Bagging Process">
    <figcaption>Vacuum Bagging Process</figcaption>
</div>

### Resin Infusion
A type of vacuum bagging. Fiber goes on inside or outside of the mold. Wrap fiber and mold in vacuum bag. Resin is injected into the bag with a pump, where it will spread throughout the fiber layers. Apply vacuum to remove resin - allowing for precise selection of fiber/resin ratio through the removal of unwanted resin. Leads to thinner layers in the composite. Most expensive technique, but highest quality outcome.

<div class="row mt-3 mb-3">
    <img src = "{{site.baseurl}}/assets/img/resources/mech_composites/resin_infusion.png" class="img-fluid rounded z-depth-1 mx-auto d-block" alt="Responsive image" title="Resin Infusion Process">
    <figcaption>Resin Infusion Process</figcaption>
</div>

## What Could Go Wrong

(to do)


## Our Usage and Tips

( to do)

( add picture of VELA )
